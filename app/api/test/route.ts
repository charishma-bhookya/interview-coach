import { generateText } from "@/lib/llm";

export async function GET() {
  const reply = await generateText(
    "You are a friendly interviewer. Ask exactly one question. Plain text only. No markdown, no intro, no extra commentary.",
    [{ role: "user", text: "Ask me one behavioral interview question for a software engineer." }]
  );

  return Response.json({ reply });
}