import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { query } from './db';

const COOKIE_NAME = 'kelin_admin_session';
const TEN_YEARS_SECONDS = 60 * 60 * 24 * 365 * 10;

function getSecret() {
  const secret = process.env.ADMIN_JWT_SECRET || process.env.SYNC_SECRET || 'kelin-admin-dev-secret';
  return new TextEncoder().encode(secret);
}

export async function verifyAdminCredentials(username, password) {
  const rows = await query(
    'SELECT id, username, password_hash, email FROM admin_users WHERE username = ? LIMIT 1',
    [username]
  );
  if (!rows.length) return null;
  const user = rows[0];
  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) return null;
  return { id: user.id, username: user.username, email: user.email };
}

export async function createAdminSession(user) {
  // Persistent session: stays signed in until intentional logout
  const token = await new SignJWT({
    sub: String(user.id),
    username: user.username,
    email: user.email || '',
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${TEN_YEARS_SECONDS}s`)
    .sign(getSecret());

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: TEN_YEARS_SECONDS,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  });
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return {
      id: Number(payload.sub),
      username: payload.username,
      email: payload.email,
    };
  } catch {
    return null;
  }
}

export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) {
    const error = new Error('Unauthorized');
    error.status = 401;
    throw error;
  }
  return session;
}
