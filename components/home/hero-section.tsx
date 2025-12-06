"use client"

import Link from "next/link"
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

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-texture grid-texture">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />

      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
      <div className="absolute right-8 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 text-balance">
          <span className="hover-shake">
            <AnimatedWord word="In" />
          </span>{" "}
          <span className="hover-shake">
            <AnimatedWord word="the" />
          </span>{" "}
          <span className="hover-glitch">
            <AnimatedWord word="beginning" />
          </span>
          <br />
          <span className="hover-spray text-accent">
            <AnimatedWord word="was" className="text-accent" />
          </span>{" "}
          <span className="hover-glitch text-accent inline-block hover:scale-110 transition-transform duration-300">
            <AnimatedWord word="bann." className="text-accent" />
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 font-medium">
          <span className="hover-shake inline-block">From the vault...</span>{" "}
          <span className="hover-shake inline-block">for the vice</span>
        </p>

        <Link href="/membership">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-10 py-6 h-auto transition-all hover:scale-105 hover:animate-[shake_0.5s_ease-in-out]"
          >
            Unlock the Movement
          </Button>
        </Link>
      </div>
    </section>
  )
}
