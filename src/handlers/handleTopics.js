import sendMessage from "../sendMessage.js";
import { getRandomRSS } from "../db/rss.js";
import rssTopic from "../llm/rssTopic.js";

export default async function handleTopics(chatId) {
  const rssItem = await getRandomRSS();

  const prompt = await rssTopic(rssItem);

  return sendMessage(chatId,
`如果你今天没啥聊的，我有几个灵感给你：

👉 ${prompt}

你愿意聊聊这个吗？🙂`
  );
}
