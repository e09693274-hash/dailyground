import axios from "axios";

const OPENAI_KEY = process.env.OPENAI_API_KEY;

export default async function extractSnippet(text) {
  const prompt = `
从下面的用户话语中提取可用于“内容创作”的素材，生成 JSON：

用户内容：
${text}

请输出：
{
  "cleaned_text": "...",
  "tags": ["..."],
  "emotions": ["..."],
  "scenes": ["..."]
}
只输出 JSON。`;

  const res = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: prompt }]
    },
    { headers: { Authorization: `Bearer ${OPENAI_KEY}` } }
  );

  return JSON.parse(res.data.choices[0].message.content);
}
