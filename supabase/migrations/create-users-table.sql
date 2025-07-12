/*
      # User Authentication Table
      1. New Tables: users (email, password_hash, created_at)
      2. Security: Enable RLS for user data
    */
    CREATE TABLE IF NOT EXISTS users (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      email text UNIQUE NOT NULL,
      password_hash text NOT NULL,
      confirmed boolean DEFAULT false,
      created_at timestamptz DEFAULT now()
    );
    
    ALTER TABLE users ENABLE ROW LEVEL SECURITY;
    CREATE POLICY "Users read own data" ON users FOR SELECT TO authenticated USING (auth.uid() = id);
    CREATE POLICY "Users modify own data" ON users FOR UPDATE TO authenticated USING (auth.uid() = id);
    CREATE POLICY "Users delete own data" ON users FOR DELETE TO authenticated USING (auth.uid() = id);