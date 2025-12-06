"use client"

import { Check, Crown, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

function AnimatedWord({ word, className = "" }: { word: string; className?: string }) {
  return (
    <span className={`inline-block ${className}`}>
      {word.split("").map((letter, index) => (
        <span
          key={index}
          className="letter-hover inline-block transition-all duration-200 hover:text-accent"
          style={{ transitionDelay: `${index * 20}ms` }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  )
}

const tiers = [
  {
    name: "VAULT PASS",
    price: "₦8,780",
    priceUsd: "$6",
    period: "3 months",
    tagline: "For early risers and core fans",
    benefits: [
      "Early access to drops (48 hours before public)",
      "Members-only content & styling tips",
      "5% discount on all purchases",
      "Access to BANN digital community",
    ],
    badge: null,
    highlighted: false,
  },
  {
    name: "VICE CIRCLE",
    price: "₦15,770",
    priceUsd: "$10",
    period: "4 months (3 + 1 free)",
    tagline: "For those who wear what they mean",
    benefits: [
      "All VAULT PASS benefits",
      'Exclusive "Vice" pieces (not sold publicly)',
      "Quarterly free gift drops",
      "10% discount on selected collections",
      "Personalized styling recommendations",
      "Free shipping (within Lagos)",
    ],
    badge: "MOST POPULAR",
    highlighted: true,
  },
  {
    name: "BANN BLACK",
    price: "₦36,680",
    priceUsd: "$24",
    period: "4 months (3 + 1 free)",
    tagline: "Limited. Loud. Luxury.",
    benefits: [
      "All VAULT + VICE benefits",
      "Priority access to 1-of-1 pieces",
      "One premium piece free per year",
      "Free nationwide shipping",
      "Private event invites",
      "VIP store access",
    ],
    badge: "PREMIUM",
    highlighted: false,
  },
]

export function MembershipTiers() {
  return (
    <section className="px-4 mb-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`glitch-card relative bg-card border p-6 transition-all hover:scale-[1.02] ${
                tier.highlighted ? "border-accent shadow-lg shadow-accent/10" : "border-border"
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold flex items-center gap-1 hover-glitch ${
                    tier.badge === "PREMIUM" ? "bg-yellow-500 text-black" : "bg-accent text-accent-foreground"
                  }`}
                >
                  {tier.badge === "PREMIUM" ? <Crown size={12} /> : <Star size={12} />}
                  {tier.badge}
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6 pt-4">
                <h3 className="text-xl font-black mb-2 hover-glitch inline-block">
                  <AnimatedWord word={tier.name} />
                </h3>
                <p className="text-muted-foreground text-sm mb-4 hover-shake inline-block">{tier.tagline}</p>
                <div className="mb-2">
                  <span className="text-3xl font-black hover-glitch inline-block">
                    <AnimatedWord word={tier.price} />
                  </span>
                  <span className="text-muted-foreground text-sm ml-2">({tier.priceUsd})</span>
                </div>
                <p className="text-sm text-muted-foreground hover-shake inline-block">{tier.period}</p>
              </div>

              {/* Benefits */}
              <ul className="space-y-3 mb-6">
                {tier.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm group">
                    <Check size={16} className="text-accent shrink-0 mt-0.5 group-hover:animate-pulse" />
                    <span className="text-muted-foreground hover-shake inline-block cursor-pointer">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full font-bold glitch-button ${
                  tier.highlighted
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                <span className="hover-glitch inline-block">Join Now</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
