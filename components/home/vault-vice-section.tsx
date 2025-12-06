import Image from "next/image"

export function VaultViceSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-square bg-card border border-border overflow-hidden group">
            <Image
              src="/images/whatsapp-20image-202025-12-06-20at-201.jpeg"
              alt="BANN Vault & Vice - Graffiti style logo with spray paint"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">Vault & Vice</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The tension between who we show the world and who we hide. The sacred and the profane. The armor and the
              wound.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              This isn&apos;t just clothing. It&apos;s a reckoning. A movement for those who understand that faith
              isn&apos;t fashion—it&apos;s warfare.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-sm text-muted-foreground uppercase tracking-widest">Current Collection</span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
