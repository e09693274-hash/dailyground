import axios from "axios";

const QWEN = process.env.QWEN_API_KEY;

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
    "https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
    {
      model: "qwen-plus",
      messages: [{ role: "user", content: prompt }]
    },
    { headers: { Authorization: `Bearer ${QWEN_KEY}` } }
  );

  return JSON.parse(res.data.choices[0].message.content);
}
