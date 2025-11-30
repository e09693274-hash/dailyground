import router from "./router.js";

export default async function webhook(req, res) {
  try {
    const body = req.body;

    if (!body.message) {
      return res.sendStatus(200);
    }

    const { chat, text } = body.message;
    const chatId = chat.id;

    await router(chatId, text);

    res.sendStatus(200);
  } catch (err) {
    console.error("Webhook error:", err);
    res.sendStatus(200);
  }
}
