export default function WhatYouProvide() {
    return (
        <section className="py-16 md:py-20 border-y border-zinc-800/50 bg-zinc-900/20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-3">What's NOT included</h2>
                    <p className="text-muted-foreground">You're buying the software — not an email sending service. Here's what you'll need to provide.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="rounded-2xl border bg-card p-6">
                        <h3 className="font-semibold mb-4 text-yellow-500">You provide</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-500">→</span>
                                <span><span className="text-foreground">SMTP/email provider</span> — Gmail, Outlook, AWS SES, Resend, etc.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-500">→</span>
                                <span><span className="text-foreground">Domains</span> — for sending, tracking, and your SaaS</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-500">→</span>
                                <span><span className="text-foreground">Server/VPS</span> — any cloud provider works (we include Docker configs)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-500">→</span>
                                <span><span className="text-foreground">AI API keys</span> — OpenAI, Claude, Gemini, etc. (only if you want AI features)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-500">→</span>
                                <span><span className="text-foreground">Stripe account</span> — for billing your customers</span>
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border bg-card p-6">
                        <h3 className="font-semibold mb-4 text-foreground">We provide</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="text-foreground">→</span>
                                <span><span className="text-foreground">The entire application</span> — backend, frontend, workers</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-foreground">→</span>
                                <span><span className="text-foreground">All integrations</span> — OAuth, Stripe, IMAP, SMTP, AI providers</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-foreground">→</span>
                                <span><span className="text-foreground">Deployment configs</span> — Docker, Caddy, environment templates</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-foreground">→</span>
                                <span><span className="text-foreground">Documentation</span> — setup, architecture, extending guides</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-foreground">→</span>
                                <span><span className="text-foreground">Lifetime updates</span> — every future release, forever</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-center text-muted-foreground text-sm mt-8">
                    This clarity prevents bad-fit purchases. If you're looking for a done-for-you email sending service, this isn't it.
                    <br />If you want to build and own your own platform, keep reading.
                </p>
            </div>
        </section>
    )
}
