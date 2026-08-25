export default function VideoSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-semibold tracking-tight md:text-4xl mb-4">See it in action</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Watch a quick walkthrough of the Cleanmails dashboard and features.</p>
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-2xl">
                    <iframe
                        src="https://player.vimeo.com/video/1234567890?h=abc123&title=0&byline=0&portrait=0"
                        className="absolute inset-0 w-full h-full"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    />
                    {/* Placeholder until real video is added */}
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                        <div className="text-center">
                            <div className="size-20 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-4 ring-1 ring-yellow-500/20">
                                <svg className="size-8 text-yellow-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <p className="text-muted-foreground text-sm">Video coming soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
