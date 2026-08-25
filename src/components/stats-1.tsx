import Image from 'next/image'

export default function StatsSection() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                    <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium tracking-tight lg:text-5xl">
                        <span className="text-foreground">Skip the boring 3–6 months.</span> <br /> Start with working code.
                    </h2>
                    <div className="flex flex-col gap-32 md:mx-auto xl:gap-44">
                        <p className="text-muted-foreground text-balance text-lg">You shouldn't have to build auth, OAuth, billing, email infrastructure, inbox sync and deployment before you can even test your SaaS idea. That's months of work before you write a single line of code that makes you different.</p>

                        <div className="grid gap-12 md:grid-cols-3 md:gap-12">
                            <div className="space-y-4 border-t pt-6">
                                <Image
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
                                    alt="Go"
                                    width={80}
                                    height={80}
                                    className="h-12 w-auto"
                                />
                                <p className="text-muted-foreground">Fast, typed backend</p>
                            </div>
                            <div className="space-y-4 border-t pt-6">
                                <Image
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                                    alt="Next.js"
                                    width={80}
                                    height={80}
                                    className="h-12 w-auto invert"
                                />
                                <p className="text-muted-foreground">Modern React frontend</p>
                            </div>
                            <div className="space-y-4 border-t pt-6">
                                <Image
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
                                    alt="Docker"
                                    width={80}
                                    height={80}
                                    className="h-12 w-auto"
                                />
                                <p className="text-muted-foreground">Deploy anywhere</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
