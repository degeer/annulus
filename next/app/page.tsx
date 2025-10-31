import fs from 'fs'
import path from 'path'
import Link from 'next/link'

function getPages() {
  const appDir = path.join(process.cwd(), 'app')
  const entries = fs.readdirSync(appDir, { withFileTypes: true })

  const pages = entries
    .filter(entry => entry.isDirectory())
    .map(entry => {
      const pagePath = path.join(appDir, entry.name, 'page.tsx')
      if (fs.existsSync(pagePath)) {
        return {
          name: entry.name
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
          href: `/${entry.name}`
        }
      }
      return null
    })
    .filter(Boolean)
    .sort((a, b) => a!.name.localeCompare(b!.name))

  return pages as { name: string; href: string }[]
}

export default function Home() {
  const pages = getPages()

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Annulus Examples - Next.js</h1>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        A collection of examples showcasing the Annulus library for creating SVG shapes.
      </p>
      <nav>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Available Pages:</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {pages.map((page) => (
            <li key={page.href} style={{ marginBottom: '0.75rem' }}>
              <Link
                href={page.href}
                style={{
                  color: '#0070f3',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  transition: 'background-color 0.2s'
                }}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
}
