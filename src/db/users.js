import { supabase } from "./supabase.js";

// 创建或查找用户
export async function createUser(telegram_id, name) {
  // 先查找用户是否存在
  const { data: existing, error: selectError } = await supabase
    .from("users")
    .select("*")
    .eq("telegram_id", telegram_id)
    .single();

  if (existing) {
    return existing;
  }

  // 插入新用户
  const { data, error } = await supabase
    .from("users")
    .insert([{ telegram_id, name }])
    .select()
    .single();

  if (error) {
    console.error("Supabase Insert User Error:", error);
    return null;
  }

  return data;
}

// 获取用户
export async function getUser(telegram_id) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("telegram_id", telegram_id)
    .single();

  if (error) {
    console.error("Supabase Get User Error:", error);
    return null;
  }

  return data;
}
