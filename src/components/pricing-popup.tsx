'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { X, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Context for managing popup state globally
interface PricingPopupContextType {
    isOpen: boolean
    openPopup: () => void
    closePopup: () => void
}

const PricingPopupContext = createContext<PricingPopupContextType | undefined>(undefined)

export function PricingPopupProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)

    const openPopup = () => setIsOpen(true)
    const closePopup = () => setIsOpen(false)

    return (
        <PricingPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
            {children}
            <PricingPopupModal />
        </PricingPopupContext.Provider>
    )
}

export function usePricingPopup() {
    const context = useContext(PricingPopupContext)
    if (!context) {
        throw new Error('usePricingPopup must be used within PricingPopupProvider')
    }
    return context
}

function PricingPopupModal() {
    const { isOpen, closePopup } = usePricingPopup()

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={closePopup}
            />
            
            {/* Modal - slides up on mobile, centered on desktop */}
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-t-2xl sm:rounded-2xl w-full sm:max-w-md p-4 sm:p-6 shadow-2xl animate-in slide-in-from-bottom sm:fade-in sm:zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
                {/* Close button */}
                <button
                    onClick={closePopup}
                    className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                    <X className="size-5" />
                </button>

                {/* Header - compact */}
                <div className="flex items-center gap-2 mb-4 pr-8">
                    <div className="size-8 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
                        <AlertCircle className="size-4 text-yellow-500" />
                    </div>
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold">Limited licenses</h3>
                        <p className="text-muted-foreground text-xs">Capping sales to avoid saturation</p>
                    </div>
                </div>

                {/* Pricing tiers - compact */}
                <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                        <div className="text-xl sm:text-2xl font-bold text-yellow-500">$597</div>
                        <div className="flex-1 min-w-0">
                            <p className="font-medium text-foreground text-sm">First 50</p>
                            <p className="text-xs text-muted-foreground truncate">Early pricing — now</p>
                        </div>
                        <div className="text-[10px] bg-yellow-500/20 text-yellow-500 px-1.5 py-0.5 rounded-full font-medium shrink-0">
                            NOW
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
                        <div className="text-xl sm:text-2xl font-bold text-zinc-400">$997</div>
                        <div className="flex-1 min-w-0">
                            <p className="font-medium text-zinc-300 text-sm">Next 50</p>
                            <p className="text-xs text-muted-foreground truncate">After early batch</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/30 border border-zinc-700/30">
                        <div className="text-xl sm:text-2xl font-bold text-zinc-500">—</div>
                        <div className="flex-1 min-w-0">
                            <p className="font-medium text-zinc-400 text-sm">After 100</p>
                            <p className="text-xs text-zinc-500 truncate">Sales close</p>
                        </div>
                        <div className="text-[10px] bg-zinc-700/50 text-zinc-400 px-1.5 py-0.5 rounded-full font-medium shrink-0">
                            END
                        </div>
                    </div>
                </div>

                {/* Explanation - compact */}
                <p className="text-xs text-muted-foreground mb-4">
                    <span className="text-foreground font-medium">Why 100?</span> We don't want identical SaaS products flooding the market.
                </p>

                {/* CTA - stacked on mobile */}
                <div className="flex flex-col gap-2">
                    <Button
                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-sm"
                        nativeButton={false}
                        render={<Link href="https://checkout.dodopayments.com/buy/pdt_0NjkeAqOaqVH78qagQT2p?quantity=1&redirect_url=https://saas-starter.coldmail.host%2Fthank-you">Lock in $597</Link>}
                    />
                    <Button
                        variant="ghost"
                        className="w-full text-sm"
                        onClick={closePopup}
                    >
                        Maybe later
                    </Button>
                </div>
            </div>
        </div>
    )
}

// Trigger button component for info icon
export function PricingInfoTrigger({ className = '' }: { className?: string }) {
    const { openPopup } = usePricingPopup()

    return (
        <button
            onClick={openPopup}
            className={`inline-flex items-center justify-center size-5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors text-xs font-medium ${className}`}
            aria-label="View pricing details"
        >
            i
        </button>
    )
}

// Trigger for the hero pill
export function PricingPillTrigger({ children, className = '' }: { children: ReactNode, className?: string }) {
    const { openPopup } = usePricingPopup()

    return (
        <button
            onClick={openPopup}
            className={className}
        >
            {children}
        </button>
    )
}
