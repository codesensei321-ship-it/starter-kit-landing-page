import Link from 'next/link'
import { LogoIcon } from '@/components/logo'

const footerLinks = [
    {
        name: 'Product',
        links: [
            { href: '#features', label: 'Features' },
            { href: '#pricing', label: 'Pricing' },
            { href: '#faq', label: 'FAQ' },
        ],
    },
    {
        name: 'Legal',
        links: [
            { href: '/terms', label: 'Terms of Service' },
            { href: '/privacy', label: 'Privacy Policy' },
            { href: '/refund', label: 'Refund Policy' },
        ],
    },
    {
        name: 'Support',
        links: [
            { href: 'mailto:support@coldmail.host', label: 'Email Support' },
            { href: 'https://discord.com/invite/aH8NqcEenZ', label: 'Discord Community', external: true },
        ],
    },
]

export default function Footer() {
    return (
        <footer>
            <div className="mx-auto max-w-7xl space-y-16 px-6 pb-16 pt-32">
                <div className="grid grid-cols-2 gap-x-3 gap-y-12 sm:grid-cols-4">
                    <div className="col-span-2 sm:col-span-1">
                        <Link
                            href="/"
                            aria-label="go home"
                        >
                            <LogoIcon uniColor />
                        </Link>
                        <p className="text-muted-foreground mt-4 max-w-xs text-sm">
                            The complete source code for a production-ready cold-email SaaS. Built with Go + Next.js.
                        </p>
                    </div>

                    {footerLinks.map((linksGroup, index) => (
                        <div key={index}>
                            <span className="text-sm font-medium">{linksGroup.name}</span>
                            <ul className="mt-4 list-inside space-y-4">
                                {linksGroup.links.map((link, idx) => (
                                    <li key={idx}>
                                        <Link
                                            href={link.href}
                                            target={(link as any).external ? "_blank" : undefined}
                                            rel={(link as any).external ? "noopener noreferrer" : undefined}
                                            className="hover:text-primary text-muted-foreground text-sm duration-150"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-16 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-muted-foreground text-sm">&copy; Cleanmails {new Date().getFullYear()}. All rights reserved.</span>
                    <div className="flex gap-4">
                        <Link href="/terms" className="text-muted-foreground hover:text-primary text-sm duration-150">Terms</Link>
                        <Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm duration-150">Privacy</Link>
                        <Link href="/refund" className="text-muted-foreground hover:text-primary text-sm duration-150">Refunds</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
