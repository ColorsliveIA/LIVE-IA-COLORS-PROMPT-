import { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * DEBUG ENDPOINT — /api/grok-debug
 * Makes a simple lyrics call to Grok and returns EVERYTHING for diagnosis.
 * Hit this URL in your browser: https://live-ia-colors-prompt.vercel.app/api/grok-debug
 */

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  const origin = req.headers.origin || "";
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") { res.status(204).end(); return; }

  const apiKey = process.env.GROK_API_KEY;
  if (!apiKey) {
    return res.status(200).json({ error: "GROK_API_KEY not set", step: "env_check" });
  }

  const artist = (req.query.artist as string) || (req.body?.artist) || "Booba";
  const theme = (req.query.theme as string) || (req.body?.theme) || "trahison et argent";
  const lang = (req.query.lang as string) || (req.body?.lang) || "FRANÇAIS";

  const results: any = {
    timestamp: new Date().toISOString(),
    params: { artist, theme, lang },
    models_tried: [],
    pass1_style: null,
    pass2_lyrics: null,
  };

  const models = ["grok-3-mini", "grok-3-mini-fast", "grok-2-1212"];

  // ── PASS 2 TEST: Simple lyrics generation (the one that fails) ──
  const lyricsSystemPrompt = `Tu es un ghostwriter. Écris des paroles de rap/chanson.
Commence DIRECTEMENT par [Verse 1] ou [Intro]. Pas de JSON, pas d'explication.
Utilise les balises : [Intro], [Verse 1], [Chorus], [Verse 2], [Bridge], [Outro].
Ad-libs entre parenthèses. Minimum 8 lignes par couplet.`;

  const lyricsUserPrompt = `Écris les paroles d'une chanson sur le thème "${theme}", inspiré de ${artist}, en ${lang}.
Commence DIRECTEMENT par [Intro] ou [Verse 1].`;

  for (const model of models) {
    const modelResult: any = {
      model,
      status: null,
      error: null,
      raw_response: null,
      raw_length: 0,
      finish_reason: null,
      usage: null,
      cleaned_response: null,
      cleaned_length: 0,
      parsed_sections: 0,
    };

    try {
      const body = {
        model,
        messages: [
          { role: "system", content: lyricsSystemPrompt },
          { role: "user", content: lyricsUserPrompt }
        ],
        temperature: 0.85,
        max_tokens: 8000
      };

      const response = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify(body)
      });

      modelResult.status = response.status;

      if (!response.ok) {
        const errText = await response.text().catch(() => "");
        modelResult.error = errText.slice(0, 500);
        results.models_tried.push(modelResult);
        continue;
      }

      const data = await response.json();
      const rawText = data.choices?.[0]?.message?.content || "";
      modelResult.finish_reason = data.choices?.[0]?.finish_reason || "unknown";
      modelResult.usage = data.usage || null;
      modelResult.raw_response = rawText.slice(0, 2000); // First 2000 chars
      modelResult.raw_length = rawText.length;

      // Clean reasoning tokens
      let cleaned = rawText;
      cleaned = cleaned.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
      cleaned = cleaned.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
      cleaned = cleaned.replace(/^(?:Voici|Here (?:are|is)|Sure|OK|D'accord|Bien sûr)[^\n]*\n+/i, '').trim();
      modelResult.cleaned_response = cleaned.slice(0, 2000);
      modelResult.cleaned_length = cleaned.length;

      // Try bracket parsing
      const parts = cleaned.split(/\[([^\]]+)\]/g).filter(Boolean);
      const sections: any[] = [];
      for (let i = 0; i < parts.length - 1; i += 2) {
        const name = parts[i].trim();
        const text = parts[i + 1].trim();
        if (/^(vocal\s|energy|tempo|beat|mood|texture|instrument|key|bpm)/i.test(name)) continue;
        if (text.length > 0) sections.push({ type: name, text_preview: text.slice(0, 100) });
      }
      modelResult.parsed_sections = sections.length;
      modelResult.sections_preview = sections.slice(0, 4);

      // Check if it's JSON instead
      if (cleaned.startsWith('{')) {
        modelResult.is_json = true;
        try {
          const parsed = JSON.parse(cleaned);
          modelResult.json_keys = Object.keys(parsed);
        } catch {
          modelResult.is_json = false;
          modelResult.json_error = "Starts with { but invalid JSON";
        }
      }

      results.models_tried.push(modelResult);
      // Only test first working model
      if (rawText.length > 0) break;

    } catch (err: any) {
      modelResult.error = err.message;
      results.models_tried.push(modelResult);
      if (err.message?.includes('403') || err.message?.includes('429')) break;
    }
  }

  return res.status(200).json(results);
}
