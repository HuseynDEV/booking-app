
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tooilpyoyigjwrvvalri.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvb2lscHlveWlnandydnZhbHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwODQ4OTQsImV4cCI6MjAyODY2MDg5NH0.z2FWxk41Mujq4NDgfcR-rz9k9bp8W2n11Cgwt22t64I"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase