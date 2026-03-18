import { StudioColor, CameraPlan, ArtistStyle } from './types';

export const COLORS: StudioColor[] = [
  { 
    hex: '#7B4020', n1: '#5a2c10', n2: '#9a5530', name: 'Cognac', 
    outfitMale: 'bright fuchsia or neon pink technical tracksuit in premium nylon — bold athletic statement, zip half-open, no undershirt, heavy silver cuban link chain, raw street energy against cognac',
    outfitFemale: 'bright fuchsia or neon pink technical bodysuit in premium nylon — bold athletic statement, zip half-open, heavy silver cuban link chain, raw street energy against cognac'
  },
  { 
    hex: '#3d1c08', n1: '#2a0e02', n2: '#5a2c12', name: 'Acajou', 
    outfitMale: 'gold lamé oversized structured blazer over bare chest, matching wide-leg trousers, statement gold sculptural jewelry, editorial luxury against deep mahogany',
    outfitFemale: 'gold lamé oversized structured blazer over bare chest, matching wide-leg trousers, statement gold sculptural jewelry, editorial luxury against deep mahogany'
  },
  { 
    hex: '#a0622a', n1: '#8a4e1a', n2: '#ba783a', name: 'Caramel', 
    outfitMale: 'all-black fitted premium leather outfit — asymmetrical biker jacket, slim-cut trousers, chunky silver industrial chain, sharp graphic contrast on caramel',
    outfitFemale: 'all-black fitted premium leather outfit — asymmetrical biker jacket, slim-cut trousers, chunky silver industrial chain, sharp graphic contrast on caramel'
  },
  { 
    hex: '#c4a882', n1: '#b49872', n2: '#d4b892', name: 'Sable', 
    outfitMale: 'deep oxblood red velvet tailored suit, no shirt, thin layered gold chains, multiple gold rings, old-money energy against warm sand',
    outfitFemale: 'deep oxblood red velvet tailored suit, no shirt, thin layered gold chains, multiple gold rings, old-money energy against warm sand'
  },
  { 
    hex: '#8B1A1A', n1: '#6a0e0e', n2: '#aa2a2a', name: 'Bordeaux', 
    outfitMale: 'cream oversized faux-fur coat with rich texture over bare skin, multiple gold chains, raw glamour against deep bordeaux',
    outfitFemale: 'cream oversized faux-fur coat with rich texture over bare skin, statement crystal earrings, raw glamour against deep bordeaux'
  },
  { 
    hex: '#c0392b', n1: '#a02020', n2: '#d84030', name: 'Rouge', 
    outfitMale: 'white oversized deconstructed tailored suit, single button open, bare chest visible, silver watch, power dressing against pure red',
    outfitFemale: 'white oversized deconstructed tailored suit, single button open, bare chest visible, silver watch, power dressing against pure red'
  },
  { 
    hex: '#d4527a', n1: '#c04060', n2: '#e86090', name: 'Rose', 
    outfitMale: 'black latex or patent leather fitted trousers and technical vest, edgy sculptural silhouette, silver hardware, dark tension against dusty rose',
    outfitFemale: 'black latex or patent leather fitted bodysuit, edgy sculptural silhouette, silver hardware, dark tension against dusty rose'
  },
  { 
    hex: '#f0b8c8', n1: '#e0a0b0', n2: '#ffd0e0', name: 'Poudre', 
    outfitMale: 'deep forest green or black velvet tailored suit with silk lapels, minimal gold jewelry, cinematic elegance against powder pink',
    outfitFemale: 'deep forest green or black velvet slip dress with lace trim, minimal pearl jewelry, cinematic elegance against powder pink'
  },
  { 
    hex: '#6B8C6E', n1: '#5a7a5d', n2: '#7a9e7d', name: 'Sauge', 
    outfitMale: 'all-black fitted technical outfit — leather trousers, structured utility jacket, silver hardware, sharp against sage',
    outfitFemale: 'all-black fitted technical outfit — leather trousers, structured utility jacket, silver hardware, sharp against sage'
  },
  { 
    hex: '#4a7c55', n1: '#3a6444', n2: '#5a8e65', name: 'Forêt', 
    outfitMale: 'ivory or cream oversized linen suit with raw edges, relaxed open collar, effortless organic luxury, wooden bead accessories against forest green',
    outfitFemale: 'ivory or cream oversized linen suit with raw edges, relaxed open collar, effortless organic luxury, wooden bead accessories against forest green'
  },
  { 
    hex: '#2d5a3d', n1: '#1a4028', n2: '#3e7050', name: 'Jungle', 
    outfitMale: 'bright white or pale yellow structured technical vest and wide-leg technical trousers, bold minimalism, futuristic sunglasses against jungle green',
    outfitFemale: 'bright white or pale yellow structured crop top and wide-leg technical trousers, bold minimalism, futuristic sunglasses against jungle green'
  },
  { 
    hex: '#b5c9b0', n1: '#a0b89a', n2: '#cadfca', name: 'Brume', 
    outfitMale: 'deep terracotta or rust orange structured wool coat, strong chromatic punch, minimal accessories on pale sage',
    outfitFemale: 'deep terracotta or rust orange structured wool coat, strong chromatic punch, minimal accessories on pale sage'
  },
  { 
    hex: '#4a6fa5', n1: '#3a5f95', n2: '#5a7fb5', name: 'Cobalt', 
    outfitMale: 'pure white structured blazer and wide trousers, gold sculptural accessories, luminous editorial against cobalt',
    outfitFemale: 'pure white structured blazer and wide trousers, gold sculptural accessories, luminous editorial against cobalt'
  },
  { 
    hex: '#2c3e6b', n1: '#1c2e5b', n2: '#3c4e7b', name: 'Nuit', 
    outfitMale: 'silver lamé or metallic grey tailored suit, no shirt, cinematic sci-fi elegance, futuristic jewelry against midnight blue',
    outfitFemale: 'silver lamé or metallic grey tailored suit, no shirt, cinematic sci-fi elegance, futuristic jewelry against midnight blue'
  },
  { 
    hex: '#1a2a4a', n1: '#0e1a34', n2: '#2a3a5e', name: 'Marine', 
    outfitMale: 'gold or electric yellow statement piece — oversized technical jacket or full suit, maximum contrast on deep navy',
    outfitFemale: 'gold or electric yellow statement piece — oversized technical jacket or full suit, maximum contrast on deep navy'
  },
  { 
    hex: '#6b9ec4', n1: '#5a8eb4', n2: '#7aaed4', name: 'Ciel', 
    outfitMale: 'warm terracotta or burnt sienna structured linen outfit, earthy editorial, natural fiber accessories against light blue',
    outfitFemale: 'warm terracotta or burnt sienna structured linen outfit, earthy editorial, natural fiber accessories against light blue'
  },
  { 
    hex: '#5c2d6e', n1: '#481c5a', n2: '#703882', name: 'Violet', 
    outfitMale: 'lime green or neon chartreuse sharp tailored suit, unexpected electric contrast, silver chains on deep violet',
    outfitFemale: 'lime green or neon chartreuse sharp tailored suit, unexpected electric contrast, silver chains on deep violet'
  },
  { 
    hex: '#8a4a9a', n1: '#6e3280', n2: '#a060b4', name: 'Mauve', 
    outfitMale: 'pure white oversized deconstructed blazer, sculptural editorial energy, minimal silver jewelry against mauve',
    outfitFemale: 'pure white oversized deconstructed blazer, sculptural editorial energy, minimal silver jewelry against mauve'
  },
  { 
    hex: '#c8a0d8', n1: '#b890c8', n2: '#dab4e8', name: 'Lavande', 
    outfitMale: 'all-black structured leather or PVC outfit, graphic dark tension, silver hardware against lavender',
    outfitFemale: 'all-black structured leather or PVC outfit, graphic dark tension, silver hardware against lavender'
  },
  { 
    hex: '#3c3c3c', n1: '#2c2c2c', n2: '#4c4c4c', name: 'Anthracite', 
    outfitMale: 'pure white oversized suit or all-white technical outfit, stark clean contrast, minimalist watch on anthracite',
    outfitFemale: 'pure white oversized suit or all-white technical outfit, stark clean contrast, minimalist watch on anthracite'
  },
  { 
    hex: '#1a1a1a', n1: '#0a0a0a', n2: '#2a2a2a', name: 'Noir', 
    outfitMale: 'electric yellow or neon green statement piece, maximum chromatic shock, futuristic accessories against pure black',
    outfitFemale: 'electric yellow or neon green statement piece, maximum chromatic shock, futuristic accessories against pure black'
  },
  { 
    hex: '#8a8a80', n1: '#7a7a70', n2: '#9a9a90', name: 'Béton', 
    outfitMale: 'deep black or crimson red structured tailored outfit, strong contrast, silver jewelry on grey concrete',
    outfitFemale: 'deep black or crimson red structured tailored outfit, strong contrast, silver jewelry on grey concrete'
  },
  { 
    hex: '#e8e4dc', n1: '#d8d4cc', n2: '#f4f0e8', name: 'Craie', 
    outfitMale: 'all-black sharp tailored suit, graphic bold contrast, silver chains on chalk white',
    outfitFemale: 'all-black sharp tailored suit, graphic bold contrast, silver chains on chalk white'
  },
];


export const PLANS: CameraPlan[] = [
  {
    id: 'plan-entier', name: 'PLAN ENTIER', focal: '50mm', fstop: 'f/2.8', dist: '4-5m', h: '160cm', ratio: '16:9',
    frame: 'PLAN ENTIER — FULL BODY MANDATORY: The frame shows the COMPLETE body from the very top of the head to the FEET AND SHOES on the floor. FEET MUST BE VISIBLE. FLOOR MUST BE VISIBLE at the bottom of the frame. The artist occupies roughly 70% of the frame height. Artist stands in the RIGHT THIRD of the frame — right-of-center, three-quarter profile facing LEFT toward the microphone. Large empty space on the LEFT side of the frame. The microphone hangs in the upper-left area. If the feet are cut off = WRONG FRAMING. If the artist is centered = WRONG POSITION.',
    mic_pos: 'Cable exits the very top of the frame at approximately 32-38% from the left edge, perfectly vertical. The microphone CAPSULE (bottom grille) is aligned with the CORNERS OF THE MOUTH of the artist — at the exact same height as the artist lips, 2-3cm from the mouth. The silver cylindrical body extends UPWARD from the capsule — the body of the mic is ABOVE mouth level, not below. The cable continues upward and disappears into the top frame edge. IMPORTANT: the capsule is NOT at chin level, NOT at throat level, NOT at shoulder level. It is at MOUTH level. The lower half of the mic body should be roughly at nose-to-forehead height of the artist.'
  },
  {
    id: 'plan-americain', name: 'PLAN AMÉRICAIN', focal: '85mm', fstop: 'f/2.0', dist: '2.5-3m', h: '160cm', ratio: '16:9',
    frame: 'PLAN AMÉRICAIN — STRICT FRAMING RULE: The frame cuts at MID-THIGH level. The bottom edge of the image must be at approximately mid-thigh of the artist — KNEES ARE NOT VISIBLE. FEET ARE NOT VISIBLE. ANKLES ARE NOT VISIBLE. SHINS ARE NOT VISIBLE. The lower legs do not exist in this frame. Head to mid-thigh only. This is non-negotiable — if the full body or knees appear, the shot is wrong. Artist slightly right of center, three-quarter profile facing left toward the microphone. 85mm at f/2.0 creates gentle background compression — the wall is slightly soft but color remains readable.',
    mic_pos: 'PROPORTIONALITY RULE: This is a tighter frame than plan entier — the microphone must appear LARGER and CLOSER accordingly. The cable exits the top frame edge at approximately 28-32% from the left. The TOP HALF of the microphone body is CUT by the top frame edge — only the BOTTOM HALF (lower 40-50%) of the mic body is visible, plus the capsule. The MESH CAPSULE is at EXACT UPPER LIP level, 2-3cm from the artist lips. At this focal length and distance, the mic feels intimate and large — not a small object in the distance. The capsule is the closest element to the artist in the frame.'
  },
  {
    id: 'plan-buste', name: 'PLAN BUSTE', focal: '85mm', fstop: 'f/1.8', dist: '1.5-2m', h: '155cm', ratio: '16:9',
    frame: 'Medium close-up from head to chest. Artist right side of frame, three-quarter profile facing left toward mic. Microphone left side of frame, partially cut at top. Shallow DOF — background in warm soft bokeh.',
    mic_pos: 'PROPORTIONALITY RULE: This is the tightest 16:9 frame — the mic appears VERY LARGE and DOMINANT on the left side. The cable enters top-left corner. Only the BOTTOM 30-35% of the mic body is visible — everything above is cut by the top frame edge. The capsule (mesh grille) takes up significant space on the left side. The CAPSULE is at EXACT UPPER LIP level, almost touching the lips (1-2cm gap). The mic feels massive relative to the face — it is the co-subject of the image alongside the artist.'
  },
  {
    id: 'plan-portrait', name: 'GROS PLAN PORTRAIT', focal: '85mm', fstop: 'f/1.4', dist: '0.8-1.2m', h: '140cm', ratio: '3:4',
    frame: 'GROS PLAN PORTRAIT — STRICT COMPOSITION RULES: Ratio 3:4 VERTICAL portrait orientation. Head and upper chest only. Camera at a very gentle upward angle (8-12°) — slightly below face level for a majestic intimate feeling. THE ARTIST IS IN THREE-QUARTER PROFILE facing LEFT — NOT facing the camera frontally. The artist occupies the RIGHT half of the frame. The microphone is on the LEFT side of the frame. There is negative space between the artist face and the left frame edge. Very shallow DOF (f/1.4) — background is warm dark bokeh. CRITICAL: The mic must NEVER be centered in front of the face. It must be to the LEFT, and the artist face turns toward it from the right side of the frame.',
    mic_pos: 'MICROPHONE MODEL: Neumann U47 / U87. Long slim silver body (~18-20cm, ~5cm diameter), large mesh capsule at the VERY BOTTOM. PROPORTIONALITY RULE for portrait: This is the tightest frame — 3:4 vertical, very close. The mic appears LARGE and CLOSE, partially cut by BOTH the top AND left frame edges. Only the bottom 25-35% of the mic body is visible — the rest exits the frame. The MESH CAPSULE is at EXACT UPPER LIP level, 1-2cm from the lips. The capsule takes up significant space in the left portion of the frame. The cable enters top-left and disappears immediately. The mic feels physically present and intimate — almost intrusive in the frame. Artist face right side, three-quarter profile facing the mic.'
  }
];

export const ARTIST_STYLES: ArtistStyle[] = [
  { name: "Jorja Smith", gender: "female", prompt: "vintage oversized brown leather jacket with worn texture, simple white ribbed tank top, relaxed high-waist denim, chunky gold hoop earrings, multiple thin gold necklaces, effortless 90s R&B cool" },
  { name: "Central Cee", gender: "male", prompt: "fitted technical grey tracksuit in premium nylon, designer logo chest rig, clean white leather sneakers, diamond stud earrings, understated UK drill aesthetic with luxury streetwear details" },
  { name: "Burna Boy", gender: "male", prompt: "vibrant silk African print shirt left open over bare chest, heavy layered gold cuban link chains, statement emerald rings, designer sunglasses hanging from collar, confident pan-African superstar energy" },
  { name: "Billie Eilish", gender: "female", prompt: "ultra-oversized neon lime technical windbreaker, matching baggy cargo shorts, heavy silver industrial chains, black bucket hat, neon green hair roots, deliberately anti-fashion maximalist statement" },
  { name: "FKJ", gender: "male", prompt: "loose ivory linen shirt with raw edges, unbuttoned to mid-chest, earthy natural cotton trousers, barefoot, minimal wooden bead bracelets, organic multi-instrumentalist artist energy" },
  { name: "Cleo Sol", gender: "female", prompt: "flowing earth-toned silk wrap dress, sculptural gold statement jewelry, natural hair texture, warm spiritual soul elegance with vintage 70s flair" },
  { name: "Dave", gender: "male", prompt: "sharp all-black tailored wool suit, crisp white button-down shirt with no tie, silver watch, considered minimalist UK elegance, clean architectural silhouette" },
  { name: "Little Simz", gender: "female", prompt: "bold geometric printed bomber jacket, layered silver chains, eclectic maximalist street artistry, structured military-style boots, high-fashion streetwear fusion" },
  { name: "Pa Salieu", gender: "male", prompt: "vibrant bold printed silk shirt, colorful technical streetwear, authentic West African-British fusion, statement headwrap or durag, heavy gold jewelry" },
  { name: "Lola Young", gender: "female", prompt: "vintage washed-out band tee tucked into high-waist distressed denim, oversized leather biker jacket, raw indie authenticity, multiple silver rings, smudged eyeliner look" },
  { name: "Rosalía", gender: "female", prompt: "sculptural white avant-garde ruffled dress, dramatic flamenco silhouette, long red acrylic nails, statement gold tooth gem, high-fashion modern-traditional fusion" },
  { name: "Bad Bunny", gender: "male", prompt: "bold color-blocked technical tracksuit, oversized futuristic sunglasses, maximalist streetwear, multiple colorful beaded necklaces, reggaeton superstar statement" },
  { name: "SZA", gender: "female", prompt: "ethereal flowy earth-tone silk slip dress, layered crystal necklaces, natural voluminous hair, effortless neo-soul goddess energy, bohemian luxury" },
  { name: "Frank Ocean", gender: "male", prompt: "simple black cashmere turtleneck, structured navy wool trousers, quiet luxury minimalism, silver ring, understated precision, clean-shaven" },
  { name: "Doja Cat", gender: "female", prompt: "futuristic liquid silver metallic bodysuit, avant-garde sculptural glam, bold neon makeup, metallic platform boots, high-concept pop fashion" },
  { name: "Tyler the Creator", gender: "male", prompt: "pastel pink polo shirt, vintage wide-leg pleated trousers, leather loafers with white socks, leopard print ushanka hat, 70s-inspired preppy eccentricity" },
  { name: "Slowthai", gender: "male", prompt: "raw England-flag printed technical vest, no-shirt underneath, aggressive patriotic punk energy, silver chains, buzzed hair" },
  { name: "Mahalia", gender: "female", prompt: "champagne silk slip dress, minimalist gold choker, soft feminine R&B sophistication, elegant evening-wear aesthetic" }
];

export const EXPRESSIONS = [
  { key: 'none', name: 'AUCUNE', sub: 'Par défaut', prompt: '' },
  { key: 'neutre', name: 'NEUTRE', sub: 'Expression libre', prompt: 'neutral authentic performance expression, relaxed natural posture, present and focused' },
  { key: 'intense', name: 'INTENSE', sub: 'Bouche ouverte', prompt: 'mouth open wide mid-song, eyes closed in deep emotion, chest forward, maximum vocal power release' },
  { key: 'ferme', name: 'FERMÉ', sub: 'Yeux fermés', prompt: 'eyes completely closed, head slightly tilted back, serene concentrated expression, intimate introspective' },
  { key: 'profil', name: 'PROFIL', sub: 'Profil pur', prompt: 'strict pure profile facing the microphone, chin parallel to floor, sharp jawline, stoic composed expression' },
  { key: 'regard', name: 'REGARD', sub: 'Face caméra', prompt: 'direct eye contact with camera, confrontational confident gaze, slight chin down, magnetic commanding presence' },
  { key: 'fixe', name: 'FIXE', sub: 'Regard intense', prompt: 'staring directly into the camera lens with unblinking intensity, motionless head, magnetic and hypnotic gaze, breaking the fourth wall' },
  { key: 'souriant', name: 'SOURIE', sub: 'Regard doux', prompt: 'gentle smile while looking at the camera, warm welcoming expression, eyes crinkling slightly, approachable and friendly performance' },
  { key: 'sensuel', name: 'SENSUEL', sub: 'Pose élégante', prompt: 'elegant and alluring performance posture, soft heavy-lidded eyes, subtle head tilt, sophisticated and magnetic sensual presence, high-fashion editorial grace' },
  { key: 'power', name: 'POWER', sub: 'Posture force', prompt: 'powerful chest-forward power stance, fist slightly clenched, feet planted wide, dominant grounded energy' },
];

export const ETHNICITY_DESC: Record<string, string> = {
  'none': '',
  'afro-west': 'West African heritage, deep ebony complexion, broad facial features, strong jawline',
  'afro-east': 'East African heritage, deep brown complexion, elongated facial features, high cheekbones',
  'afro-north': 'North African / Maghrebi heritage, olive to medium brown complexion, defined Mediterranean-Arabic features',
  'afro-south': 'Southern African / Bantu heritage, deep brown complexion, rounded features',
  'black-american': 'African-American heritage, medium to deep brown complexion, varied features',
  'latino': 'Latino / Hispanic heritage, warm olive to medium brown complexion, defined features',
  'caribbean': 'Caribbean / Afro-Caribbean heritage, warm brown complexion, relaxed mixed features',
  'native-american': 'Native American heritage, warm copper-brown complexion, strong bone structure',
  'caucasian': 'Caucasian / Northern European heritage, fair to light complexion, defined features',
  'mediterranean': 'Mediterranean heritage, warm olive complexion, dark hair, expressive features',
  'eastern-european': 'Eastern European / Slavic heritage, fair complexion, defined cheekbones',
  'east-asian': 'East Asian heritage, light complexion, epicanthic fold, refined delicate features',
  'south-asian': 'South Asian heritage, warm brown complexion, expressive dark eyes, strong features',
  'southeast-asian': 'Southeast Asian heritage, warm golden-brown complexion, soft rounded features',
  'middle-eastern': 'Middle Eastern / Arabic heritage, olive to tan complexion, strong defined features, dark eyes',
  'mixed-afro-euro': 'Mixed Afro-European heritage, warm medium brown complexion, mixed features',
  'mixed-afro-latino': 'Mixed Afro-Latino heritage, warm brown complexion, mixed African and Latin features',
  'mixed-asian-euro': 'Mixed Asian-European heritage, light to medium complexion, softly mixed features',
};

export const WARDROBE_MATERIALS = [
  { key: 'leather', name: 'CUIR', prompt: 'premium smooth leather, sharp reflections' },
  { key: 'silk', name: 'SOIE', prompt: 'flowing liquid silk, soft sheen' },
  { key: 'technical', name: 'TECH', prompt: 'technical nylon, ripstop texture, industrial feel' },
  { key: 'velvet', name: 'VELOURS', prompt: 'rich deep velvet, light-absorbing texture' },
  { key: 'denim', name: 'DENIM', prompt: 'heavy raw denim, rugged texture' },
  { key: 'wool', name: 'LAINE', prompt: 'structured heavy wool, matte finish' },
  { key: 'latex', name: 'LATEX', prompt: 'high-gloss latex, sharp specular highlights' },
  { key: 'linen', name: 'LIN', prompt: 'relaxed organic linen, natural wrinkles' },
];

export const WARDROBE_SILHOUETTES = [
  { key: 'oversized', name: 'OVERSIZED', prompt: 'ultra-oversized baggy silhouette, dropped shoulders', gender: 'unisex' },
  { key: 'fitted', name: 'FITTED', prompt: 'sharp fitted silhouette, body-contouring', gender: 'unisex' },
  { key: 'asymmetric', name: 'ASYM', prompt: 'asymmetrical deconstructed cut, irregular edges', gender: 'unisex' },
  { key: 'structured', name: 'STRUCT', prompt: 'highly structured architectural silhouette, sharp shoulders', gender: 'unisex' },
  { key: 'cropped', name: 'CROPPED', prompt: 'cropped short cut, high-waist aesthetic', gender: 'female' },
  { key: 'layered', name: 'LAYERED', prompt: 'complex layered silhouette, multiple textures', gender: 'unisex' },
  { key: 'lady', name: 'LADY', prompt: 'sophisticated feminine silhouette featuring a mix of dress, skirt, top, and tights, paired with high heels or ankle boots', gender: 'female' },
];

export const WARDROBE_STYLES = [
  { key: 'street', name: 'STREET', prompt: 'contemporary luxury streetwear, urban edge' },
  { key: 'tailored', name: 'TAILOR', prompt: 'sharp avant-garde tailoring, sophisticated' },
  { key: 'minimal', name: 'MINIMAL', prompt: 'clean minimalist aesthetic, no logos' },
  { key: 'maximalist', name: 'MAXI', prompt: 'maximalist bold statement, complex details' },
  { key: 'vintage', name: 'VINTAGE', prompt: 'vintage 90s archive aesthetic, worn-in feel' },
  { key: 'futuristic', name: 'FUTUR', prompt: 'futuristic sci-fi techwear, avant-garde' },
];

export const MUSIC_GENRES = [
  { id: 'drill', name: 'MELODIC DRILL', sub: 'UK / FR / NY Style' },
  { id: 'rnb', name: 'R&B CLASSIC', sub: '90s / 2000s Smooth' },
  { id: 'trap-soul', name: 'TRAP SOUL', sub: 'Modern PBR&B' },
  { id: 'lofi', name: 'LO-FI BEATS', sub: 'Study / Chill / Relax' },
  { id: 'epic-anime', name: 'EPIC ANIME', sub: 'Orchestral / J-Rock' },
  { id: 'amapiano', name: 'AMAPIANO', sub: 'South African Deep House' },
  { id: 'afrobeats', name: 'AFROBEATS', sub: 'Vibrant / Burna Style' },
  { id: 'afro-trap', name: 'AFRO TRAP', sub: 'MHD Style / Energetic' },
  { id: 'kpop', name: 'K-POP', sub: 'Polished / High Energy' },
  { id: 'cloud-rap', name: 'CLOUD RAP', sub: 'Dreamy / Atmospheric' },
  { id: 'jersey-club', name: 'JERSEY CLUB', sub: 'Fast / Bouncy / 5-beat' },
  { id: 'uk-garage', name: 'UK GARAGE', sub: '2-Step / Speed Garage' },
  { id: 'french-touch', name: 'FRENCH TOUCH', sub: 'Filtered House / Disco' },
  { id: 'boom-bap', name: 'BOOM BAP', sub: '90s East Coast Hip-Hop' },
  { id: 'g-funk', name: 'G-FUNK', sub: 'West Coast / Laid Back' },
  { id: 'rage', name: 'RAGE TRAP', sub: 'High Energy / Synth Heavy' },
  { id: 'emo-rap', name: 'EMO RAP', sub: 'Melancholic / Guitar Driven' },
  { id: 'pop-punk', name: 'POP PUNK', sub: 'Energetic / Melodic' },
  { id: 'bedroom-pop', name: 'BEDROOM POP', sub: 'Lo-fi / Intimate' },
  { id: 'city-pop', name: 'CITY POP', sub: '80s Japanese / Disco' },
  { id: 'bossa-nova', name: 'BOSSA NOVA', sub: 'Brazilian / Smooth' },
  { id: 'salsa-bachata', name: 'SALSA / BACHATA', sub: 'Latin / Tropical' },
  { id: 'dnb', name: 'DRUM & BASS', sub: 'Fast / Breakbeat' },
  { id: 'techno', name: 'TECHNO', sub: 'Dark / Minimal / Acid' },
  { id: 'jazz-rap', name: 'JAZZ RAP', sub: 'Lo-fi / Boom Bap' },
  { id: 'hyperpop', name: 'HYPERPOP', sub: 'Glitch / Futuristic' },
  { id: 'phonk', name: 'PHONK', sub: 'Drift / Memphis' },
  { id: 'synthwave', name: 'SYNTHWAVE', sub: '80s Retro-Futurism' },
  { id: 'alt-rock', name: 'ALT ROCK', sub: 'Indie / Grunge / Shoegaze' },
  { id: 'deep-house', name: 'DEEP HOUSE', sub: 'Atmospheric Electronic' },
  { id: 'reggaeton', name: 'REGGAETON', sub: 'Latin / Urban Flow' },
  { id: 'reggaeton-pop', name: 'REGGAETON POP', sub: 'Commercial Latin' },
  { id: 'neo-soul', name: 'NEO SOUL', sub: 'Classic / Smooth / Organic' },
  { id: 'grime', name: 'GRIME', sub: 'Raw UK Energy' },
  { id: 'baile-funk', name: 'BAILE FUNK', sub: 'Brazilian Favela Beat' },
  { id: 'dancehall', name: 'DANCEHALL', sub: 'Jamaican Riddim' },
  { id: 'ambient', name: 'AMBIENT POP', sub: 'Ethereal / Dreamy' },
  { id: 'custom', name: 'CUSTOM', sub: 'Saisie libre' }
];

export const MUSIC_MOODS = [
  { id: 'dark', name: 'SOMBRE', sub: 'Dark / Melancholic' },
  { id: 'energetic', name: 'ÉNERGIQUE', sub: 'High Energy / Hype' },
  { id: 'chill', name: 'CHILL', sub: 'Relaxed / Mellow' },
  { id: 'aggressive', name: 'AGRESSIF', sub: 'Hard Hitting / Gritty' },
  { id: 'romantic', name: 'ROMANTIQUE', sub: 'Soft / Intimate' },
  { id: 'mysterious', name: 'MYSTÉRIEUX', sub: 'Atmospheric / Ethereal' },
  { id: 'happy', name: 'JOYEUX', sub: 'Uplifting / Feel Good' },
  { id: 'nostalgic', name: 'NOSTALGIQUE', sub: 'Retro / Lo-fi' },
  { id: 'cinematic', name: 'CINÉMATIQUE', sub: 'Epic / Grandiose' },
  { id: 'heroic', name: 'HÉROÏQUE', sub: 'Epic / Orchestral' },
  { id: 'trippy', name: 'TRIPPY', sub: 'Psychedelic / Spacey' },
  { id: 'dreamy', name: 'RÊVEUR', sub: 'Cloudy / Atmospheric' },
  { id: 'bouncy', name: 'BOUNCY', sub: 'Club / Dance' },
  { id: 'cyberpunk', name: 'CYBERPUNK', sub: 'Neon / Industrial' },
  { id: 'bittersweet', name: 'AMER-SUCRÉ', sub: 'Emotional / Complex' },
  { id: 'calm', name: 'CALME', sub: 'Peaceful / Zen' },
  { id: 'tense', name: 'TENDU', sub: 'Suspenseful / Sharp' },
  { id: 'minimalist', name: 'MINIMALISTE', sub: 'Clean / Stripped Back' },
  { id: 'soulful', name: 'SOULFUL', sub: 'Deep / Emotional' },
  { id: 'industrial', name: 'INDUSTRIEL', sub: 'Cold / Mechanical' },
  { id: 'vibrant', name: 'VIBRANT', sub: 'Colorful / Tropical' },
  { id: 'custom', name: 'CUSTOM', sub: 'Saisie libre' }
];

export const MUSIC_LANGUAGES = [
  { id: 'fr', name: 'FRANÇAIS', sub: 'French' },
  { id: 'en', name: 'ANGLAIS', sub: 'English' },
  { id: 'es', name: 'ESPAGNOL', sub: 'Spanish' },
  { id: 'pt', name: 'PORTUGAIS', sub: 'Portuguese' },
  { id: 'it', name: 'ITALIEN', sub: 'Italian' },
  { id: 'de', name: 'ALLEMAND', sub: 'German' },
  { id: 'ar', name: 'ARABE', sub: 'Arabic' },
  { id: 'ja', name: 'JAPONAIS', sub: 'Japanese' },
  { id: 'ko', name: 'CORÉEN', sub: 'Korean' },
  { id: 'zh', name: 'CHINOIS', sub: 'Chinese' },
  { id: 'ru', name: 'RUSSE', sub: 'Russian' },
  { id: 'custom', name: 'CUSTOM', sub: 'Saisie libre' }
];

export const MUSIC_ARTISTS = [
  { id: 'drake', name: 'DRAKE', sub: 'Melodic Rap / R&B' },
  { id: 'sza', name: 'SZA', sub: 'Modern R&B / Soul' },
  { id: 'sawano', name: 'HIROYUKI SAWANO', sub: 'Epic Anime / Orchestral' },
  { id: 'nujabes', name: 'NUJABES', sub: 'Lo-fi / Jazz Hop' },
  { id: 'newjeans', name: 'NEWJEANS', sub: 'K-Pop / Y2K' },
  { id: 'mhd', name: 'MHD', sub: 'Afro Trap' },
  { id: 'pinkpantheress', name: 'PINKPANTHERESS', sub: 'UK Garage / Alt-Pop' },
  { id: 'carti', name: 'PLAYBOI CARTI', sub: 'Rage / Trap' },
  { id: 'juice-wrld', name: 'JUICE WRLD', sub: 'Emo Rap / Melodic' },
  { id: 'yamashita', name: 'TATSURO YAMASHITA', sub: 'City Pop / Disco' },
  { id: 'gilberto', name: 'ASTRUD GILBERTO', sub: 'Bossa Nova' },
  { id: 'dr-dre', name: 'DR. DRE', sub: 'G-Funk / West Coast' },
  { id: 'fred-again', name: 'FRED AGAIN..', sub: 'Modern Electronic' },
  { id: 'peggy-gou', name: 'PEGGY GOU', sub: 'House / Disco' },
  { id: 'kanye', name: 'KANYE WEST', sub: 'Experimental / Soul' },
  { id: 'travis', name: 'TRAVIS SCOTT', sub: 'Psychedelic Trap' },
  { id: 'kendrick', name: 'KENDRICK LAMAR', sub: 'Conscious / Jazz Rap' },
  { id: 'the-weeknd', name: 'THE WEEKND', sub: 'Synth-Pop / R&B' },
  { id: 'central-cee', name: 'CENTRAL CEE', sub: 'UK Drill' },
  { id: 'gazo', name: 'GAZO', sub: 'French Drill' },
  { id: 'damso', name: 'DAMSO', sub: 'Melancholic / Deep' },
  { id: 'burna-boy', name: 'BURNA BOY', sub: 'Afrobeats' },
  { id: 'bad-bunny', name: 'BAD BUNNY', sub: 'Reggaeton / Latin' },
  { id: 'daft-punk', name: 'DAFT PUNK', sub: 'French House' },
  { id: 'tame-impala', name: 'TAME IMPALA', sub: 'Psychedelic Pop' },
  { id: 'billie-eilish', name: 'BILLIE EILISH', sub: 'Alt-Pop / Dark' },
  { id: 'rosalia', name: 'ROSALÍA', sub: 'Flamenco / Experimental' },
  { id: 'custom', name: 'CUSTOM', sub: 'Saisie libre' }
];

export const MUSIC_ERAS = [
  { id: '70s', name: '70s', sub: 'Disco / Funk / Soul' },
  { id: '80s', name: '80s', sub: 'Synth-Pop / New Wave' },
  { id: '90s', name: '90s', sub: 'Golden Era / Grunge' },
  { id: '2000s', name: '2000s', sub: 'Y2K / Bling Era' },
  { id: '2010s', name: '2010s', sub: 'Trap / EDM Wave' },
  { id: 'modern', name: 'MODERNE', sub: 'Current Trends' },
  { id: 'futuristic', name: 'FUTURISTE', sub: 'Next-Gen Sound' },
  { id: 'vintage', name: 'VINTAGE', sub: 'Analog / Lo-fi' },
  { id: 'custom', name: 'CUSTOM', sub: 'Saisie libre' }
];

export const MUSIC_COMMERCIALITY = [
  { id: 'underground', name: 'UNDERGROUND', sub: 'Raw / Authentic' },
  { id: 'accessible', name: 'ACCESSIBLE', sub: 'Indie / Niche' },
  { id: 'mainstream', name: 'MAINSTREAM', sub: 'Popular Sound' },
  { id: 'radio-ready', name: 'RADIO READY', sub: 'Chart Topper' }
];

export const MUSIC_VOICE_TYPES = [
  { id: 'female', name: 'FÉMININE', sub: 'Female Vocal' },
  { id: 'male', name: 'MASCULINE', sub: 'Male Vocal' },
  { id: 'duo', name: 'DUO', sub: 'Male & Female' },
  { id: 'choir', name: 'CHŒUR', sub: 'Gospel / Ensemble' },
  { id: 'kids', name: 'ENFANTS', sub: 'Youthful Choir' },
  { id: 'custom', name: 'CUSTOM', sub: 'Saisie libre' }
];

export const MUSIC_TIMBRES = [
  { id: 'raspy', name: 'RAUQUE', sub: 'Gritty / Husky' },
  { id: 'airy', name: 'AÉRIEN', sub: 'Breathy / Light' },
  { id: 'deep', name: 'GRAVE', sub: 'Deep / Bass' },
  { id: 'velvety', name: 'VELOUTÉ', sub: 'Smooth / Silky' },
  { id: 'youthful', name: 'JUVÉNILE', sub: 'Young / Fresh' },
  { id: 'broken', name: 'CASSÉ', sub: 'Emotional / Fragile' },
  { id: 'smoky', name: 'SMOKY', sub: 'Jazz / Sultry' },
  { id: 'vintage', name: 'VINTAGE', sub: 'Lo-fi / Analog' },
  { id: 'metallic', name: 'MÉTALLIQUE', sub: 'Sharp / Industrial' },
  { id: 'custom', name: 'CUSTOM', sub: 'Saisie libre' }
];

export const MUSIC_SINGING_STYLES = [
  { id: 'whispered', name: 'MURMURÉE', sub: 'Whispered / Intimate' },
  { id: 'powerful', name: 'PUISSANTE', sub: 'Belting / Strong' },
  { id: 'intimate', name: 'INTIME', sub: 'Close / Soft' },
  { id: 'spoken', name: 'PARLÉ-CHANTÉ', sub: 'Spoken-Word / Flow' },
  { id: 'melismatic', name: 'MÉLISMATIQUE', sub: 'Riffs & Runs' },
  { id: 'autotuned', name: 'AUTO-TUNÉ', sub: 'Robotic / Modern' },
  { id: 'harmonic', name: 'HARMONIQUE', sub: 'Layered / Choral' },
  { id: 'operatic', name: 'OPÉRATIQUE', sub: 'Dramatic / High Range' },
  { id: 'aggressive', name: 'AGRESSIF', sub: 'Shouting / Raw' },
  { id: 'screamed', name: 'HURLÉ', sub: 'Metal / Punk' },
  { id: 'custom', name: 'CUSTOM', sub: 'Saisie libre' }
];

export const MUSIC_VOCAL_PRESENCE = [
  { id: 'frontal', name: 'FRONTALE', sub: 'In Your Face' },
  { id: 'distant', name: 'DISTANTE', sub: 'Reverberated / Far' },
  { id: 'live', name: 'LIVE', sub: 'Stage / Concert Hall' },
  { id: 'close-mic', name: 'STUDIO CLOSE-MIC', sub: 'Dry / Detailed' }
];

export const MUSIC_EMOTION_LEVELS = [
  { id: 'restrained', name: 'RETENU', sub: 'Subtle / Controlled' },
  { id: 'medium', name: 'MOYEN', sub: 'Balanced' },
  { id: 'intense', name: 'INTENSE', sub: 'Deeply Emotional' },
  { id: 'theatrical', name: 'THÉÂTRAL', sub: 'Dramatic / Operatic' }
];
