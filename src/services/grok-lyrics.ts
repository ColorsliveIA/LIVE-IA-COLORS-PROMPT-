/**
 * Grok Service — Calls /api/grok-lyrics for full Suno prompt generation (style + lyrics) or lyrics-only
 * Mirrors Gemini's output format for seamless provider switching.
 */

import { Verse } from '../types';
import { getArtistSonicDNA } from './sonic-dna';

export type GrokMode = 'all' | 'lyrics' | 'style';

export interface GrokGenerationParams {
  theme: string;
  language: string;
  artist: string;
  mood?: string;
  genre?: string;
  energy?: number;
  mode?: GrokMode;
  voiceType?: string;
  singingStyle?: string;
  productionStyle?: string;
  bpm?: number | null;
  styleBlend?: string;
  negativePrompt?: string;
  weirdness?: number;
  styleInfluence?: number;
  advancedTags?: string[];
}

export interface GrokFullResult {
  artistName: string;
  songTitle: string;
  sunoPrompt: string;
  sunoPrompts: string[];
  negativePrompt: string;
  structuredLyrics: Verse[];
  lipSyncExcerpt?: string;
  quality?: {
    score: number;
    coherence: number;
    richness: number;
    clarity: number;
    hook: number;
    precision: number;
    message: string;
  };
  model: string;
  provider: 'grok';
}

export interface GrokLyricsOnlyResult {
  lyrics: Verse[];
  rawText: string;
  model: string;
}

/**
 * Parse raw Grok lyrics output into structured Verse[]
 */
function parseGrokLyrics(rawText: string): Verse[] {
  const verses: Verse[] = [];
  const sectionRegex = /\[([^\]]+)\]/g;
  const sections: { type: string; startIndex: number }[] = [];

  let match;
  while ((match = sectionRegex.exec(rawText)) !== null) {
    const tag = match[1].trim();
    // Skip metatags
    if (tag.toLowerCase().startsWith('vocal style') ||
        tag.toLowerCase().startsWith('energy') ||
        tag.toLowerCase().startsWith('tempo') ||
        tag.toLowerCase().startsWith('beat') ||
        tag.toLowerCase().startsWith('vocal effect') ||
        tag.toLowerCase().startsWith('mood') ||
        tag.toLowerCase().startsWith('texture') ||
        tag.toLowerCase().startsWith('instrument')) {
      continue;
    }
    sections.push({ type: tag, startIndex: match.index + match[0].length });
  }

  if (sections.length === 0) {
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
 * Get serializable DNA payload for the API
 */
function getDNAPayload(artist: string) {
  const dna = artist ? getArtistSonicDNA(artist) : null;
  if (!dna) return null;
  return {
    artist: dna.artist,
    vocalDNA: dna.vocalDNA,
    flowPattern: dna.flowPattern,
    productionFingerprint: dna.productionFingerprint,
    culturalAnchors: dna.culturalAnchors,
    structureDNA: dna.structureDNA,
    hookType: dna.hookType,
    energyCurve: dna.energyCurve,
    verseBehavior: dna.verseBehavior,
    antiPatterns: dna.antiPatterns,
    hookStrategy: dna.hookStrategy,
    sunoStyleTemplate: dna.sunoStyleTemplate,
    sunoMetatags: dna.sunoMetatags,
    sunoExcludeStyles: dna.sunoExcludeStyles,
    sunoBpmRange: dna.sunoBpmRange,
    sunoKey: dna.sunoKey,
    sunoVocalTags: dna.sunoVocalTags,
  };
}

/**
 * FULL GENERATION via Grok — returns same format as Gemini's generateMusicContext
 */
export async function generateGrokFull(params: GrokGenerationParams): Promise<GrokFullResult> {
  const dnaPayload = getDNAPayload(params.artist);

  const response = await fetch("/api/grok-lyrics", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      theme: params.theme || 'freestyle',
      language: params.language || 'FRANÇAIS',
      artist: params.artist || '',
      artistDNA: dnaPayload,
      mood: params.mood || '',
      genre: params.genre || '',
      energy: params.energy || 70,
      mode: params.mode || 'all',
      voiceType: params.voiceType || '',
      singingStyle: params.singingStyle || '',
      productionStyle: params.productionStyle || '',
      bpm: params.bpm || null,
      styleBlend: params.styleBlend || '',
      negativePrompt: params.negativePrompt || '',
      weirdness: params.weirdness || 50,
      styleInfluence: params.styleInfluence || 100,
      advancedTags: params.advancedTags || []
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({ error: `HTTP ${response.status}` }));
    throw new Error(err.error || `Grok API error: ${response.status}`);
  }

  const data = await response.json();

  // Handle JSON parse error fallback from API
  if (data.parseError && data.text) {
    const lyrics = parseGrokLyrics(data.text);
    return {
      artistName: params.artist || 'Artiste',
      songTitle: 'Untitled',
      sunoPrompt: dnaPayload?.sunoStyleTemplate || '',
      sunoPrompts: [dnaPayload?.sunoStyleTemplate || ''],
      negativePrompt: dnaPayload?.sunoExcludeStyles || '',
      structuredLyrics: lyrics,
      quality: { score: 70, coherence: 70, richness: 70, clarity: 70, hook: 70, precision: 70, message: 'Grok fallback — JSON parse failed, lyrics extracted from raw text' },
      model: data.model || 'grok',
      provider: 'grok'
    };
  }

  // Ensure structuredLyrics have proper IDs
  const lyrics = (data.structuredLyrics || []).map((v: any, i: number) => ({
    id: v.id || Math.random().toString(36).substr(2, 9),
    type: v.type || `Section ${i + 1}`,
    text: v.text || '',
    prompt: v.prompt || ''
  }));

  return {
    artistName: data.artistName || params.artist || 'Artiste',
    songTitle: data.songTitle || 'Untitled',
    sunoPrompt: data.sunoPrompt || dnaPayload?.sunoStyleTemplate || '',
    sunoPrompts: data.sunoPrompts || [data.sunoPrompt || ''],
    negativePrompt: data.negativePrompt || dnaPayload?.sunoExcludeStyles || '',
    structuredLyrics: lyrics,
    lipSyncExcerpt: data.lipSyncExcerpt || '',
    quality: data.quality || { score: 80, coherence: 80, richness: 80, clarity: 80, hook: 80, precision: 80, message: 'Generated via Grok AI' },
    model: data.model || 'grok',
    provider: 'grok'
  };
}

/**
 * LYRICS ONLY via Grok — lightweight, returns parsed Verse[]
 */
export async function generateGrokLyrics(params: GrokGenerationParams): Promise<GrokLyricsOnlyResult> {
  const dnaPayload = getDNAPayload(params.artist);

  const response = await fetch("/api/grok-lyrics", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      theme: params.theme || 'freestyle',
      language: params.language || 'FRANÇAIS',
      artist: params.artist || '',
      artistDNA: dnaPayload,
      mood: params.mood || '',
      genre: params.genre || '',
      energy: params.energy || 70,
      mode: 'lyrics'
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({ error: `HTTP ${response.status}` }));
    throw new Error(err.error || `Grok API error: ${response.status}`);
  }

  const data = await response.json();
  const rawText = data.text || '';
  const lyrics = parseGrokLyrics(rawText);

  return { lyrics, rawText, model: data.model || 'grok' };
}

/**
 * GROK ARTIST SCAN — enriches DNA + generates initial style prompt
 */
export interface GrokScanResult {
  vocalIdentity: {
    voiceType: string;
    vocalTimbre: string;
    singingStyle: string;
    vocalPresence: string;
    accent: string;
    vocalReference: string;
    language: string;
    weirdness: number;
    styleInfluence: number;
    summary: string;
  };
  enrichedDNA: {
    vocalDNA: string;
    flowPattern: string;
    productionFingerprint: string;
    culturalAnchors: string;
    structureDNA: string;
    hookType: string;
    hookStrategy: string;
    verseBehavior: string;
    energyCurve: string;
    antiPatterns: string;
  };
  sunoStylePrompt: string;
  sunoNegativePrompt: string;
  suggestedBpm: string;
  suggestedKey: string;
  model: string;
  provider: 'grok';
}

export async function scanArtistWithGrok(artist: string): Promise<GrokScanResult> {
  const dnaPayload = getDNAPayload(artist);

  const response = await fetch("/api/grok-scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      artist,
      artistDNA: dnaPayload
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({ error: `HTTP ${response.status}` }));
    throw new Error(err.error || `Grok Scan API error: ${response.status}`);
  }

  const data = await response.json();
  return {
    vocalIdentity: data.vocalIdentity || {},
    enrichedDNA: data.enrichedDNA || {},
    sunoStylePrompt: data.sunoStylePrompt || '',
    sunoNegativePrompt: data.sunoNegativePrompt || '',
    suggestedBpm: data.suggestedBpm || '',
    suggestedKey: data.suggestedKey || '',
    model: data.model || 'grok',
    provider: 'grok'
  };
}
