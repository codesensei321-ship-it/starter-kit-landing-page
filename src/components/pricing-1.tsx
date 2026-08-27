import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import PricingInfoButton from '@/components/pricing-info-button'

export default function Pricing() {
    return (
        <section id="pricing" className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-xl space-y-6 mb-12">
                    <h1 className="text-muted-foreground text-balance text-4xl font-medium tracking-tight lg:text-5xl">
                        <span className="text-foreground">One price.</span> Everything included.
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        What would you rather spend $597 on? Months of engineering time rebuilding auth, OAuth, Stripe, campaigns, inbox, warmup, AI, verification, webhooks, and deployment? Or start with the code and spend your time on what makes your product different?
                    </p>
                </div>

                <div className="grid gap-6 max-lg:mx-auto max-lg:max-w-lg lg:grid-cols-2">
                    <div className="bg-card rounded-2xl border p-8">
                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <p className="text-lg font-medium">Complete Source Code License</p>
                                <span className="text-xs bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full border border-yellow-500/20">LIMITED</span>
                            </div>
                            <p className="text-muted-foreground">One-time purchase. Full ownership. Ship your SaaS.</p>

                            <div className="my-8 flex items-baseline gap-3">
                                <span className="text-5xl font-medium tracking-tight">$597</span>
                                <span className="text-muted-foreground text-lg">one-time</span>
                                <PricingInfoButton />
                            </div>

                            <Button
                                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
                                size="lg"
                                nativeButton={false}
                                render={<Link href="https://checkout.dodopayments.com/buy/pdt_0NjkeAqOaqVH78qagQT2p?quantity=1&redirect_url=https://saas-starter.coldmail.host%2Fthank-you">Get the complete source code — $597</Link>}
                            />
                            
                            <p className="text-muted-foreground text-sm text-center mt-4">One payment. Full source. Commercial license. Lifetime updates.</p>
                        </div>

                        <ul className="text-muted-foreground list-outside space-y-3 mt-8 pt-8 border-t">
                            {[
                                'Complete Go + Next.js codebase',
                                'All 12 production modules',
                                'Database + migrations',
                                'Background workers',
                                'Docker deployment configs',
                                'Full documentation',
                                'Commercial license',
                                'Lifetime updates',
                                'Discord community access',
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <Check className="text-yellow-500 size-4" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="rounded-2xl border bg-card p-6">
                            <h3 className="font-medium mb-3">What happens after purchase?</h3>
                            <ol className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <span className="text-yellow-500 font-medium">1.</span>
                                    You get a GitHub invite to the private repo
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-yellow-500 font-medium">2.</span>
                                    Clone the repo from your private GitHub access
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-yellow-500 font-medium">3.</span>
                                    Follow the setup guide (takes ~30 minutes)
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-yellow-500 font-medium">4.</span>
                                    Deploy to your server and start customizing
                                </li>
                            </ol>
                        </div>
                        
                        <div className="rounded-2xl border bg-card p-6 flex-1">
                            <h3 className="font-medium mb-3">Why $597?</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                A single month of a senior developer costs $8,000-15,000. This codebase represents 3-6 months of focused development work.
                            </p>
                            <p className="text-muted-foreground text-sm">
                                You're not paying for a template. You're paying for production-tested infrastructure that lets you skip straight to building what makes your product unique.
                            </p>
                        </div>

                        <div className="rounded-2xl border bg-zinc-900/50 p-6">
                            <p className="text-sm text-muted-foreground">
                                <span className="text-foreground font-medium">Not sure yet?</span> Explore the live demo first. See exactly what you're getting before you commit.
                            </p>
                            <Button
                                variant="outline"
                                className="w-full mt-4"
                                nativeButton={false}
                                render={<Link href="https://product-demo.cleanmails.online/" target="_blank" rel="noopener noreferrer">Try the live demo</Link>}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
