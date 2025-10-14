import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase project URL and anon key
const SUPABASE_URL = 'https://yotpizgdeuabqxuxznmn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvdHBpemdkZXVhYnF4dXh6bm1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MTYyMjcsImV4cCI6MjA3NTQ5MjIyN30.ypPKbhmlDe2KuoM5bpMJsWrOpleSNblxlfDsL0YSrTA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
