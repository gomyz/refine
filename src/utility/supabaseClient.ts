import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://jrfwzqiwegytgnpixvcv.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyZnd6cWl3ZWd5dGducGl4dmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4NjMyOTgsImV4cCI6MjA0NjQzOTI5OH0.QW1eLTl_fwKbA_PonC9ULeXusXO88FpHu3_1oANBlNY";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
