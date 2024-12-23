import './globals.css'
import { Inter, Inconsolata } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Project',
  description: 'this is test project',
  keywords: 'test',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container py-10">{children}</main>
      </body>
    </html>
  )
}
