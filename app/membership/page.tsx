import { MembershipHero } from "@/components/membership/membership-hero"
import { MembershipTiers } from "@/components/membership/membership-tiers"
import { PaymentSection } from "@/components/membership/payment-section"
import { GraffitiBackground } from "@/components/graffiti-background"

export default function MembershipPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <GraffitiBackground variant="membership" />
      <MembershipHero />
      <MembershipTiers />
      <PaymentSection />
    </div>
  )
}
