import { Mail, Flame, Inbox, Bot } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section id="features" className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl space-y-12 px-6">
                <h2 className="text-muted-foreground relative z-10 max-w-4xl text-balance text-4xl font-medium tracking-tight lg:text-5xl">
                    <span className="text-foreground">The hard parts are already built.</span> <br /> Campaigns, warmup, inbox, AI — wired together.
                </h2>
                <div className="relative -mx-6 overflow-hidden px-3 pt-3 md:-mx-8">
                    <div className="mask-radial-at-top-left mask-radial-from-65% mask-radial-[100%_60%] z-1 absolute inset-3 size-64 rounded-tl-3xl border-l border-t md:size-96 lg:inset-4"></div>
                    <div className="relative aspect-[2.5/1] mask-b-from-75% mask-b-to-95% overflow-hidden rounded-xl">
                        <Image
                            src="/home 3.png"
                            alt="Campaign management dashboard"
                            fill
                            sizes="100vw"
                            className="object-cover object-top"
                        />
                    </div>
                </div>
                <div className="max-sm:*:not-last:border-b max-sm:*:not-last:pb-3 mt-12 grid gap-3 *:max-w-xs sm:grid-cols-2 md:mt-16 md:gap-y-6 lg:mt-24 lg:grid-cols-4 lg:gap-6">
                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <Mail className="inline size-4 -translate-y-0.5 text-yellow-500" /> Campaign engine.
                        </span>{' '}
                        Multi-step sequences, A/B variants, spintax, mailbox rotation. Human-paced sending.
                    </p>

                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <Flame className="inline size-4 -translate-y-0.5 text-yellow-500" /> Warmup system.
                        </span>{' '}
                        Gradual ramp 5→15→30→full over 14 days. Pluggable provider interface.
                    </p>

                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <Inbox className="inline size-4 -translate-y-0.5 text-yellow-500" /> Unified inbox.
                        </span>{' '}
                        IMAP sync every 2 min, thread view, lead context, AI drafts. All in one place.
                    </p>

                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <Bot className="inline size-4 -translate-y-0.5 text-yellow-500" /> AI auto-replies.
                        </span>{' '}
                        OpenAI, Claude, Gemini, Groq. BYOK, per-campaign prompts, token budgets.
                    </p>
                </div>
            </div>
        </section>
    )
}
