// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://astavhjpikypbjttjszu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzdGF2aGpwaWt5cGJqdHRqc3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2MzYwOTIsImV4cCI6MjA2MTIxMjA5Mn0.11E2dvfQuvq8BwrFWvskEtHg1-2yD8E1o8yQhtQqYJM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);