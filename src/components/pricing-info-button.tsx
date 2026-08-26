'use client'

import { Info } from 'lucide-react'
import { usePricingPopup } from '@/components/pricing-popup'

export default function PricingInfoButton() {
    const { openPopup } = usePricingPopup()

    return (
        <button
            onClick={openPopup}
            className="inline-flex items-center gap-1.5 text-sm text-yellow-500 hover:text-yellow-400 transition-colors"
            aria-label="View pricing details"
        >
            <Info className="size-4" />
            <span>Why limited?</span>
        </button>
    )
}
