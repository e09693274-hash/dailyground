import { supabase } from "./supabase.js";

export async function getUserState(user_id) {
  const { data, error } = await supabase
    .from("user_state")
    .select("*")
    .eq("user_id", user_id)
    .single();

  if (error && error.code !== "PGRST116") {
    console.error("Get User State Error:", error);
    return null;
  }

  return data;
}

export async function setUserState(user_id, mode) {
  // 先尝试更新
  const { data: updated, error: updateError } = await supabase
    .from("user_state")
    .update({ mode })
    .eq("user_id", user_id)
    .select()
    .single();

  if (updated) return updated;

  // 更新失败则尝试插入（无记录）
  const { data, error } = await supabase
    .from("user_state")
    .insert([{ user_id, mode }])
    .select()
    .single();

  if (error) {
    console.error("Insert User State Error:", error);
    return null;
  }

  return data;
}
