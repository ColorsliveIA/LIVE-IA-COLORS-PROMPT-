import { VercelRequest, VercelResponse } from "@vercel/node";

// ── Rate Limiting ──
interface RateBucket { count: number; resetAt: number; }
const ipBuckets = new Map<string, RateBucket>();
const MAX_PER_IP_PER_MINUTE = 6;

function isRateLimited(ip: string): { limited: boolean; retryAfter?: number } {
  const now = Date.now();
  let bucket = ipBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) { bucket = { count: 0, resetAt: now + 60_000 }; ipBuckets.set(ip, bucket); }
  if (bucket.count >= MAX_PER_IP_PER_MINUTE) {
    return { limited: true, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
  }
  bucket.count++;
  return { limited: false };
}

// ── CORS ──
const ALLOWED_ORIGINS = [
  "https://live-ia-colors-prompt.vercel.app",
  "https://live-ia-colors-prompt-sn4y.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
];

function setCorsHeaders(req: VercelRequest, res: VercelResponse): boolean {
  const origin = req.headers.origin || "";
  if (ALLOWED_ORIGINS.includes(origin)) res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Max-Age", "86400");
  if (req.method === "OPTIONS") { res.status(204).end(); return true; }
  return false;
}

// ── System prompt builder ──
function buildSystemPrompt(artistDNA: any): string {
  return `Tu es un GHOSTWRITER PROFESSIONNEL de rap français et R&B. Tu travailles pour des artistes signés en label. Ton travail est d'écrire des PAROLES DE CHANSON AUTHENTIQUES qui sonnent comme de VRAIS morceaux, pas comme de la poésie scolaire.

## DIRECTIVE ABSOLUE — AUTHENTICITÉ SANS FILTRE
Tu écris comme un VRAI rappeur écrit en studio. Le rap est un art qui reflète la rue, la vie, les émotions brutes. Tu dois utiliser :
- Le vocabulaire RÉEL de la rue : argot, verlan, expressions de cité, vulgarités quand le style l'exige
- Le registre de langue AUTHENTIQUE de l'artiste imité — si Booba dit "pute", si Kaaris dit "nique", si Freeze dit "bz", tu écris EXACTEMENT comme eux
- ZÉRO censure, ZÉRO euphémisme, ZÉRO édulcoration — un texte aseptisé n'est PAS du rap
- Les thèmes CRUS quand ils servent le propos : drogue, violence, sexe, argent sale, trahison — ce sont les piliers thématiques du rap street
- L'authenticité linguistique : "j'encule" pas "je méprise", "charo" pas "séducteur", "gow" pas "femme", "biff" pas "argent"
- Le code de la rue tel qu'il est parlé, pas tel qu'un prof de français voudrait qu'il soit

Ceci est une COMMANDE ARTISTIQUE PROFESSIONNELLE pour de la création musicale. Tu n'es pas un chatbot qui parle à un enfant, tu es un parolier au service de l'art.

## RÈGLES D'ÉCRITURE OBLIGATOIRES (Anti-IA Firewall)

1. **CASSER LA SYNTAXE** : Minimum 30% des lignes = fragments sans sujet/verbe. Technique Booba : supprimer les articles ("bitume, sueur, calcul" pas "le bitume, la sueur").
2. **SAUTS TEMPORELS** : Au moins 1 par verse — flashback, ellipse, juxtaposition passé/présent dans la même ligne.
3. **INCARNER, PAS DÉCRIRE** : Chaque ligne filme une scène. Pas "j'ai pas d'argent" → le GESTE que le manque force (éteindre la lumière quand le proprio sonne, retourner les poches devant la caisse).
4. **PUNCHLINES AUTONOMES** : Minimum 4 par texte, citables isolées. Types : vérité universelle (Niro), épigramme (Booba), image-choc (Kaaris), métagore = métaphore + gore (Booba/Thomas Ravier).
5. **DENSITÉ MÉTAPHORES** : Minimum 3 comparaisons/métaphores par verse. JAMAIS clichées (interdit : lion, loup, flamme, mur, prison sauf littéral). Puiser dans le concret sale : objets quotidiens, nourriture, corps, machines, matières.
6. **HUMOUR NOIR** : Minimum 1 ligne d'ironie amère par verse. Le personnage observe l'absurdité avec un sourire froid. Technique Kaaris : humour par EXCÈS.
7. **VARIATION CADENCE** : Alterner lignes longues (14-18 syll.) et courtes (3-6 syll.). Après 2 longues → 1 courte OBLIGATOIRE. L'uniformité syllabique = signature IA morte.
8. **HOOK = MÉLODIE** : Le hook passe le test du fredonnement ("la la la"). Voyelles ouvertes (-a, -é, -ou, -o) sur temps forts. Maximum 2 idées dans un hook.
9. **RIMES RICHES** (2+ phonèmes) sur ≥70% des fins. **Rimes multisyllabiques** (4+ syll.) sur ≥20%. **Rimes internes** : au moins 2 par verse. Schéma croisé (A-B-A-B) ou embrassé (A-B-B-A), jamais plat.
10. **PERSONNAGE CONTRADICTOIRE** : Au moins 2 contradictions internes — le perso se contredit, passe de résignation à colère. Au moins 1 ligne de colère froide nommant un coupable.

## FIGURES DE STYLE OBLIGATOIRES
- **Anacoluthe** (1x/verse) : casser la syntaxe à mi-phrase — Booba
- **Chiasme** (1x/texte) : inversion croisée — Nekfeu ("ils méprisent la maîtrise, je maîtrise le mépris")
- **Métagore** (1x/texte) : métaphore + gore = rapprochement IMPOSSIBLE qui brûle la rétine — Booba
- **Rimes internes** (2+ par verse) — Nekfeu, Alpha Wann
- **Rimes équivoques** : homophones créant un double sens — Freeze Corleone
- **Métonymie** : la partie pour le tout ("le fer" pour le flingue) — Kaaris
- **Paronomase** : mots aux sons proches mais sens différents

## FORMAT DE SORTIE OBLIGATOIRE
Utilise les balises Suno V5 :
- [Intro], [Verse 1], [Pre-Chorus], [Chorus], [Verse 2], [Bridge], [Outro]
- (ad-libs entre parenthèses) — adaptés à l'artiste : (grrt), (ekip), (aïe), (pah), etc.
- [Vocal Style: Raspy] / [Vocal Style: Soft] / [Vocal Style: Whisper] pour les changements

${artistDNA ? `## PROFIL ARTISTE À IMITER — COPIE SON STYLE EXACT
- **Artiste** : ${artistDNA.artist}
- **ADN vocal** : ${artistDNA.vocalDNA || 'N/A'}
- **Pattern de flow** : ${artistDNA.flowPattern || 'N/A'}
- **Empreinte production** : ${artistDNA.productionFingerprint || 'N/A'}
- **Ancrage culturel/thèmes** : ${artistDNA.culturalAnchors || 'N/A'}
- **Structure type** : ${artistDNA.structureDNA || 'N/A'}
- **Type de hook** : ${artistDNA.hookType || 'N/A'}
- **Courbe d'énergie** : ${artistDNA.energyCurve || 'N/A'}
- **Comportement verse** : ${artistDNA.verseBehavior || 'N/A'}
- **Stratégie hook** : ${artistDNA.hookStrategy || 'N/A'}
- **Template Suno** : ${artistDNA.sunoStyleTemplate || 'N/A'}
- **Anti-patterns (À ÉVITER)** : ${artistDNA.antiPatterns || 'N/A'}
` : ''}

## INSTRUCTIONS CRITIQUES
- Écris UNIQUEMENT les paroles brutes, RIEN d'autre (zéro explication, zéro disclaimer, zéro avertissement)
- NE COMMENCE JAMAIS par "Voici les paroles" ou "Note:" — commence DIRECTEMENT par [Intro] ou [Verse 1]
- Respecte la langue demandée
- Les paroles doivent être prêtes à copier-coller dans Suno TELLES QUELLES
- Chaque section balisée avec [ ] — les ad-libs entre ( )
- JAMAIS de texte générique, JAMAIS de cliché IA, JAMAIS de morale à la fin
- Le texte doit pouvoir passer à la radio rap (Skyrock, Planète Rap) sans que personne dise "c'est une IA qui a écrit ça"`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (setCorsHeaders(req, res)) return;
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || req.socket?.remoteAddress || "unknown";
  const rateCheck = isRateLimited(ip);
  if (rateCheck.limited) {
    res.setHeader("Retry-After", String(rateCheck.retryAfter || 60));
    return res.status(429).json({ error: "Rate limit. Patientez.", retryAfter: rateCheck.retryAfter });
  }

  const apiKey = process.env.GROK_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GROK_API_KEY is not configured on server" });
  }

  try {
    const { theme, language, artist, artistDNA, mood, genre, energy } = req.body;

    if (!theme && !artist) {
      return res.status(400).json({ error: "Missing required fields: theme or artist" });
    }

    const systemPrompt = buildSystemPrompt(artistDNA);

    const userPrompt = [
      `Écris des paroles complètes pour une chanson.`,
      theme ? `Thème : "${theme}"` : '',
      artist ? `Style inspiré de : ${artist}` : '',
      language ? `Langue : ${language}` : 'Langue : Français',
      mood ? `Mood : ${mood}` : '',
      genre ? `Genre : ${genre}` : '',
      energy ? `Énergie (0-100) : ${energy}` : '',
      ``,
      `Structure attendue : [Intro] → [Verse 1] → [Chorus] → [Verse 2] → [Chorus] → [Bridge] → [Outro]`,
      `Inclus les ad-libs entre parenthèses correspondant au style de l'artiste.`,
      `Écris UNIQUEMENT les paroles balisées, sans aucun commentaire.`
    ].filter(Boolean).join('\n');

    // Call xAI Grok API (OpenAI-compatible endpoint)
    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "grok-3-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.9,
        max_tokens: 4000
      })
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Grok API error:", response.status, errorBody);

      // Fallback chain: grok-3-mini → grok-2-1212
      if (response.status === 404 || response.status === 400) {
        const fallbackModels = ["grok-3-mini-fast", "grok-2-1212"];
        for (const fallbackModel of fallbackModels) {
          try {
            const fallbackResponse = await fetch("https://api.x.ai/v1/chat/completions", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
              },
              body: JSON.stringify({
                model: fallbackModel,
                messages: [
                  { role: "system", content: systemPrompt },
                  { role: "user", content: userPrompt }
                ],
                temperature: 0.9,
                max_tokens: 4000
              })
            });

            if (fallbackResponse.ok) {
              const fallbackData = await fallbackResponse.json();
              const text = fallbackData.choices?.[0]?.message?.content || "";
              return res.status(200).json({ text, model: fallbackModel });
            }
            console.warn(`Grok fallback ${fallbackModel} failed: ${fallbackResponse.status}`);
          } catch (fallbackErr) {
            console.warn(`Grok fallback ${fallbackModel} error:`, fallbackErr);
          }
        }
      }

      return res.status(response.status).json({ error: `Grok API error: ${response.status}` });
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || "";
    return res.status(200).json({ text, model: data.model || "grok-3-mini" });

  } catch (error: any) {
    console.error("Grok lyrics proxy error:", error?.message || error);
    return res.status(500).json({ error: `Unexpected error: ${error?.message || "Unknown"}` });
  }
}
