import { Check } from 'lucide-react'

export default function WhatYoureBuying() {
    const included = [
        'Complete Go backend',
        'Complete Next.js frontend',
        'Database + migrations',
        'Background workers',
        'Auth + RBAC',
        'Google/Microsoft OAuth',
        'Stripe billing',
        'Campaign engine',
        'Mailbox management',
        'Warmup system',
        'Unified inbox',
        'AI integrations',
        'Email verification',
        'Webhooks',
        'Open & click tracking',
        'Docker deployment',
        'Full documentation',
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                            What you're actually buying
                        </h2>
                        
                        <div className="space-y-4 mb-8">
                            <p className="text-muted-foreground text-lg">
                                Let me be direct. This isn't a hosted account you log into. It's not a subscription that disappears when you stop paying. It's not a template with half the features missing.
                            </p>
                            <p className="text-foreground text-lg font-medium">
                                You're buying the complete source code. The same code that runs in production. Clone the repo, deploy it, modify it, make it yours.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                            {included.map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <Check className="size-4 text-yellow-500 shrink-0" />
                                    <span className="text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* File tree mockup */}
                    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                            <div className="flex gap-1.5">
                                <div className="size-3 rounded-full bg-red-500/60"></div>
                                <div className="size-3 rounded-full bg-yellow-500/60"></div>
                                <div className="size-3 rounded-full bg-green-500/60"></div>
                            </div>
                            <span className="text-xs text-zinc-500 ml-2">cleanmails-starter-kit</span>
                        </div>
                        <div className="p-4 font-mono text-xs space-y-1 max-h-[420px] overflow-y-auto">
                            <div className="text-zinc-400">├── <span className="text-yellow-500">cmd/</span></div>
                            <div className="text-zinc-500 pl-4">├── api/main.go</div>
                            <div className="text-zinc-500 pl-4">└── worker/main.go</div>
                            <div className="text-zinc-400">├── <span className="text-yellow-500">internal/</span></div>
                            <div className="text-zinc-500 pl-4">├── auth/</div>
                            <div className="text-zinc-500 pl-4">├── campaign/</div>
                            <div className="text-zinc-500 pl-4">├── inbox/</div>
                            <div className="text-zinc-500 pl-4">├── mailbox/</div>
                            <div className="text-zinc-500 pl-4">├── warmup/</div>
                            <div className="text-zinc-500 pl-4">├── verification/</div>
                            <div className="text-zinc-500 pl-4">├── webhook/</div>
                            <div className="text-zinc-500 pl-4">├── billing/</div>
                            <div className="text-zinc-500 pl-4">└── ai/</div>
                            <div className="text-zinc-400">├── <span className="text-yellow-500">frontend/</span></div>
                            <div className="text-zinc-500 pl-4">├── src/app/</div>
                            <div className="text-zinc-500 pl-4">├── src/components/</div>
                            <div className="text-zinc-500 pl-4">├── src/lib/</div>
                            <div className="text-zinc-500 pl-4">└── package.json</div>
                            <div className="text-zinc-400">├── <span className="text-yellow-500">deploy/</span></div>
                            <div className="text-zinc-500 pl-4">├── docker-compose.yml</div>
                            <div className="text-zinc-500 pl-4">├── Caddyfile</div>
                            <div className="text-zinc-500 pl-4">└── Dockerfile</div>
                            <div className="text-zinc-400">├── <span className="text-yellow-500">migrations/</span></div>
                            <div className="text-zinc-500 pl-4">└── *.sql</div>
                            <div className="text-zinc-400">├── <span className="text-yellow-500">docs/</span></div>
                            <div className="text-zinc-500 pl-4">├── setup.md</div>
                            <div className="text-zinc-500 pl-4">├── architecture.md</div>
                            <div className="text-zinc-500 pl-4">└── api-reference.md</div>
                            <div className="text-zinc-300">├── .env.example</div>
                            <div className="text-zinc-300">├── Makefile</div>
                            <div className="text-zinc-300">└── README.md</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
