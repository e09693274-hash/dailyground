import { supabase } from "./supabase.js";

export async function addProposal(user_id, content, platform = null) {
  const { data, error } = await supabase
    .from("proposals")
    .insert([{ user_id, content, platform }])
    .select()
    .single();

  if (error) {
    console.error("Insert Proposal Error:", error);
    return null;
  }

  return data;
}

export async function getLatestProposals(user_id, limit = 10) {
  const { data, error } = await supabase
    .from("proposals")
    .select("*")
    .eq("user_id", user_id)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Fetch Proposals Error:", error);
    return [];
  }

  return data;
}
