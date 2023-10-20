import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://biayxuqucgynmenqscvn.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpYXl4dXF1Y2d5bm1lbnFzY3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyMDg0OTcsImV4cCI6MjAxMjc4NDQ5N30.R6FgPDQAHfxm8pdWm9qXgwlpUebP9KSoo9nShMsuO8o";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
