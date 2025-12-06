import { GraffitiBackground } from "@/components/graffiti-background"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <GraffitiBackground variant="about" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-balance">
            In the beginning
            <br />
            <span className="text-accent">was bann.</span>
          </h1>
        </div>

        {/* Brand Story */}
        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p className="text-foreground text-xl font-medium">BANN isn&apos;t a brand. It&apos;s a reckoning.</p>

          <p>
            A movement for those who understand that faith isn&apos;t fashion—it&apos;s warfare. That what you wear
            should cost something beyond money.
          </p>

          <p>
            We exist in the tension. Between the vault and the vice. Between who we show the world and who we hide from
            ourselves. Between faith that comforts and faith that cuts.
          </p>

          <p>
            Most fashion tells you who to be. BANN asks who you are when nobody&apos;s watching. When the lights go out.
            When the image cracks. That&apos;s where we live. That&apos;s where we build.
          </p>

          {/* Vault & Vice */}
          <div className="py-8 border-t border-b border-border my-12 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
            <h2 className="text-3xl font-black text-foreground mb-4">Vault & Vice</h2>
            <p>Our foundation—the duality of existence, the sacred and the profane, the armor and the wound.</p>
          </div>

          {/* Faith & Force */}
          <div className="py-8 border-b border-border mb-12 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-foreground/30 to-transparent" />
            <h2 className="text-3xl font-black text-foreground mb-4">Faith & Force</h2>
            <p className="mb-2">Our evolution—belief that demands action, conviction that costs everything.</p>
            <p className="text-sm text-accent font-medium">Coming December 2025</p>
          </div>

          <p>
            This is more than fabric. It&apos;s a flag. A signal. A gathering place for those who refuse to perform
            their faith or commodify their conviction.
          </p>

          <p className="text-2xl text-foreground font-black pt-8">
            Welcome to BANN.
            <br />
            <span className="text-accent">From the vault... for the vice.</span>
          </p>
        </div>
      </div>
    </div>
  )
}
