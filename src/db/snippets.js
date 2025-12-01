import db from "./index.js";

export async function saveSnippet(chatId, snippet) {
  db.snippets.push({
    chatId,
    snippet,
    createdAt: new Date()
  });
}

export async function getRecentSnippets(chatId, limit = 5) {
  return db.snippets
    .filter(s => s.chatId === chatId)
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, limit)
    .map(s => s.snippet);
}
