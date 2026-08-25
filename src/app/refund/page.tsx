import type { Metadata } from "next"
import Link from "next/link"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Refund Policy | Cleanmails",
  description: "Cleanmails refund policy for paid subscriptions.",
}

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LegalNav />
      <article className="pb-16 pt-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Refund Policy</h1>
          <p className="text-muted-foreground mt-2 border-b pb-6 text-sm">Last updated: July 18, 2026</p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="mb-3 text-lg font-medium">Digital product notice</h2>
              <p className="text-muted-foreground leading-relaxed">Due to the nature of digital products and services, we are generally unable to offer refunds once access has been granted. The service cannot be "returned" to its original state after you have used it to send campaigns, connect mailboxes, or access platform features.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">Support commitment</h2>
              <p className="text-muted-foreground leading-relaxed">While refunds are not available, our support team is available every day to help resolve any issues you may encounter. We are committed to ensuring you get value from the platform. Contact us at <a href="mailto:support@coldmail.host" className="text-foreground underline underline-offset-2 hover:no-underline">support@coldmail.host</a> and we will work with you to address any problems.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">Cancellation</h2>
              <p className="text-muted-foreground leading-relaxed">You can cancel your subscription at any time from your dashboard. When you cancel, you retain access until the end of your current billing period. No further charges will be made after cancellation.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">Billing errors</h2>
              <p className="text-muted-foreground leading-relaxed">If you were charged incorrectly (duplicate charges, wrong plan, or charges after cancellation), contact support immediately and we will correct the error and issue a refund for any erroneous charges.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">Service outages</h2>
              <p className="text-muted-foreground leading-relaxed">In the event of extended service outages that significantly impact your ability to use the platform, we may offer account credits or service extensions on a case-by-case basis.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">Free plan</h2>
              <p className="text-muted-foreground leading-relaxed">The free plan has no associated charges. If the platform isn't meeting your needs, you can continue using the free tier or simply stop using the service.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">For any billing questions or support needs, reach us at <a href="mailto:support@coldmail.host" className="text-foreground underline underline-offset-2 hover:no-underline">support@coldmail.host</a>. We respond to all inquiries within 24 hours.</p>
            </section>
          </div>

          <LegalFooter />
        </div>
      </article>
    </div>
  )
}

function LegalNav() {
  return (
    <nav className="fixed top-0 z-20 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-foreground">
            <Send className="size-4 text-background" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Cleanmails</span>
        </Link>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </nav>
  )
}

function LegalFooter() {
  return (
    <div className="mt-12 flex gap-6 border-t pt-6">
      <Link href="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</Link>
      <Link href="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Service</Link>
      <Link href="/refund" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Refund Policy</Link>
    </div>
  )
}
