import { supabase } from "./supabase.js";

export async function addSnippet(user_id, content) {
  const { data, error } = await supabase
    .from("snippets")
    .insert([{ user_id, content }])
    .select()
    .single();

  if (error) {
    console.error("Insert Snippet Error:", error);
    return null;
  }

  return data;
}

export async function getUserSnippets(user_id, limit = 20) {
  const { data, error } = await supabase
    .from("snippets")
    .select("*")
    .eq("user_id", user_id)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Fetch Snippets Error:", error);
    return [];
  }

  return data;
}
