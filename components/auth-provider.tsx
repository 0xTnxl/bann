"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface User {
  email: string
  tier?: "vault" | "vice" | "black"
  expiryDate?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  signup: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, _password: string) => {
    // Simulated login
    setUser({
      email,
      tier: "vice",
      expiryDate: "2026-03-15",
    })
    return true
  }

  const signup = async (email: string, _password: string) => {
    // Simulated signup
    setUser({ email })
    return true
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
