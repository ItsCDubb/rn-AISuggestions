import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://biayxuqucgynmenqscvn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpYXl4dXF1Y2d5bm1lbnFzY3ZuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzIwODQ5NywiZXhwIjoyMDEyNzg0NDk3fQ.qE-Ku4Mynecu7kv9YC8tfA_qHdrcRS03EsMEZjsS9dc";

export const supabase = createClient(supabaseUrl, supabaseKey);
