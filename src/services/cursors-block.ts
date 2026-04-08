// ── CURSORS BLOCK (D11–D18) ──
// Translates SonicDNA cursor fields into directive prompt text for Gemini.
// Returns '' if no cursor is set (full backward-compat).

import type { SonicDNA } from './sonic-dna';

export function buildCursorsBlock(dna?: SonicDNA | null): string {
  if (!dna) return '';
  const lines: string[] = [];

  // D11 — composition mode
  if (dna.compositionMode) {
    const map: Record<string, string> = {
      'text-first': 'Write text-first: lyrics drive melody, not the reverse. Hook can be plain, verses carry the weight.',
      'melody-first': 'Write melody-first: every line must sing before it scans. Prioritize vowel openness and contour over density.',
      'hook-driven': 'Hook-driven composition: build the entire song outward from a single 4-bar hook idea. Verses serve the hook, never compete.',
    };
    lines.push(`★ D11 COMPOSITION: ${map[dna.compositionMode]}`);
  }

  // D12 — territorial anchor
  if (dna.territorialAnchor && dna.territorialAnchor.lang !== 'none' && dna.territorialAnchor.density > 0) {
    const { lang, density, role } = dna.territorialAnchor;
    const roleTxt = role === 'samples' ? 'production samples only, no lexical insertion'
      : role === 'both' ? 'both lexical insertion and production samples'
      : 'lexical insertion (words inside French lines)';
    lines.push(`★ D12 TERRITORIAL ANCHOR: Inject ~${density}% ${lang} via ${roleTxt}. No transliteration sloppiness, no exoticization.`);
  }

  // D13 — register
  if (dna.registerMode) {
    const map: Record<string, string> = {
      'combative': 'Combative register only: confrontation, défi, posture haute. No vulnerability, no introspection.',
      'contemplative': 'Contemplative register only: introspection, doute, observation. No flex, no menace.',
      'hybrid': 'Hybrid register: alternate combative and contemplative beats. Use the contrast as tension engine.',
    };
    lines.push(`★ D13 REGISTER: ${map[dna.registerMode]}`);
  }

  // D14 — conceptual mode
  if (dna.conceptualMode) {
    const map: Record<string, string> = {
      'non-narrative': 'Non-narrative mode: punchlines and moods, no story arc. Each verse is a snapshot.',
      'narrative-real': 'Narrative-real mode: tell a true-feeling concrete story across verses, with timeline and characters.',
      'concept-fictional': 'Concept-fictional mode: build a fictional universe (sci-fi, allegory, dystopia). Stay consistent within it.',
    };
    lines.push(`★ D14 CONCEPT: ${map[dna.conceptualMode]}`);
  }

  // D15 — reference density
  if (typeof dna.referenceDensity === 'number') {
    const d = dna.referenceDensity;
    if (d < 25) lines.push(`★ D15 REFERENCES: Low density (${d}/100). Avoid pop-culture name-drops. Stay self-contained.`);
    else if (d < 60) lines.push(`★ D15 REFERENCES: Mid density (${d}/100). 1–2 cultural references max per verse, well integrated.`);
    else lines.push(`★ D15 REFERENCES: High density (${d}/100). Layered references — film, history, religion, sport. Each line can carry one.`);
  }

  // D16 — technicity
  if (dna.technicityMode) {
    const map: Record<string, string> = {
      'simple-volunteer': 'Simple-volunteer technicity: short lines, monosyllabic rimes, deliberate plainness. Power through restraint.',
      'standard': 'Standard technicity: solid multi-syllable rimes, normal flow variation, no showboating.',
      'virtuoso': 'Virtuoso technicity: dense internal rimes, multi-syllable assonance chains, flow shifts mid-bar, polysyllabic punchlines.',
    };
    lines.push(`★ D16 TECHNICITY: ${map[dna.technicityMode]}`);
  }

  // D17 — honor code
  if (dna.honorCode && dna.honorCode !== 'none') {
    const map: Record<string, string> = {
      'implicit': 'Honor code present but implicit. Loyalty, parole, respect — referenced obliquely, never sermonized.',
      'central': 'Honor code is central theme: parole donnée, loyauté, code de la rue. Make it the moral spine of the song.',
    };
    lines.push(`★ D17 HONOR CODE: ${map[dna.honorCode]}`);
  }

  // D18 — tempo gravity
  if (dna.tempoGravity) {
    const map: Record<string, string> = {
      'slow': 'Tempo gravity SLOW: prefer 60–85 BPM feel, breath room, drag-back delivery.',
      'mid': 'Tempo gravity MID: 90–115 BPM feel, conversational pocket.',
      'fast': 'Tempo gravity FAST: 130+ BPM feel, propulsive cadence, no dead space.',
    };
    lines.push(`★ D18 TEMPO GRAVITY: ${map[dna.tempoGravity]}`);
  }

  if (lines.length === 0) return '';
  return `\n# CURSORS (D11–D18) — DIRECTIVE:\n${lines.join('\n')}\n`;
}
