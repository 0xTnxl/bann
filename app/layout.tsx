import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AuthProvider } from "@/components/auth-provider"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BANN | From the Vault... For the Vice",
  description:
    "Faith-driven streetwear for those who refuse to perform their faith or commodify their conviction. Vault & Vice collection available now.",
  keywords: ["streetwear", "faith", "fashion", "BANN", "vault", "vice", "brutalist"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
