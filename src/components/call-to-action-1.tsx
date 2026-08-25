import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-balance text-4xl font-semibold tracking-tight lg:text-5xl">Stop building plumbing. Start building product.</h2>
                    
                    <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg">
                        The infrastructure is done. The integrations work. The deployment is ready. You just need to make it yours.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                        <Button
                            size="lg"
                            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
                            nativeButton={false}
                            render={<Link href="https://checkout.dodopayments.com/session/cks_0Nm8Yo2JKvBC9v0pKZQ7x">Get the complete source code — $997</Link>}
                        />
                        <Button
                            size="lg"
                            variant="outline"
                            nativeButton={false}
                            render={<Link href="https://demo.coldmail.host" target="_blank" rel="noopener noreferrer">Try the live demo first</Link>}
                        />
                    </div>
                    
                    <p className="text-muted-foreground text-sm mt-6">One payment. Full source. Commercial license. Lifetime updates.</p>
                </div>
            </div>
        </section>
    )
}
