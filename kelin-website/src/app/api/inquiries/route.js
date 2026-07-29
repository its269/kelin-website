import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { requireAdmin } from '../../../lib/auth';
import { isDbConnectionError, query } from '../../../lib/db';
import { sendInquiryNotification } from '../../../lib/mail';
import { getSupabaseAdmin } from '../../../lib/supabaseAdmin';

function required(value, label) {
  if (value === undefined || value === null || String(value).trim() === '') {
    return `${label} is required`;
  }
  return null;
}

async function insertInquiryWithSupabase({
  name,
  firstName,
  lastName,
  email,
  company,
  address,
  countryCode,
  phone,
  subject,
  message,
  inquiryType,
  productName,
  pageSource,
  pageUrl,
  replyToken,
}) {
  const supabase = getSupabaseAdmin();

  const { data: created, error: insertError } = await supabase
    .from('inquiries')
    .insert({
      name,
      first_name: firstName || null,
      last_name: lastName || null,
      email,
      company,
      address,
      country_code: countryCode,
      phone,
      subject,
      message,
      inquiry_type: inquiryType,
      product_name: productName,
      page_source: pageSource,
      page_url: pageUrl,
      reply_token: replyToken,
      unread_for_admin: 1,
      status: 'new',
    })
    .select('id')
    .single();

  if (insertError) throw insertError;
  const inquiryId = created?.id;
  if (!inquiryId) throw new Error('Fallback insert failed: missing inquiry id');

  const { error: msgError } = await supabase.from('inquiry_messages').insert({
    inquiry_id: inquiryId,
    sender_type: 'visitor',
    sender_name: name,
    body: message,
  });
  if (msgError) throw msgError;

  const { count, error: countError } = await supabase
    .from('inquiries')
    .select('id', { count: 'exact', head: true })
    .is('export_batch', null);
  if (countError) throw countError;

  return {
    insertId: inquiryId,
    pendingCount: Number(count || 0),
  };
}

export async function POST(request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let body = {};

    if (contentType.includes('application/json')) {
      body = await request.json();
    } else {
      const formData = await request.formData();
      body = Object.fromEntries(formData.entries());
    }

    const firstName = (body.firstName || body.first_name || '').trim();
    const lastName = (body.lastName || body.last_name || '').trim();
    const name = (body.name || `${firstName} ${lastName}`.trim()).trim();
    const email = (body.email || '').trim();
    const company = (body.company || '').trim();
    const address = (body.address || '').trim();
    const countryCode = (body.countryCode || body.country_code || '+63').trim();
    const phone = (body.phone || '').trim();
    const subject = (body.subject || body._subject || 'Website Inquiry').trim();
    const message = (body.message || '').trim();
    const inquiryType = (body.inquiryType || body.inquiry_type || 'general').trim();
    const productName = (body.productName || body.product_name || body['Machine Model'] || body.machine || '').trim() || null;
    const pageSource = (body.pageSource || body['Page Source'] || body.page_source || '').trim() || null;
    const pageUrl = (body.pageUrl || body['Page URL'] || body.page_url || '').trim() || null;
    const replyToken = crypto.randomBytes(24).toString('hex');

    const errors = [
      required(name, 'Name'),
      required(email, 'Email'),
      required(company, 'Company'),
      required(address, 'Address'),
      required(countryCode, 'Country code'),
      required(phone, 'Phone'),
      required(subject, 'Subject'),
      required(message, 'Message'),
      required(inquiryType, 'Inquiry type'),
    ].filter(Boolean);

    if (errors.length) {
      return NextResponse.json({ ok: false, error: errors[0], errors }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email address' }, { status: 400 });
    }

    let result;
    let pendingCount;
    try {
      result = await query(
        `INSERT INTO inquiries
          (name, first_name, last_name, email, company, address, country_code, phone, subject, message, inquiry_type, product_name, page_source, page_url, reply_token, unread_for_admin, last_message_at, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, NOW(), 'new')`,
        [
          name,
          firstName || null,
          lastName || null,
          email,
          company,
          address,
          countryCode,
          phone,
          subject,
          message,
          inquiryType,
          productName,
          pageSource,
          pageUrl,
          replyToken,
        ]
      );

      await query(
        `INSERT INTO inquiry_messages (inquiry_id, sender_type, sender_name, body)
         VALUES (?, 'visitor', ?, ?)`,
        [result.insertId, name, message]
      );

      const countRows = await query(
        'SELECT COUNT(*) AS total FROM inquiries WHERE export_batch IS NULL'
      );
      pendingCount = Number(countRows[0]?.total || 0);
    } catch (dbError) {
      if (!isDbConnectionError(dbError)) throw dbError;
      console.warn('Primary DB path failed; using Supabase REST fallback:', dbError.code || dbError.message);
      const fallback = await insertInquiryWithSupabase({
        name,
        firstName,
        lastName,
        email,
        company,
        address,
        countryCode,
        phone,
        subject,
        message,
        inquiryType,
        productName,
        pageSource,
        pageUrl,
        replyToken,
      });
      result = { insertId: fallback.insertId };
      pendingCount = fallback.pendingCount;
    }

    const inquiry = {
      id: result.insertId,
      name,
      email,
      company,
      address,
      country_code: countryCode,
      phone,
      subject,
      message,
      inquiry_type: inquiryType,
      product_name: productName,
      page_source: pageSource,
      page_url: pageUrl,
      reply_token: replyToken,
    };

    try {
      await sendInquiryNotification(inquiry);
    } catch (mailError) {
      console.error('Inquiry email failed:', mailError.message);
    }

    return NextResponse.json({
      ok: true,
      id: inquiry.id,
      pendingCount,
      exportThresholdReached: pendingCount >= 100 && pendingCount % 100 === 0,
    });
  } catch (error) {
    console.error('Create inquiry failed:', error);
    return NextResponse.json({ ok: false, error: 'Failed to submit inquiry' }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    await requireAdmin();
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const unread = searchParams.get('unread');
    const q = (searchParams.get('q') || '').trim();
    const page = Math.max(1, Number(searchParams.get('page') || 1));
    const limit = Math.min(100, Math.max(1, Number(searchParams.get('limit') || 20)));
    const offset = (page - 1) * limit;

    const where = [];
    const params = [];

    if (status && status !== 'all') {
      where.push('status = ?');
      params.push(status);
    }
    if (unread === '1') {
      where.push('unread_for_admin = 1');
    }
    if (q) {
      where.push('(name ILIKE ? OR email ILIKE ? OR company ILIKE ? OR subject ILIKE ? OR message ILIKE ?)');
      const like = `%${q}%`;
      params.push(like, like, like, like, like);
    }

    const whereSql = where.length ? `WHERE ${where.join(' AND ')}` : '';
    const countRows = await query(`SELECT COUNT(*) AS total FROM inquiries ${whereSql}`, params);
    const rows = await query(
      `SELECT * FROM inquiries ${whereSql}
       ORDER BY unread_for_admin DESC, COALESCE(last_message_at, created_at) DESC
       LIMIT ${limit} OFFSET ${offset}`,
      params
    );

    const pendingRows = await query(
      'SELECT COUNT(*) AS total FROM inquiries WHERE export_batch IS NULL'
    );
    const unreadRows = await query(
      'SELECT COUNT(*) AS total FROM inquiries WHERE unread_for_admin = 1'
    );
    const pendingCount = Number(pendingRows[0]?.total || 0);

    return NextResponse.json({
      ok: true,
      items: rows,
      total: Number(countRows[0]?.total || 0),
      page,
      limit,
      pendingCount,
      unreadCount: Number(unreadRows[0]?.total || 0),
      exportPrompt: pendingCount >= 100,
    });
  } catch (error) {
    const status = error.status || 500;
    return NextResponse.json({ ok: false, error: error.message || 'Failed to load inquiries' }, { status });
  }
}
