import sendMessage from "../sendMessage.js";
import extractSnippet from "../llm/extractSnippet.js";
import { saveSnippet } from "../db/snippets.js";

export default async function handleFreeChat(chatId, text) {
  const snippet = await extractSnippet(text);
  await saveSnippet(chatId, snippet);

  return sendMessage(
    chatId,
    `嗯嗯，我帮你记下来了🌿  
这个小瞬间挺有感觉的，说说当时你心里想什么？`
  );
}
