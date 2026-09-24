import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const MODEL = "gemini-3.6-flash";

export type ChatMessage = {
  role: "user" | "model";
  text: string;
};

export async function generateText(
  systemPrompt: string,
  messages: ChatMessage[]
): Promise<string> {
  const response = await ai.models.generateContent({
    model: MODEL,
    contents: messages.map((m) => ({
      role: m.role,
      parts: [{ text: m.text }],
    })),
    config: { systemInstruction: systemPrompt },
  });

  return response.text ?? "";
}