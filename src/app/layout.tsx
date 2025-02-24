import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import React from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: { default: 'AnimeCharge', template: '%s - AnimeCharge' },
  description:
    'Discover and share anime with AnimeCharge. Explore top-rated and popular anime shows.',
  openGraph: {
    title: { default: 'AnimeCharge', template: '%s - AnimeCharge' },
    description:
      'Discover and share anime with AnimeCharge. Explore top-rated and popular anime shows.'
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}