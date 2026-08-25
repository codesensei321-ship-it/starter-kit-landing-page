import Link from 'next/link'
import { ArrowRight, Server } from 'lucide-react'

export default function SelfHostCTA() {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-3xl px-6">
                <Link 
                    href="https://coldmail.host" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-800 p-6 ring-1 ring-white/10 transition-all hover:ring-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/5">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 ring-1 ring-yellow-500/20">
                                    <Server className="size-6 text-yellow-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Want to self-host Cleanmails?</h3>
                                    <p className="text-muted-foreground text-sm mt-0.5">Deploy on your own servers with full control. Visit coldmail.host</p>
                                </div>
                            </div>
                            <ArrowRight className="size-5 text-muted-foreground group-hover:text-yellow-500 group-hover:translate-x-1 transition-all shrink-0" />
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}
