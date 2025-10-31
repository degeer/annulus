# Annulus Next.js Examples

This is a Next.js application showcasing examples of the Annulus library.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Structure

- `/app/page.tsx` - Home page
- `/app/examples/page.tsx` - Examples showcasing various Annulus components
- `/app/layout.tsx` - Root layout
- `/app/globals.css` - Global styles

## Notes

- This project imports the built annulus library from `file:..` (the parent directory)
- All pages use `'use client'` directive since Annulus components render SVG dynamically
- The library is imported directly from the `/dist` folder built by the parent project
