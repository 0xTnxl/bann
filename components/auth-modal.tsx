"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/components/auth-provider"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const { login, signup } = useAuth()

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const success = mode === "login" ? await login(email, password) : await signup(email, password)

    if (success) {
      onClose()
      setEmail("")
      setPassword("")
    }
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-card border border-border p-8 w-full max-w-md mx-4 noise-texture">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-black mb-2">{mode === "login" ? "Welcome Back" : "Join BANN"}</h2>
        <p className="text-muted-foreground mb-6">
          {mode === "login" ? "Enter the vault." : "From the vault... for the vice."}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
          >
            {loading ? "Loading..." : mode === "login" ? "Enter" : "Join"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {mode === "login" ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  )
}
