import { SessionState, CameraPlan, StudioColor } from '../types';
import { PLANS, ETHNICITY_DESC, WARDROBE_MATERIALS, WARDROBE_SILHOUETTES, WARDROBE_STYLES, ARTIST_STYLES } from '../constants';

function buildWardrobePrompt(state: SessionState) {
  const { mats, sils, styles } = state.wardrobe;
  
  const currentDefaultOutfit = state.sex === 'female' ? state.color.outfitFemale : state.color.outfitMale;

  let basePrompt = currentDefaultOutfit;

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

  if (mats.length === 0 && sils.length === 0 && styles.length === 0) {
    return `${genderConstraint}${sensualBase}${basePrompt}. Color palette matching ${state.color.name} studio.`;
  }

  const matPrompts = mats.map(m => WARDROBE_MATERIALS.find(wm => wm.key === m)?.prompt).filter(Boolean);
  const silPrompts = sils.map(s => WARDROBE_SILHOUETTES.find(ws => ws.key === s)?.prompt).filter(Boolean);
  const stylePrompts = styles.map(s => WARDROBE_STYLES.find(wst => wst.key === s)?.prompt).filter(Boolean);

  const selections = [
    stylePrompts.length > 0 ? stylePrompts.join(', ') : '',
    silPrompts.length > 0 ? silPrompts.join(', ') : '',
    matPrompts.length > 0 ? `Crafted from ${matPrompts.join(' and ')}` : ''
  ].filter(Boolean).join('. ');

  return `${genderConstraint}${sensualBase}${basePrompt}. ${selections}. Color palette matching ${state.color.name} studio.`;
}

export function buildStudioPrompt(state: SessionState) {
  const mouthH = Math.round(state.height * 0.875);
  return `COLORSxSTUDIOS Berlin. Empty studio, NO PERSON, NO HUMAN, NO TV, NO MONITOR, NO TEXT ON WALLS.

MONOCHROMATIC SPACE: ABSOLUTELY UNIFORM COLOR. All visible surfaces — back wall, side walls, and floor — MUST be the exact same flat matte ${state.color.name} (${state.color.hex}). The floor is painted with the EXACT SAME PAINT as the walls. Seamless cyclorama wall (cyc wall), no visible seam, no color difference between floor and wall. NO TAN FLOOR, NO ORANGE FLOOR, NO BROWN FLOOR.
WALLS: Smooth flat matte painted plaster, ${state.color.hex}.
FLOOR: Smooth matte painted surface, EXACTLY SAME COLOR AS WALLS (${state.color.hex}). No gloss. No texture.

MICROPHONE — Vox-O-Rama Type 47 (Neumann U47 clone). Silver cylindrical body. Suspended from the ceiling by ONE SINGLE STRAIGHT black cable descending perfectly vertically. NO LOOPS, NO SIDE CABLES, NO EXTRA WIRES, NO JUMPER CABLES. The cable is a single straight line from the top of the frame to the top of the microphone. Mesh capsule at exactly ${mouthH}cm from floor. NO MICROPHONE STAND. NO TRIPOD. Cable exits top frame edge vertically.

LIGHTING: COLORSxSTUDIOS signature lighting — single large overhead softbox. The background wall and floor (${state.color.hex}) must remain perfectly uniform in color. Soft high-key studio lighting, wrap-around lighting to minimize harsh shadows.

TEXT OVERLAY: In the bottom-left corner, a small clean white rectangular frame containing:
Line 1: AI COLOR (bold, uppercase)
Line 2: SESSION • ${state.artist.toUpperCase() || 'ARTISTE'}

CAMERA: ARRI Alexa 35. Photorealistic, 16:9, guidance 7.5, steps 30
Negative: no person, no human, no TV, no sign, no ceiling, no rigging, orange floor, tan floor, brown floor, looping cable, side cable, multiple cables, two cables, floor different color than wall`;
}

export function buildArtistePrompt(state: SessionState, plan: CameraPlan) {
  const mouthH = Math.round(state.height * 0.92); // Adjusted for nose/upper lip level
  const eth = state.ethnicity !== 'none' ? ' ' + ETHNICITY_DESC[state.ethnicity] + '.' : '';
  const ageStr = state.age !== 'none' ? `, approximately ${state.age} years old` : '';
  const faceRef = (state.facePrompt && state.faceActive) ? ` Face: ${state.facePrompt}` : '';
  const genderDesc = state.sex === 'female'
    ? `Female artist${ageStr}, ${state.height}cm tall. Feminine build.${eth}${faceRef}`
    : `Male artist${ageStr}, ${state.height}cm tall. Masculine build.${eth}${faceRef}`;

  const outfitDesc = buildWardrobePrompt(state);

  return `COLORSxSTUDIOS — ${plan.name} — ${state.artist.toUpperCase()}

PLAN: ${plan.frame}. ${plan.id === 'plan-full' ? 'FEET MUST BE VISIBLE.' : ''}
CAMERA: ARRI Alexa 35. ${plan.focal}, ${plan.fstop}, height ${plan.h}, working distance ${plan.dist}, 16:9 ratio, 24fps. ARRI Log-C4 color science, subtle film grain, natural skin texture, pores and fine details visible.

BACKGROUND: UNIFORM MONOCHROMATIC CUBE. Flat smooth matte ${state.color.name} (${state.color.hex}) painted wall, FLOOR IS PAINTED WITH THE EXACT SAME PAINT AND IS THE EXACT SAME COLOR AS THE WALL. Seamless cyclorama wall (cyc wall). NO TAN FLOOR. NO ORANGE FLOOR. Heavy cinematic vignette.

MICROPHONE: Vox-O-Rama Type 47 (Neumann U47 clone). Silver body. Suspended from the ceiling by ONE SINGLE STRAIGHT vertical black cable. NO LOOPS, NO SIDE CABLES, NO EXTRA WIRES. NO MICROPHONE STAND. NO TRIPOD. The microphone capsule is perfectly aligned with the artist's nose and upper lip, exactly ${mouthH}cm from floor. NEVER below the mouth. ${plan.mic_pos}

ARTIST: ${genderDesc}. Expression & posture: ${state.expressionPrompt}. Intense focus on the microphone capsule, looking intently at the mic.
${outfitDesc}

TEXT OVERLAY: In the bottom-left corner, a small clean white rectangular frame containing:
Line 1: AI COLOR (bold, uppercase)
Line 2: SESSION • ${state.artist.toUpperCase() || 'ARTISTE'}

Photorealistic, 16:9, guidance 7.5
Negative: no ceiling, no rigging, no tripod stand, no TV, orange floor, tan floor, brown floor, looping cable, side cable, multiple cables, floor different color than wall`;
}

export function buildMultiShotPrompts(state: SessionState) {
  const s = state.color;
  const artist = state.artist;
  const mouthH = Math.round(state.height * 0.92); // Adjusted for nose/upper lip level
  const eth = state.ethnicity !== 'none' ? ETHNICITY_DESC[state.ethnicity] + '.' : '';
  const ageStr = state.age !== 'none' ? `, approximately ${state.age} years old` : '';
  const gender = state.sex === 'female' ? `Female artist${ageStr}, ${state.height}cm` : `Male artist${ageStr}, ${state.height}cm`;
  const faceBlock = (state.facePrompt && state.faceActive) ? `\nFACE REFERENCE:\n${state.facePrompt}` : '';

  const outfitDesc = buildWardrobePrompt(state);

  const SESSION_ID = `
SESSION IDENTITY — CONSISTENT ACROSS ALL 3 SHOTS:
Artist: ${artist}. ${gender}. ${eth}
Studio: UNIFORM flat matte ${s.name} (${s.hex}). Seamless cyclorama wall (cyc wall). FLOOR AND WALLS ARE IDENTICAL COLOR.
Outfit: ${outfitDesc}
Expression: ${state.expressionPrompt}. Intense focus on the microphone capsule, looking intently at the mic.
Microphone: Vox-O-Rama Type 47 (Neumann U47 clone) silver, suspended by ONE SINGLE STRAIGHT vertical black cable from the ceiling, NO LOOPS, capsule perfectly aligned with nose and upper lip (${mouthH}cm). NEVER below the mouth. NO STAND.
Camera: ARRI Alexa 35. ARRI Log-C4 color science, subtle film grain, natural skin texture.
TEXT OVERLAY: Every shot must have a small clean white rectangular frame in the bottom-left corner containing:
Line 1: AI COLOR (bold, uppercase)
Line 2: SESSION • ${artist.toUpperCase() || 'ARTISTE'}
${faceBlock}
MULTI-SHOT COHERENCE RULE: These 3 images are from the SAME performance session. Same person, same outfit, same studio, same lighting. Only the focal length and framing change.`;

  return PLANS.filter(p => p.id !== 'plan-portrait').map(p => {
    return `[${p.name}]
${SESSION_ID}
FRAMING: ${p.frame}
CAMERA: ${p.focal}, ${p.fstop}, ${p.dist}, 16:9.
Photorealistic, 16:9. Negative: no ceiling, no rigging, no TV.`;
  });
}

export function buildKlingPrompt(state: SessionState) {
  const plan = PLANS.find(p => p.id === state.selectedPlan) || PLANS[0];
  const motDesc = state.motion !== 'none' ? `Camera: ${state.motion === 'trucklr' ? 'slow lateral truck shot' : state.motion === 'zoomin' ? 'ultra-slow dolly push-in' : 'ultra-slow dolly pull-back'}.` : 'Camera: STATIC.';
  const genreAttitude = state.genre === 'drill' || state.genre === 'trap-latino' ? 'aggressive energetic performance, sharp hand gestures, raw street energy' : 
                        state.genre === 'soul' || state.genre === 'rnb' ? 'smooth emotional performance, swaying slowly, deep soulful expression' :
                        'authentic live performance, focused artistic presence';
  
  const { duration, intensity, angle, lighting } = state.videoParams;
  const outfitDesc = buildWardrobePrompt(state);

  return `[KLING 3.0 — IMAGE TO VIDEO]
CONTEXT: Live COLORSxSTUDIOS Berlin session. Monochromatic ${state.color.name} studio.
FRAMING: ${plan.name} (${plan.focal}). ${plan.frame}
CINEMATOGRAPHY: ${angle} shot, ${lighting} lighting style. Motion intensity: ${intensity}/10.
PERFORMANCE: ${state.artist} performing ${state.genre}. Attitude: ${genreAttitude}. Expression: ${state.expressionPrompt || 'natural'}.
OUTFIT: ${outfitDesc}
ACTION: Artist singing into the suspended Neumann U47 microphone. Subtle body movement, realistic facial animation, lip-sync.
${motDesc}
SIGNATURE: Small white rectangular frame in bottom-left corner with "AI COLOR" and "SESSION • ${state.artist.toUpperCase()}".
Settings: --ar 16:9 --style raw --motion slow --v 3.0 --duration ${duration}`;
}

export function buildVidmusePrompt(state: SessionState) {
  const plan = PLANS.find(p => p.id === state.selectedPlan) || PLANS[0];
  const { duration, intensity, angle, lighting } = state.videoParams;
  const outfitDesc = buildWardrobePrompt(state);
  return `[VIDMUSE — AUDIO DRIVEN VIDEO]
CONTEXT: Live COLORSxSTUDIOS session. Monochromatic ${state.color.name} studio, suspended mic.
FRAMING: ${plan.name} (${plan.focal}).
CINEMATOGRAPHY: ${angle}, ${lighting} lighting. Intensity: ${intensity}.
PROMPT: ${state.artist} performing ${state.genre}. Organic beat-synchronized movement. ${state.expressionPrompt}.
OUTFIT: ${outfitDesc}
SIGNATURE: White rectangular frame bottom-left: "AI COLOR" / "SESSION • ${state.artist.toUpperCase()}".
Mode: Audio-driven · Cinematic · 16:9 · Duration: ${duration}`;
}

export function buildHiggsfieldPrompt(state: SessionState) {
  const plan = PLANS.find(p => p.id === state.selectedPlan) || PLANS[0];
  const { duration, intensity, angle, lighting } = state.videoParams;
  const outfitDesc = buildWardrobePrompt(state);
  return `[HIGGSFIELD — CINEMATIC VIDEO]
CONTEXT: Live COLORSxSTUDIOS session. ${state.color.name} monochromatic studio. Suspended mic.
FRAMING: ${plan.name} (${plan.focal}).
CINEMATOGRAPHY: ${angle}, ${lighting} lighting. Motion scale: ${intensity}.
PROMPT: ${state.artist} performing ${state.genre}. Cinematic grade, high-fidelity facial animation. ${state.expressionPrompt}.
OUTFIT: ${outfitDesc}
SIGNATURE: White rectangular frame bottom-left: "AI COLOR" / "SESSION • ${state.artist.toUpperCase()}".
Duration: ${duration}`;
}

export function buildVidPrompt(state: SessionState) {
  const plan = PLANS.find(p => p.id === state.selectedPlan) || PLANS[0];
  const { duration, intensity, angle, lighting } = state.videoParams;
  const outfitDesc = buildWardrobePrompt(state);
  return `[SONOVID — VIDEO GENERATION]
CONTEXT: Live COLORSxSTUDIOS session. ${state.color.name} monochromatic studio. Suspended mic.
FRAMING: ${plan.name} (${plan.focal}).
CINEMATOGRAPHY: ${angle}, ${lighting} mood. Intensity: ${intensity}.
PROMPT: ${state.artist} performing ${state.genre}. ${state.expressionPrompt}.
OUTFIT: ${outfitDesc}
SIGNATURE: White rectangular frame bottom-left: "AI COLOR" / "SESSION • ${state.artist.toUpperCase()}".
Style: photorealistic · 16:9 · 24fps · ${duration}`;
}
