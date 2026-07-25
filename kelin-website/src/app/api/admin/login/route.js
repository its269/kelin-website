import { NextResponse } from 'next/server';
import { createAdminSession, verifyAdminCredentials } from '../../../../lib/auth';

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
    return NextResponse.json({ ok: false, error: 'Login failed' }, { status: 500 });
  }
}
