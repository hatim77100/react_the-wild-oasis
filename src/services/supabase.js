import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cfeoqoeeeugfhoyxlplv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmZW9xb2VlZXVnZmhveXhscGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1ODcxNTgsImV4cCI6MjAyMzE2MzE1OH0.aFqXgM2ZDRun6acISF_grR5Wa-iCk-iTX-92OCYcTMw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
