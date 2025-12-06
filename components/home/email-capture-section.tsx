"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function EmailCaptureSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight">Stay in the Circle</h2>
        <p className="text-muted-foreground mb-8">
          Get exclusive drops, member content, and first access to new collections.
        </p>

        {submitted ? (
          <div className="bg-card border border-accent p-6">
            <p className="text-accent font-bold">Welcome to the circle.</p>
            <p className="text-muted-foreground text-sm mt-2">Watch your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-input border-border text-foreground placeholder:text-muted-foreground h-12"
            />
            <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 px-8">
              Join
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
