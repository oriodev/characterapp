import { supabase } from "@/utils/supabase/supabaseClient";

export default async function getCharacters () {
  const { data: characters } = await supabase.from("characters").select();
  return characters || [];
}