import type { Metadata } from "next"
import Link from "next/link"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Terms of Service | Cleanmails",
  description: "Terms and conditions for using the Cleanmails platform.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LegalNav />
      <article className="pb-16 pt-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Terms of Service</h1>
          <p className="text-muted-foreground mt-2 border-b pb-6 text-sm">Last updated: July 18, 2026</p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="mb-3 text-lg font-medium">1. Acceptance</h2>
              <p className="text-muted-foreground leading-relaxed">By creating an account or using Cleanmails, you agree to these terms. If you don't agree, don't use the service.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">2. The service</h2>
              <p className="text-muted-foreground leading-relaxed">Cleanmails is a cold email outreach platform that provides campaign automation, mailbox management, email warmup, unified inbox, and related tools. We provide the software; you are responsible for how you use it.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">3. Your account</h2>
              <ul className="text-muted-foreground list-disc space-y-1 pl-5">
                <li>You must provide accurate information when signing up</li>
                <li>You are responsible for keeping your login credentials secure</li>
                <li>One person or entity per account (no sharing accounts)</li>
                <li>You must be 18 or older to use the service</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">4. Acceptable use</h2>
              <p className="text-muted-foreground mb-3 leading-relaxed">You agree to:</p>
              <ul className="text-muted-foreground mb-4 list-disc space-y-1 pl-5">
                <li>Comply with CAN-SPAM, GDPR, and other applicable email regulations</li>
                <li>Only send to recipients who have a legitimate business reason to be contacted</li>
                <li>Honor unsubscribe requests immediately</li>
                <li>Not send malware, phishing, or deceptive content</li>
                <li>Not use the platform for spam (unsolicited bulk email to purchased lists)</li>
                <li>Not scrape or harvest email addresses for use on the platform</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">We reserve the right to suspend or terminate accounts that violate these rules.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">5. Data ownership</h2>
              <p className="text-muted-foreground leading-relaxed">You own your data. Your leads, campaigns, email content, and analytics belong to you. We don't claim any ownership over content you create or upload. You can export your data at any time.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">6. Service availability</h2>
              <p className="text-muted-foreground leading-relaxed">We aim for high uptime but don't guarantee 100% availability. We may perform maintenance that temporarily interrupts the service. We'll notify you in advance when possible.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">7. Billing</h2>
              <ul className="text-muted-foreground list-disc space-y-1 pl-5">
                <li>Paid plans are billed monthly via Stripe</li>
                <li>You can upgrade, downgrade, or cancel at any time from your dashboard</li>
                <li>Downgrades take effect at the end of your current billing period</li>
                <li>We don't offer prorated refunds for partial months (see our refund policy)</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">8. Limitation of liability</h2>
              <p className="text-muted-foreground leading-relaxed">Cleanmails is provided "as is". We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability is limited to the amount you paid us in the 12 months preceding the claim.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">9. Email deliverability</h2>
              <p className="text-muted-foreground leading-relaxed">We provide tools to help with deliverability (warmup, verification, tracking domains) but we cannot guarantee that your emails will reach every inbox. Deliverability depends on many factors outside our control including your content, sending history, and recipient mail servers.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">10. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">You can delete your account at any time. We may terminate your account if you violate these terms, engage in abusive sending practices, or fail to pay. On termination, your data will be deleted within 30 days.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">11. Changes</h2>
              <p className="text-muted-foreground leading-relaxed">We may update these terms. Material changes will be communicated via email. Continued use after changes constitutes acceptance.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">12. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">Questions? Reach us at <a href="mailto:support@coldmail.host" className="text-foreground underline underline-offset-2 hover:no-underline">support@coldmail.host</a>.</p>
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
