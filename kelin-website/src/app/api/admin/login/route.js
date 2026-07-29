import { NextResponse } from 'next/server';
import { createAdminSession, verifyAdminCredentials } from '../../../../lib/auth';
import { isDbConnectionError } from '../../../../lib/db';

export async function POST(request) {
  try {
    const body = await request.json();
    const username = (body.username || '').trim();
    const password = body.password || '';

    if (!username || !password) {
      return NextResponse.json({ ok: false, error: 'Username and password are required' }, { status: 400 });
    }

    const user = await verifyAdminCredentials(username, password);
    if (!user) {
      return NextResponse.json({ ok: false, error: 'Invalid credentials' }, { status: 401 });
    }

    await createAdminSession(user);
    return NextResponse.json({ ok: true, user: { id: user.id, username: user.username, email: user.email } });
  } catch (error) {
    console.error('Admin login failed:', error);
    if (isDbConnectionError(error)) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Cannot reach the inquiry database from production. Check Vercel MYSQL_* environment variables and allow MySQL port 3306 from the internet (or Vercel).',
        },
        { status: 503 }
      );
    }
    return NextResponse.json({ ok: false, error: 'Login failed' }, { status: 500 });
  }
}
