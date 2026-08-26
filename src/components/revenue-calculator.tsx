'use client'

import { useState } from 'react'

export default function RevenueCalculator() {
    const [pricePerCustomer, setPricePerCustomer] = useState(49)
    const [customerCount, setCustomerCount] = useState(50)

    const monthlyRevenue = pricePerCustomer * customerCount
    const yearlyRevenue = monthlyRevenue * 12
    
    // Assume 2% visitor-to-customer conversion (realistic for SaaS)
    const visitorsNeeded = Math.ceil(customerCount / 0.02)
    
    // Traffic source estimates (rough but realistic)
    const redditPosts = Math.ceil(visitorsNeeded / 500) // ~500 visitors per good Reddit post
    const hnLaunches = Math.ceil(visitorsNeeded / 2000) // ~2000 visitors per HN front page
    const phLaunches = Math.ceil(visitorsNeeded / 3000) // ~3000 visitors per PH launch

    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-4xl px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">What's your cold-email SaaS worth?</h2>
                    <p className="text-muted-foreground text-lg">Play with the numbers. See what's possible.</p>
                </div>

                <div className="rounded-2xl border bg-card p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Price per customer slider */}
                        <div>
                            <label className="block text-sm font-medium mb-3">
                                You charge <span className="text-yellow-500">${pricePerCustomer}/mo</span> per customer
                            </label>
                            <input
                                type="range"
                                min="19"
                                max="299"
                                value={pricePerCustomer}
                                onChange={(e) => setPricePerCustomer(Number(e.target.value))}
                                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                <span>$19</span>
                                <span>$299</span>
                            </div>
                        </div>

                        {/* Customer count slider */}
                        <div>
                            <label className="block text-sm font-medium mb-3">
                                You get <span className="text-yellow-500">{customerCount}</span> paying customers
                            </label>
                            <input
                                type="range"
                                min="10"
                                max="500"
                                value={customerCount}
                                onChange={(e) => setCustomerCount(Number(e.target.value))}
                                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                <span>10</span>
                                <span>500</span>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="grid sm:grid-cols-3 gap-4 mb-8">
                        <div className="rounded-xl bg-zinc-900/50 p-4 text-center">
                            <p className="text-3xl md:text-4xl font-bold text-yellow-500">${monthlyRevenue.toLocaleString()}</p>
                            <p className="text-sm text-muted-foreground mt-1">Monthly revenue</p>
                        </div>
                        <div className="rounded-xl bg-zinc-900/50 p-4 text-center">
                            <p className="text-3xl md:text-4xl font-bold text-foreground">${yearlyRevenue.toLocaleString()}</p>
                            <p className="text-sm text-muted-foreground mt-1">Yearly revenue</p>
                        </div>
                        <div className="rounded-xl bg-zinc-900/50 p-4 text-center">
                            <p className="text-3xl md:text-4xl font-bold text-green-500">{Math.round(yearlyRevenue / 597)}x</p>
                            <p className="text-sm text-muted-foreground mt-1">ROI on $597</p>
                        </div>
                    </div>

                    {/* Traffic breakdown */}
                    <div className="border-t border-zinc-800 pt-6">
                        <p className="text-sm font-medium mb-4">
                            To get {customerCount} customers (at ~2% conversion), you need roughly <span className="text-yellow-500">{visitorsNeeded.toLocaleString()} visitors</span>. That's about:
                        </p>
                        <div className="grid sm:grid-cols-3 gap-4 text-center">
                            <div className="rounded-lg bg-zinc-800/50 p-3">
                                <p className="text-2xl font-semibold text-orange-400">{redditPosts}</p>
                                <p className="text-xs text-muted-foreground">solid Reddit posts</p>
                            </div>
                            <div className="rounded-lg bg-zinc-800/50 p-3">
                                <p className="text-2xl font-semibold text-orange-500">{hnLaunches}</p>
                                <p className="text-xs text-muted-foreground">Hacker News front pages</p>
                            </div>
                            <div className="rounded-lg bg-zinc-800/50 p-3">
                                <p className="text-2xl font-semibold text-orange-600">{phLaunches}</p>
                                <p className="text-xs text-muted-foreground">Product Hunt launches</p>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4 text-center">
                            These are rough estimates. Your mileage will vary based on your positioning, market, and execution.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
