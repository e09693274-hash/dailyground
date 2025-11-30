import sendMessage from "../sendMessage.js";
import { getRecentSnippets } from "../db/snippets.js";
import generateProposals from "../llm/generateProposals.js";

export default async function handleGround(chatId) {
  const snippets = await getRecentSnippets(chatId, 5);
  if (!snippets.length) {
    return sendMessage(chatId, "你最近还没聊什么呢，可以随便说点什么🌿");
  }

  const proposals = await generateProposals(snippets);

  return sendMessage(chatId, 
`🌱 *给你今天的 DailyGround 提案*

*1️⃣ 小红书*
${proposals.xiaohongshu}

*2️⃣ 抖音脚本*
${proposals.tiktok}

*3️⃣ Threads/微博文案*
${proposals.threads}`
  );
}
