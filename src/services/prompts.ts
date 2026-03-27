import { SessionState, CameraPlan, StudioColor } from '../types';
import { PLANS, ETHNICITY_DESC, WARDROBE_SILHOUETTES, WARDROBE_STYLES, ARTIST_STYLES } from '../constants';

// ── Shared Helpers ──────────────────────────────────────────────────────

/**
 * Returns the studio style prompt fragment based on the selected studioStyle.
 * Extracted to avoid 4x duplication across prompt builders.
 */
function getStylePrompt(studioStyle: string): string {
  switch (studioStyle) {
    case 'epic':
      return 'GRANDIOSE EPIC CINEMATIC ATMOSPHERE: Dramatic overhead lighting, large-scale feel, high-end production value, epic scale. ';
    case 'film':
      return 'CINEMATIC FILM AESTHETIC: 35mm film grain, anamorphic lens flares, rich textures, moody cinematic lighting, filmic look. ';
    case 'soundtrack':
      return 'SOUNDTRACK / OST ATMOSPHERE: Evocative and emotional lighting, professional recording studio vibe, musical score aesthetic. ';
    default:
      return '';
  }
}

/**
 * Shared signature text overlay block.
 */
function getSignatureOverlay(artist: string): string {
  return `TEXT OVERLAY: In the bottom-left corner, a small clean white rectangular frame containing:
Line 1: AI COLOR (bold, uppercase)
Line 2: SESSION • ${artist.toUpperCase() || 'ARTISTE'}`;
}

/**
 * Shared negative prompt for all image generation.
 */
const SHARED_NEGATIVE = "no ceiling, no rigging, no TV, orange floor, tan floor, brown floor, looping cable, side cable, multiple cables, floor different color than wall";

/**
 * Shared microphone description block.
 */
function getMicBlock(mouthH: number, includePosition: string = ''): string {
  return `MICROPHONE: Vox-O-Rama Type 47 (Neumann U47 clone). Silver body. Suspended from the ceiling by ONE SINGLE STRAIGHT vertical black cable. NO LOOPS, NO SIDE CABLES, NO EXTRA WIRES. NO MICROPHONE STAND. NO TRIPOD. CRITICAL: The microphone capsule (bottom mesh part) MUST be perfectly aligned with the artist's UPPER LIP, exactly ${mouthH}cm from floor. The capsule MUST NOT cover the nose and MUST NOT be below the mouth. It must sit exactly at the level of the philtrum/upper lip for perfect animation compatibility.${includePosition ? ' ' + includePosition : ''}`;
}

/**
 * Shared studio background block.
 */
function getBackgroundBlock(color: StudioColor): string {
  return `UNIFORM MONOCHROMATIC CUBE. Flat smooth matte ${color.name} (${color.hex}) painted wall, FLOOR IS PAINTED WITH THE EXACT SAME PAINT AND IS THE EXACT SAME COLOR AS THE WALL. Seamless cyclorama wall (cyc wall). NO TAN FLOOR. NO ORANGE FLOOR. Heavy cinematic vignette.`;
}

// ── Wardrobe ────────────────────────────────────────────────────────────

function buildWardrobePrompt(state: SessionState) {
  const { sils, styles } = state.wardrobe;

  const currentDefaultOutfit = state.sex === 'female' ? state.color.outfitFemale : state.color.outfitMale;

  let basePrompt = currentDefaultOutfit;

  // If an artist outfit is selected, it takes precedence
  if (state.selectedArtistOutfit) {
    basePrompt = state.selectedArtistOutfit.prompt;
  }

  // If style reference is active, use its prompt as the base
  if (state.styleRefActive && state.styleRefSelected) {
    const styleRef = ARTIST_STYLES.find(s => s.name === state.styleRefSelected);
    if (styleRef) {
      basePrompt = styleRef.prompt;
    }
  }

  const isSensualFemale = state.sex === 'female' && state.expressionKey === 'sensuel';
  const sensualBase = isSensualFemale ? 'Elegant and alluring performance outfit, sophisticated silk or form-fitting textures, high-fashion aesthetic. ' : '';

  const genderConstraint = state.sex === 'male' ? 'MANDATORY: The outfit MUST be masculine streetwear or high-fashion tailoring. NO DRESSES, NO SKIRTS, NO FEMININE SILHOUETTES. ' : '';

  if (sils.length === 0 && styles.length === 0) {
    return `${genderConstraint}${sensualBase}${basePrompt}. Color palette matching ${state.color.name} studio.`;
  }

  const silPrompts = sils.map(s => WARDROBE_SILHOUETTES.find(ws => ws.key === s)?.prompt).filter(Boolean);
  const stylePrompts = styles.map(s => WARDROBE_STYLES.find(wst => wst.key === s)?.prompt).filter(Boolean);

  const selections = [
    stylePrompts.length > 0 ? stylePrompts.join(', ') : '',
    silPrompts.length > 0 ? silPrompts.join(', ') : '',
  ].filter(Boolean).join('. ');

  return `${genderConstraint}${sensualBase}${basePrompt}. ${selections}. Color palette matching ${state.color.name} studio.`;
}

// ── Studio Prompt ───────────────────────────────────────────────────────

export function buildStudioPrompt(state: SessionState) {
  const mouthH = Math.round(state.height * 0.89);
  const stylePrompt = getStylePrompt(state.studioStyle);

  return `COLORSxSTUDIOS Berlin. Empty studio, NO PERSON, NO HUMAN, NO TV, NO MONITOR, NO TEXT ON WALLS.

${stylePrompt}
MONOCHROMATIC SPACE: ABSOLUTELY UNIFORM COLOR. All visible surfaces — back wall, side walls, and floor — MUST be the exact same flat matte ${state.color.name} (${state.color.hex}). The floor is painted with the EXACT SAME PAINT as the walls. Seamless cyclorama wall (cyc wall), no visible seam, no color difference between floor and wall. NO TAN FLOOR, NO ORANGE FLOOR, NO BROWN FLOOR.
WALLS: Smooth flat matte painted plaster, ${state.color.hex}.
FLOOR: Smooth matte painted surface, EXACTLY SAME COLOR AS WALLS (${state.color.hex}). No gloss. No texture.

MICROPHONE — Vox-O-Rama Type 47 (Neumann U47 clone). Silver cylindrical body. Suspended from the ceiling by ONE SINGLE STRAIGHT black cable descending perfectly vertically. NO LOOPS, NO SIDE CABLES, NO EXTRA WIRES, NO JUMPER CABLES. The cable is a single straight line from the top of the frame to the top of the microphone. The microphone capsule (bottom mesh part) MUST be positioned exactly at ${mouthH}cm from floor, precisely at the level where a performer's upper lip would be. NO MICROPHONE STAND. NO TRIPOD. Cable exits top frame edge vertically.

LIGHTING: COLORSxSTUDIOS signature lighting — single large overhead softbox. The background wall and floor (${state.color.hex}) must remain perfectly uniform in color. Soft high-key studio lighting, wrap-around lighting to minimize harsh shadows.

${getSignatureOverlay(state.artist)}

CAMERA: ARRI Alexa 35. Photorealistic, 16:9, guidance 7.5, steps 30
Negative: no person, no human, no TV, no sign, ${SHARED_NEGATIVE}`;
}

// ── Artist Prompt ───────────────────────────────────────────────────────

export function buildArtistePrompt(state: SessionState, plan: CameraPlan) {
  const mouthH = Math.round(state.height * 0.89);
  const eth = state.ethnicity !== 'none' ? ' ' + ETHNICITY_DESC[state.ethnicity] + '.' : '';
  const ageStr = state.age !== 'none' ? `, approximately ${state.age} years old` : '';
  const genderDesc = state.sex === 'female'
    ? `Female artist${ageStr}, ${state.height}cm tall. Feminine build.${eth}`
    : `Male artist${ageStr}, ${state.height}cm tall. Masculine build.${eth}`;

  const outfitDesc = buildWardrobePrompt(state);
  const stylePrompt = getStylePrompt(state.studioStyle);

  return `COLORSxSTUDIOS — ${plan.name} — ${state.artist.toUpperCase()}

${stylePrompt}
PLAN: ${plan.frame}. ${plan.id === 'plan-full' ? 'FEET MUST BE VISIBLE.' : ''}
CAMERA: ARRI Alexa 35. ${plan.focal}, ${plan.fstop}, height ${plan.h}, working distance ${plan.dist}, 16:9 ratio, 24fps. ARRI Log-C4 color science, subtle film grain, natural skin texture, pores and fine details visible.

BACKGROUND: ${getBackgroundBlock(state.color)}

${getMicBlock(mouthH, plan.mic_pos)}

ARTIST: ${genderDesc}.
POSE: LIVE PERFORMANCE STANCE. The artist is captured in a dynamic moment, either just about to start or in the middle of a high-energy live performance. One hand might be reaching for the mic or gesturing emphatically. Body is slightly angled, showing movement and artistic presence.
EXPRESSION: ${state.expressionPrompt}. Intense focus on the microphone capsule, looking intently at the mic. Face is clear and unobstructed by the microphone body.
${outfitDesc}

${getSignatureOverlay(state.artist)}

Photorealistic, 16:9, guidance 7.5
Negative: no tripod stand, ${SHARED_NEGATIVE}`;
}

// ── Multi-Shot Prompts ──────────────────────────────────────────────────

export function buildMultiShotPrompts(state: SessionState) {
  const s = state.color;
  const artist = state.artist;
  const mouthH = Math.round(state.height * 0.89);
  const eth = state.ethnicity !== 'none' ? ETHNICITY_DESC[state.ethnicity] + '.' : '';
  const ageStr = state.age !== 'none' ? `, approximately ${state.age} years old` : '';
  const gender = state.sex === 'female' ? `Female artist${ageStr}, ${state.height}cm` : `Male artist${ageStr}, ${state.height}cm`;

  const stylePrompt = getStylePrompt(state.studioStyle);
  const outfitDesc = buildWardrobePrompt(state);

  const SESSION_ID = `
SESSION IDENTITY — CONSISTENT ACROSS ALL 3 SHOTS:
${stylePrompt}
Artist: ${artist}. ${gender}. ${eth}
Studio: UNIFORM flat matte ${s.name} (${s.hex}). Seamless cyclorama wall (cyc wall). FLOOR AND WALLS ARE IDENTICAL COLOR.
Outfit: ${outfitDesc}
POSE: LIVE PERFORMANCE STANCE. Dynamic and energetic, captured mid-performance or just before the first note. Emphatic gestures, body angled for movement.
Expression: ${state.expressionPrompt}. Intense focus on the microphone capsule, looking intently at the mic.
Microphone: Vox-O-Rama Type 47 (Neumann U47 clone) silver, suspended by ONE SINGLE STRAIGHT vertical black cable from the ceiling, NO LOOPS, capsule (bottom mesh part) perfectly aligned with the UPPER LIP (${mouthH}cm). The capsule MUST NOT cover the nose. NEVER below the mouth. NO STAND.
Camera: ARRI Alexa 35. ARRI Log-C4 color science, subtle film grain, natural skin texture.
${getSignatureOverlay(artist)}

MULTI-SHOT COHERENCE RULE: These 3 images are from the SAME performance session. Same person, same outfit, same studio, same lighting. Only the focal length and framing change.`;

  return PLANS.filter(p => p.id !== 'plan-portrait').map(p => {
    return `[${p.name}]
${SESSION_ID}
FRAMING: ${p.frame}
CAMERA: ${p.focal}, ${p.fstop}, ${p.dist}, 16:9.
Photorealistic, 16:9. Negative: ${SHARED_NEGATIVE}`;
  });
}

// ── Video Prompt Builders ───────────────────────────────────────────────

/**
 * Shared video prompt core — extracts common fields used by all video generators.
 */
function getVideoCore(state: SessionState) {
  const plan = PLANS.find(p => p.id === state.selectedPlan) || PLANS[0];
  const { duration, intensity, angle, lighting } = state.videoParams;
  const outfitDesc = buildWardrobePrompt(state);
  return { plan, duration, intensity, angle, lighting, outfitDesc };
}

export function buildKlingPrompt(state: SessionState) {
  const { plan, duration, intensity, angle, lighting, outfitDesc } = getVideoCore(state);
  const motDesc = state.motion !== 'none' ? `Camera: ${state.motion === 'trucklr' ? 'slow lateral truck shot' : state.motion === 'zoomin' ? 'ultra-slow dolly push-in' : 'ultra-slow dolly pull-back'}.` : 'Camera: STATIC.';
  const genreAttitude = state.genre === 'drill' || state.genre === 'trap-latino' ? 'aggressive energetic performance, sharp hand gestures, raw street energy' :
                        state.genre === 'soul' || state.genre === 'rnb' ? 'smooth emotional performance, swaying slowly, deep soulful expression' :
                        'authentic live performance, focused artistic presence';

  return `[KLING 3.0 — IMAGE TO VIDEO]
CONTEXT: Live COLORSxSTUDIOS Berlin session. Monochromatic ${state.color.name} studio.
FRAMING: ${plan.name} (${plan.focal}). ${plan.frame}
CINEMATOGRAPHY: ${angle} shot, ${lighting} lighting style. Motion intensity: ${intensity}/10.
PERFORMANCE: ${state.artist} performing ${state.genre}. Attitude: ${genreAttitude}. Expression: ${state.expressionPrompt || 'natural'}.
OUTFIT: ${outfitDesc}
ACTION: Artist singing into the suspended Neumann U47 microphone. CRITICAL FOR LIP-SYNC: The microphone CAPSULE (bottom mesh part) MUST stay perfectly aligned with the UPPER LIP throughout the performance. The capsule MUST NOT obstruct the nose. Subtle body movement, realistic facial animation, high-fidelity lip movements synchronized with the audio.
${motDesc}
SIGNATURE: Small white rectangular frame in bottom-left corner with "AI COLOR" and "SESSION • ${state.artist.toUpperCase()}".
Settings: --ar 16:9 --style raw --motion slow --v 3.0 --duration ${duration} --fps 24 --quality high --camera-fix true`;
}

export function buildVidmusePrompt(state: SessionState) {
  const { plan, duration, intensity, angle, lighting, outfitDesc } = getVideoCore(state);
  return `[VIDMUSE — AUDIO DRIVEN VIDEO]
CONTEXT: Live COLORSxSTUDIOS session. Monochromatic ${state.color.name} studio, suspended mic.
FRAMING: ${plan.name} (${plan.focal}).
CINEMATOGRAPHY: ${angle}, ${lighting} lighting. Intensity: ${intensity}.
PROMPT: ${state.artist} performing ${state.genre}. Organic beat-synchronized movement. CRITICAL: Microphone capsule (bottom mesh part) MUST be exactly at upper lip level, NOT covering the nose. ${state.expressionPrompt}. High-fidelity facial animation and realistic lip-sync.
OUTFIT: ${outfitDesc}
SIGNATURE: White rectangular frame bottom-left: "AI COLOR" / "SESSION • ${state.artist.toUpperCase()}".
Mode: Audio-driven · Cinematic · 16:9 · Duration: ${duration}`;
}

export function buildHiggsfieldPrompt(state: SessionState) {
  const { plan, duration, intensity, angle, lighting, outfitDesc } = getVideoCore(state);
  return `[HIGGSFIELD — CINEMATIC VIDEO]
CONTEXT: Live COLORSxSTUDIOS session. ${state.color.name} monochromatic studio. Suspended mic.
FRAMING: ${plan.name} (${plan.focal}).
CINEMATOGRAPHY: ${angle}, ${lighting} lighting. Motion scale: ${intensity}.
PROMPT: ${state.artist} performing ${state.genre}. Cinematic grade, high-fidelity facial animation. CRITICAL: Microphone capsule (bottom mesh part) MUST be exactly at upper lip level, NOT covering the nose. ${state.expressionPrompt}. Perfect for AI animation and lip-sync.
OUTFIT: ${outfitDesc}
SIGNATURE: White rectangular frame bottom-left: "AI COLOR" / "SESSION • ${state.artist.toUpperCase()}".
Duration: ${duration}`;
}

export function buildVidPrompt(state: SessionState) {
  const { plan, duration, intensity, angle, lighting, outfitDesc } = getVideoCore(state);
  return `[SONOVID — VIDEO GENERATION]
CONTEXT: Live COLORSxSTUDIOS session. ${state.color.name} monochromatic studio. Suspended mic.
FRAMING: ${plan.name} (${plan.focal}).
CINEMATOGRAPHY: ${angle}, ${lighting} mood. Intensity: ${intensity}.
PROMPT: ${state.artist} performing ${state.genre}. Microphone capsule MUST be at upper lip level. ${state.expressionPrompt}.
OUTFIT: ${outfitDesc}
SIGNATURE: White rectangular frame bottom-left: "AI COLOR" / "SESSION • ${state.artist.toUpperCase()}".
Style: photorealistic · 16:9 · 24fps · ${duration}`;
}
