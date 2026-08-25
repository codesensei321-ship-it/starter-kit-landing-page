import { InfiniteSlider } from '@/components/ui/motion-primitives/infinite-slider'
import Image from 'next/image'

const logos = [
    { src: '/logos/golang.svg', alt: 'Go', width: 80, height: 24 },
    { src: '/logos/nextjs_logo_light.svg', alt: 'Next.js', width: 90, height: 24 },
    { src: '/logos/react_wordmark_light.svg', alt: 'React', width: 90, height: 24 },
    { src: '/logos/postgresql-wordmark-light.svg', alt: 'PostgreSQL', width: 110, height: 24 },
    { src: '/logos/redis.svg', alt: 'Redis', width: 70, height: 24 },
    { src: '/logos/stripe_wordmark.svg', alt: 'Stripe', width: 60, height: 24 },
    { src: '/logos/supabase_wordmark_light.svg', alt: 'Supabase', width: 100, height: 24 },
    { src: '/logos/resend-wordmark-black.svg', alt: 'Resend', width: 80, height: 24 },
    { src: '/logos/clerk-wordmark-light.svg', alt: 'Clerk', width: 70, height: 24 },
    { src: '/logos/railway.svg', alt: 'Railway', width: 90, height: 24 },
]

const Logos = () => {
    return (
        <>
            {logos.map((logo) => (
                <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="h-6 w-auto object-contain invert"
                />
            ))}
        </>
    )
}

export default function LogoCloud() {
    return (
        <section className="bg-background py-12 lg:pt-28">
            <div className="relative m-auto max-w-7xl px-6">
                <div className="relative flex gap-6 max-lg:flex-col lg:items-center lg:gap-12">
                    <p className="text-muted-foreground shrink-0 lg:border-r lg:pr-12 lg:text-end">
                        Built with <br className="max-lg:hidden" /> modern stack
                    </p>

                    <div className="hidden w-full flex-wrap items-center justify-between gap-8 lg:flex">
                        <Logos />
                    </div>
                    <InfiniteSlider
                        gap={56}
                        className="mask-x-from-85% mask-x-to-99% lg:hidden"
                    >
                        <Logos />
                    </InfiniteSlider>
                </div>
            </div>
        </section>
    )
}
