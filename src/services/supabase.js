// using TarunSupabase project present in tarunsupabase@gmail.com

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kjibqvexozllbalvpxey.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqaWJxdmV4b3psbGJhbHZweGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4MzI1NTMsImV4cCI6MjA0ODQwODU1M30.pfT3IijGzC9oz6YzoTawJUwHZ-JpcjzhLVQdTmu38cA";
export const supabase = createClient(supabaseUrl, supabaseKey);
