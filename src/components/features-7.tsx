'use client'
import DottedMap from 'dotted-map'
import { Area, AreaChart, CartesianGrid } from 'recharts'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

export default function FeaturesSection() {
    return (
        <section className="overflow-hidden px-4 py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-2 lg:px-6">
                <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium tracking-tight">
                    <span className="text-foreground">Full-stack included.</span> <br /> Stripe. OAuth. Webhooks. Verification.
                </h2>
                <div className="mt-8 grid rounded-xl border md:mt-16 md:grid-cols-2">
                    <div className="row-span-2 grid grid-rows-subgrid gap-6 md:gap-0">
                        <div className="p-6 sm:p-12">
                            <p className="text-muted-foreground text-balance text-lg font-medium">
                                <span className="text-foreground">Multi-region email sending.</span> Send from multiple mailboxes across regions. Built-in rotation and throttling to protect your sender reputation.
                            </p>
                        </div>

                        <div
                            aria-hidden
                            className="relative"
                        >
                            <div className="absolute inset-0 z-10 m-auto size-fit -translate-y-full">
                                <div className="rounded-(--radius) text-muted-foreground z-1 ring-foreground/6.5 shadow-black/6.5 relative flex size-fit w-fit items-center gap-2 bg-zinc-900/75 px-3 py-1 text-xs font-medium shadow-lg ring backdrop-blur">
                                    <span className="text-lg">✉️</span> Campaign sent to <span className="text-foreground">2,847 recipients</span>
                                </div>
                                <div className="rounded-(--radius) bg-background ring-foreground/6.5 absolute inset-2 -bottom-2 mx-auto px-3 py-4 text-xs font-medium shadow-md shadow-black/5 ring"></div>
                            </div>

                            <div className="mask-radial-at-center mask-radial-from-25% mask-radial-[50%_50%] relative overflow-hidden opacity-25">
                                <Map />
                            </div>
                        </div>
                    </div>
                    <div className="row-span-2 grid grid-rows-subgrid gap-6 overflow-hidden border-t p-6 sm:p-12 md:gap-0 md:border-0 md:border-l dark:bg-transparent">
                        <div className="relative z-10">
                            <p className="text-muted-foreground text-balance text-lg font-medium">
                                <span className="text-foreground">Stripe payments ready.</span> Subscriptions, usage-based billing, webhooks — all wired up. Just add your Stripe keys and go.
                            </p>
                        </div>
                        <div
                            aria-hidden
                            className="mask-radial-at-top-left mask-radial-[90%_80%] mask-radial-from-75%"
                        >
                            {/* Stripe-like payments UI mockup */}
                            <div className="bg-card relative mx-auto flex flex-col rounded-xl border overflow-hidden">
                                {/* Browser chrome */}
                                <div className="flex gap-1.5 border-b p-3 bg-zinc-900/50">
                                    <div className="bg-red-500/60 size-2.5 rounded-full"></div>
                                    <div className="bg-yellow-500/60 size-2.5 rounded-full"></div>
                                    <div className="bg-green-500/60 size-2.5 rounded-full"></div>
                                </div>
                                
                                {/* Dashboard content */}
                                <div className="p-4 space-y-4">
                                    {/* Header with balance */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs text-muted-foreground">Total Revenue</p>
                                            <p className="text-2xl font-semibold text-foreground">$24,589.00</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                                            <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                            +12.5%
                                        </div>
                                    </div>
                                    
                                    {/* Recent transactions */}
                                    <div className="space-y-2">
                                        <p className="text-xs text-muted-foreground font-medium">Recent Payments</p>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between bg-zinc-800/50 rounded-lg px-3 py-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="size-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                                                        <span className="text-xs">JD</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-medium text-foreground">Pro Plan</p>
                                                        <p className="text-[10px] text-muted-foreground">john@company.co</p>
                                                    </div>
                                                </div>
                                                <p className="text-xs font-medium text-green-500">+$49.00</p>
                                            </div>
                                            <div className="flex items-center justify-between bg-zinc-800/50 rounded-lg px-3 py-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="size-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                                                        <span className="text-xs">SM</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-medium text-foreground">Enterprise</p>
                                                        <p className="text-[10px] text-muted-foreground">sarah@startup.io</p>
                                                    </div>
                                                </div>
                                                <p className="text-xs font-medium text-green-500">+$199.00</p>
                                            </div>
                                            <div className="flex items-center justify-between bg-zinc-800/50 rounded-lg px-3 py-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="size-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                                                        <span className="text-xs">MK</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-medium text-foreground">Starter Plan</p>
                                                        <p className="text-[10px] text-muted-foreground">mike@agency.com</p>
                                                    </div>
                                                </div>
                                                <p className="text-xs font-medium text-green-500">+$29.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* MRR indicator */}
                                    <div className="flex items-center gap-4 pt-2 border-t border-zinc-800">
                                        <div>
                                            <p className="text-[10px] text-muted-foreground">MRR</p>
                                            <p className="text-sm font-semibold text-foreground">$8,420</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-muted-foreground">Active Subs</p>
                                            <p className="text-sm font-semibold text-foreground">127</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-muted-foreground">Churn</p>
                                            <p className="text-sm font-semibold text-foreground">2.1%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full border-y p-12 lg:py-20">
                        <p className="text-center text-4xl font-semibold lg:text-7xl">
                            $597 <span className="text-muted-foreground">One-time payment</span>
                        </p>
                    </div>
                    <div className="relative col-span-full">
                        <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
                            <p className="mb-8 text-balance text-lg font-medium">
                                Email verification built-in. <span className="text-muted-foreground">Verify emails before sending to keep bounce rates low and deliverability high.</span>
                            </p>
                        </div>
                        <MonitoringChart />
                    </div>
                </div>
            </div>
        </section>
    )
}

const map = new DottedMap({ height: 55, grid: 'diagonal' })

const points = map.getPoints()

const svgOptions = {
    backgroundColor: 'var(--color-background)',
    color: 'currentColor',
    radius: 0.15,
}

const Map = () => {
    const viewBox = `0 0 120 60`
    return (
        <svg
            viewBox={viewBox}
            style={{ background: svgOptions.backgroundColor }}
        >
            {points.map((point, index) => (
                <circle
                    key={index}
                    cx={point.x}
                    cy={point.y}
                    r={svgOptions.radius}
                    fill={svgOptions.color}
                />
            ))}
        </svg>
    )
}

const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: '#2563eb',
    },
    mobile: {
        label: 'Mobile',
        color: '#60a5fa',
    },
} satisfies ChartConfig

const chartData = [
    { month: 'May', desktop: 56, mobile: 224 },
    { month: 'June', desktop: 56, mobile: 224 },
    { month: 'January', desktop: 126, mobile: 252 },
    { month: 'February', desktop: 205, mobile: 410 },
    { month: 'March', desktop: 200, mobile: 126 },
    { month: 'April', desktop: 400, mobile: 800 },
]

const MonitoringChart = () => {
    return (
        <ChartContainer
            className="h-120 aspect-auto md:h-96"
            config={chartConfig}
        >
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                }}
            >
                <defs>
                    <linearGradient
                        id="fillDesktop"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop
                            offset="0%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="55%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.1}
                        />
                    </linearGradient>
                    <linearGradient
                        id="fillMobile"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop
                            offset="0%"
                            stopColor="var(--color-mobile)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="55%"
                            stopColor="var(--color-mobile)"
                            stopOpacity={0.1}
                        />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <ChartTooltip
                    active
                    cursor={false}
                    content={<ChartTooltipContent className="dark:bg-muted" />}
                />
                <Area
                    strokeWidth={2}
                    dataKey="mobile"
                    type="stepBefore"
                    fill="url(#fillMobile)"
                    fillOpacity={0.1}
                    stroke="var(--color-mobile)"
                    stackId="a"
                />
                <Area
                    strokeWidth={2}
                    dataKey="desktop"
                    type="stepBefore"
                    fill="url(#fillDesktop)"
                    fillOpacity={0.1}
                    stroke="var(--color-desktop)"
                    stackId="a"
                />
            </AreaChart>
        </ChartContainer>
    )
}
