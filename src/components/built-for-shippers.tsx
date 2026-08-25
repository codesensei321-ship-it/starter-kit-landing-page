import { Rocket, Building2, Code2, Zap } from 'lucide-react'

export default function BuiltForShippers() {
    const useCases = [
        {
            icon: Rocket,
            title: 'Launch a SaaS',
            description: "Put your own brand and pricing on top of the codebase. You're live in days, not months.",
        },
        {
            icon: Building2,
            title: 'Build for your agency',
            description: "Create your own outbound platform instead of paying monthly for someone else's tool.",
        },
        {
            icon: Code2,
            title: 'Build a product',
            description: 'Modify the code and turn the existing infrastructure into something uniquely yours.',
        },
        {
            icon: Zap,
            title: 'Skip the plumbing',
            description: 'Spend your engineering time on differentiation, not auth, billing, and email infrastructure.',
        },
    ]

    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Built for people who want to ship</h2>
                    <p className="text-muted-foreground text-lg">Not for people who want to tinker forever. For people who want to launch.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {useCases.map((item) => (
                        <div key={item.title} className="rounded-2xl border bg-card p-6 hover:border-yellow-500/30 transition-colors">
                            <div className="size-10 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4 ring-1 ring-yellow-500/20">
                                <item.icon className="size-5 text-yellow-500" />
                            </div>
                            <h3 className="font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
