/**
 * Gimmick Banlist v1 — Corpus 25 artistes FR
 * ------------------------------------------------------------------
 * Chaque artiste a une liste de "gimmicks" (phrases, noms propres, lieux
 * biographiques, ad-libs, signatures) qui ne doivent JAMAIS apparaître
 * dans un texte généré "style-transfer", même en V1 pure.
 *
 * Ces tokens trahissent l'identité de l'artiste-source et transforment
 * un style-transfer propre en plagiat biographique.
 *
 * Utilisation :
 *   1. `buildBanlistBlock(inspiredBy)` → bloc texte injecté dans le system prompt
 *   2. `lintForGimmickLeaks(text, inspiredBy)` → retourne les tokens leakés après génération
 *
 * Règle éditoriale transverse (corpus entier) :
 *   - L'axe "mère / maman / daronne" est RETIRÉ du corpus. Aucun texte
 *     généré ne doit évoquer la figure maternelle, quel que soit l'artiste.
 */

export interface ArtistBanlist {
  /** Tokens exacts (case-insensitive, match sur mots entiers) */
  exact: string[];
  /** Raisons textuelles facultatives pour audit */
  note?: string;
}

/** Mots bannis pour TOUS les profils (règle éditoriale transverse) */
export const GLOBAL_BANLIST: string[] = [
  'mère', 'maman', 'mama', 'daronne', 'maternelle', 'génitrice'
];

export const GIMMICK_BANLIST: Record<string, ArtistBanlist> = {
  BOOBA: {
    note: 'Crew/lieux/marque-entreprise Boulogne',
    exact: ['DUC', 'Kopp', 'B2O', '92i', 'Ouest Side', 'Boulogne', 'Tallac', 'Unkut', 'Temps Mort']
  },
  DAMSO: {
    note: 'Bruxelles/Matongé/signatures lingala',
    exact: ['William', 'Lomé', 'Matongé', 'Ixelles', 'QALF', 'Ipséité', 'Lithopédion', 'Dems']
  },
  KAARIS: {
    note: 'Sevran/Dozo/Or Noir',
    exact: ['Sevran', 'Dozo', 'Or Noir', '2.7.0', 'Z.E.R.O', 'Okou Gnakouri', 'Riké', 'tchoin']
  },
  SCH: {
    note: 'Marseille/JVLIVS/13',
    exact: ['JVLIVS', 'Deo Favente', 'Julius', 'A7', 'Monsieur', 'Annunziata', 'Aubagne', 'S le S']
  },
  NINHO: {
    note: 'Longueville/Chelles/Binks',
    exact: ['Binks', 'N.I', 'Longueville', 'Chelles', 'M.I.L.S', 'Destin', '91', 'Jefe', 'Ninho']
  },
  HAMZA: {
    note: 'Laeken/Sauce God/1994',
    exact: ['Sauce God', 'Laeken', '1994', 'Al-Farissi', 'H-24', 'Paradise', 'Sincèrement', 'Mania', 'Ponko']
  },
  TIAKOLA: {
    note: '4Keus/Corbeil/Mélo',
    exact: ['4Keus', 'Corbeil', 'Essonnes', 'Mélo', 'Kunda', 'Wati-B', 'BDLM', 'Tiako', 'La Mélo']
  },
  "RIM'K": {
    note: '113/Vitry/AP/Mokobé',
    exact: ['113', 'Vitry', 'Camille Groult', 'AP', 'Mokobé', 'Maghreb United', 'Monster Tape', "Rim'K"]
  },
  JUL: {
    note: 'OVNI/Marseille/13',
    exact: ['OVNI', 'Marseille', '13', 'La Zone', 'JulyDelajul', 'Wesh alors', 'Jul', 'D&P']
  },
  ORELSAN: {
    note: 'Caen/Gringe/Casseurs',
    exact: ['Caen', 'Gringe', 'Casseurs Flowters', 'Orelsan', 'Perdu d\'avance', 'Le Chant des Sirènes', '7h25']
  },
  NEKFEU: {
    note: '1995/L\'Entourage/S-Crew',
    exact: ['1995', 'L\'Entourage', 'S-Crew', 'Seine Zoo', 'Nekfeu', 'Feu', 'Cyborg', 'Ken Samaras', 'Les Étoiles Vagabondes']
  },
  PNL: {
    note: 'Tarterêts/QLF/Ademo/N.O.S',
    exact: ['QLF', 'Tarterêts', 'Corbeil', 'Ademo', 'N.O.S', 'PNL', 'naha', 'Deux Frères', 'Le Monde Chico']
  },
  'FREEZE CORLEONE': {
    note: '667/LMF/Les Lilas',
    exact: ['667', 'Les Lilas', 'LMF', 'Freeze', 'Corleone', 'Ligue des Ombres', 'Ashe 22', 'Osirus Jack']
  },
  'ALPHA WANN': {
    note: '1995/Don Dada/Doum\'s',
    exact: ['1995', 'Don Dada', 'Une Main Lave l\'Autre', 'Alpha', 'Wann', 'Doum\'s', 'Nekfeu', 'Paname Boss', 'Hologram Lo']
  },
  LAYLOW: {
    note: 'Trinity/Mr Anderson/Toulouse',
    exact: ['Trinity', 'Mr Anderson', 'Toulouse', 'Laylow', 'Anderson', 'L\'Étrange Histoire', 'Dehors']
  },
  GAZO: {
    note: '93/Saint-Denis/KMT/brr',
    exact: ['brr', 'KMT', '93', 'Saint-Denis', 'Gazo', 'Drill FR', 'La Mélo']
  },
  'KALASH CRIMINEL': {
    note: 'Sevran/Cagoule/Congo/albino',
    exact: ['Kalash', 'Criminel', 'Cagoule', 'Sevran', 'Congo', 'albino', 'Fosse aux Lions', 'R.A.S', 'Bon Courage']
  },
  DINOS: {
    note: 'Longjumeau/Punchlinovic/Cameroun',
    exact: ['Dinos', 'Punchlinovic', 'Longjumeau', 'La Courneuve', 'Imany', 'Taciturne', 'Stamina', 'Helsinki']
  },
  LOMEPAL: {
    note: 'Jeannine/Flip/Paris',
    exact: ['Lomepal', 'Jeannine', 'Flip', 'Mauvais Ordre', 'Antoine', 'Paris']
  },
  LUJIPEKA: {
    note: 'Rennes/Columbine/Montréal',
    exact: ['Lujipeka', 'Columbine', 'Rennes', 'Montréal', 'Brûler Paris', 'Luji', 'Peka']
  },
  IAM: {
    note: 'Marseille/Akhenaton/Shurik\'n/Khéops',
    exact: ['IAM', 'Akhenaton', 'Shurik\'n', 'Khéops', 'Imhotep', 'Phocée', 'Phénicie', 'École du Micro', 'Métèque']
  },
  MÉDINE: {
    note: 'Le Havre/Panther/17 octobre',
    exact: ['Médine', 'Le Havre', 'Panther', 'Arabian', '17 octobre', 'Table d\'écoute', 'Don\'t Panik']
  },
  'OXMO PUCCINO': {
    note: 'Oxmo/Abdoulaye/Time Bomb',
    exact: ['Oxmo', 'Puccino', 'Abdoulaye', 'Time Bomb', 'Opéra Puccino', 'Le Noir Show', 'Paris XXe']
  },
  ROHFF: {
    note: 'Vitry/94/Bercy/Comores',
    exact: ['Rohff', 'R.O.H.F.F', 'Vitry', '94', 'Bercy', 'Comores', 'La Fierté', 'La Cuenta', 'P.D.R.G']
  },
  LACRIM: {
    note: 'Bondy/Corleone/RIPRO',
    exact: ['Lacrim', 'Bondy', '93', 'Corleone', 'R.I.P.R.O', 'A.D.S', 'Maghreb', 'Karim Zenoud']
  },
  'MISTER YOU': {
    note: 'Belleville/20e/MDR',
    exact: ['Mister You', 'Belleville', '20e', 'MDR', 'Dans Ma Grotte', 'Younes', 'Hall Star Zoo']
  },
  "HEUSS L'ENFOIRÉ": {
    note: 'Aulnay/Matuidi/Charo/Sofiane',
    exact: ['Heuss', 'Enfoiré', 'Aulnay', '93', 'Matuidi', 'Charo', 'Sofiane', 'En Esprit', 'Horizon Vertical']
  }
};

/** Normalise une clé d'artiste pour lookup (uppercase + trim + accents simples) */
function normalizeKey(s: string): string {
  return (s || '').toUpperCase().trim()
    .replace(/É/g, 'É').replace(/È/g, 'È') // keep accents
    .replace(/\s+/g, ' ');
}

/** Résout une clé d'artiste vers son entrée banlist (match exact ou fuzzy includes) */
export function resolveBanlistKey(inspiredBy: string): string | null {
  if (!inspiredBy || inspiredBy === 'none') return null;
  const target = normalizeKey(inspiredBy);
  // exact
  if (GIMMICK_BANLIST[target]) return target;
  // fuzzy: match containing
  for (const key of Object.keys(GIMMICK_BANLIST)) {
    const k = normalizeKey(key);
    if (k === target) return key;
    if (target.includes(k) || k.includes(target)) return key;
  }
  return null;
}

/** Construit le bloc banlist à injecter dans le system prompt */
export function buildBanlistBlock(inspiredBy: string, secondaryInspiredBy?: string): string {
  const keys: string[] = [];
  const k1 = resolveBanlistKey(inspiredBy);
  if (k1) keys.push(k1);
  if (secondaryInspiredBy && secondaryInspiredBy !== 'none') {
    const k2 = resolveBanlistKey(secondaryInspiredBy);
    if (k2 && k2 !== k1) keys.push(k2);
  }

  const globalBlock = `GLOBAL EDITORIAL RULE: NEVER reference the maternal figure in any form. The following words are BANNED from all generated lyrics regardless of artist: ${GLOBAL_BANLIST.join(', ')}. This is non-negotiable — do not write verses, punchlines, or hooks involving mothers, maternity, or family-mother imagery.`;

  if (keys.length === 0) return `\n# GIMMICK BANLIST (EDITORIAL):\n${globalBlock}\n`;

  const blocks = keys.map(k => {
    const b = GIMMICK_BANLIST[k];
    return `— ${k}${b.note ? ` (${b.note})` : ''}: ${b.exact.join(', ')}`;
  }).join('\n');

  return `\n# GIMMICK BANLIST (STYLE-TRANSFER HYGIENE):
${globalBlock}

The following tokens are ARTIST-SPECIFIC GIMMICKS and MUST NOT appear in the generated lyrics. They would leak the source artist's biographical identity into the text. This is a HARD CONSTRAINT — if you would naturally write one of these, find a synonym or rephrase:
${blocks}

Rule: capture the STYLISTIC DNA (flow, cadence, lexical register, punchline architecture), NEVER the personal signatures listed above.
`;
}

/** Scanne un texte et retourne les gimmicks leakés (diagnostic post-génération) */
export interface GimmickLeak {
  artist: string;
  token: string;
  matchedIn: string;
}

export function lintForGimmickLeaks(
  text: string,
  inspiredBy: string,
  secondaryInspiredBy?: string
): GimmickLeak[] {
  if (!text) return [];
  const leaks: GimmickLeak[] = [];
  const lower = text.toLowerCase();

  // Global banlist check
  for (const w of GLOBAL_BANLIST) {
    const re = new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    if (re.test(text)) leaks.push({ artist: 'GLOBAL', token: w, matchedIn: 'editorial-rule' });
  }

  // Artist-specific
  const keys: string[] = [];
  const k1 = resolveBanlistKey(inspiredBy);
  if (k1) keys.push(k1);
  if (secondaryInspiredBy && secondaryInspiredBy !== 'none') {
    const k2 = resolveBanlistKey(secondaryInspiredBy);
    if (k2 && k2 !== k1) keys.push(k2);
  }

  for (const k of keys) {
    const b = GIMMICK_BANLIST[k];
    for (const token of b.exact) {
      if (token.length < 2) continue;
      // word-boundary match, case-insensitive
      const escaped = token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(`\\b${escaped}\\b`, 'i');
      if (re.test(text)) {
        // short excerpt around match
        const idx = lower.indexOf(token.toLowerCase());
        const excerpt = idx >= 0 ? text.slice(Math.max(0, idx - 20), idx + token.length + 20) : token;
        leaks.push({ artist: k, token, matchedIn: excerpt.trim() });
      }
    }
  }
  return leaks;
}

/** Nombre total d'artistes dans la banlist */
export function getBanlistSize(): number {
  return Object.keys(GIMMICK_BANLIST).length;
}
