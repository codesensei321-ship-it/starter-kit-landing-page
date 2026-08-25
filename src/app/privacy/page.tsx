// Privacy Policy page. Customize the company name and contact details below.
// This is a template. Have a lawyer review it before going live.

import type { Metadata } from "next"
import Link from "next/link"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy | Cleanmails",
  description: "How Cleanmails collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LegalNav />
      <article className="pb-16 pt-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2 border-b pb-6 text-sm">Last updated: July 18, 2026</p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="mb-3 text-lg font-medium">1. Who we are</h2>
              <p className="text-muted-foreground leading-relaxed">Cleanmails ("we", "us", "our") operates this cold email platform. This policy explains how we handle your information when you use our service.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">2. What we collect</h2>
              <p className="text-muted-foreground mb-3 leading-relaxed">Information you provide:</p>
              <ul className="text-muted-foreground mb-4 list-disc space-y-1 pl-5">
                <li>Account details (name, email, password)</li>
                <li>Mailbox credentials you connect (encrypted at rest with AES-256-GCM)</li>
                <li>Lead data you upload (names, emails, custom fields)</li>
                <li>Email content you write (campaigns, replies)</li>
                <li>Payment information (processed by Stripe, we never see full card numbers)</li>
              </ul>
              <p className="text-muted-foreground mb-3 leading-relaxed">Information collected automatically:</p>
              <ul className="text-muted-foreground list-disc space-y-1 pl-5">
                <li>IP address, browser type, device info</li>
                <li>Pages visited and features used</li>
                <li>Email tracking events (opens, clicks) for campaigns you send</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">3. How we use it</h2>
              <ul className="text-muted-foreground mb-4 list-disc space-y-1 pl-5">
                <li>To provide and maintain the service</li>
                <li>To process your email campaigns and track performance</li>
                <li>To handle billing and subscription management</li>
                <li>To send important service updates and security notices</li>
                <li>To provide customer support</li>
                <li>To detect and prevent abuse of the platform</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">4. Data security</h2>
              <p className="text-muted-foreground leading-relaxed">All mailbox credentials and OAuth tokens are encrypted at rest using AES-256-GCM. We use HTTPS for all communications, implement rate limiting, and follow security best practices for credential storage. Access to production data is limited to essential personnel.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">5. Data retention</h2>
              <p className="text-muted-foreground leading-relaxed">Your data is retained as long as your account is active. If you delete your account, we remove your personal data within 30 days. Some data may be retained longer for legal compliance or fraud prevention.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">6. Third party services</h2>
              <p className="text-muted-foreground mb-3 leading-relaxed">We use the following third parties to operate the service:</p>
              <ul className="text-muted-foreground list-disc space-y-1 pl-5">
                <li>Stripe for payment processing</li>
                <li>Google/Microsoft OAuth for mailbox connections</li>
                <li>AI providers (OpenAI, Anthropic, Google, etc.) for auto-reply features, only when you enable them</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">7. Your rights</h2>
              <p className="text-muted-foreground leading-relaxed">You can request access to, correction of, or deletion of your personal data at any time by contacting support. You can export your lead data and campaign history from your dashboard.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">8. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">We use essential cookies to keep you logged in and remember your preferences. We use analytics cookies to understand how the platform is used. No advertising cookies are used.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">9. Changes</h2>
              <p className="text-muted-foreground leading-relaxed">We may update this policy as our service evolves. We will notify you of material changes via email or an in-app notice.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">10. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">Questions about this policy? Reach us at <a href="mailto:support@coldmail.host" className="text-foreground underline underline-offset-2 hover:no-underline">support@coldmail.host</a>.</p>
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
