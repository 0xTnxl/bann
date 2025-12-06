import { Wallet, Bitcoin } from "lucide-react"

export function PaymentSection() {
  return (
    <section className="px-4">
      <div className="max-w-2xl mx-auto bg-card border border-border p-8">
        <h2 className="text-2xl font-black mb-6 text-center">Payment Options</h2>

        <div className="space-y-6">
          {/* Bank Transfer */}
          <div className="flex items-start gap-4 p-4 bg-muted/50 border border-border">
            <Wallet className="text-accent shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold mb-2">Bank Transfer</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>
                  <span className="text-foreground">Bank:</span> KUDA Bank
                </p>
                <p>
                  <span className="text-foreground">Name:</span> AWURU KENNETH OBIDI
                </p>
                <p>
                  <span className="text-foreground">Account:</span> 2079655642
                </p>
              </div>
            </div>
          </div>

          {/* Crypto */}
          <div className="flex items-start gap-4 p-4 bg-muted/50 border border-border">
            <Bitcoin className="text-accent shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold mb-2">Crypto (BTC)</h3>
              <p className="text-sm text-muted-foreground">Wallet address coming soon</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 border border-accent/30 bg-accent/5 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">Note:</span> Submit payment proof via email for activation
            within 24 hours.
          </p>
        </div>
      </div>
    </section>
  )
}
