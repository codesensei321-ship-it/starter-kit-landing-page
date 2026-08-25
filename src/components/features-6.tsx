import { Mail, Flame, Inbox, Bot } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section id="features" className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl space-y-12 px-6">
                <h2 className="text-muted-foreground relative z-10 max-w-4xl text-balance text-4xl font-medium tracking-tight lg:text-5xl">
                    <span className="text-foreground">Your cold email stack, built.</span> <br /> Campaigns, warmup, inbox — all included.
                </h2>
                <div className="relative -mx-6 overflow-hidden px-3 pt-3 md:-mx-8">
                    <div className="mask-radial-at-top-left mask-radial-from-65% mask-radial-[100%_60%] z-1 absolute inset-3 size-64 rounded-tl-3xl border-l border-t md:size-96 lg:inset-4"></div>
                    <div className="min-w-2xl aspect-88/36 mask-b-from-75% mask-b-to-95% relative">
                        <Image
                            src="/mail-upper.png"
                            className="absolute inset-0 z-10"
                            alt="payments illustration"
                            width={2797}
                            height={1137}
                        />
                        <Image
                            src="/mail-back.png"
                            alt="payments illustration"
                            width={2797}
                            height={1137}
                            className="opacity-75"
                        />
                    </div>
                </div>
                <div className="max-sm:*:not-last:border-b max-sm:*:not-last:pb-3 mt-12 grid gap-3 *:max-w-xs sm:grid-cols-2 md:mt-16 md:gap-y-6 lg:mt-24 lg:grid-cols-4 lg:gap-6">
                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <Mail className="inline size-4 -translate-y-0.5" /> Email campaigns.
                        </span>{' '}
                        Send personalized sequences with smart scheduling and throttling.
                    </p>

                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <Flame className="inline size-4 -translate-y-0.5" /> Mailbox warmup.
                        </span>{' '}
                        Automatically warm up your sending domains to maximize deliverability.
                    </p>

                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <Inbox className="inline size-4 -translate-y-0.5" /> Unified inbox.
                        </span>{' '}
                        All replies in one place. Never miss a hot lead again.
                    </p>

                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <Bot className="inline size-4 -translate-y-0.5" /> AI replies.
                        </span>{' '}
                        Let AI handle initial responses while you focus on closing.
                    </p>
                </div>
            </div>
        </section>
    )
}
