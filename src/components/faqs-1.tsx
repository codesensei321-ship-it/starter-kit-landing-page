'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

interface FAQItem {
    id: string
    question: string
    answer: string
    category: 'purchase' | 'license' | 'technical' | 'support'
}

export default function FAQs() {
    const [openItems, setOpenItems] = useState<Set<string>>(new Set())

    const toggleItem = (id: string) => {
        const newOpenItems = new Set(openItems)
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id)
        } else {
            newOpenItems.add(id)
        }
        setOpenItems(newOpenItems)
    }

    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            category: 'purchase',
            question: 'What exactly is included?',
            answer: 'You get the complete source code: Go backend, Next.js frontend, database migrations, background workers, Docker configs, Caddyfile, environment templates, and full documentation. Everything is delivered via private GitHub repo access. No obfuscation, no hidden dependencies.',
        },
        {
            id: 'item-2',
            category: 'purchase',
            question: 'Is this the complete source code?',
            answer: "Yes. This is the same code that runs in production. Every module, every file, every line of code. Nothing is held back or obfuscated. You can read, modify, and deploy every part of it.",
        },
        {
            id: 'item-3',
            category: 'license',
            question: 'Can I modify everything?',
            answer: "Absolutely. It's your code now. Change the UI, add features, remove features, integrate with other services, rewrite entire modules. There are no restrictions on what you can change.",
        },
        {
            id: 'item-4',
            category: 'license',
            question: 'Can I change the branding?',
            answer: "Yes, completely. Change the name, logo, colors, domain — everything. The codebase is designed to be white-labeled. There's no mention of Cleanmails in the frontend your users will see.",
        },
        {
            id: 'item-5',
            category: 'license',
            question: 'Can I sell a SaaS built with this?',
            answer: "That's exactly what it's for. Build your own cold-email SaaS, charge your own prices, keep all the revenue. The commercial license covers this use case.",
        },
        {
            id: 'item-6',
            category: 'license',
            question: 'Can I use it for client projects?',
            answer: "Yes. Agencies can build and deploy instances for their clients. Each client gets their own deployment. You can charge your clients whatever you want.",
        },
        {
            id: 'item-7',
            category: 'license',
            question: 'Can I deploy multiple instances?',
            answer: "Yes. You can deploy unlimited instances of your SaaS. Each instance can have different branding, different pricing, different features. One purchase covers all of them.",
        },
        {
            id: 'item-8',
            category: 'license',
            question: 'Can I resell the source code?',
            answer: "No. The one thing you can't do is resell or redistribute the starter kit itself. You're buying the right to build products with it, not to compete with us by selling the same code.",
        },
        {
            id: 'item-9',
            category: 'technical',
            question: 'What infrastructure do I need?',
            answer: "You need a VPS or cloud server (any provider works), a domain, and accounts with your chosen services: SMTP provider, Stripe for billing, and optionally AI API keys. The documentation walks you through all of it.",
        },
        {
            id: 'item-10',
            category: 'technical',
            question: 'Do I need my own SMTP provider?',
            answer: "Yes. This is software, not an email sending service. You connect your own Gmail, Outlook, AWS SES, Resend, or any other SMTP provider. The app supports multiple providers and handles rotation automatically.",
        },
        {
            id: 'item-11',
            category: 'technical',
            question: 'Do I need my own AI API keys?',
            answer: "Only if you want AI features. The AI auto-reply and AI drafts features support OpenAI, Claude, Gemini, Groq, and OpenRouter. You bring your own API keys. If you don't want AI features, just don't configure them.",
        },
        {
            id: 'item-12',
            category: 'technical',
            question: 'Is Stripe already configured?',
            answer: "Yes. Stripe integration is complete: Checkout Sessions, Customer Portal, webhook handlers, subscription management, plan limits, feature gating. You just add your Stripe keys and configure your plans.",
        },
        {
            id: 'item-13',
            category: 'technical',
            question: 'How does Google/Microsoft OAuth work?',
            answer: "Users can connect their Gmail or Outlook mailboxes with one click using OAuth. The app handles token refresh and encrypted storage. You set up OAuth credentials in Google/Microsoft developer consoles — we provide step-by-step guides.",
        },
        {
            id: 'item-14',
            category: 'technical',
            question: 'How difficult is deployment?',
            answer: "If you can run 'docker compose up', you can deploy this. We include production Docker Compose configs and a Caddyfile for automatic SSL. Most people are live in under an hour. The docs cover everything.",
        },
        {
            id: 'item-15',
            category: 'support',
            question: 'What documentation is included?',
            answer: "Full documentation: architecture overview, setup guide, API reference, extending guides, deployment instructions, and troubleshooting. Plus inline code comments throughout the codebase.",
        },
        {
            id: 'item-16',
            category: 'support',
            question: 'What does lifetime updates mean?',
            answer: "Every future release — new features, bug fixes, security patches, improvements — is included. Pull the latest code from GitHub anytime. No extra charge, no expiring access.",
        },
        {
            id: 'item-17',
            category: 'support',
            question: 'What happens after I purchase?',
            answer: "You get an email with a GitHub invitation to the private repository. Accept the invite, clone the repo, and follow the setup guide. Most people have the app running locally within 30 minutes.",
        },
        {
            id: 'item-18',
            category: 'support',
            question: 'Do I get support?',
            answer: "You get access to a private Discord community where you can ask questions, share what you're building, and get help from other developers using the kit. We're active in the community and respond to questions regularly.",
        },
        {
            id: 'item-19',
            category: 'support',
            question: "What's the refund policy?",
            answer: "Due to the nature of digital products (you get access to the complete source code immediately), we generally can't offer refunds. That's why we encourage you to try the live demo first and read through everything on this page. We want the right buyers, not just any buyers.",
        },
    ]

    // Split FAQs into two columns
    const midPoint = Math.ceil(faqItems.length / 2)
    const leftColumn = faqItems.slice(0, midPoint)
    const rightColumn = faqItems.slice(midPoint)

    const FAQItemComponent = ({ item }: { item: FAQItem }) => {
        const isOpen = openItems.has(item.id)
        return (
            <div className="border-b border-zinc-800/50">
                <button
                    onClick={() => toggleItem(item.id)}
                    className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-yellow-500"
                >
                    <span className="text-foreground font-medium pr-4">{item.question}</span>
                    <ChevronDown 
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </button>
                <div 
                    className={`grid transition-all duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0'}`}
                >
                    <div className="overflow-hidden">
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section id="faq" className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-foreground text-4xl font-medium tracking-tight mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        At $997, unanswered questions = lost sales. So here's everything you might want to know.
                    </p>
                </div>

                {/* Two-column FAQ grid */}
                <div className="grid gap-x-12 gap-y-0 md:grid-cols-2">
                    {/* Left Column */}
                    <div>
                        {leftColumn.map((item) => (
                            <FAQItemComponent key={item.id} item={item} />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div>
                        {rightColumn.map((item) => (
                            <FAQItemComponent key={item.id} item={item} />
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 text-center">
                    <p className="text-muted-foreground">
                        Still have questions?{' '}
                        <Link
                            href="https://discord.com/invite/aH8NqcEenZ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-500 font-medium hover:underline"
                        >
                            Ask in our Discord community
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
