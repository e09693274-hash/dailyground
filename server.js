import express from "express";
import dotenv from "dotenv";
import webhook from "./src/webhook.js";

dotenv.config();

const app = express();
app.use(express.json());

app.post("/webhook", webhook);

app.get("/", (req, res) => {
  res.send("DailyGround Bot is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`DailyGround listening on ${PORT}`);
});
