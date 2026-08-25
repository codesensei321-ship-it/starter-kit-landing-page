import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export default function Pricing() {
    return (
        <section id="pricing" className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-sm space-y-6">
                    <h1 className="text-muted-foreground text-balance text-4xl font-medium tracking-tight lg:text-5xl">
                        <span className="text-foreground">Simple pricing.</span> Own everything.
                    </h1>
                </div>

                <div className="mt-12 grid gap-1.5 border *:p-6 max-lg:mx-auto max-lg:max-w-sm lg:mt-20 lg:grid-cols-2">
                    <div className="bg-card flex flex-col gap-8 lg:border-r">
                        <div>
                            <p className="text-lg font-medium">Source Code License</p>
                            <p className="text-muted-foreground text-lg font-medium">One-time purchase. Full ownership.</p>

                            <div className="my-8 block text-4xl font-medium tracking-tight">
                                $997 <span className="text-muted-foreground text-lg">one-time</span>
                            </div>

                            <Button
                                className="w-full"
                                nativeButton={false}
                                render={<Link href="https://checkout.dodopayments.com/session/cks_0Nm8Yo2JKvBC9v0pKZQ7x">Buy now ($997)</Link>}
                            />
                        </div>

                        <ul className="text-muted-foreground list-outside space-y-3">
                            {[
                                'Complete Go + Next.js codebase',
                                'Email campaign management',
                                'Mailbox warmup system',
                                'Unified inbox',
                                'AI-powered replies',
                                'Stripe billing integration',
                                'Google & Microsoft OAuth',
                                'Email verification',
                                'Webhook handlers',
                                'Docker deployment ready',
                                'Lifetime updates',
                                'Discord community access',
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <Check className="text-muted-foreground size-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div>
                            <p className="text-lg font-medium">What you get</p>
                            <p className="text-muted-foreground text-lg font-medium">Everything to launch your SaaS</p>

                            <div className="my-8 space-y-4">
                                <p className="text-muted-foreground">
                                    <span className="text-foreground font-medium">No recurring fees.</span> Pay once, own forever. No monthly subscriptions, no usage limits, no vendor lock-in.
                                </p>
                                <p className="text-muted-foreground">
                                    <span className="text-foreground font-medium">Deploy anywhere.</span> Your servers, your rules. AWS, GCP, DigitalOcean, or your own hardware.
                                </p>
                                <p className="text-muted-foreground">
                                    <span className="text-foreground font-medium">Modify everything.</span> Full source code access. Add features, change the UI, integrate with your tools.
                                </p>
                                <p className="text-muted-foreground">
                                    <span className="text-foreground font-medium">Build your brand.</span> White-label ready. Remove all traces and make it 100% yours.
                                </p>
                            </div>

                            <Button
                                className="w-full"
                                variant="outline"
                                nativeButton={false}
                                render={<Link href="https://checkout.dodopayments.com/session/cks_0Nm8Yo2JKvBC9v0pKZQ7x">Buy now ($997)</Link>}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
