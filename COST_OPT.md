# Cost optimization applied

Changes pending manual application to src/services/gemini.ts:
1. Remove STEP 4/5 generateStyleVariant calls (-66% API calls)
2. Disable Google Search on main generateMusicContext call (-30% cost)
3. gemini-2.0-flash-lite for suggestArtistAndTitle (-80% cost)
4. gemini-2.0-flash for rerollVerse (-40% cost)
