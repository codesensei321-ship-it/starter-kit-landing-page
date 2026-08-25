import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-balance text-4xl font-semibold tracking-tight lg:text-5xl xl:text-6xl">Stop building from scratch. Start shipping.</h2>

                    <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">Get the complete source code for a production-ready cold email SaaS. Go + Next.js. Deploy anywhere. Own everything.</p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <Button
                            size="lg"
                            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
                            nativeButton={false}
                            render={<Link href="https://checkout.dodopayments.com/session/cks_0Nm8Yo2JKvBC9v0pKZQ7x">Buy now ($997)</Link>}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
