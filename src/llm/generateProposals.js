import axios from "axios";

const OPENAI_KEY = process.env.OPENAI_API_KEY;

export default async function generateProposals(snippets) {
  const prompt = `
下面是用户最近的素材列表：
${JSON.stringify(snippets, null, 2)}

请生成3条内容提案（小红书/抖音/Threads），分别用三个字段返回：
{
  "xiaohongshu": "...",
  "tiktok": "...",
  "threads": "..."
}
`;

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
