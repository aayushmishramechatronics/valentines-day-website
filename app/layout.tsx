import type { Metadata } from "next"
import { Press_Start_2P } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
})

export const metadata: Metadata = {
  title: "Valentine's Day Special",
  description: "A cosmic-themed Valentine's Day message",
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${pixelFont.variable} font-pixel`}>{children}</body>
    </html>
  )
}

