/*
  # Create page_sections table for dynamic content management

  1. New Tables
    - `page_sections`
      - `id` (uuid, primary key)
      - `page_name` (text, required) - e.g., 'home', 'about', 'academies'
      - `section_name` (text, required) - e.g., 'hero', 'features', 'cta'
      - `section_type` (text, required) - e.g., 'hero', 'text_block', 'card_grid', 'cta'
      - `title` (text, optional)
      - `subtitle` (text, optional)
      - `content` (jsonb, required) - flexible content structure
      - `display_order` (integer, default 0)
      - `is_active` (boolean, default true)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `page_sections` table
    - Add policy for anonymous users to read active sections
    - Add policy for authenticated users to manage all sections

  3. Indexes
    - Add index on page_name and section_name for fast queries
    - Add index on display_order for sorting
*/

CREATE TABLE IF NOT EXISTS page_sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_name text NOT NULL,
  section_name text NOT NULL,
  section_type text NOT NULL,
  title text,
  subtitle text,
  content jsonb NOT NULL DEFAULT '{}',
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(page_name, section_name)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_page_sections_page_name ON page_sections(page_name);
CREATE INDEX IF NOT EXISTS idx_page_sections_display_order ON page_sections(display_order);
CREATE INDEX IF NOT EXISTS idx_page_sections_active ON page_sections(is_active) WHERE is_active = true;

-- Enable RLS
ALTER TABLE page_sections ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to read active sections
CREATE POLICY "Anyone can read active page sections"
  ON page_sections
  FOR SELECT
  TO anon
  USING (is_active = true);

-- Allow authenticated users to read all sections
CREATE POLICY "Authenticated users can read all page sections"
  ON page_sections
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to insert sections
CREATE POLICY "Authenticated users can create page sections"
  ON page_sections
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update sections
CREATE POLICY "Authenticated users can update page sections"
  ON page_sections
  FOR UPDATE
  TO authenticated
  USING (true);

-- Allow authenticated users to delete sections
CREATE POLICY "Authenticated users can delete page sections"
  ON page_sections
  FOR DELETE
  TO authenticated
  USING (true);

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_page_sections_updated_at
  BEFORE UPDATE ON page_sections
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample data for the home page
INSERT INTO page_sections (page_name, section_name, section_type, title, subtitle, content, display_order) VALUES
(
  'home',
  'hero',
  'hero',
  'The Future of AI Innovation Begins Here',
  'Join GARC in building a comprehensive ecosystem of AI education, innovation, and technological excellence',
  '{
    "background_image": "https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-abstract-technology-big-data-background-concept-generate-ai-image_15686420.jpg",
    "pill_text": "Global AI Research Council",
    "cta_buttons": [
      {
        "text": "Learn More",
        "variant": "primary",
        "action": "scroll_to_next"
      }
    ]
  }',
  1
),
(
  'home',
  'opportunity',
  'card_grid',
  'Be Part of Something Transformational',
  null,
  '{
    "cards": [
      {
        "title": "Shape AI Education",
        "image": "https://img.freepik.com/premium-photo/computer-programmer-coding-with-ai-digital-technology_875825-33369.jpg",
        "items": [
          "Co-create curriculum for next-gen tech education",
          "Build India''s first specialized AI academies",
          "Connect students with real industry projects"
        ],
        "color": "primary"
      },
      {
        "title": "Enable Student Success",
        "image": "https://fortune.com/img-assets/wp-content/uploads/2024/02/AI-programming-languages-GettyImages-1518874007-e1709244825422.jpg?w=1440&q=90",
        "items": [
          "Create pathways from learning to earning",
          "Mentor the next generation of AI developers",
          "Support student startups and innovations"
        ],
        "color": "secondary"
      },
      {
        "title": "Drive Research & Innovation",
        "image": "https://media.licdn.com/dms/image/D5612AQEDpiueyXTy_A/article-cover_image-shrink_720_1280/0/1706797621725?e=2147483647&v=beta&t=styrek6xGZ8jikWMPW1F7EY-g1CXJh2f3yBtketWpO0",
        "items": [
          "Collaborate on cutting-edge AI research",
          "Access shared infrastructure and resources",
          "Contribute to India''s AI knowledge base"
        ],
        "color": "accent"
      }
    ]
  }',
  2
),
(
  'home',
  'vision',
  'card_grid',
  'What We''re Building Together',
  'Our comprehensive ecosystem combines education, research, and innovation to create India''s AI future.',
  '{
    "cards": [
      {
        "title": "World-Class Education",
        "description": "VCA + AiAta academies providing comprehensive AI and coding education",
        "color": "primary"
      },
      {
        "title": "Venture Creation",
        "description": "Startup studio transforming student projects into funded companies",
        "color": "secondary"
      },
      {
        "title": "Research Infrastructure",
        "description": "State-of-the-art data center consortium for AI research and development",
        "color": "accent"
      },
      {
        "title": "Monetization Platform",
        "description": "Agentic marketplace for deploying and monetizing AI solutions",
        "color": "primary"
      },
      {
        "title": "Industry Integration",
        "description": "Direct partnerships with leading tech companies and institutions",
        "color": "secondary"
      }
    ],
    "cta_buttons": [
      {
        "text": "See Our Programs",
        "variant": "primary",
        "link": "/programs"
      },
      {
        "text": "Partner With Us",
        "variant": "outline",
        "link": "/partnerships"
      }
    ]
  }',
  3
);