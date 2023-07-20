import './globals.css'

import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MoodSense: Harness AI to Understand Your Emotional Journey',
  description:
    'Welcome to MoodSense, your gateway to unlocking a deeper understanding of your emotions through the power of AI. With MoodSense, discover the mood behind your journaling posts and gain insightful perspectives on your emotional well-being. Experience the transformative capabilities of our intelligent app as you embark on a journey of self-reflection and personal growth. Start exploring today and let MoodSense illuminate the path to emotional awareness and well-being.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
