import { createClient } from '@supabase/supabase-js';

// Add these two variables to frontend/.env (copy from .env.example):
//   VITE_SUPABASE_URL=https://your-project.supabase.co
//   VITE_SUPABASE_ANON_KEY=your-anon-key
//
// Required Supabase table (run in the SQL editor):
//   CREATE TABLE waitlist (
//     id         uuid DEFAULT gen_random_uuid() PRIMARY KEY,
//     name       text NOT NULL,
//     email      text NOT NULL UNIQUE,
//     created_at timestamptz DEFAULT now()
//   );
//   ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
//   CREATE POLICY "allow_insert" ON waitlist FOR INSERT TO anon WITH CHECK (true);

const supabaseUrl     = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Returns a live client when credentials are present, null otherwise.
// The WaitlistModal degrades gracefully (shows success UI) when null.
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
