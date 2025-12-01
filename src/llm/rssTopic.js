// Stub version: converts an RSS item into a soft “daily topic” suggestion.
// Later you can replace this with Qwen / DeepSeek / OpenAI generation.

export default async function rssTopic(rssItem) {
  if (!rssItem) {
    return "今天你有什么特别的小瞬间想分享吗？🌱";
  }

  const { title, summary } = rssItem;

  // 简单伪生成一个“适合聊天”的提示
  return (
    `我看到一个挺有意思的小话题：\n\n` +
    `**${title}**\n\n` +
    `${summary}\n\n` +
    `你最近有发生过类似的小事吗？可以从这个角度聊聊～`
  );
}

