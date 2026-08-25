import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { HeroHeader } from '@/components/hero-section-6-header'
import LogoCloud from '@/components/hero-section-7-logo-cloud'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />

            <main>
                <section className="overflow-hidden">
                    <div className="relative pt-20 md:pt-28 lg:pb-16 xl:pt-36">
                        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
                            <div>
                                <Link
                                    href="/"
                                    className="flex w-fit items-center gap-2 font-medium">
                                    <span className="text-sm">Go + Next.js</span>
                                    <span className="text-muted-foreground text-sm">Production-ready cold email SaaS</span>

                                    <ArrowRight className="size-3.5" />
                                </Link>

                                <div className="mt-8 flex max-w-lg flex-col gap-4">
                                    <h1 className="text-balance text-4xl font-medium tracking-tight md:text-5xl">
                                        Stop spending months building your SaaS. <span className="text-muted-foreground">Start with the code.</span>
                                    </h1>

                                    <div className="flex max-w-lg flex-col gap-6">
                                        <p className="text-muted-foreground">The complete source code for a production-ready cold-email SaaS. Campaigns. Mailbox warmup. Unified inbox. AI replies. Stripe. OAuth. Auth. Verification. Webhooks. Docker deployment.</p>

                                        <p className="text-2xl font-semibold">$997 once. <span className="text-muted-foreground text-lg font-normal">No subscription. No locked platform. You own the source code.</span></p>

                                        <div className="flex gap-3">
                                            <Button
                                                className="w-fit bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
                                                nativeButton={false}
                                                render={<Link href="https://checkout.dodopayments.com/session/cks_0Nm8Yo2JKvBC9v0pKZQ7x">Buy now ($997)</Link>}
                                            />
                                        </div>

                                        <p className="text-muted-foreground text-sm">Build your brand on top of it. Modify everything. Deploy it anywhere. Ship sooner.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:aspect-5/3 lg:aspect-5/4 relative aspect-square overflow-hidden rounded-3xl lg:ml-auto lg:max-w-xl">
                                <div className="bg-background min-w-3xl ring-foreground/6.5 before:mask-radial-at-top-left before:mask-radial-from-65% before:mask-radial-[100%_60%] before:ring-foreground before:border-foreground/10 absolute left-6 top-6 z-10 rounded-2xl p-2 shadow-lg ring before:absolute before:-inset-px before:z-10 before:size-56 before:rounded-tl-2xl before:border-l before:border-t lg:left-8 lg:top-8">
                                    <div
                                        aria-hidden
                                        className="bg-foreground/2 z-1 absolute inset-0 rounded-2xl"
                                    />
                                    <Image
                                        className="bg-background aspect-15/8 relative rounded-2xl object-cover object-top"
                                        src="/home.png"
                                        alt="Cleanmails Dashboard"
                                        width="2700"
                                        height="1440"
                                    />
                                </div>

                                <Image
                                    src="https://images.unsplash.com/photo-1772037440088-2ef162671434?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="background"
                                    width={1313}
                                    height={1000}
                                    sizes="(max-width: 768px) 100vw, 720px"
                                    className="size-full rotate-180 rounded-3xl object-cover object-bottom"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <LogoCloud />
            </main>
        </>
    )
}
