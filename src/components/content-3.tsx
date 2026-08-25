import { Cpu, Zap } from 'lucide-react'

export default function ContentSection() {
    return (
        <section className="overflow-hidden py-16 md:py-20">
            <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
                <div className="max-w-2xl max-lg:pr-6">
                    <h2 className="text-balance text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">Everything you need to BUILD a cold-email SaaS.</h2>
                </div>
                <div className="grid items-center gap-6 lg:grid-cols-3 lg:gap-20">
                    <div className="mask-b-from-foreground relative max-lg:-mr-6 lg:col-span-2">
                        <div className="relative overflow-hidden p-px max-sm:-mr-56">
                            <div className="bg-background ring-foreground/6.5 before:mask-radial-at-top-left before:mask-radial-from-65% before:mask-radial-[100%_60%] before:ring-foreground before:border-foreground/10 relative rounded-2xl p-2 shadow-xl shadow-black/50 ring before:absolute before:-inset-px before:z-10 before:size-56 before:rounded-tl-2xl before:border-l before:border-t">
                                <div className="bg-foreground/2 z-1 absolute inset-0 rounded-2xl" />
                                {/* VS Code-like UI mockup */}
                                <div className="bg-[#1e1e1e] relative rounded-xl overflow-hidden font-mono text-xs">
                                    {/* VS Code title bar */}
                                    <div className="flex items-center justify-between bg-[#323233] px-3 py-2 border-b border-[#3c3c3c]">
                                        <div className="flex items-center gap-2">
                                            <div className="flex gap-1.5">
                                                <div className="size-3 rounded-full bg-[#ff5f57]"></div>
                                                <div className="size-3 rounded-full bg-[#febc2e]"></div>
                                                <div className="size-3 rounded-full bg-[#28c840]"></div>
                                            </div>
                                            <span className="text-zinc-400 ml-2">campaign_service.go — cleanmails</span>
                                        </div>
                                    </div>
                                    
                                    {/* VS Code content */}
                                    <div className="flex">
                                        {/* Sidebar */}
                                        <div className="w-48 bg-[#252526] border-r border-[#3c3c3c] p-2 hidden sm:block">
                                            <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-2">Explorer</div>
                                            <div className="space-y-0.5 text-[11px]">
                                                <div className="text-zinc-400 flex items-center gap-1">
                                                    <span className="text-yellow-500">▼</span> internal
                                                </div>
                                                <div className="text-zinc-400 pl-3 flex items-center gap-1">
                                                    <span className="text-yellow-500">▼</span> campaign
                                                </div>
                                                <div className="text-white pl-6 bg-[#37373d] rounded px-1">service.go</div>
                                                <div className="text-zinc-500 pl-6">repository.go</div>
                                                <div className="text-zinc-500 pl-6">handler.go</div>
                                                <div className="text-zinc-400 pl-3 flex items-center gap-1">
                                                    <span className="text-zinc-500">▶</span> mailbox
                                                </div>
                                                <div className="text-zinc-400 pl-3 flex items-center gap-1">
                                                    <span className="text-zinc-500">▶</span> warmup
                                                </div>
                                                <div className="text-zinc-400 pl-3 flex items-center gap-1">
                                                    <span className="text-zinc-500">▶</span> inbox
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Code editor */}
                                        <div className="flex-1 p-4 overflow-hidden">
                                            <div className="space-y-1 text-[11px] leading-relaxed">
                                                <div><span className="text-[#569cd6]">package</span> <span className="text-zinc-300">campaign</span></div>
                                                <div className="h-2"></div>
                                                <div><span className="text-[#569cd6]">type</span> <span className="text-[#4ec9b0]">CampaignService</span> <span className="text-[#569cd6]">struct</span> <span className="text-yellow-500">{'{'}</span></div>
                                                <div className="pl-4"><span className="text-zinc-300">repo</span>     <span className="text-[#4ec9b0]">Repository</span></div>
                                                <div className="pl-4"><span className="text-zinc-300">mailer</span>   <span className="text-[#4ec9b0]">*mail.Client</span></div>
                                                <div className="pl-4"><span className="text-zinc-300">warmup</span>   <span className="text-[#4ec9b0]">*warmup.Service</span></div>
                                                <div><span className="text-yellow-500">{'}'}</span></div>
                                                <div className="h-2"></div>
                                                <div><span className="text-[#569cd6]">func</span> <span className="text-zinc-300">(s *</span><span className="text-[#4ec9b0]">CampaignService</span><span className="text-zinc-300">)</span> <span className="text-[#dcdcaa]">SendCampaign</span><span className="text-zinc-300">(</span></div>
                                                <div className="pl-4"><span className="text-zinc-300">ctx</span> <span className="text-[#4ec9b0]">context.Context</span><span className="text-zinc-300">,</span></div>
                                                <div className="pl-4"><span className="text-zinc-300">campaign</span> <span className="text-[#4ec9b0]">*Campaign</span><span className="text-zinc-300">,</span></div>
                                                <div><span className="text-zinc-300">)</span> <span className="text-[#569cd6]">error</span> <span className="text-yellow-500">{'{'}</span></div>
                                                <div className="pl-4"><span className="text-[#6a9955]">// Verify sender reputation</span></div>
                                                <div className="pl-4"><span className="text-[#569cd6]">if</span> <span className="text-zinc-300">err := s.warmup.</span><span className="text-[#dcdcaa]">CheckHealth</span><span className="text-zinc-300">(ctx); err != </span><span className="text-[#569cd6]">nil</span> <span className="text-yellow-500">{'{'}</span></div>
                                                <div className="pl-8"><span className="text-[#569cd6]">return</span> <span className="text-zinc-300">err</span></div>
                                                <div className="pl-4"><span className="text-yellow-500">{'}'}</span></div>
                                                <div className="h-2"></div>
                                                <div className="pl-4"><span className="text-[#6a9955]">// Process leads with throttling</span></div>
                                                <div className="pl-4"><span className="text-[#569cd6]">for</span> <span className="text-zinc-300">_, lead := </span><span className="text-[#569cd6]">range</span> <span className="text-zinc-300">campaign.Leads</span> <span className="text-yellow-500">{'{'}</span></div>
                                                <div className="pl-8"><span className="text-zinc-300">s.</span><span className="text-[#dcdcaa]">sendToLead</span><span className="text-zinc-300">(ctx, lead)</span></div>
                                                <div className="pl-4"><span className="text-yellow-500">{'}'}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Status bar */}
                                    <div className="flex items-center justify-between bg-[#007acc] px-3 py-1 text-[10px] text-white">
                                        <div className="flex items-center gap-3">
                                            <span>main</span>
                                            <span>Go 1.22</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span>UTF-8</span>
                                            <span>LF</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground text-balance text-2xl">Go backend. Next.js frontend. Campaigns, warmup, inbox, AI, billing — already wired together and working.</p>

                        <div className="grid gap-4 pt-6 sm:grid-cols-2">
                            <p className="text-muted-foreground text-balance">
                                <span className="text-foreground font-medium">
                                    <Zap className="inline size-4 -translate-y-0.5 text-yellow-500" /> Ship in days.
                                </span>{' '}
                                Not months. The infrastructure is done. Focus on your market.
                            </p>

                            <p className="text-muted-foreground text-balance">
                                <span className="text-foreground font-medium">
                                    <Cpu className="inline size-4 -translate-y-0.5 text-yellow-500" /> Own everything.
                                </span>{' '}
                                No vendor lock-in. No monthly fees to us. It's your code now.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
