export function MembershipHero() {
  return (
    <section className="text-center px-4 mb-16 relative z-10">
      <div className="relative inline-block">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4">
          Unlock the Vault.
          <br />
          <span className="text-accent">Embrace the Vice.</span>
        </h1>
        {/* Spray paint underline effect */}
        <svg
          className="absolute -bottom-2 left-0 w-full h-4 opacity-30"
          viewBox="0 0 300 20"
          preserveAspectRatio="none"
        >
          <path
            d="M0 10 Q75 5 150 12 Q225 18 300 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-accent"
          />
        </svg>
      </div>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
        BANN is more than fashion—it&apos;s a movement. Join the circle that gets it first, gets it rare, and gets it
        real.
      </p>
    </section>
  )
}
