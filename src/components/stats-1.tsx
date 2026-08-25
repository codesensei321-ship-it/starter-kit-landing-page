export default function StatsSection() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                    <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium tracking-tight lg:text-5xl">
                        <span className="text-foreground">Skip months of building.</span> <br /> Get production-ready code today.
                    </h2>
                    <div className="flex flex-col gap-32 md:mx-auto xl:gap-44">
                        <p className="text-muted-foreground text-balance text-lg">Why spend 6+ months building auth, payments, email infrastructure, and deployment from scratch? Get a complete, battle-tested codebase that handles all the boring stuff so you can focus on what makes your product unique.</p>

                        <div className="grid gap-12 md:grid-cols-3 md:gap-12">
                            <div className="space-y-3 border-t pt-6">
                                <div className="text-4xl font-semibold tracking-tight">Go</div>
                                <p className="text-muted-foreground">Fast, typed backend</p>
                            </div>
                            <div className="space-y-3 border-t pt-6">
                                <div className="text-4xl font-semibold tracking-tight">Next.js</div>
                                <p className="text-muted-foreground">Modern React frontend</p>
                            </div>
                            <div className="space-y-3 border-t pt-6">
                                <div className="text-4xl font-semibold tracking-tight">Docker</div>
                                <p className="text-muted-foreground">Deploy anywhere</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
