/**
 * Grok Lyrics Service — Calls /api/grok-lyrics to generate rap/R&B lyrics via xAI Grok
 */

import { Verse } from '../types';
import { getArtistSonicDNA } from './sonic-dna';

interface GrokLyricsParams {
  theme: string;
  language: string;
  artist: string;
  mood?: string;
  genre?: string;
  energy?: number;
}

interface GrokLyricsResult {
  lyrics: Verse[];
  rawText: string;
  model: string;
}

/**
 * Parse raw Grok output into structured Verse[] for the app
 */
function parseGrokLyrics(rawText: string): Verse[] {
  const verses: Verse[] = [];
  // Match sections like [Intro], [Verse 1], [Chorus], [Bridge], [Outro], [Pre-Chorus], etc.
  const sectionRegex = /\[([^\]]+)\]/g;
  const sections: { type: string; startIndex: number }[] = [];

  let match;
  while ((match = sectionRegex.exec(rawText)) !== null) {
    // Skip vocal style tags and ad-lib tags
    const tag = match[1].trim();
    if (tag.toLowerCase().startsWith('vocal style') ||
        tag.toLowerCase().startsWith('energy') ||
        tag.toLowerCase().startsWith('tempo') ||
        tag.toLowerCase().startsWith('beat')) {
      continue;
    }
    sections.push({
      type: tag,
      startIndex: match.index + match[0].length
    });
  }

  if (sections.length === 0) {
    // No sections found — treat the whole text as a single verse
    return [{
      id: Math.random().toString(36).substr(2, 9),
      type: 'Verse',
      text: rawText.trim(),
      prompt: ''
    }];
  }

  for (let i = 0; i < sections.length; i++) {
    const start = sections[i].startIndex;
    const end = i + 1 < sections.length ? rawText.lastIndexOf('[', sections[i + 1].startIndex - 1) : rawText.length;
    const text = rawText.slice(start, end).trim();

    if (text.length > 0) {
      verses.push({
        id: Math.random().toString(36).substr(2, 9),
        type: sections[i].type,
        text,
        prompt: ''
      });
    }
  }

  return verses;
}

/**
 * Generate lyrics via Grok API
 */
export async function generateGrokLyrics(params: GrokLyricsParams): Promise<GrokLyricsResult> {
  const { theme, language, artist, mood, genre, energy } = params;

  // Get the Sonic DNA for the artist to feed to Grok
  const artistDNA = artist ? getArtistSonicDNA(artist) : null;

  // Prepare a serializable subset of DNA (avoid circular refs / huge objects)
  const dnaPayload = artistDNA ? {
    artist: artistDNA.artist,
    vocalDNA: artistDNA.vocalDNA,
    flowPattern: artistDNA.flowPattern,
    productionFingerprint: artistDNA.productionFingerprint,
    culturalAnchors: artistDNA.culturalAnchors,
    structureDNA: artistDNA.structureDNA,
    hookType: artistDNA.hookType,
    energyCurve: artistDNA.energyCurve,
    verseBehavior: artistDNA.verseBehavior,
    antiPatterns: artistDNA.antiPatterns,
    hookStrategy: artistDNA.hookStrategy,
    sunoStyleTemplate: artistDNA.sunoStyleTemplate,
  } : null;

  const response = await fetch("/api/grok-lyrics", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      theme: theme || 'freestyle',
      language: language || 'FRANÇAIS',
      artist: artist || '',
      artistDNA: dnaPayload,
      mood: mood || '',
      genre: genre || '',
      energy: energy || 70
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({ error: `HTTP ${response.status}` }));
    throw new Error(err.error || `Grok API error: ${response.status}`);
  }

  const data = await response.json();
  const rawText = data.text || '';
  const lyrics = parseGrokLyrics(rawText);

  return {
    lyrics,
    rawText,
    model: data.model || 'grok'
  };
}
