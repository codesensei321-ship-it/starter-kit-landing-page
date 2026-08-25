import { Check, GitBranch, FolderGit2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
        <section className="py-16 md:py-24 bg-zinc-900/30">
            <div className="mx-auto max-w-7xl px-6">
                {/* Strong headline */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 mb-6">
                        <FolderGit2 className="size-4 text-yellow-500" />
                        <span className="text-sm text-yellow-500 font-medium">This is what you're actually buying</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
                        The complete application. <span className="text-muted-foreground">Not a tutorial. Not a template.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        You get private GitHub access to the same codebase that runs in production. Clone it, deploy it, build your SaaS on top of it.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* File tree mockup - NOW FIRST for immediate proof */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
                            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-950">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <div className="size-3 rounded-full bg-red-500/80"></div>
                                        <div className="size-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="size-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <span className="text-xs text-zinc-400 font-mono">cleanmails-starter-kit</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-zinc-500">
                                    <GitBranch className="size-3.5" />
                                    <span className="text-xs font-mono">main</span>
                                </div>
                            </div>
                            <div className="p-4 font-mono text-xs space-y-1 max-h-[480px] overflow-y-auto">
                                <div className="text-zinc-300 font-semibold mb-2">// The entire production codebase</div>
                                <div className="text-zinc-400">├── <span className="text-yellow-500">cmd/</span></div>
                                <div className="text-zinc-500 pl-4">├── api/main.go <span className="text-zinc-600">← API server entry</span></div>
                                <div className="text-zinc-500 pl-4">└── worker/main.go <span className="text-zinc-600">← Background jobs</span></div>
                                <div className="text-zinc-400">├── <span className="text-yellow-500">internal/</span></div>
                                <div className="text-zinc-500 pl-4">├── auth/ <span className="text-zinc-600">← JWT, sessions, RBAC</span></div>
                                <div className="text-zinc-500 pl-4">├── campaign/ <span className="text-zinc-600">← Sequences, scheduling</span></div>
                                <div className="text-zinc-500 pl-4">├── inbox/ <span className="text-zinc-600">← Unified inbox sync</span></div>
                                <div className="text-zinc-500 pl-4">├── mailbox/ <span className="text-zinc-600">← OAuth, IMAP/SMTP</span></div>
                                <div className="text-zinc-500 pl-4">├── warmup/ <span className="text-zinc-600">← Warmup engine</span></div>
                                <div className="text-zinc-500 pl-4">├── verification/ <span className="text-zinc-600">← Email validation</span></div>
                                <div className="text-zinc-500 pl-4">├── webhook/ <span className="text-zinc-600">← Event dispatching</span></div>
                                <div className="text-zinc-500 pl-4">├── billing/ <span className="text-zinc-600">← Stripe integration</span></div>
                                <div className="text-zinc-500 pl-4">└── ai/ <span className="text-zinc-600">← OpenAI, Claude, etc.</span></div>
                                <div className="text-zinc-400">├── <span className="text-yellow-500">frontend/</span></div>
                                <div className="text-zinc-500 pl-4">├── src/app/ <span className="text-zinc-600">← Next.js pages</span></div>
                                <div className="text-zinc-500 pl-4">├── src/components/ <span className="text-zinc-600">← UI components</span></div>
                                <div className="text-zinc-500 pl-4">├── src/lib/ <span className="text-zinc-600">← Utilities, hooks</span></div>
                                <div className="text-zinc-500 pl-4">└── package.json</div>
                                <div className="text-zinc-400">├── <span className="text-yellow-500">deploy/</span></div>
                                <div className="text-zinc-500 pl-4">├── docker-compose.yml</div>
                                <div className="text-zinc-500 pl-4">├── Caddyfile <span className="text-zinc-600">← Auto SSL</span></div>
                                <div className="text-zinc-500 pl-4">└── Dockerfile</div>
                                <div className="text-zinc-400">├── <span className="text-yellow-500">migrations/</span></div>
                                <div className="text-zinc-500 pl-4">└── *.sql <span className="text-zinc-600">← Full schema</span></div>
                                <div className="text-zinc-400">├── <span className="text-yellow-500">docs/</span></div>
                                <div className="text-zinc-500 pl-4">├── setup.md</div>
                                <div className="text-zinc-500 pl-4">├── architecture.md</div>
                                <div className="text-zinc-500 pl-4">└── api-reference.md</div>
                                <div className="text-zinc-300">├── .env.example</div>
                                <div className="text-zinc-300">├── Makefile</div>
                                <div className="text-zinc-300">└── README.md</div>
                            </div>
                            <div className="px-4 py-3 border-t border-zinc-800 bg-zinc-950/50">
                                <p className="text-xs text-zinc-500">~50,000 lines of production code. No obfuscation. No hidden dependencies.</p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                        <div className="space-y-6 mb-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-medium">Let me be direct.</h3>
                                <p className="text-muted-foreground">
                                    This isn't a hosted account you log into. It's not a subscription that disappears when you stop paying. It's not a template with half the features missing.
                                </p>
                                <p className="text-foreground font-medium text-lg">
                                    You're buying the complete source code for a production-ready cold-email SaaS. The same code that powers real businesses sending millions of emails.
                                </p>
                            </div>
                            
                            <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700/50">
                                <p className="text-sm text-muted-foreground">
                                    <span className="text-foreground font-medium">After purchase:</span> You get an email with a GitHub invitation. Accept it, clone the repo, and you have the entire application on your machine. That's it.
                                </p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Everything included:</h4>
                            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                                {included.map((item) => (
                                    <div key={item} className="flex items-center gap-2">
                                        <Check className="size-4 text-yellow-500 shrink-0" />
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
                                nativeButton={false}
                                render={<Link href="https://demo.coldmail.host" target="_blank" rel="noopener noreferrer">See it running — Live demo</Link>}
                            />
                            <Button
                                variant="outline"
                                nativeButton={false}
                                render={<Link href="#faq">Read the FAQ</Link>}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
