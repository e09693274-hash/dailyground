import db from "./index.js";

export async function findOrCreateUser(telegramId) {
  let user = db.users.find(u => u.telegramId === telegramId);

  if (!user) {
    user = { telegramId, createdAt: new Date() };
    db.users.push(user);
  }

  return user;
}
