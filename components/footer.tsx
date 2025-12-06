import Link from "next/link"
import { Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-black mb-2">BANN</h3>
            <p className="text-muted-foreground text-sm">From the vault... for the vice.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                About
              </Link>
              <Link
                href="/membership"
                className="block text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Membership
              </Link>
              <Link
                href="/lookbook"
                className="block text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Lookbook
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/_bannoriginals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com/_bannoriginals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-muted-foreground text-sm mt-4">@_bannoriginals</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">© 2025 BANN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
