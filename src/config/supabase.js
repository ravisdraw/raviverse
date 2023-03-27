
import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0aXhpeml5cmRvZm9kYmJvbnduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5MzMxMzksImV4cCI6MTk5NTUwOTEzOX0.RuU8onurEb3NA-kfG1z15mRFAzspcE6KZJ-ZFeI7kZA'

const SUPABASE_URL = 'https://wtixiziyrdofodbbonwn.supabase.co'

// Create a single supabase client for interacting with your database
const supabaseUrl = SUPABASE_URL
const supabaseKey = SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
