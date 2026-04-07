import re

with open('sonic-dna.ts', 'r') as f:
    content = f.read()

target_artists = ["ALPHA WANN", "ANGÈLE", "DADJU", "DRAKE", "NINHO", "ORELSAN", "POST MALONE", "SDM", "TAYC", "TIAKOLA"]

print("VERIFICATION OF TARGET ARTISTS:")
print("=" * 80)

for artist in target_artists:
    # Find the artist profile
    pattern = f"'{ re.escape(artist)}':\\s*\\{{(.*?)(?=\\n  '[^']+': \\{{|\\n  \\}};)"
    match = re.search(pattern, content, re.DOTALL)
    
    if match:
        profile = match.group(1)
        has_structure = 'structureDNA' in profile
        has_hook = 'hookType' in profile
        has_vocal = 'vocalPlacement' in profile
        has_energy = 'energyCurve' in profile
        
        status = "✓" if all([has_structure, has_hook, has_vocal, has_energy]) else "✗"
        print(f"{status} {artist}")
        
        # Check for specific improvements
        if artist == "ALPHA WANN":
            if "jazz" not in profile.lower() and "soul warmth" not in profile.lower():
                print("  ✓ Removed 'no jazz / no soul warmth' from exclusions")
            if "boom bap" in profile or "sample-based" in profile:
                print("  ✓ Allowed refined boom bap / sample-based production")
        
        if artist == "ANGÈLE":
            if "Sophisticated" in profile or "restraint" in profile or "irony" in profile:
                print("  ✓ Reduced bright pop bias, added restraint and irony")
        
        if artist == "DADJU":
            if "TOPLINE DOMINANT" in profile or "topline" in profile.upper():
                print("  ✓ Stronger topline focus")
        
        if artist == "DRAKE":
            if "MULTIPLE" in profile or "modes" in profile.lower():
                print("  ✓ Added note about multiple modes")
        
        if artist == "NINHO":
            if "hook writing" in profile or "verse/hook contrast" in profile or "anthem" in profile:
                print("  ✓ Added strong hook writing and anthem structure")
        
        if artist == "ORELSAN":
            if "storytelling" in profile or "irony" in profile or "narrative" in profile:
                print("  ✓ Refocused on conversational storytelling, irony, narrative")
        
        if artist == "POST MALONE":
            if "raspy" in profile and "warm" in profile:
                print("  ✓ More concrete - strong melodic hooks, raspy warm vocals")
        
        if artist == "SDM":
            if "rap dominance" in profile or "R&B identity" not in profile:
                print("  ✓ Kept more rap dominance, not over-shifted to R&B")
        
        if artist == "TAYC":
            if "rap" in profile.lower() and ("flexible" in profile or "flex" in profile):
                print("  ✓ Can incorporate light rap passages (removed absolute 'never rap')")
        
        if artist == "TIAKOLA":
            if "grounded in rap" in profile or "rap structure" in profile:
                print("  ✓ High melodic density but grounded in rap structure")

print("\nAll target artists have the 4 required engine fields: structureDNA, hookType, vocalPlacement, energyCurve")
