/**
 * Server-side Supabase client (service role). Never import this into client components.
 */
import { createClient } from '@supabase/supabase-js';

let adminClient;

function cleanEnv(value) {
  if (value == null) return value;
  let v = String(value).trim();
  if (
    (v.startsWith("'") && v.endsWith("'")) ||
    (v.startsWith('"') && v.endsWith('"'))
  ) {
    v = v.slice(1, -1);
  }
  return v;
}

export function getSupabaseConfig() {
  const url =
    cleanEnv(process.env.NEXT_PUBLIC_SUPABASE_URL) ||
    cleanEnv(process.env.SUPABASE_URL);
  const serviceKey =
    cleanEnv(process.env.SUPABASE_SECRET_KEY) ||
    cleanEnv(process.env.SUPABASE_SERVICE_ROLE_KEY);
  const publishableKey =
    cleanEnv(process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) ||
    cleanEnv(process.env.SUPABASE_PUBLISHABLE_KEY) ||
    cleanEnv(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  return { url, serviceKey, publishableKey };
}

export function assertSupabaseConfig() {
  const config = getSupabaseConfig();
  const missing = [];
  if (!config.url) missing.push('NEXT_PUBLIC_SUPABASE_URL or SUPABASE_URL');
  if (!config.serviceKey) missing.push('SUPABASE_SECRET_KEY');
  if (missing.length) {
    const error = new Error(`Missing Supabase env: ${missing.join(', ')}`);
    error.code = 'DB_ENV_MISSING';
    error.status = 500;
    throw error;
  }
  return config;
}

export function getSupabaseAdmin() {
  if (!adminClient) {
    const config = assertSupabaseConfig();
    adminClient = createClient(config.url, config.serviceKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }
  return adminClient;
}

export function isDbConnectionError(error) {
  const code = String(error?.code || error?.cause?.code || '');
  const message = String(error?.message || '');
  return (
    code === 'ETIMEDOUT' ||
    code === 'ECONNREFUSED' ||
    code === 'ENOTFOUND' ||
    code === 'DB_ENV_MISSING' ||
    /fetch failed/i.test(message) ||
    /network/i.test(message) ||
    /missing supabase env/i.test(message)
  );
}
