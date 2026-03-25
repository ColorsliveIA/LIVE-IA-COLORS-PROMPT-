import { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenAI } from "@google/genai";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY is missing on server");
    return res
      .status(500)
      .json({ error: "GEMINI_API_KEY is not configured on server" });
  }

  try {
    const { model, contents, config } = req.body;

    if (!model || !contents) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model,
      contents,
      config,
    });

    return res.status(200).json({
      text: response.text || "",
    });
  } catch (error: any) {
    console.error("Gemini API error:", error);

    // Determine appropriate status code
    let statusCode = 500;
    if (error?.status === 429 || error?.error?.code === 429) {
      statusCode = 429;
    } else if (error?.status === 503 || error?.error?.code === 503) {
      statusCode = 503;
    }

    return res.status(statusCode).json({
      error: error?.message || "Gemini API request failed",
      status: error?.status,
    });
  }
}
