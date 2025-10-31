# Script to Create Remaining Pages

All the example source files are located in `/example/src/`.

To batch convert all remaining pages, you can use this bash command from the `next` folder:

```bash
cd /Users/jdg/Development/degeer/PROJECTS_JDG/annulus

# List of files to convert
FILES=(
  "WhitespaceCoffee"
  "WhitespaceCoffee2"
  "WhitespaceElements"
  "WhitespaceIcons"
  "WhitespaceLogoOptimize"
  "Optimize"
  "Variants"
  "Variants2"
)

for file in "${FILES[@]}"; do
  # Convert PascalCase to kebab-case
  kebab=$(echo "$file" | sed 's/\([A-Z]\)/-\1/g' | sed 's/^-//' | tr '[:upper:]' '[:lower:]')

  # Create directory
  mkdir -p "next/app/$kebab"

  # Copy and convert the file
  echo "Creating $kebab/page.tsx from example/src/$file.js"

  # You can manually convert each file or use a script
done
```

## Conversion Template

For each file, follow this pattern:

1. Read `/example/src/[FileName].js`
2. Create `/next/app/[kebab-case-name]/page.tsx`
3. Convert using this template:

```typescript
'use client'

import { /* import components from annulus */ } from 'annulus'

export default function PageName() {
  // Copy all the logic from the original .js file
  // Remove React import
  // Keep all the annulus imports
  // Return the JSX

  return (
    // JSX from original file
  )
}
```

## Files Already Converted:
- ✅ Examples
- ✅ WhitespaceAll
- ✅ WhitespaceLogo
- ✅ WhitespaceCoffeeBackside
- ✅ WhitespaceVisitkort

## Files Still Needed:
- ❌ WhitespaceCoffee
- ❌ WhitespaceCoffee2
- ❌ WhitespaceElements
- ❌ WhitespaceIcons
- ❌ WhitespaceLogoOptimize
- ❌ Optimize
- ❌ Variants
- ❌ Variants2
