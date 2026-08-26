'use client'

import { ArrowRight } from 'lucide-react'
import { usePricingPopup } from '@/components/pricing-popup'

export default function HeroPricingPill() {
    const { openPopup } = usePricingPopup()

    return (
        <button
            onClick={openPopup}
            className="flex w-fit items-center gap-1.5 sm:gap-2 font-medium hover:opacity-80 transition-opacity cursor-pointer group flex-wrap"
        >
            <span className="text-xs sm:text-sm bg-yellow-500/10 text-yellow-500 px-1.5 sm:px-2 py-0.5 rounded-full border border-yellow-500/20">Limited</span>
            <span className="text-xs sm:text-sm">Go + Next.js</span>
            <span className="text-muted-foreground text-xs sm:text-sm hidden sm:inline">Production-ready source code</span>
            <ArrowRight className="size-3 sm:size-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
    )
}
