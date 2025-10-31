import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Annulus Examples',
  description: 'Examples showcasing the Annulus library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
