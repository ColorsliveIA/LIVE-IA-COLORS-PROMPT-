import { ArtistMetadata } from '../types';

/**
 * Service to fetch artist metadata from MusicBrainz API.
 * MusicBrainz is a free, open-source encyclopedia of music.
 */
export async function fetchArtistMetadata(artistName: string): Promise<ArtistMetadata | null> {
  if (!artistName || artistName === 'Select Artist') return null;

  try {
    // MusicBrainz API requires a descriptive User-Agent
    const userAgent = 'SunoStudioV5/1.0.0 ( contact: Nawakimporte@gmail.com )';
    
    // Search for the artist
    const query = encodeURIComponent(`artist:"${artistName}"`);
    const response = await fetch(`https://musicbrainz.org/ws/2/artist/?query=${query}&fmt=json`, {
      headers: {
        'User-Agent': userAgent,
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      console.error('MusicBrainz API error:', response.statusText);
      return null;
    }

    const data = await response.json();
    
    // Take the first (most relevant) result
    const artist = data.artists?.[0];
    if (!artist) return null;

    // Extract tags (genres)
    const tags = artist.tags 
      ? artist.tags.sort((a: any, b: any) => b.count - a.count).slice(0, 5).map((t: any) => t.name)
      : [];

    return {
      id: artist.id,
      name: artist.name,
      country: artist.country,
      lifeSpan: artist['life-span'],
      type: artist.type,
      gender: artist.gender,
      tags: tags,
      primaryGenre: tags[0] || artist.disambiguation || null
    };
  } catch (error) {
    console.error('Error fetching MusicBrainz metadata:', error);
    return null;
  }
}
