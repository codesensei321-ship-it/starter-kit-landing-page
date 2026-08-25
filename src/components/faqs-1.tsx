'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What tech stack is used?',
            answer: 'The backend is built with Go for performance and reliability. The frontend uses Next.js with React, Tailwind CSS, and shadcn/ui components. PostgreSQL for the database, Redis for caching, and Docker for deployment.',
        },
        {
            id: 'item-2',
            question: 'Can I use this for my own SaaS product?',
            answer: 'Yes! You get full ownership of the source code. Rebrand it, modify it, add features, and sell it as your own product. There are no royalties or ongoing fees.',
        },
        {
            id: 'item-3',
            question: 'What payment integrations are included?',
            answer: 'Stripe is fully integrated with support for subscriptions, one-time payments, usage-based billing, and webhooks. All the payment flows are production-ready out of the box.',
        },
        {
            id: 'item-4',
            question: 'How do I deploy it?',
            answer: 'Docker Compose files are included for easy deployment. You can deploy to any cloud provider (AWS, GCP, DigitalOcean) or your own servers. Detailed deployment documentation is provided.',
        },
        {
            id: 'item-5',
            question: 'Do I get updates?',
            answer: 'Yes, you get lifetime access to updates. When we add new features or fix bugs, you can pull the latest changes. You also get access to our Discord community for support.',
        },
    ]

    return (
        <section id="faq" className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 md:grid-cols-2 md:gap-6">
                    <h2 className="text-foreground max-w-sm text-balance text-4xl font-medium tracking-tight">Frequently Asked Questions</h2>

                    <div>
                        <Accordion className="w-full">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="border-dashed"
                                >
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-muted-foreground text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        <p className="text-muted-foreground mt-6">
                            Have more questions? Reach out on{' '}
                            <Link
                                href="https://discord.com/invite/aH8NqcEenZ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-medium hover:underline"
                            >
                                Discord
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
