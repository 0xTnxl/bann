"use client"

export function GraffitiBackground({ variant = "default" }: { variant?: "default" | "about" | "membership" }) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Spray paint drips - left side */}
      <svg
        className="absolute left-0 top-0 h-full w-32 opacity-20 animate-drip"
        viewBox="0 0 100 800"
        preserveAspectRatio="none"
      >
        <path
          d="M10 0 L10 200 Q10 220 15 240 L15 350 Q15 380 10 400 L10 500 Q10 550 20 600 L20 700 Q20 750 15 800"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-foreground/30"
        />
        <path
          d="M30 100 L30 250 Q30 280 25 320 L25 450 Q25 500 35 550 L35 800"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-accent/40"
        />
        <circle cx="10" cy="200" r="8" className="fill-foreground/20" />
        <circle cx="30" cy="320" r="6" className="fill-accent/30" />
        <circle cx="15" cy="550" r="10" className="fill-foreground/15" />
      </svg>

      {/* Spray paint drips - right side */}
      <svg
        className="absolute right-0 top-0 h-full w-32 opacity-20 animate-drip"
        style={{ animationDelay: "1s" }}
        viewBox="0 0 100 800"
        preserveAspectRatio="none"
      >
        <path
          d="M90 50 L90 300 Q90 330 85 360 L85 500 Q85 550 90 600 L90 800"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-foreground/30"
        />
        <path
          d="M70 0 L70 150 Q70 180 75 220 L75 400 Q75 450 70 500 L70 650 Q70 700 75 800"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-accent/40"
        />
        <circle cx="90" cy="300" r="7" className="fill-foreground/20" />
        <circle cx="75" cy="500" r="5" className="fill-accent/25" />
      </svg>

      {/* Graffiti tag elements - top left */}
      <svg className="absolute top-20 left-10 w-48 h-32 opacity-10 animate-tag-float" viewBox="0 0 200 100">
        <text
          x="10"
          y="60"
          className="fill-foreground"
          style={{
            fontFamily: "Arial Black, sans-serif",
            fontSize: "36px",
            fontWeight: 900,
            letterSpacing: "-2px",
          }}
        >
          BANN
        </text>
        <path
          d="M5 70 Q50 75 100 70 Q150 65 195 72"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-accent/50"
        />
      </svg>

      {/* Graffiti splatter - bottom left */}
      <svg className="absolute bottom-40 left-20 w-64 h-64 opacity-10 animate-splatter" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="40" className="fill-accent/30" />
        <circle cx="60" cy="80" r="15" className="fill-foreground/20" />
        <circle cx="140" cy="70" r="12" className="fill-accent/25" />
        <circle cx="130" cy="140" r="18" className="fill-foreground/15" />
        <circle cx="50" cy="130" r="10" className="fill-accent/20" />
        <circle cx="85" cy="50" r="8" className="fill-foreground/25" />
        <circle cx="150" cy="110" r="6" className="fill-accent/30" />
      </svg>

      {/* Spray can marks - bottom right */}
      <svg className="absolute bottom-20 right-20 w-48 h-48 opacity-15 animate-spray" viewBox="0 0 150 150">
        <ellipse cx="75" cy="75" rx="60" ry="50" className="fill-foreground/10" />
        <ellipse cx="75" cy="75" rx="40" ry="30" className="fill-foreground/15" />
        <ellipse cx="75" cy="75" rx="20" ry="15" className="fill-foreground/20" />
      </svg>

      {/* X marks and crosses */}
      <svg
        className="absolute top-1/3 right-32 w-24 h-24 opacity-10 animate-tag-float"
        style={{ animationDelay: "2s" }}
        viewBox="0 0 100 100"
      >
        <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="4" className="text-accent" />
        <line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="4" className="text-accent" />
      </svg>

      {/* Arrow/directional graffiti */}
      <svg
        className="absolute top-1/2 left-16 w-32 h-16 opacity-10 animate-spray"
        style={{ animationDelay: "3s" }}
        viewBox="0 0 150 50"
      >
        <path
          d="M10 25 L100 25 L85 10 M100 25 L85 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-foreground"
        />
      </svg>

      {/* Stars/bursts */}
      <svg className="absolute top-1/4 right-1/4 w-20 h-20 opacity-10 animate-flicker" viewBox="0 0 100 100">
        <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" className="fill-accent/40" />
      </svg>

      {variant === "about" && (
        <>
          {/* Extra graffiti for about page */}
          <svg
            className="absolute top-40 right-1/3 w-40 h-20 opacity-8 animate-tag-float"
            style={{ animationDelay: "1.5s" }}
            viewBox="0 0 200 60"
          >
            <text
              x="10"
              y="40"
              className="fill-muted-foreground"
              style={{
                fontFamily: "Impact, sans-serif",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              VAULT
            </text>
          </svg>
          <svg
            className="absolute bottom-1/3 left-1/4 w-40 h-20 opacity-8 animate-tag-float"
            style={{ animationDelay: "2.5s" }}
            viewBox="0 0 200 60"
          >
            <text
              x="10"
              y="40"
              className="fill-accent/50"
              style={{
                fontFamily: "Impact, sans-serif",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              VICE
            </text>
          </svg>
        </>
      )}

      {variant === "membership" && (
        <>
          {/* Crown graffiti for membership */}
          <svg
            className="absolute top-32 left-1/3 w-24 h-24 opacity-10 animate-spray"
            style={{ animationDelay: "0.5s" }}
            viewBox="0 0 100 100"
          >
            <path
              d="M10 70 L10 40 L30 55 L50 30 L70 55 L90 40 L90 70 Z"
              className="fill-accent/30 stroke-accent/50"
              strokeWidth="2"
            />
          </svg>
          {/* Dollar sign */}
          <svg
            className="absolute bottom-1/4 right-1/3 w-16 h-24 opacity-10 animate-tag-float"
            style={{ animationDelay: "1.8s" }}
            viewBox="0 0 60 100"
          >
            <text
              x="10"
              y="70"
              className="fill-foreground/30"
              style={{
                fontFamily: "Arial Black, sans-serif",
                fontSize: "60px",
                fontWeight: 900,
              }}
            >
              $
            </text>
          </svg>
        </>
      )}

      {/* Brick texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 0%, transparent 49%, rgba(255,255,255,0.1) 50%, transparent 51%, transparent 100%),
            linear-gradient(0deg, transparent 0%, transparent 49%, rgba(255,255,255,0.1) 50%, transparent 51%, transparent 100%)
          `,
          backgroundSize: "60px 30px",
        }}
      />
    </div>
  )
}
