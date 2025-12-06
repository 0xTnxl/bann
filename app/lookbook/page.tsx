import { LookbookGallery } from "@/components/lookbook/lookbook-gallery"

export default function LookbookPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4">Lookbook</h1>
          <p className="text-muted-foreground text-lg">Visual stories from the vault.</p>
        </div>

        {/* Vault & Vice Collection */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-black">Vault & Vice</h2>
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm text-accent uppercase tracking-wider">Current</span>
          </div>
          <LookbookGallery collection="vault-vice" />
        </section>

        {/* Faith & Force Coming Soon */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-black">Faith & Force</h2>
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Dec 2025</span>
          </div>
          <div className="bg-card border border-border p-12 text-center">
            <p className="text-muted-foreground text-lg mb-2">Coming December 2025</p>
            <p className="text-sm text-muted-foreground">Belief that demands action. Faith as armor, not costume.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
