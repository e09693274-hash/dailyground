import db from "./index.js";

// 临时内置一些 RSS 条目，避免空数据
db.rss.push(
  {
    title: "Life: A quiet morning moment",
    summary: "A peaceful thought about starting fresh.",
    url: "https://example.com/rss1"
  },
  {
    title: "Creativity: How to spark new ideas daily",
    summary: "Tips for staying inspired.",
    url: "https://example.com/rss2"
  }
);

export async function getRandomRSS() {
  if (db.rss.length === 0) return null;
  return db.rss[Math.floor(Math.random() * db.rss.length)];
}
