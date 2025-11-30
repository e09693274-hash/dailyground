import handleStart from "./handlers/handleStart.js";
import handleGround from "./handlers/handleGround.js";
import handleTopics from "./handlers/handleTopics.js";
import handleFreeChat from "./handlers/handleFreeChat.js";

export default async function router(chatId, text) {
  if (!text) return;

  if (text.startsWith("/start")) return handleStart(chatId);
  if (text.startsWith("/ground")) return handleGround(chatId);
  if (text.startsWith("/topics")) return handleTopics(chatId);

  return handleFreeChat(chatId, text);
}
