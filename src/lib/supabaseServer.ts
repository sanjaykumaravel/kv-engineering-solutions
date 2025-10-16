import { createClient } from '@supabase/supabase-js';

function getEnv(name: string): string {
  const v = process.env[name];
  if (!v) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return v.replace(/^['"]|['"]$/g, '');
}

const SUPABASE_URL = getEnv('SUPABASE_URL');
const SUPABASE_KEY = getEnv('SUPABASE_KEY');

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);