/*
  # Create contacts table for contact form submissions

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `subject` (text, optional)
      - `message` (text, required)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `contacts` table
    - Add policy for anonymous users to insert contact submissions
    - Add policy for authenticated users to read all contacts (for admin purposes)
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert contact form submissions
CREATE POLICY "Anyone can submit contact forms"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all contacts (for admin purposes)
CREATE POLICY "Authenticated users can read contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);