import { Check, X } from 'lucide-react'

export default function LicenseClarity() {
    const canDo = [
        { text: 'Modify the source code', detail: 'Change anything and everything' },
        { text: 'Change all branding and UI', detail: 'Name, logo, colors, domain' },
        { text: 'Deploy on your infrastructure', detail: 'Any cloud, any VPS, self-hosted' },
        { text: 'Charge your customers', detail: 'Set your own pricing, keep 100%' },
        { text: 'Deploy multiple servers/instances', detail: 'Scale your SaaS however you need' },
        { text: 'Build for agency clients', detail: 'Deploy separate instances per client' },
    ]

    const cannotDo = [
        { text: 'Resell the source code', detail: 'Don\'t sell the starter kit itself' },
        { text: 'Redistribute the code', detail: 'Don\'t share the repo publicly' },
        { text: 'Sell it as a template', detail: 'Don\'t compete with us on the kit' },
    ]

    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Commercial license — no ambiguity</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        "One SaaS, unlimited instances" — what does that mean? Let me spell it out.
                    </p>
                </div>

                {/* License explanation */}
                <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-6 md:p-8 mb-8">
                    <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold mb-2">What the license actually means</h3>
                        <p className="text-muted-foreground">
                            Build and operate <span className="text-foreground font-medium">one SaaS product</span> using this source code. That product can have unlimited users, unlimited servers, unlimited revenue.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
                        <div className="bg-zinc-800/50 rounded-xl p-4">
                            <div className="text-2xl font-bold text-foreground mb-1">1</div>
                            <div className="text-muted-foreground">SaaS product you build</div>
                        </div>
                        <div className="bg-zinc-800/50 rounded-xl p-4">
                            <div className="text-2xl font-bold text-yellow-500 mb-1">∞</div>
                            <div className="text-muted-foreground">Servers & instances</div>
                        </div>
                        <div className="bg-zinc-800/50 rounded-xl p-4">
                            <div className="text-2xl font-bold text-yellow-500 mb-1">∞</div>
                            <div className="text-muted-foreground">Users & revenue</div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
                        <h3 className="font-semibold text-green-400 mb-5 flex items-center gap-2 text-lg">
                            <div className="size-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                <Check className="size-4" />
                            </div>
                            You CAN
                        </h3>
                        <ul className="space-y-4">
                            {canDo.map((item) => (
                                <li key={item.text} className="flex items-start gap-3">
                                    <Check className="size-4 text-green-500 shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-medium">{item.text}</span>
                                        <span className="text-muted-foreground text-sm block">{item.detail}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
                        <h3 className="font-semibold text-red-400 mb-5 flex items-center gap-2 text-lg">
                            <div className="size-6 rounded-full bg-red-500/20 flex items-center justify-center">
                                <X className="size-4" />
                            </div>
                            You CANNOT
                        </h3>
                        <ul className="space-y-4">
                            {cannotDo.map((item) => (
                                <li key={item.text} className="flex items-start gap-3">
                                    <X className="size-4 text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-medium">{item.text}</span>
                                        <span className="text-muted-foreground text-sm block">{item.detail}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-4 border-t border-red-500/10">
                            <p className="text-muted-foreground text-sm">
                                <span className="text-foreground font-medium">In plain English:</span> Build whatever you want with it, make as much money as you want, just don't resell our work as your own starter kit.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Agency clarification */}
                <div className="mt-8 bg-zinc-800/30 rounded-xl p-5 border border-zinc-700/50">
                    <p className="text-sm">
                        <span className="text-yellow-500 font-medium">For agencies:</span>{' '}
                        <span className="text-muted-foreground">
                            Yes, you can build and deploy instances for multiple clients. Each client deployment counts as part of your one SaaS product offering. You're building "YourAgency Email Platform" — and that platform can serve many clients.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}
