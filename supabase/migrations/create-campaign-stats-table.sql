/*
      # Campaign Statistics Table
      1. Tracking campaign performance metrics
    */
    CREATE TABLE IF NOT EXISTS campaign_stats (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      campaign_id uuid NOT NULL REFERENCES campaigns (id),
      leads integer DEFAULT 0,
      messages_sent integer DEFAULT 0,
      connections_made integer DEFAULT 0,
      date date DEFAULT CURRENT_DATE
    );