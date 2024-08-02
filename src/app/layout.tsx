import type { Metadata } from 'next'
import { Inter, Urbanist } from 'next/font/google'
import {
  ClerkProvider,
} from '@clerk/nextjs'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PlanetGig',
  description: '',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ClerkProvider afterSignOutUrl="/">
        <body className={inter.className}>
          {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
          {children}
        </body>
      </ClerkProvider>
    </html>
  )
}
