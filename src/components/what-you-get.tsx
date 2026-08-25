import { Code2, Scale, Server, FileText, RefreshCw, Users } from 'lucide-react'

export default function WhatYouGet() {
    const items = [
        {
            icon: Code2,
            title: 'Complete source code',
            description: 'Go backend, Next.js frontend, Docker configs, Caddyfile, worker setup — delivered as a zip. No obfuscation.',
        },
        {
            icon: Scale,
            title: 'Commercial license',
            description: "Build and operate one production SaaS. Modify freely, deploy unlimited instances. You can't resell the source code itself.",
        },
        {
            icon: Server,
            title: 'Deploy-ready infra',
            description: 'Production Docker Compose, multi-stage Dockerfiles, Caddy with auto-SSL. Push to any VPS and go live.',
        },
        {
            icon: FileText,
            title: 'Full documentation',
            description: 'Architecture walkthrough, setup guide, API reference, and extending docs. Get shipping in hours, not weeks.',
        },
        {
            icon: RefreshCw,
            title: 'Lifetime updates',
            description: 'Every future release — new features, patches, improvements. Download the latest zip anytime, forever.',
        },
        {
            icon: Users,
            title: 'Community access',
            description: "Private community of builders using the kit. Share what you're building, get help, find collaborators.",
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-medium tracking-tight lg:text-5xl mb-4">What you get</h2>
                    <p className="text-muted-foreground text-lg">One purchase — everything you need to launch.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <div key={item.title} className="rounded-2xl border bg-card p-6 hover:border-yellow-500/30 transition-colors">
                            <div className="size-10 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4 ring-1 ring-yellow-500/20">
                                <item.icon className="size-5 text-yellow-500" />
                            </div>
                            <h3 className="font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
