import db from "./index.js";

export async function getUserState(chatId) {
  return db.state?.[chatId] || null;
}

export async function setUserState(chatId, state) {
  if (!db.state) db.state = {};
  db.state[chatId] = state;
}
