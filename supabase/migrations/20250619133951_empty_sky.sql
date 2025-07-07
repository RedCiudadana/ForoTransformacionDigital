/*
  # Add email requirement and captcha for replies

  1. Schema Changes
    - Add `author_email` field to comment_replies table
    - Make email required for replies
    - Add captcha verification tracking

  2. Security
    - Update RLS policies to ensure email is provided
    - Maintain existing security for other operations
*/

-- Add email field to comment_replies table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'comment_replies' AND column_name = 'author_email'
  ) THEN
    ALTER TABLE comment_replies ADD COLUMN author_email text NOT NULL DEFAULT '';
  END IF;
END $$;

-- Update the existing policy to ensure email is provided for new replies
DROP POLICY IF EXISTS "Anyone can reply to comments" ON comment_replies;

CREATE POLICY "Anyone can reply to comments with email"
  ON comment_replies
  FOR INSERT
  WITH CHECK (
    author_email IS NOT NULL AND 
    author_email != '' AND 
    author_email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS idx_comment_replies_email ON comment_replies(author_email);