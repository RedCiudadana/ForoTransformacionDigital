/*
  # Add reCAPTCHA verification tracking

  1. New Tables
    - `recaptcha_verifications`
      - `id` (uuid, primary key)
      - `token` (text, unique)
      - `verified_at` (timestamp)
      - `ip_address` (text, optional)
      - `user_agent` (text, optional)

  2. Security
    - Enable RLS on `recaptcha_verifications` table
    - Add policies for verification tracking

  3. Changes
    - Track reCAPTCHA verifications for audit purposes
    - Prevent token reuse
*/

-- Create recaptcha_verifications table for audit purposes
CREATE TABLE IF NOT EXISTS recaptcha_verifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  token text UNIQUE NOT NULL,
  verified_at timestamptz DEFAULT now(),
  ip_address text,
  user_agent text,
  action_type text DEFAULT 'comment', -- 'comment' or 'reply'
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE recaptcha_verifications ENABLE ROW LEVEL SECURITY;

-- Create policies for recaptcha_verifications
CREATE POLICY "Recaptcha verifications are viewable by authenticated users only"
  ON recaptcha_verifications
  FOR SELECT
  USING (false); -- Only accessible via server-side functions

CREATE POLICY "Anyone can insert recaptcha verifications"
  ON recaptcha_verifications
  FOR INSERT
  WITH CHECK (true);

-- Create index for token lookups
CREATE INDEX IF NOT EXISTS idx_recaptcha_verifications_token ON recaptcha_verifications(token);
CREATE INDEX IF NOT EXISTS idx_recaptcha_verifications_created_at ON recaptcha_verifications(created_at DESC);

-- Function to verify and log reCAPTCHA tokens (for future server-side verification)
CREATE OR REPLACE FUNCTION verify_recaptcha_token(
  p_token text,
  p_action_type text DEFAULT 'comment',
  p_ip_address text DEFAULT NULL,
  p_user_agent text DEFAULT NULL
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Check if token has already been used
  IF EXISTS (SELECT 1 FROM recaptcha_verifications WHERE token = p_token) THEN
    RETURN false;
  END IF;
  
  -- Log the verification attempt
  INSERT INTO recaptcha_verifications (token, action_type, ip_address, user_agent)
  VALUES (p_token, p_action_type, p_ip_address, p_user_agent);
  
  -- In a real implementation, you would verify the token with Google's API here
  -- For now, we'll assume the token is valid if it's not been used before
  RETURN true;
END;
$$;

-- Add comment to explain the verification process
COMMENT ON FUNCTION verify_recaptcha_token IS 'Verifies reCAPTCHA tokens and prevents reuse. In production, this should integrate with Google reCAPTCHA API.';