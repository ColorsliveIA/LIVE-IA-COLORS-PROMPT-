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
    mic_pos: 'The microphone CAPSULE (bottom mesh grille) is positioned EXACTLY at the height of the artist UPPER LIP — NOT at nose level, NOT at eye level. The capsule is 2-3cm away from the mouth. The silver cylindrical body of the microphone extends UPWARD from the mouth level. A thin black cable goes perfectly straight up to the top edge of the frame. The microphone must feel physically aligned with the mouth for a realistic singing performance.'
  },
  {
    id: 'plan-americain', name: 'PLAN AMÉRICAIN', focal: '85mm', fstop: 'f/2.0', dist: '2.5-3m', h: '160cm', ratio: '16:9',
    frame: 'PLAN AMÉRICAIN — STRICT FRAMING RULE: The frame cuts at MID-THIGH level. The bottom edge of the image must be at approximately mid-thigh of the artist — KNEES ARE NOT VISIBLE. FEET ARE NOT VISIBLE. ANKLES ARE NOT VISIBLE. SHINS ARE NOT VISIBLE. The lower legs do not exist in this frame. Head to mid-thigh only. This is non-negotiable — if the full body or knees appear, the shot is wrong. Artist slightly right of center, three-quarter profile facing left toward the microphone. 85mm at f/2.0 creates gentle background compression — the wall is slightly soft but color remains readable.',
    mic_pos: 'The MESH CAPSULE of the microphone is positioned EXACTLY at UPPER LIP level, 2cm from the lips. The microphone body is large and dominant on the left. The top half of the mic body is cut by the frame edge. The capsule is the closest element to the artist face. The alignment must be perfect: capsule center = upper lip height. This is critical for lip-sync animation.'
  },
  {
    id: 'plan-buste', name: 'PLAN BUSTE', focal: '85mm', fstop: 'f/1.8', dist: '1.5-2m', h: '155cm', ratio: '16:9',
    frame: 'Medium close-up from head to chest. Artist right side of frame, three-quarter profile facing left toward mic. Microphone left side of frame, partially cut at top. Shallow DOF — background in warm soft bokeh.',
    mic_pos: 'The microphone is massive and intimate. The mesh CAPSULE is positioned EXACTLY at UPPER LIP level, almost touching the lips (1cm gap). The microphone body extends vertically upward and is partially cut by the top frame edge. The capsule must be perfectly level with the mouth to allow for realistic vocal performance animation.'
  },
  {
    id: 'plan-portrait', name: 'GROS PLAN PORTRAIT', focal: '85mm', fstop: 'f/1.4', dist: '0.8-1.2m', h: '140cm', ratio: '3:4',
    frame: 'GROS PLAN PORTRAIT — Ratio 3:4 VERTICAL. Head and upper chest only. Camera at a very gentle upward angle (8-12°). THE ARTIST IS IN THREE-QUARTER PROFILE facing LEFT. The artist occupies the RIGHT half of the frame. The microphone is on the LEFT side of the frame. Very shallow DOF (f/1.4).',
    mic_pos: 'Neumann U47 style microphone. The large mesh CAPSULE is positioned EXACTLY at UPPER LIP level, 1cm from the mouth. The mic appears very large and close, partially cut by both top and left frame edges. The vertical alignment is absolute: the center of the capsule grille is at the same horizontal line as the artist upper lip. This precise positioning is mandatory for high-quality video generation.'
  }
];

export const RAPPER_STYLES: ArtistStyle[] = [
  { name: "Travis Scott", gender: "male", prompt: "vintage graphic tee, baggy leather trousers, multiple diamond chains, cactus jack aesthetic" },
  { name: "Kendrick Lamar", gender: "male", prompt: "simple high-quality white tee, relaxed denim, minimalist gold jewelry, conscious rap authenticity" },
  { name: "Drake", gender: "male", prompt: "oversized designer knitwear, leather trousers, massive diamond chain, polished OVO aesthetic" },
  { name: "Playboi Carti", gender: "male", prompt: "all-black Rick Owens outfit, leather vest, silver hardware, vamp-inspired rage aesthetic" },
  { name: "Little Simz", gender: "female", prompt: "oversized structured blazer, baggy trousers, layered silver chains, sophisticated UK rap elegance" },
  { name: "Megan Thee Stallion", gender: "female", prompt: "fitted technical bodysuit, high-fashion athletic glamour, bold H-Town hottie energy" },
  { name: "Ice Spice", gender: "female", prompt: "cropped technical top, low-waist baggy denim, signature ginger afro, Bronx drill aesthetic" },
  { name: "Gazo", gender: "male", prompt: "all-black technical tracksuit, heavy silver chains, dark drill energy, French rap aesthetic" },
  { name: "Kekra", gender: "male", prompt: "KINO aesthetic — full face mask or balaclava, oversized technical parka, high-fashion tactical gear, anonymous French rap mystery" },
  { name: "Hamza", gender: "male", prompt: "luxury designer knitwear, diamond chains, polished melodic rap aesthetic, Sauce God energy" },
  { name: "PLK", gender: "male", prompt: "technical tracksuit, clean sneakers, authentic Polish-French street aesthetic, high-energy rap" },
  { name: "Ziak", gender: "male", prompt: "signature black bandana mask, all-black technical drill outfit, dark aggressive French drill energy" },
  { name: "Dave", gender: "male", prompt: "sharp all-black tailored suit, no tie, silver watch, minimalist UK rap elegance" },
  { name: "Tyler the Creator", gender: "male", prompt: "pastel polo shirt, wide-leg pleated trousers, loafers with socks, eccentric preppy style" },
  { name: "A$AP Rocky", gender: "male", prompt: "avant-garde designer tailoring, eclectic jewelry, high-fashion streetwear icon" },
  { name: "Doja Cat", gender: "female", prompt: "futuristic metallic bodysuit, avant-garde sculptural glam, bold neon makeup" },
  { name: "Nicki Minaj", gender: "female", prompt: "vibrant pink latex outfit, dramatic jewelry, bold rap queen maximalism" },
  { name: "Cardi B", gender: "female", prompt: "high-fashion designer gown, massive diamond jewelry, unapologetic Bronx glamour" },
  { name: "Stormzy", gender: "male", prompt: "all-black technical tracksuit, clean white sneakers, polished UK rap authority" },
  { name: "Skepta", gender: "male", prompt: "all-black technical tracksuit, black cap, silver chains, legendary grime aesthetic" },
  { name: "Ninho", gender: "male", prompt: "designer technical jacket, relaxed denim, diamond watch, French rap superstar energy" },
  { name: "Booba", gender: "male", prompt: "oversized technical streetwear, massive diamond chains, raw French rap legend energy, dark aesthetic" },
  { name: "SDM", gender: "male", prompt: "all-black technical tracksuit, heavy silver chains, aggressive French drill energy, authentic street aesthetic" },
  { name: "SCH", gender: "male", prompt: "long designer overcoat, tailored trousers, slicked-back hair, cinematic French rap elegance" },
  { name: "Damso", gender: "male", prompt: "oversized dark hoodie, relaxed denim, moody melancholic French rap aesthetic" },
  { name: "Burna Boy", gender: "male", prompt: "vibrant silk print shirt, layered gold chains, African superstar energy" },
  { name: "Wizkid", gender: "male", prompt: "luxury silk patterned shirt, tailored trousers, diamond watch, polished Starboy style" },
  { name: "Rema", gender: "male", prompt: "oversized technical jacket, baggy denim, futuristic sunglasses, Afro-rave aesthetic" },
  { name: "Tems", gender: "female", prompt: "flowing earth-tone dress, natural hair styled up, gold cuffs, ethereal African goddess energy" },
  { name: "Asake", gender: "male", prompt: "oversized white agbada modernized, face markings, heavy gold chains, Lagos street royalty aesthetic" },
  { name: "Joé Dwèt Filé", gender: "male", prompt: "relaxed linen shirt, gold chain subtle, warm Caribbean island aesthetic, romantic zouk energy" },
  { name: "GloRilla", gender: "female", prompt: "baggy denim, oversized graphic tee, heavy gold chains, raw Memphis rap energy" },
  { name: "Latto", gender: "female", prompt: "fitted designer bodysuit, dramatic jewelry, confident Southern rap glamour" },
  { name: "Coi Leray", gender: "female", prompt: "skinny technical outfit, oversized puffer coat, playful modern rap aesthetic" },
  { name: "Lil Baby", gender: "male", prompt: "designer technical tracksuit, massive diamond chains, authentic Atlanta rap style" },
  { name: "Gunna", gender: "male", prompt: "avant-garde designer outfit, eclectic jewelry, high-fashion drip aesthetic" },
  { name: "Future", gender: "male", prompt: "designer sunglasses, oversized fur coat, diamond chains, legendary trap aesthetic" },
  { name: "Young Thug", gender: "male", prompt: "experimental gender-fluid tailoring, colorful accessories, avant-garde rap style" },
  { name: "Lil Uzi Vert", gender: "male", prompt: "punk-inspired technical outfit, colorful hair, diamond forehead piercing, rock-rap energy" },
  { name: "21 Savage", gender: "male", prompt: "simple black tee, relaxed denim, diamond chains, authentic street rap aesthetic" },
  { name: "J. Cole", gender: "male", prompt: "simple hoodie, sweatpants, natural hair, authentic conscious rap energy" },
  { name: "Jack Harlow", gender: "male", prompt: "sharp tailored suit, clean sneakers, polished modern rap aesthetic" },
  { name: "Headie One", gender: "male", prompt: "technical tracksuit, oversized puffer, authentic UK drill energy" },
  { name: "Tion Wayne", gender: "male", prompt: "designer technical jacket, diamond chains, high-energy UK rap style" },
  { name: "Russ Millions", gender: "male", prompt: "vibrant technical tracksuit, diamond chains, energetic UK drill aesthetic" },
  { name: "Digga D", gender: "male", prompt: "technical tracksuit, black cap, authentic West London drill energy" },
  { name: "ArrDee", gender: "male", prompt: "colorful technical jacket, relaxed denim, youthful energetic UK rap style" },
  { name: "Tiakola", gender: "male", prompt: "designer technical tracksuit, clean sneakers, melodic French rap energy" },
  { name: "Zola", gender: "male", prompt: "technical streetwear, heavy silver chains, raw French rap energy" },
  { name: "Koba LaD", gender: "male", prompt: "designer technical jacket, relaxed denim, authentic French rap style" },
  { name: "Niska", gender: "male", prompt: "vibrant technical tracksuit, diamond chains, high-energy French rap energy" },
  { name: "Laylow", gender: "male", prompt: "futuristic technical outfit, digital aesthetic, high-concept French rap style" },
  { name: "Jul", gender: "male", prompt: "technical tracksuit, clean sneakers, authentic Marseille street aesthetic, high-energy rap" },
  { name: "PNL", gender: "male", prompt: "designer technical streetwear, long hair, cinematic cloud rap aesthetic, QLF energy" },
  { name: "Nekfeu", gender: "male", prompt: "simple high-quality hoodie, relaxed denim, authentic Parisian rap energy, conscious aesthetic" },
  { name: "Orelsan", gender: "male", prompt: "oversized graphic tee, baggy cargo pants, authentic Caen street style, relatable rap energy" },
  { name: "Vald", gender: "male", prompt: "eccentric designer outfit, colorful accessories, avant-garde ironic rap style" },
  { name: "Kaaris", gender: "male", prompt: "fitted technical vest, bare chest, heavy silver chains, aggressive Sevran drill energy" },
  { name: "Maes", gender: "male", prompt: "luxury designer tracksuit, diamond watch, polished melodic rap aesthetic" },
  { name: "Lacrim", gender: "male", prompt: "oversized leather jacket, multiple gold chains, raw street legend energy" },
  { name: "Kalash Criminel", gender: "male", prompt: "signature white balaclava, all-black technical outfit, raw aggressive energy" },
  { name: "Heuss L'enfoiré", gender: "male", prompt: "vibrant silk print shirt, designer sunglasses, energetic festive rap style" },
  { name: "Soolking", gender: "male", prompt: "luxury designer knitwear, diamond chains, polished melodic raï-rap fusion" },
  { name: "Salif", gender: "male", prompt: "vintage oversized tracksuit, heavy silver chain, raw authentic Boulogne street rap energy" },
  { name: "Dicidens", gender: "male", prompt: "90s street rap aesthetic, baggy clothes, raw authentic Val-de-Marne energy" },
  { name: "Shay", gender: "female", prompt: "fitted technical bodysuit, high-fashion athletic glamour, bold rap queen energy" },
  { name: "Doria", gender: "female", prompt: "technical tracksuit, clean sneakers, authentic street rap aesthetic" },
  { name: "Paloalto", gender: "male", prompt: "oversized technical streetwear, clean Korean rap aesthetic" },
  { name: "Jay Park", gender: "male", prompt: "fitted technical vest, bare chest, multiple tattoos, energetic K-rap energy" },
  { name: "CL", gender: "female", prompt: "avant-garde designer tailoring, bold jewelry, legendary K-rap queen aesthetic" },
  { name: "Jessi", gender: "female", prompt: "fitted technical bodysuit, bold makeup, confident K-rap glamour" },
  { name: "Alpha Wann", gender: "male", prompt: "oversized black hoodie, loose-fit denim, vintage sneakers, Don Dada aesthetic, no jewelry, raw technical rap authenticity" }
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
  { name: "Frank Ocean", gender: "male", prompt: "simple black cashmere turtleneck, structured navy wool trousers, quiet luxury minimalism, silver ring, understated precision, clean-shaven" },
  { name: "Doja Cat", gender: "female", prompt: "futuristic liquid silver metallic bodysuit, avant-garde sculptural glam, bold neon makeup, metallic platform boots, high-concept pop fashion" },
  { name: "Tyler the Creator", gender: "male", prompt: "pastel pink polo shirt, vintage wide-leg pleated trousers, leather loafers with white socks, leopard print ushanka hat, 70s-inspired preppy eccentricity" },
  { name: "Slowthai", gender: "male", prompt: "raw England-flag printed technical vest, no-shirt underneath, aggressive patriotic punk energy, silver chains, buzzed hair" },
  { name: "Mahalia", gender: "female", prompt: "champagne silk slip dress, minimalist gold choker, soft feminine R&B sophistication, elegant evening-wear aesthetic" },
  { name: "Angèle", gender: "female", prompt: "vibrant colorful outfit, playful accessories, modern pop-indie elegance" },
  { name: "Lomepal", gender: "male", prompt: "vintage graphic tee, relaxed denim, authentic skate-rap aesthetic" },
  { name: "Stromae", gender: "male", prompt: "sculptural architectural suit, bold geometric patterns, avant-garde artistic presence" },
  { name: "Pomme", gender: "female", prompt: "vintage floral dress, delicate jewelry, nostalgic indie-folk elegance" },
  { name: "Woodkid", gender: "male", prompt: "sharp all-black tailored suit, dramatic lighting, epic cinematic presence" },
  { name: "Bonnie Banane", gender: "female", prompt: "eclectic maximalist outfit, colorful makeup, avant-garde R&B-pop style" },
  { name: "Ichon", gender: "male", prompt: "vibrant silk shirt, tailored trousers, expressive artistic energy" },
  { name: "Theodora", gender: "female", prompt: "oversized vintage black leather blazer, sheer black mesh top, high-waist leather trousers, minimal silver choker, slicked-back hair, moody nocturnal Parisian club aesthetic, dark pop energy" },
  { name: "Alpha Wann", gender: "male", prompt: "oversized black hoodie, loose-fit denim, vintage sneakers, Don Dada aesthetic, no jewelry, raw technical rap authenticity" }
];

export const POP_ARTIST_STYLES: ArtistStyle[] = [
  { name: "Taylor Swift", gender: "female", prompt: "sparkling sequined bodysuit, high-waisted silhouette, matching boots, glamorous pop-star stage presence" },
  { name: "Harry Styles", gender: "male", prompt: "vintage-inspired wide-leg trousers, sheer lace blouse, pearl necklace, eclectic 70s rock-pop aesthetic" },
  { name: "Dua Lipa", gender: "female", prompt: "fitted metallic mini dress, sheer black tights, platform heels, high-fashion disco-pop energy" },
  { name: "The Weeknd", gender: "male", prompt: "sharp red tailored blazer, black leather gloves, dark sunglasses, cinematic 'After Hours' aesthetic" },
  { name: "Ariana Grande", gender: "female", prompt: "oversized graphic sweatshirt worn as a dress, thigh-high suede boots, signature high ponytail, playful pop elegance" },
  { name: "Justin Bieber", gender: "male", prompt: "baggy designer hoodie, relaxed fit denim, colorful beanie, effortless laid-back pop streetwear" },
  { name: "Rihanna", gender: "female", prompt: "avant-garde sculptural coat, sheer lace lingerie top, baggy cargo pants, high-fashion icon energy" },
  { name: "Lady Gaga", gender: "female", prompt: "dramatic architectural structured dress, metallic platform boots, bold conceptual makeup, avant-pop statement" },
  { name: "Miley Cyrus", gender: "female", prompt: "vintage rock-and-roll leather vest, distressed denim shorts, layered silver chains, bold rebel pop aesthetic" },
  { name: "Adele", gender: "female", prompt: "elegant floor-length velvet gown, classic winged eyeliner, sophisticated timeless pop diva grace" },
  { name: "Ed Sheeran", gender: "male", prompt: "simple checkered flannel shirt, relaxed dark denim, acoustic guitar-focused understated pop look" },
  { name: "Katy Perry", gender: "female", prompt: "vibrant colorful latex outfit, whimsical sculptural accessories, playful high-concept pop fashion" },
  { name: "Bruno Mars", gender: "male", prompt: "silk patterned shirt open at chest, tailored trousers, gold watch, vintage 70s soul-pop flair" },
  { name: "Selena Gomez", gender: "female", prompt: "chic minimalist slip dress, oversized blazer, understated modern pop elegance" },
  { name: "Olivia Rodrigo", gender: "female", prompt: "vintage plaid mini skirt, cropped graphic baby tee, platform boots, Y2K-inspired pop-punk aesthetic" },
  { name: "Billie Eilish", gender: "female", prompt: "ultra-oversized technical windbreaker, matching baggy shorts, heavy industrial chains, anti-fashion statement" },
  { name: "Doja Cat", gender: "female", prompt: "futuristic metallic bodysuit, avant-garde sculptural glam, bold neon makeup, high-concept pop" },
  { name: "Lana Del Rey", gender: "female", prompt: "vintage floral sundress, delicate hair ribbon, classic Americana aesthetic, nostalgic pop elegance" },
  { name: "Britney Spears", gender: "female", prompt: "iconic red latex bodysuit, futuristic silver details, Y2K pop princess energy" },
  { name: "Madonna", gender: "female", prompt: "vintage cone-bra corset, layered crucifix necklaces, bold 80s pop icon aesthetic" },
  { name: "Michael Jackson", gender: "male", prompt: "red military-style leather jacket with zippers, white socks, black loafers, legendary pop king energy" },
  { name: "Prince", gender: "male", prompt: "purple ruffled silk blouse, high-waisted velvet trousers, high-heeled boots, flamboyant pop-funk genius" },
  { name: "David Bowie", gender: "male", prompt: "asymmetrical lightning-bolt patterned jumpsuit, bold face paint, avant-garde glam-pop silhouette" },
  { name: "Charli XCX", gender: "female", prompt: "glossy black vinyl outfit, futuristic sunglasses, hyperpop industrial aesthetic" },
  { name: "Rosalía", gender: "female", prompt: "sculptural white avant-garde ruffled dress, long red nails, modern-traditional flamenco fusion" },
  { name: "Bad Bunny", gender: "male", prompt: "bold color-blocked technical tracksuit, futuristic sunglasses, maximalist reggaeton-pop" },
  { name: "Shakira", gender: "female", prompt: "fitted gold metallic top, low-waist leather trousers, voluminous natural hair, energetic latin-pop icon" },
  { name: "BTS (Jungkook)", gender: "male", prompt: "sharp tailored black suit, minimalist silver jewelry, polished global pop star aesthetic" },
  { name: "BLACKPINK (Lisa)", gender: "female", prompt: "high-fashion designer crop top, baggy cargo pants, chunky boots, fierce K-pop energy" },
  { name: "NewJeans", gender: "female", prompt: "Y2K-inspired baggy denim, colorful baby tees, playful nostalgic K-pop aesthetic" },
  { name: "Beyoncé", gender: "female", prompt: "custom crystal-encrusted bodysuit, dramatic cape, high-glamour Renaissance pop energy" },
  { name: "Lorde", gender: "female", prompt: "ethereal flowing silk dress, dark moody makeup, introspective alt-pop aesthetic" },
  { name: "Sam Smith", gender: "male", prompt: "asymmetrical designer tailoring, statement jewelry, bold expressive pop silhouette" },
  { name: "Halsey", gender: "female", prompt: "edgy deconstructed leather outfit, multiple tattoos visible, alternative pop-rock energy" },
  { name: "Justin Timberlake", gender: "male", prompt: "sharp suit with sneakers, fedora hat, polished 2000s pop-R&B crossover style" },
  { name: "Pink", gender: "female", prompt: "studded leather jacket, distressed denim, high-energy pop-rock athletic aesthetic" },
  { name: "Troye Sivan", gender: "male", prompt: "sheer mesh top, relaxed tailored trousers, delicate silver jewelry, soft queer-pop elegance" },
  { name: "Kim Petras", gender: "female", prompt: "high-gloss pink latex outfit, futuristic accessories, hyperpop glam" },
  { name: "J Balvin", gender: "male", prompt: "vibrant multi-colored technical jacket, matching hair color, bold latin-pop streetwear" },
  { name: "Karol G", gender: "female", prompt: "fitted denim-on-denim outfit, bright blue hair, confident 'Bichota' latin-pop energy" },
  { name: "Anitta", gender: "female", prompt: "bold cut-out bodysuit, vibrant colors, energetic Brazilian pop-funk aesthetic" },
  { name: "Camila Cabello", gender: "female", prompt: "flowing ruffled dress, warm latin-inspired colors, romantic pop energy" },
  { name: "Shawn Mendes", gender: "male", prompt: "fitted white tank top, vintage denim, acoustic guitar-focused classic pop look" },
  { name: "H.E.R.", gender: "female", prompt: "oversized velvet suit, signature dark sunglasses, sophisticated R&B-pop elegance" },
  { name: "Frank Ocean", gender: "male", prompt: "simple high-quality white tee, structured trousers, quiet luxury pop-R&B aesthetic" },
  { name: "The 1975 (Matty)", gender: "male", prompt: "disheveled black suit, loose tie, cigarette in hand, indie-pop rockstar energy" },
  { name: "Lizzo", gender: "female", prompt: "vibrant neon bodysuit, dramatic flute, bold body-positive pop maximalism" },
  { name: "Sabrina Carpenter", gender: "female", prompt: "vintage-inspired mini dress, platform heels, classic blonde pop starlet aesthetic" },
  { name: "Tate McRae", gender: "female", prompt: "baggy cargo pants, cropped technical top, high-energy dance-pop streetwear" },
  { name: "Louane", gender: "female", prompt: "chic minimalist outfit, oversized blazer, understated modern pop elegance" },
  { name: "Kendji Girac", gender: "male", prompt: "vibrant silk print shirt, relaxed denim, energetic Gipsy-pop flair" },
  { name: "Vianney", gender: "male", prompt: "simple high-quality knitwear, relaxed denim, authentic acoustic pop energy" }
];

export const RNB_ARTIST_STYLES: ArtistStyle[] = [
  { name: "Frank Ocean", gender: "male", prompt: "simple black cashmere turtleneck, navy wool trousers, quiet luxury R&B minimalism" },
  { name: "Summer Walker", gender: "female", prompt: "fitted silk slip dress, layered gold necklaces, long acrylic nails, modern R&B baddie aesthetic" },
  { name: "Giveon", gender: "male", prompt: "sharp tailored velvet blazer, silk shirt, minimalist gold jewelry, sophisticated baritone R&B elegance" },
  { name: "H.E.R.", gender: "female", prompt: "oversized structured suit, signature dark sunglasses, electric guitar, soulful R&B presence" },
  { name: "Daniel Caesar", gender: "male", prompt: "loose linen shirt, relaxed cotton trousers, barefoot, organic spiritual R&B energy" },
  { name: "Brent Faiyaz", gender: "male", prompt: "vintage leather racing jacket, baggy denim, diamond stud earrings, mysterious R&B aesthetic" },
  { name: "Kehlani", gender: "female", prompt: "oversized graphic tee, baggy cargo pants, visible tattoos, effortless Oakland R&B street style" },
  { name: "Jhené Aiko", gender: "female", prompt: "ethereal flowy silk dress, crystal jewelry, natural hair, serene spiritual R&B goddess energy" },
  { name: "Teyana Taylor", gender: "female", prompt: "fitted technical bodysuit, oversized puffer coat, high-fashion athletic R&B glamour" },
  { name: "Lucky Daye", gender: "male", prompt: "vibrant patterned silk shirt, tailored trousers, gold chains, modern soulful R&B flair" },
  { name: "Snoh Aalegra", gender: "female", prompt: "sharp tailored oversized suit, minimal jewelry, cinematic soulful R&B elegance" },
  { name: "Cleo Sol", gender: "female", prompt: "flowing earth-toned silk wrap dress, sculptural gold jewelry, natural hair, warm spiritual soul" },
  { name: "Jorja Smith", gender: "female", prompt: "vintage oversized leather jacket, white ribbed tank, relaxed denim, 90s R&B cool" },
  { name: "Mahalia", gender: "female", prompt: "champagne silk slip dress, minimalist gold choker, soft feminine R&B sophistication" },
  { name: "Ella Mai", gender: "female", prompt: "oversized designer hoodie, baggy joggers, clean sneakers, authentic London R&B street style" },
  { name: "Khalid", gender: "male", prompt: "colorful color-blocked windbreaker, relaxed denim, youthful approachable R&B energy" },
  { name: "6LACK", gender: "male", prompt: "all-black technical hoodie, dark denim, black cap, mysterious Atlanta R&B aesthetic" },
  { name: "PartyNextDoor", gender: "male", prompt: "oversized designer knitwear, leather trousers, diamond chains, moody Toronto R&B style" },
  { name: "Bryson Tiller", gender: "male", prompt: "simple black hoodie, baseball cap, relaxed denim, authentic Trap-Soul aesthetic" },
  { name: "Usher", gender: "male", prompt: "fitted leather vest, bare chest, multiple diamond chains, legendary R&B showman energy" },
  { name: "Alicia Keys", gender: "female", prompt: "natural no-makeup look, headwrap, flowing silk kimono, soulful R&B authenticity" },
  { name: "Mary J. Blige", gender: "female", prompt: "thigh-high leather boots, oversized fur coat, massive gold hoops, Queen of Hip-Hop Soul" },
  { name: "Erykah Badu", gender: "female", prompt: "towering headwrap, eclectic layered jewelry, oversized vintage coat, neo-soul priestess energy" },
  { name: "Lauryn Hill", gender: "female", prompt: "oversized denim jacket, colorful headscarf, layered gold jewelry, legendary soul-hop aesthetic" },
  { name: "D'Angelo", gender: "male", prompt: "bare chest, leather trousers, multiple gold chains, raw soulful R&B magnetism" },
  { name: "Sade", gender: "female", prompt: "simple white button-down, high-waist denim, gold hoops, slicked-back ponytail, timeless R&B elegance" },
  { name: "Janet Jackson", gender: "female", prompt: "all-black military-inspired technical outfit, heavy silver hardware, legendary R&B icon energy" },
  { name: "Aaliyah", gender: "female", prompt: "baggy denim, visible Tommy Hilfiger waistband, bandeau top, iconic 90s R&B street style" },
  { name: "Victoria Monét", gender: "female", prompt: "fitted bronze metallic bodysuit, sculptural gold jewelry, high-fashion R&B glamour" },
  { name: "Ari Lennox", gender: "female", prompt: "vibrant floral silk dress, natural hair, warm soulful R&B authenticity" },
  { name: "Jazmine Sullivan", gender: "female", prompt: "sharp tailored power suit, bold makeup, commanding soulful R&B presence" },
  { name: "Tems", gender: "female", prompt: "flowing sculptural silk gown, traditional Nigerian jewelry, majestic Afro-R&B energy" },
  { name: "Ayra Starr", gender: "female", prompt: "Y2K-inspired mini skirt, cropped technical top, bold colorful K-pop-influenced R&B style" },
  { name: "Wizkid", gender: "male", prompt: "luxury silk patterned shirt, tailored trousers, diamond watch, polished Starboy R&B-Afro style" },
  { name: "Burna Boy", gender: "male", prompt: "vibrant silk print shirt, layered gold chains, statement rings, African superstar energy" },
  { name: "Amaarae", gender: "female", prompt: "avant-garde deconstructed tailoring, colorful hair, experimental Afro-R&B aesthetic" },
  { name: "Steve Lacy", gender: "male", prompt: "vintage oversized suit, colorful knitwear, eclectic indie-R&B energy" },
  { name: "Kali Uchis", gender: "female", prompt: "vintage-inspired silk slip dress, dramatic fur trim, retro-glamour R&B aesthetic" },
  { name: "Miguel", gender: "male", prompt: "distressed leather jacket, tight denim, rock-inspired R&B energy" },
  { name: "Solange", gender: "female", prompt: "monochromatic sculptural outfit, avant-garde architectural silhouette, artistic R&B elegance" },
  { name: "Chloe x Halle", gender: "female", prompt: "matching avant-garde designer outfits, sculptural hair, ethereal R&B sisterhood energy" },
  { name: "Normani", gender: "female", prompt: "fitted technical bodysuit, high-fashion athletic glamour, fierce pop-R&B energy" },
  { name: "Tinashe", gender: "female", prompt: "baggy cargo pants, cropped technical top, high-energy dance-R&B streetwear" },
  { name: "Muni Long", gender: "female", prompt: "glamorous evening gown, dramatic jewelry, sophisticated R&B diva aesthetic" },
  { name: "Leon Bridges", gender: "male", prompt: "vintage 60s-inspired tailored suit, leather loafers, classic soulful R&B flair" },
  { name: "Anderson .Paak", gender: "male", prompt: "vibrant patterned knitwear, colorful bucket hat, vintage sunglasses, energetic R&B-funk style" },
  { name: "SiR", gender: "male", prompt: "simple high-quality hoodie, relaxed denim, soulful TDE R&B aesthetic" },
  { name: "Blxst", gender: "male", prompt: "clean technical tracksuit, crisp white sneakers, polished West Coast R&B style" },
  { name: "Pink Sweat$", gender: "male", prompt: "all-pink technical outfit, relaxed fit, soft approachable R&B energy" },
  { name: "Aya Nakamura", gender: "female", prompt: "glamorous designer gown, massive diamond jewelry, unapologetic Afro-pop queen energy" },
  { name: "Tayc", gender: "male", prompt: "silk shirt open at chest, tailored trousers, gold watch, sensual Afro-R&B flair" },
  { name: "Dadju", gender: "male", prompt: "luxury designer knitwear, diamond watch, polished romantic R&B aesthetic" },
  { name: "Ronisia", gender: "female", prompt: "fitted technical bodysuit, high-fashion athletic glamour, soft melodic R&B energy" },
  { name: "Bianca Costa", gender: "female", prompt: "vibrant colorful outfit, Brazilian-inspired accessories, energetic Baile Funk-pop style" },
  { name: "Nej'", gender: "female", prompt: "luxury designer outfit, diamond jewelry, polished melodic R&B-pop aesthetic" },
  { name: "Monsieur NOV", gender: "male", prompt: "sharp tailored blazer, silk shirt, minimalist luxury watch, sophisticated French R&B elegance" }
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
  { key: 'pop', name: 'POP', prompt: 'polished high-fashion pop aesthetic, vibrant and iconic' },
  { key: 'rnb', name: 'R&B', prompt: 'smooth sophisticated R&B elegance, silky and soulful' },
  { key: 'street', name: 'STREET', prompt: 'contemporary luxury streetwear, urban edge' },
  { key: 'tailored', name: 'TAILOR', prompt: 'sharp avant-garde tailoring, sophisticated' },
  { key: 'minimal', name: 'MINIMAL', prompt: 'clean minimalist aesthetic, no logos' },
  { key: 'maximalist', name: 'MAXI', prompt: 'maximalist bold statement, complex details' },
  { key: 'vintage', name: 'VINTAGE', prompt: 'vintage 90s archive aesthetic, worn-in feel' },
  { key: 'futuristic', name: 'FUTUR', prompt: 'futuristic sci-fi techwear, avant-garde' },
  { key: 'hyper-sexy', name: 'HYPER-SEXY', prompt: 'body-hugging latex or sheer fabrics, deep plunging necklines, high-cut bottoms, provocative cut-outs, and aggressive high-fashion elements' },
];

export const MUSIC_GENRES = [
  { id: 'hardcore-rap', name: 'HARDCORE RAP', sub: 'Raw / Aggressive / Street' },
  { id: 'rai-algerien', name: 'RAÏ ALGÉRIEN', sub: 'Emotional / Festive / Traditional' },
  { id: 'dark-rnb', name: 'DARK R&B', sub: 'Atmospheric / Melodic Trap' },
  { id: 'boom-bap-90s', name: '90s BOOM BAP', sub: 'East Coast / Gritty / Nas Style' },
  { id: 'afro-fusion', name: 'AFRO-FUSION', sub: 'Modern African Sound' },
  { id: 'pluggnb', name: 'PLUGGNB', sub: 'Melodic / Atmospheric Trap' },
  { id: 'ghetto-house', name: 'GHETTO HOUSE', sub: 'Fast / Raw / Chicago' },
  { id: 'zouk-bass', name: 'ZOUK BASS', sub: 'Tropical / Heavy Bass' },
  { id: 'drift-phonk', name: 'DRIFT PHONK', sub: 'Aggressive / Cowbell' },
  { id: 'drill', name: 'MELODIC DRILL', sub: 'UK / FR / NY Style' },
  { id: 'rnb', name: 'R&B CLASSIC', sub: '90s / 2000s Smooth' },
  { id: 'trap-soul', name: 'TRAP SOUL', sub: 'Modern PBR&B' },
  { id: 'lofi', name: 'LO-FI BEATS', sub: 'Study / Chill / Relax' },
  { id: 'epic-anime', name: 'EPIC ANIME', sub: 'Orchestral / J-Rock' },
  { id: 'soundtrack', name: 'BO De MUSIQUE', sub: 'Soundtrack / OST / Cinematic' },
  { id: 'amapiano', name: 'AMAPIANO', sub: 'South African Deep House' },
  { id: 'afrobeats', name: 'AFROBEATS', sub: 'Vibrant / Burna Style' },
  { id: 'afro-trap', name: 'AFRO TRAP', sub: 'MHD Style / Energetic' },
  { id: 'kpop', name: 'K-POP', sub: 'Polished / High Energy' },
  { id: 'cloud-rap', name: 'CLOUD RAP', sub: 'Atmospheric / Melodic / Autotune' },
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
  { id: 'epic', name: 'EPIC', sub: 'Powerful / Orchestral / Grand' },
  { id: 'film', name: 'FILM', sub: 'Cinematic / Atmospheric / Score' },
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
  { id: 'auto', name: 'AUCUNE', sub: 'Auto (Déduction)' },
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
  { id: 'hugel', name: 'HUGEL', sub: 'Latin House / Tech House', weirdness: 15, styleInfluence: 80 },
  { id: 'hamza', name: 'HAMZA', sub: 'Saucegod / R&B Trap', weirdness: 20, styleInfluence: 80 },
  { id: 'werenoi', name: 'WERENOI', sub: 'Melodic Street / Mélancolique', weirdness: 12, styleInfluence: 82 },
  { id: 'vacra', name: 'VACRA', sub: 'Rap Sensuel / Pop-Trap Romantique', weirdness: 20, styleInfluence: 82 },
  { id: 'augxst', name: 'AUGXST', sub: 'Dark Cloud Rap / Ambient Trap Intimiste', weirdness: 45, styleInfluence: 82 },
  { id: 'lithe', name: 'LITHE', sub: 'Spectral R&B / Trap Futuriste', weirdness: 25, styleInfluence: 78 },
  { id: 'snoh-aalegra', name: 'SNOH AALEGRA', sub: 'Soulful R&B / Jazz', weirdness: 18, styleInfluence: 82 },
  { id: 'nas', name: 'NAS', sub: '90s East Coast / Boom Bap', weirdness: 12, styleInfluence: 88 },
  { id: 'mobb-deep', name: 'MOBB DEEP', sub: 'Queensbridge Hardcore / Dark Boom Bap', weirdness: 20, styleInfluence: 92 },
  { id: 'jorja-smith', name: 'JORJA SMITH', sub: 'UK Neo-Soul / British R&B', weirdness: 22, styleInfluence: 85 },
  { id: 'jedi-mind-tricks', name: 'JEDI MIND TRICKS', sub: 'Underground Orchestral / Militant Boom Bap', weirdness: 28, styleInfluence: 90 },
  { id: 'reda-taliani', name: 'REDA TALIANI', sub: 'Raï-Chaâbi Urbain / Street Festif', weirdness: 10, styleInfluence: 85 },
  { id: 'cheb-hasni', name: 'CHEB HASNI', sub: 'Raï Sentimental / Love Ballad', weirdness: 8, styleInfluence: 88 },
  { id: 'khaled', name: 'KHALED', sub: 'Raï Anthémique / King of Raï', weirdness: 8, styleInfluence: 88 },
  { id: 'drake', name: 'DRAKE', sub: 'Melodic Rap / R&B', weirdness: 15, styleInfluence: 82 },
  { id: 'mhd', name: 'MHD', sub: 'Afro Trap', weirdness: 15, styleInfluence: 82 },
  { id: 'carti', name: 'PLAYBOI CARTI', sub: 'Rage / Psychedelic Trap', weirdness: 50, styleInfluence: 72 },
  { id: 'juice-wrld', name: 'JUICE WRLD', sub: 'Emo Rap / Melodic', weirdness: 20, styleInfluence: 90 },
  { id: 'dr-dre', name: 'DR. DRE', sub: 'G-Funk / West Coast', weirdness: 10, styleInfluence: 90 },
  { id: 'fred-again', name: 'FRED AGAIN..', sub: 'Modern Electronic', weirdness: 30, styleInfluence: 75 },
  { id: 'peggy-gou', name: 'PEGGY GOU', sub: 'House / Disco', weirdness: 18, styleInfluence: 80 },
  { id: 'kanye', name: 'KANYE WEST', sub: 'Gospel Soul / Maximalist', weirdness: 40, styleInfluence: 80 },
  { id: 'travis', name: 'TRAVIS SCOTT', sub: 'Psychedelic Trap', weirdness: 38, styleInfluence: 80 },
  { id: 'kendrick', name: 'KENDRICK LAMAR', sub: 'Jazz-Funk / Conscious', weirdness: 30, styleInfluence: 82 },
  { id: 'the-weeknd', name: 'THE WEEKND', sub: 'Synth-Pop / R&B', weirdness: 22, styleInfluence: 80 },
  { id: 'central-cee', name: 'CENTRAL CEE', sub: 'UK Drill', weirdness: 18, styleInfluence: 80 },
  { id: 'gazo', name: 'GAZO', sub: 'French Drill', weirdness: 15, styleInfluence: 82 },
  { id: 'booba', name: 'BOOBA', sub: 'Trap-Orchestral / Légende', weirdness: 18, styleInfluence: 82 },
  { id: 'sdm', name: 'SDM', sub: 'French Trap / Dark Melodic Drill', weirdness: 30, styleInfluence: 85 },
  { id: 'sch', name: 'SCH', sub: 'Rap Cinématique / Mafieux JVLIVS', weirdness: 32, styleInfluence: 82 },
  { id: 'damso', name: 'DAMSO', sub: 'Dark / Intimate / Sensuel', weirdness: 35, styleInfluence: 80 },
  { id: 'jul', name: 'JUL', sub: 'Marseille / Chanté-Rappé', weirdness: 12, styleInfluence: 85 },
  { id: 'pnl', name: 'PNL', sub: 'Cloud Rap / Éthéré / Autotune', weirdness: 40, styleInfluence: 85 },
  { id: 'nekfeu', name: 'NEKFEU', sub: 'Boom-Bap Pop-Rap / Poétique', weirdness: 20, styleInfluence: 75 },
  { id: 'orelsan', name: 'ORELSAN', sub: 'Alt-Rap Électronique / Skread', weirdness: 18, styleInfluence: 76 },
  { id: 'vald', name: 'VALD', sub: 'Dark Trap / Experimental', weirdness: 45, styleInfluence: 78 },
  { id: 'kaaris', name: 'KAARIS', sub: 'Sevran / Dark Trap Aggressive', weirdness: 25, styleInfluence: 78 },
  { id: 'maes', name: 'MAES', sub: 'Melodic / Street', weirdness: 15, styleInfluence: 90 },
  { id: 'lacrim', name: 'LACRIM', sub: 'Raw / Street Legend', weirdness: 5, styleInfluence: 95 },
  { id: 'salif', name: 'SALIF', sub: 'Boulogne / Street Legend', weirdness: 5, styleInfluence: 100 },
  { id: 'dicidens', name: 'DICIDENS', sub: '92-94 / Street Legend / Raw', weirdness: 5, styleInfluence: 100 },
  { id: 'aya-nakamura', name: 'AYA NAKAMURA', sub: 'Afro-Pop / Queen', weirdness: 12, styleInfluence: 85 },
  { id: 'dadju', name: 'DADJU', sub: 'R&B / Romantic', weirdness: 12, styleInfluence: 85 },
  { id: 'angele', name: 'ANGÈLE', sub: 'Pop / Indie', weirdness: 18, styleInfluence: 78 },
  { id: 'lomepal', name: 'LOMEPAL', sub: 'Skate-Rap / Melodic', weirdness: 22, styleInfluence: 75 },
  { id: 'monsieur-nov', name: 'MONSIEUR NOV', sub: 'French R&B / Soul', weirdness: 15, styleInfluence: 82 },
  { id: 'pomme', name: 'POMME', sub: 'Indie-Folk / Nostalgic', weirdness: 20, styleInfluence: 78 },
  { id: 'burna-boy', name: 'BURNA BOY', sub: 'Afrobeats', weirdness: 16, styleInfluence: 80 },
  { id: 'bad-bunny', name: 'BAD BUNNY', sub: 'Reggaeton / Latin Trap / Spanish', weirdness: 18, styleInfluence: 80 },
  { id: 'daft-punk', name: 'DAFT PUNK', sub: 'French House', weirdness: 26, styleInfluence: 78 },
  { id: 'billie-eilish', name: 'BILLIE EILISH', sub: 'Alt-Pop / Dark', weirdness: 20, styleInfluence: 80 },
  { id: 'rosalia', name: 'ROSALÍA', sub: 'Flamenco / Experimental', weirdness: 32, styleInfluence: 74 },
  { id: 'laylow', name: 'LAYLOW', sub: 'Digital / Futuriste / Glitch', weirdness: 50, styleInfluence: 75 },
  { id: 'tiakola', name: 'TIAKOLA', sub: 'Afro-Pop Lumineux / Chanté', weirdness: 15, styleInfluence: 82 },
  { id: 'tif', name: 'TIF', sub: 'Algerian Rap / Melodic / Nostalgic', weirdness: 18, styleInfluence: 80 },
  { id: 'karol-g', name: 'KAROL G', sub: 'Reggaeton / Latin Pop', weirdness: 15, styleInfluence: 82 },
  { id: 'justin-bieber', name: 'JUSTIN BIEBER', sub: 'Pop / R&B', weirdness: 12, styleInfluence: 82 },
  { id: 'post-malone', name: 'POST MALONE', sub: 'Melodic Rap / Pop Rock', weirdness: 18, styleInfluence: 78 },
  { id: 'j-balvin', name: 'J BALVIN', sub: 'Reggaeton / Global Pop', weirdness: 12, styleInfluence: 80 },
  { id: 'soolking', name: 'SOOLKING', sub: 'Raï-Pop Moderne / Algérien', weirdness: 14, styleInfluence: 80 },
  { id: 'cheb-mami', name: 'CHEB MAMI', sub: 'Raï Orchestral / Haute Voix', weirdness: 12, styleInfluence: 85 },
  { id: 'rimk', name: 'RIMK', sub: 'Raï-Rap Street / Dark Fusion', weirdness: 15, styleInfluence: 82 },
  { id: 'djmawi-africa', name: 'DJMAWI AFRICA', sub: 'Chaâbi-Gnaoua-Rock Fusion', weirdness: 28, styleInfluence: 75 },
  { id: 'babylone', name: 'BABYLONE', sub: 'Dziri Acoustique / Pop-Raï', weirdness: 8, styleInfluence: 88 },
  { id: 'algerino', name: "L'ALGERINO", sub: 'Raï-Trap-Pop Marseille', weirdness: 14, styleInfluence: 80 },
  { id: 'mohamed-lamine', name: 'MOHAMED LAMINE', sub: 'Raï Sentimental / Orchestral', weirdness: 8, styleInfluence: 88 },
  { id: 'cheba-zahouania', name: 'CHEBA ZAHOUANIA', sub: 'Raï Féminin Festif / Puissant', weirdness: 10, styleInfluence: 85 },
  { id: 'bilal-sghir', name: 'BILAL SGHIR', sub: 'Raï Sentimental Moderne', weirdness: 8, styleInfluence: 88 },
  { id: 'djalil-palermo', name: 'DJALIL PALERMO', sub: 'Raï Urbain / Trap-Raï', weirdness: 15, styleInfluence: 78 },
  { id: 'fairuz', name: 'FAIRUZ', sub: 'Classique Arabe / Libanaise', weirdness: 10, styleInfluence: 90 },
  { id: 'amr-diab', name: 'AMR DIAB', sub: 'Pop Arabe Égyptien / King', weirdness: 10, styleInfluence: 85 },
  { id: 'nancy-ajram', name: 'NANCY AJRAM', sub: 'Pop Oriental Dansante / Libanaise', weirdness: 10, styleInfluence: 82 },
  { id: 'rema', name: 'REMA', sub: 'Afrobeats / Rave / Global', weirdness: 20, styleInfluence: 78 },
  { id: 'nate-dogg', name: 'NATE DOGG', sub: 'West Coast / G-Funk / King of Hooks', weirdness: 16, styleInfluence: 80 },
  { id: 'ninho', name: 'NINHO', sub: 'French Rap / Superstar', weirdness: 18, styleInfluence: 80 },
  { id: 'alpha-wann', name: 'ALPHA WANN', sub: 'Don Dada / Boom-Bap Purist', weirdness: 22, styleInfluence: 76 },
  { id: 'kalash', name: 'KALASH', sub: 'Martinique / Dancehall / Trap / Creole & French', weirdness: 14, styleInfluence: 78 },
  { id: 'sade', name: 'SADE', sub: 'Smooth Soul / R&B', weirdness: 10, styleInfluence: 85 },
  { id: 'theodora', name: 'THEODORA', sub: 'Bouyon / Afro-Urbain / Hyperpop', weirdness: 35, styleInfluence: 75 },
  { id: 'freeze-corleone', name: 'FREEZE CORLEONE', sub: 'Dark Drill / Occult / 667', weirdness: 35, styleInfluence: 85 },
  { id: 'niro', name: 'NIRO', sub: 'Rap Brut / Street / Nord', weirdness: 18, styleInfluence: 80 },
  { id: 'zaho', name: 'ZAHO', sub: 'R&B Algérien-Français / Pop', weirdness: 15, styleInfluence: 82 },
  { id: 'tems', name: 'TEMS', sub: 'Alt-Afro Soul / Ethereal', weirdness: 22, styleInfluence: 82 },
  { id: 'asake', name: 'ASAKE', sub: 'Amapiano-Fuji / Street Lagos', weirdness: 25, styleInfluence: 80 },
  { id: 'joe-dwet-file', name: 'JOÉ DWÈT FILÉ', sub: 'Zouk Moderne / R&B Créole', weirdness: 12, styleInfluence: 82 },
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
  { id: 'rap-brut', name: 'RAP BRUT', sub: 'No Vocoder / Raw Flow' },
  { id: 'melismatic', name: 'MÉLISMATIQUE', sub: 'Riffs & Runs' },
  { id: 'autotuned', name: 'AUTO-TUNÉ', sub: 'Robotic / Modern' },
  { id: 'harmonic', name: 'HARMONIQUE', sub: 'Layered / Choral' },
  { id: 'operatic', name: 'OPÉRATIQUE', sub: 'Dramatic / High Range' },
  { id: 'aggressive', name: 'AGRESSIF', sub: 'Shouting / Raw' },
  { id: 'screamed', name: 'HURLÉ', sub: 'Metal / Punk' },
  { id: 'double-time', name: 'DOUBLE-TIME', sub: 'Fast Technical Flow' },
  { id: 'triplet', name: 'TRIPLET FLOW', sub: 'Migos / Trap Style' },
  { id: 'syncopated', name: 'SYNCOPÉ', sub: 'Off-beat / Jazz Flow' },
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

export const MUSIC_INSTRUMENTATION = [
  { id: 'acoustic-guitar', name: 'GUITARE ACOUSTIQUE', sub: 'Folk / Organic' },
  { id: 'electric-guitar', name: 'GUITARE ÉLECTRIQUE', sub: 'Rock / Blues' },
  { id: 'piano', name: 'PIANO', sub: 'Classic / Soul' },
  { id: 'rhodes', name: 'RHODES / WURLI', sub: 'Vintage R&B' },
  { id: 'analog-synth', name: 'SYNTHÉ ANALOGIQUE', sub: 'Warm / Retro' },
  { id: 'digital-synth', name: 'SYNTHÉ NUMÉRIQUE', sub: 'Modern / Sharp' },
  { id: 'modular-synth', name: 'SYNTHÉ MODULAIRE', sub: 'Experimental / Raw' },
  { id: 'strings', name: 'CORDES', sub: 'Orchestral / Emotional' },
  { id: 'brass', name: 'CUIVRES', sub: 'Funk / Jazz' },
  { id: '808', name: '808 BASS', sub: 'Trap / Drill' },
  { id: 'sliding-808', name: 'SLIDING 808', sub: 'UK Drill / Grime' },
  { id: 'upright-bass', name: 'CONTREBASSE', sub: 'Jazz / Acoustic' },
  { id: 'live-drums', name: 'BATTERIE LIVE', sub: 'Rock / Funk' },
  { id: 'drum-machine', name: 'BOÎTE À RYTHME', sub: '80s / Electronic' },
  { id: 'orchestral-percussion', name: 'PERCUSSIONS ORCHESTRALES', sub: 'Cinematic / Epic' },
  { id: 'talkbox', name: 'TALKBOX / VOCODER', sub: 'Funk / G-Funk' },
  { id: 'custom', name: 'CUSTOM', sub: 'Saisie libre' }
];

export const MUSIC_PRODUCTION_STYLES = [
  { id: 'hardcore', name: 'V3 - HARDCORE / BRUT', sub: 'Rap Brut / No Vocoder / Raw' },
  { id: 'lofi', name: 'LO-FI', sub: 'Tape Hiss / Bitcrushed' },
  { id: 'hifi', name: 'HI-FI', sub: 'Crisp / Modern / Clean' },
  { id: 'analog', name: 'ANALOGIQUE', sub: 'Warm / Saturated' },
  { id: 'digital', name: 'NUMÉRIQUE', sub: 'Cold / Precise' },
  { id: 'distorted', name: 'DISTORDU', sub: 'Gritty / Aggressive' },
  { id: 'reverberated', name: 'RÉVERBÉRÉ', sub: 'Dreamy / Spacey' },
  { id: 'dry', name: 'SEC', sub: 'Intimate / Direct' },
  { id: 'glitch', name: 'GLITCH', sub: 'Experimental / Digital' },
  { id: 'binaural', name: 'BINAURAL', sub: '3D / Immersive' },
  { id: 'saturated', name: 'SATURÉ', sub: 'Tape Saturation / Warmth' },
  { id: 'bitcrushed', name: 'BITCRUSHED', sub: 'Digital Distortion' },
  { id: 'custom', name: 'CUSTOM', sub: 'Saisie libre' }
];

export const MUSIC_STRUCTURES = [
  { id: 'standard', name: 'STANDARD', sub: 'V-C-V-C-B-C' },
  { id: 'pop-classic', name: 'POP CLASSIQUE', sub: 'I-V-C-V-C-B-C-O' },
  { id: 'minimalist', name: 'MINIMALISTE', sub: 'V-C-V-C' },
  { id: 'extended', name: 'EXTENDED', sub: 'V-V-C-V-V-C-B-C-C' },
  { id: 'experimental', name: 'EXPÉRIMENTAL', sub: 'A-B-C-D-E' },
  { id: 'custom', name: 'CUSTOM', sub: 'Saisie libre' }
];

export const MUSIC_VOCAL_TECHNIQUES = [
  { id: 'none', name: 'AUCUNE', sub: 'Standard' },
  { id: 'vocal-fry', name: 'VOCAL FRY', sub: 'Gritty / Low-end' },
  { id: 'falsetto', name: 'FALSETTO', sub: 'High-pitched / Airy' },
  { id: 'whisper', name: 'MURMURE', sub: 'Intimate / ASMR' },
  { id: 'belted', name: 'PUISSANCE', sub: 'Strong / Belting' },
  { id: 'melismatic', name: 'MÉLISMATIQUE', sub: 'R&B Runs / Soul' },
  { id: 'staccato', name: 'STACCATO', sub: 'Sharp / Rhythmic' },
  { id: 'breathy', name: 'SOUFFLÉ', sub: 'Soft / Vulnerable' }
];

export const MUSIC_VOCAL_TEXTURES = [
  { id: 'dry-baritone', name: 'DRY BARITONE', sub: 'Deep / Dry' },
  { id: 'deep-chest', name: 'DEEP CHEST', sub: 'Resonant' },
  { id: 'dark-nasal', name: 'DARK NASAL', sub: 'Edgy' },
  { id: 'grainy', name: 'GRAINY', sub: 'Textured' },
  { id: 'rough-low', name: 'ROUGH LOW', sub: 'Gravelly' },
  { id: 'smoky', name: 'SMOKY', sub: 'Sultry' },
  { id: 'clean', name: 'CLEAN', sub: 'Unprocessed' },
  { id: 'hoarse', name: 'HOARSE', sub: 'Controlled' },
  { id: 'velvet-dark', name: 'VELVET DARK', sub: 'Smooth' },
  { id: 'firm-mid', name: 'FIRM MIDRANGE', sub: 'Present' },
  { id: 'cold-flat', name: 'COLD FLAT', sub: 'Monotone' },
  { id: 'worn-out', name: 'WORN-OUT', sub: 'Aged' }
];

export const MUSIC_VOCAL_INTERPRETATIONS = [
  { id: 'commanding', name: 'COMMANDING', sub: 'Powerful' },
  { id: 'restrained', name: 'RESTRAINED', sub: 'Subtle' },
  { id: 'explosive', name: 'EXPLOSIVE', sub: 'Accented' },
  { id: 'calm-menacing', name: 'CALM MENACING', sub: 'Tense' },
  { id: 'detached', name: 'DETACHED', sub: 'Monotone' },
  { id: 'cold-aggression', name: 'COLD AGGRESSION', sub: 'Controlled' },
  { id: 'smirking', name: 'SMIRKING', sub: 'Confident' },
  { id: 'half-whisper', name: 'HALF-WHISPER', sub: 'Threatening' },
  { id: 'tired-winner', name: 'TIRED WINNER', sub: 'Detached' },
  { id: 'confessional', name: 'CONFESSIONAL', sub: 'Tense' },
  { id: 'stoic', name: 'STOIC', sub: 'Firm' },
  { id: 'predatory', name: 'PREDATORY', sub: 'Calm' }
];

export const MUSIC_FLOW_TAGS = [
  { id: 'pocket-controlled', name: 'POCKET CONTROLLED', sub: 'Precise' },
  { id: 'tight-pocket', name: 'TIGHT POCKET', sub: 'Locked' },
  { id: 'rigid-grid', name: 'RIGID GRID', sub: 'Mechanical' },
  { id: 'offbeat-pocket', name: 'OFFBEAT POCKET', sub: 'Swing' },
  { id: 'syncopated', name: 'SYNCOPATED', sub: 'Rhythmic' },
  { id: 'behind-beat', name: 'BEHIND THE BEAT', sub: 'Laid Back' },
  { id: 'on-top-beat', name: 'ON TOP OF BEAT', sub: 'Driving' },
  { id: 'elastic', name: 'ELASTIC', sub: 'Fluid' },
  { id: 'dense-internal', name: 'DENSE INTERNAL', sub: 'Complex Rhymes' },
  { id: 'multisyllabic', name: 'MULTISYLLABIC', sub: 'Rhyme Chains' },
  { id: 'technical-switches', name: 'TECHNICAL SWITCHES', sub: 'Flow Variation' },
  { id: 'cutthroat', name: 'CUTTHROAT', sub: 'Aggressive' },
  { id: 'sniper-precision', name: 'SNIPER PRECISION', sub: 'Sharp' },
  { id: 'staccato-attack', name: 'STACCATO ATTACK', sub: 'Short' },
  { id: 'legato-glide', name: 'LEGATO GLIDE', sub: 'Smooth' },
  { id: 'high-pressure', name: 'HIGH PRESSURE', sub: 'Urgent' }
];

export const MUSIC_WRITING_TAGS = [
  { id: 'luxury-braggadocio', name: 'LUXURY BRAG', sub: 'Elite' },
  { id: 'high-taste', name: 'HIGH TASTE', sub: 'Refined' },
  { id: 'cold-status', name: 'COLD STATUS', sub: 'Dominant' },
  { id: 'street-cinematic', name: 'STREET CINEMATIC', sub: 'Noir' },
  { id: 'urban-survival', name: 'URBAN SURVIVAL', sub: 'Realism' },
  { id: 'noir-poetry', name: 'NOIR POETRY', sub: 'Street' },
  { id: 'cold-intellectual', name: 'COLD INTELLECTUAL', sub: 'Cerebral' },
  { id: 'metaphorical-density', name: 'METAPHORICAL', sub: 'Complex' },
  { id: 'suppressed-emotion', name: 'SUPPRESSED EMOTION', sub: 'Numb' },
  { id: 'melancholic-detachment', name: 'MELANCHOLIC', sub: 'Isolated' },
  { id: 'ego-death', name: 'EGO DEATH', sub: 'Introspective' },
  { id: 'street-pressure', name: 'STREET PRESSURE', sub: 'Tense' }
];

export const MUSIC_DRUM_BASS_TAGS = [
  { id: 'hard-boom-bap', name: 'HARD BOOM BAP', sub: 'Punchy' },
  { id: 'tight-snare', name: 'TIGHT SNARE', sub: 'Sharp' },
  { id: 'dry-drum-bus', name: 'DRY DRUM BUS', sub: 'Minimal' },
  { id: 'minimal-trap', name: 'MINIMAL TRAP', sub: 'Modern' },
  { id: 'rolling-hats', name: 'ROLLING HATS', sub: 'Fast' },
  { id: 'heavy-sub', name: 'HEAVY SUB', sub: 'Deep' },
  { id: 'dark-808', name: 'DARK 808', sub: 'Foundation' },
  { id: '808-glide', name: '808 GLIDE', sub: 'Drill' },
  { id: 'minimal-bass', name: 'MINIMAL BASS', sub: 'Tight' },
  { id: 'distorted-kick', name: 'DISTORTED KICK', sub: 'Aggressive' },
  { id: 'organic-percussion', name: 'ORGANIC PERC', sub: 'Natural' }
];

export const MUSIC_MELODY_TAGS = [
  { id: 'dark-keys', name: 'DARK KEYS', sub: 'Minor' },
  { id: 'sparse-piano', name: 'SPARSE PIANO', sub: 'Minimal' },
  { id: 'cold-bells', name: 'COLD BELLS', sub: 'Icy' },
  { id: 'noir-strings', name: 'NOIR STRINGS', sub: 'Cinematic' },
  { id: 'distorted-synth', name: 'DISTORTED SYNTH', sub: 'Gritty' },
  { id: 'analog-pads', name: 'ANALOG PADS', sub: 'Warm' },
  { id: 'vocal-chops', name: 'VOCAL CHOPS', sub: 'Modern' },
  { id: 'soul-sample', name: 'SOUL SAMPLE', sub: 'Vintage' },
  { id: 'jazz-influence', name: 'JAZZ INFLUENCE', sub: 'Sophisticated' }
];

export const MUSIC_ATMOSPHERE_TAGS = [
  { id: 'dark-luxury', name: 'DARK LUXURY', sub: 'Premium' },
  { id: 'nocturnal', name: 'NOCTURNAL', sub: 'Night' },
  { id: 'menacing-calm', name: 'MENACING CALM', sub: 'Tense' },
  { id: 'paranoid-tension', name: 'PARANOID', sub: 'Suspense' },
  { id: 'urban-isolation', name: 'URBAN ISOLATION', sub: 'Cold' },
  { id: 'lonely-drive', name: 'LONELY DRIVE', sub: 'Melancholic' },
  { id: 'sparse-keys', name: 'SPARSE KEYS', sub: 'Minimal' },
  { id: 'cold-pads', name: 'COLD PADS', sub: 'Atmospheric' },
  { id: 'cinematic-texture', name: 'CINEMATIC', sub: 'Epic' }
];

export const MUSIC_PRODUCTION_FINISHES = [
  { id: 'none', name: 'AUCUN', sub: 'Standard' },
  { id: 'binaural', name: 'BINAURAL 3D', sub: 'Immersive Space' },
  { id: 'sidechain', name: 'SIDECHAIN', sub: 'Pumping / Electronic' },
  { id: 'mid-side', name: 'MID-SIDE', sub: 'Ultra-wide Stereo' },
  { id: 'tape-saturation', name: 'TAPE SATURATION', sub: 'Warm / Vintage' },
  { id: 'bitcrush', name: 'BITCRUSH', sub: 'Digital Grime' },
  { id: 'vinyl-crackle', name: 'VINYL CRACKLE', sub: 'Lo-fi / Retro' }
];

export const MUSIC_MIX_TAGS = [
  { id: 'clean-punchy', name: 'CLEAN PUNCHY', sub: 'Modern' },
  { id: 'high-fidelity', name: 'HI-FI', sub: 'Studio Polish' },
  { id: 'crisp-top', name: 'CRISP TOP', sub: 'Sharp Highs' },
  { id: 'tight-mid', name: 'TIGHT MIDRANGE', sub: 'Focused' },
  { id: 'cold-studio', name: 'COLD STUDIO', sub: 'Dry' },
  { id: 'zero-gloss', name: 'ZERO GLOSS', sub: 'Raw' },
  { id: 'tape-texture', name: 'TAPE TEXTURE', sub: 'Analog' },
  { id: 'vinyl-dust', name: 'VINYL DUST', sub: 'Lo-fi' },
  { id: 'analog-edge', name: 'ANALOG EDGE', sub: 'Saturated' }
];

export const MUSIC_STRUCTURE_TAGS = [
  { id: 'long-intro', name: 'LONG INTRO', sub: 'Build' },
  { id: 'immediate-entry', name: 'IMMEDIATE', sub: 'No Intro' },
  { id: 'verse-centric', name: 'VERSE CENTRIC', sub: 'Rap Focused' },
  { id: 'short-hook', name: 'SHORT HOOK', sub: 'Minimal' },
  { id: 'no-chorus', name: 'NO CHORUS', sub: 'Continuous' },
  { id: 'beat-switch', name: 'BEAT SWITCH', sub: 'Transition' },
  { id: 'half-time', name: 'HALF-TIME', sub: 'Drop' },
  { id: 'atmospheric-outro', name: 'ATMOSPHERIC OUTRO', sub: 'Fade' }
];
