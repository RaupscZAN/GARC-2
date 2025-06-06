/*
  # Create categories and tags tables for blog organization

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text, unique, required)
      - `slug` (text, unique, required)
      - `description` (text, optional)
      - `created_at` (timestamp)
    
    - `tags`
      - `id` (uuid, primary key)
      - `name` (text, unique, required)
      - `slug` (text, unique, required)
      - `created_at` (timestamp)
    
    - `post_categories` (junction table)
      - `post_id` (uuid, foreign key)
      - `category_id` (uuid, foreign key)
    
    - `post_tags` (junction table)
      - `post_id` (uuid, foreign key)
      - `tag_id` (uuid, foreign key)

  2. Security
    - Enable RLS on all tables
    - Add policies for anonymous users to read categories and tags
    - Add policies for authenticated users to manage all data
*/

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  description text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Tags table
CREATE TABLE IF NOT EXISTS tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Post categories junction table
CREATE TABLE IF NOT EXISTS post_categories (
  post_id uuid REFERENCES posts(id) ON DELETE CASCADE,
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, category_id)
);

-- Post tags junction table
CREATE TABLE IF NOT EXISTS post_tags (
  post_id uuid REFERENCES posts(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_tags ENABLE ROW LEVEL SECURITY;

-- Categories policies
CREATE POLICY "Anyone can read categories"
  ON categories
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can manage categories"
  ON categories
  FOR ALL
  TO authenticated
  USING (true);

-- Tags policies
CREATE POLICY "Anyone can read tags"
  ON tags
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can manage tags"
  ON tags
  FOR ALL
  TO authenticated
  USING (true);

-- Post categories policies
CREATE POLICY "Anyone can read post categories"
  ON post_categories
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can manage post categories"
  ON post_categories
  FOR ALL
  TO authenticated
  USING (true);

-- Post tags policies
CREATE POLICY "Anyone can read post tags"
  ON post_tags
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can manage post tags"
  ON post_tags
  FOR ALL
  TO authenticated
  USING (true);