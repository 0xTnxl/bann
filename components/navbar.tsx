"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuthModal } from "@/components/auth-modal"
import { useAuth } from "@/components/auth-provider"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const { isAuthenticated, logout } = useAuth()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/membership", label: "Membership" },
    { href: "/lookbook", label: "Lookbook" },
    ...(isAuthenticated ? [{ href: "/dashboard", label: "Dashboard" }] : []),
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/whatsapp-20image-202025-12-06-20at-201.jpeg"
                alt="BANN"
                width={48}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Auth Button */}
            <div className="hidden md:flex items-center gap-4">
              {isAuthenticated ? (
                <Button
                  variant="outline"
                  onClick={logout}
                  className="border-border hover:bg-accent hover:text-accent-foreground bg-transparent glitch-button"
                >
                  <span className="hover-glitch inline-block">Logout</span>
                </Button>
              ) : (
                <Button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-foreground text-background hover:bg-foreground/90 glitch-button"
                >
                  <span className="hover-glitch inline-block">Login / Signup</span>
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              {isAuthenticated ? (
                <Button
                  variant="outline"
                  onClick={() => {
                    logout()
                    setIsOpen(false)
                  }}
                  className="w-full border-border glitch-button"
                >
                  <span className="hover-glitch inline-block">Logout</span>
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    setShowAuthModal(true)
                    setIsOpen(false)
                  }}
                  className="w-full bg-foreground text-background glitch-button"
                >
                  <span className="hover-glitch inline-block">Login / Signup</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  )
}
