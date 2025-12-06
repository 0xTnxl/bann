import { HeroSection } from "@/components/home/hero-section"
import { VaultViceSection } from "@/components/home/vault-vice-section"
import { EmailCaptureSection } from "@/components/home/email-capture-section"
import { GraffitiBackground } from "@/components/graffiti-background"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <GraffitiBackground />
      <HeroSection />
      <VaultViceSection />
      <EmailCaptureSection />
    </div>
  )
}
