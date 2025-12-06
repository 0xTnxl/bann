"use client"

import { useAuth } from "@/components/auth-provider"
import { Check, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

const tierBenefits = {
  vault: [
    "Early access to drops (48 hours before public)",
    "Members-only content & styling tips",
    "5% discount on all purchases",
    "Access to BANN digital community",
  ],
  vice: [
    "Early access to drops (48 hours before public)",
    "Members-only content & styling tips",
    "10% discount on selected collections",
    "Access to BANN digital community",
    'Exclusive "Vice" pieces (not sold publicly)',
    "Quarterly free gift drops",
    "Personalized styling recommendations",
    "Free shipping (within Lagos)",
  ],
  black: [
    "Early access to drops (48 hours before public)",
    "Members-only content & styling tips",
    "10% discount on selected collections",
    "Access to BANN digital community",
    'Exclusive "Vice" pieces (not sold publicly)',
    "Quarterly free gift drops",
    "Personalized styling recommendations",
    "Priority access to 1-of-1 pieces",
    "One premium piece free per year",
    "Free nationwide shipping",
    "Private event invites",
    "VIP store access",
  ],
}

const tierNames = {
  vault: "VAULT PASS",
  vice: "VICE CIRCLE",
  black: "BANN BLACK",
}

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    redirect("/")
  }

  const tier = user?.tier || "vault"
  const benefits = tierBenefits[tier]
  const tierName = tierNames[tier]

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-2">Member Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to the circle.</p>
        </div>

        {/* Membership Status */}
        <div className="bg-card border border-border p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Current Tier</p>
              <h2 className="text-2xl font-black text-accent">{tierName}</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-green-500/20 text-green-500 text-sm font-bold">ACTIVE</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Email: </span>
              <span>{user?.email}</span>
            </div>
            <div className="hidden sm:block text-border">|</div>
            <div>
              <span className="text-muted-foreground">Expires: </span>
              <span>{user?.expiryDate || "N/A"}</span>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-card border border-border p-6 mb-8">
          <h3 className="text-xl font-black mb-4">Your Benefits</h3>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/membership">
            <Button variant="outline" className="w-full border-border hover:bg-card bg-transparent">
              Renew / Upgrade Membership
            </Button>
          </Link>
          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            Community Access
            <ExternalLink size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
