
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wocfncgpvvorwglitapv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvY2ZuY2dwdnZvcndnbGl0YXB2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNDIwNzYxNywiZXhwIjoyMDE5NzgzNjE3fQ.2jNOfPkOLQlPc_3L0bJAsMpxrCV-2L-RFGsZS2EzMD8'
export const Supabase = createClient(supabaseUrl, supabaseKey)