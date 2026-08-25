import { Check, X } from 'lucide-react'

export default function LicenseClarity() {
    const canDo = [
        'Modify the source code however you want',
        'Deploy your own SaaS product',
        'Change all branding and UI',
        'Deploy on your own infrastructure',
        'Use it commercially and charge customers',
        'Build multiple projects for your agency clients',
        'Deploy unlimited instances of your SaaS',
    ]

    const cannotDo = [
        'Resell the source code itself',
        'Redistribute the starter kit',
        'Sell the kit as a template/boilerplate',
        'Share the code publicly',
    ]

    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-4xl px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Commercial license — spelled out</h2>
                    <p className="text-muted-foreground text-lg">No legal ambiguity. Here's exactly what you can and can't do.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
                        <h3 className="font-semibold text-green-400 mb-4 flex items-center gap-2">
                            <Check className="size-5" /> You CAN
                        </h3>
                        <ul className="space-y-3">
                            {canDo.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm">
                                    <Check className="size-4 text-green-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
                        <h3 className="font-semibold text-red-400 mb-4 flex items-center gap-2">
                            <X className="size-5" /> You CANNOT
                        </h3>
                        <ul className="space-y-3">
                            {cannotDo.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm">
                                    <X className="size-4 text-red-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-muted-foreground text-xs mt-4 pt-4 border-t border-red-500/10">
                            Basically: build whatever you want with it, just don't resell our work as your own starter kit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
