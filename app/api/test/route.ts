import { GoogleGenAI } from "@google/genai";

// Connect to Gemini using the key from .env.local
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// This runs when someone visits /api/test
export async function GET() {
  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: "Ask me one behavioral interview question for a software engineer.",
  });

  // Send Gemini's reply back as JSON
  return Response.json({ reply: response.text });
}