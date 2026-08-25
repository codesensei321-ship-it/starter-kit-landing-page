export default function WhatsBuiltIn() {
    const features = [
        {
            number: '01',
            title: 'Built-in JWT auth & RBAC',
            description: 'Register, login, role-based access (4 roles), workspace isolation — no third-party auth needed.',
        },
        {
            number: '02',
            title: 'Google & Microsoft OAuth',
            description: 'One-click mailbox connection via XOAUTH2. Token refresh, encrypted storage, zero user friction.',
        },
        {
            number: '03',
            title: 'Stripe billing integration',
            description: 'Checkout Sessions, Customer Portal, webhook lifecycle, plan limits, feature gating — production-ready.',
        },
        {
            number: '04',
            title: 'Campaign sequences',
            description: 'Multi-step with delays, A/B variants, spintax, mailbox rotation. Human-paced sending (30–90s gaps).',
        },
        {
            number: '05',
            title: 'Email warmup system',
            description: 'Gradual ramp 5→15→30→full over 14 days. Pluggable provider interface — connect any warmup pool.',
        },
        {
            number: '06',
            title: 'Unified inbox (IMAP sync)',
            description: 'Sync every 2 min, thread view, lead context sidebar, AI drafts, quick actions. All in one place.',
        },
        {
            number: '07',
            title: 'AI auto-replies (6 providers)',
            description: 'OpenAI, Claude, Gemini, Groq, OpenRouter. BYOK, per-campaign prompts, daily token budgets.',
        },
        {
            number: '08',
            title: 'AES-256-GCM encryption',
            description: 'All credentials encrypted at rest. SMTP passwords, OAuth tokens, API keys — never stored in plaintext.',
        },
        {
            number: '09',
            title: '7-step email verification',
            description: 'RFC syntax → disposable (33k+) → role-based → free → MX → SMTP check → Gravatar. Built-in pipeline.',
        },
        {
            number: '10',
            title: 'Webhooks & integrations',
            description: '9 event types, HMAC-SHA256 signed. Slack, Discord, Telegram notifications. Retry with backoff.',
        },
        {
            number: '11',
            title: 'Custom tracking domains',
            description: 'Open pixel, click wrapping, CNAME verification, unsubscribe with HMAC tokens. CAN-SPAM compliant.',
        },
        {
            number: '12',
            title: 'Docker + Caddy deploy',
            description: 'Production Docker Compose, multi-stage builds, Caddy reverse proxy with auto-SSL. Deploy in minutes.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <h2 className="text-4xl font-medium tracking-tight lg:text-5xl">What's built in</h2>
                    <p className="text-muted-foreground text-lg max-w-md md:text-right">
                        <span className="text-yellow-500">12 production modules</span> you'd otherwise spend months building from scratch.
                    </p>
                </div>

                <div className="rounded-2xl border divide-y">
                    {/* Row 1 */}
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
                        {features.slice(0, 3).map((feature) => (
                            <FeatureCard key={feature.number} {...feature} />
                        ))}
                    </div>
                    {/* Row 2 */}
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
                        {features.slice(3, 6).map((feature) => (
                            <FeatureCard key={feature.number} {...feature} />
                        ))}
                    </div>
                    {/* Row 3 */}
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
                        {features.slice(6, 9).map((feature) => (
                            <FeatureCard key={feature.number} {...feature} />
                        ))}
                    </div>
                    {/* Row 4 */}
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
                        {features.slice(9, 12).map((feature) => (
                            <FeatureCard key={feature.number} {...feature} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function FeatureCard({ number, title, description }: { number: string; title: string; description: string }) {
    return (
        <div className="p-6 md:p-8">
            <span className="text-yellow-500 text-sm font-medium">{number}</span>
            <h3 className="font-semibold mt-3 mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
    )
}
