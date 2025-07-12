/*
      # Campaigns Table
      1. New Tables: campaigns (user_id, search_url, message_template)
      2. Security: Enable RLS for campaign data
    */
    CREATE TABLE IF NOT EXISTS campaigns (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id uuid NOT NULL REFERENCES users (id),
      name text NOT NULL,
      search_url text NOT NULL,
      message_template text NOT NULL,
      connection_message text NOT NULL,
      follow_up_message text NOT NULL,
      status enum('draft', 'active', 'paused', 'completed') DEFAULT 'draft',
      created_at timestamptz DEFAULT now(),
      updated_at timestamptz DEFAULT now()
    );
    
    ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;
    CREATE POLICY "Campaigns access" ON campaigns FOR ALL TO authenticated USING (user_id = auth.uid());