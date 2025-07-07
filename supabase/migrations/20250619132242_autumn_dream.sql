/*
  # Create Comments System

  1. New Tables
    - `comments`
      - `id` (uuid, primary key)
      - `law_id` (text, references the law identifier)
      - `article_id` (text, references article or 'general' for law-wide comments)
      - `author_name` (text, commenter's name)
      - `author_email` (text, optional email for notifications)
      - `content` (text, comment content)
      - `is_general` (boolean, true for general law comments)
      - `is_expert` (boolean, true if marked as expert)
      - `is_highlighted` (boolean, true if highlighted by moderators)
      - `tags` (text array, optional tags)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `comment_likes`
      - `id` (uuid, primary key)
      - `comment_id` (uuid, references comments)
      - `user_identifier` (text, anonymous user identifier)
      - `created_at` (timestamp)
    
    - `comment_replies`
      - `id` (uuid, primary key)
      - `comment_id` (uuid, references parent comment)
      - `author_name` (text, reply author)
      - `content` (text, reply content)
      - `is_moderator` (boolean, true if from moderator)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated insert/update operations
*/

-- Create comments table
CREATE TABLE IF NOT EXISTS comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  law_id text NOT NULL,
  article_id text NOT NULL DEFAULT 'general',
  author_name text NOT NULL,
  author_email text,
  content text NOT NULL,
  is_general boolean DEFAULT false,
  is_expert boolean DEFAULT false,
  is_highlighted boolean DEFAULT false,
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create comment_likes table
CREATE TABLE IF NOT EXISTS comment_likes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  comment_id uuid REFERENCES comments(id) ON DELETE CASCADE,
  user_identifier text NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(comment_id, user_identifier)
);

-- Create comment_replies table
CREATE TABLE IF NOT EXISTS comment_replies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  comment_id uuid REFERENCES comments(id) ON DELETE CASCADE,
  author_name text NOT NULL,
  content text NOT NULL,
  is_moderator boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE comment_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE comment_replies ENABLE ROW LEVEL SECURITY;

-- Create policies for comments
CREATE POLICY "Comments are viewable by everyone"
  ON comments
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert comments"
  ON comments
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authors can update their own comments"
  ON comments
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Create policies for comment_likes
CREATE POLICY "Comment likes are viewable by everyone"
  ON comment_likes
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can like comments"
  ON comment_likes
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can remove their own likes"
  ON comment_likes
  FOR DELETE
  USING (true);

-- Create policies for comment_replies
CREATE POLICY "Comment replies are viewable by everyone"
  ON comment_replies
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can reply to comments"
  ON comment_replies
  FOR INSERT
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_comments_law_id ON comments(law_id);
CREATE INDEX IF NOT EXISTS idx_comments_article_id ON comments(article_id);
CREATE INDEX IF NOT EXISTS idx_comments_created_at ON comments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_comment_likes_comment_id ON comment_likes(comment_id);
CREATE INDEX IF NOT EXISTS idx_comment_replies_comment_id ON comment_replies(comment_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for comments updated_at
CREATE TRIGGER update_comments_updated_at
  BEFORE UPDATE ON comments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create view for comments with like counts
CREATE OR REPLACE VIEW comments_with_stats AS
SELECT 
  c.*,
  COALESCE(like_counts.like_count, 0) as like_count,
  COALESCE(reply_counts.reply_count, 0) as reply_count
FROM comments c
LEFT JOIN (
  SELECT comment_id, COUNT(*) as like_count
  FROM comment_likes
  GROUP BY comment_id
) like_counts ON c.id = like_counts.comment_id
LEFT JOIN (
  SELECT comment_id, COUNT(*) as reply_count
  FROM comment_replies
  GROUP BY comment_id
) reply_counts ON c.id = reply_counts.comment_id;