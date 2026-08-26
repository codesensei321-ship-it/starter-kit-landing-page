'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Send, Check, Github, FileText, Terminal, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import confetti from 'canvas-confetti'

export default function ThankYouPage() {
    useEffect(() => {
        // Fire confetti on mount and every refresh
        const duration = 3000
        const end = Date.now() + duration

        const colors = ['#a855f7', '#3b82f6', '#22c55e', '#eab308', '#ef4444']

        const frame = () => {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.7 },
                colors: colors,
            })
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.7 },
                colors: colors,
            })

            if (Date.now() < end) {
                requestAnimationFrame(frame)
            }
        }

        frame()

        // Big burst at start
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: colors,
        })
    }, [])

    const steps = [
        {
            number: 1,
            title: 'Accept GitHub invitation',
            description: (
                <>
                    Check your <span className="text-foreground font-medium">email</span> for a repo invite from GitHub. Accept it to get access.
                </>
            ),
        },
        {
            number: 2,
            title: 'Access the repo',
            description: (
                <>
                    Once accepted, open the repo:{' '}
                    <Link href="https://github.com/nicepkg/Cleanmails-Starter-Kit" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        Cleanmails-Starter-Kit
                    </Link>
                </>
            ),
        },
        {
            number: 3,
            title: 'Clone & configure',
            description: (
                <>
                    <code className="bg-muted rounded px-1.5 py-0.5 text-sm">git clone</code> the repo, copy{' '}
                    <code className="bg-muted rounded px-1.5 py-0.5 text-sm">.env.example</code> →{' '}
                    <code className="bg-muted rounded px-1.5 py-0.5 text-sm">.env</code>, fill in Postgres & Redis URLs.
                </>
            ),
        },
        {
            number: 4,
            title: 'Start services',
            description: (
                <>
                    <code className="bg-muted rounded px-1.5 py-0.5 text-sm">make dev</code> spins up Postgres + Redis via Docker.
                </>
            ),
        },
        {
            number: 5,
            title: 'Run the app',
            description: (
                <>
                    <code className="bg-muted rounded px-1.5 py-0.5 text-sm">make api</code>,{' '}
                    <code className="bg-muted rounded px-1.5 py-0.5 text-sm">make worker</code>,{' '}
                    <code className="bg-muted rounded px-1.5 py-0.5 text-sm">make frontend</code> — three terminals. Visit{' '}
                    <code className="bg-muted rounded px-1.5 py-0.5 text-sm">localhost:3000</code>.
                </>
            ),
        },
    ]

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="border-b bg-background/80 backdrop-blur-sm">
                <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-foreground">
                            <Send className="size-4 text-background" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold leading-tight tracking-tight">Cleanmails</span>
                            <span className="text-muted-foreground text-xs">starter kit</span>
                        </div>
                    </Link>
                </div>
            </header>

            {/* Main content */}
            <main className="pb-16 pt-12">
                <div className="mx-auto max-w-2xl px-6">
                    {/* Success message */}
                    <div className="mb-12 text-center">
                        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-green-500/10 ring-1 ring-green-500/20">
                            <Check className="size-8 text-green-500" />
                        </div>
                        <h1 className="mb-3 text-4xl font-semibold tracking-tight">You're in.</h1>
                        <p className="text-muted-foreground mx-auto max-w-md text-lg">
                            Your purchase was successful. You'll receive a GitHub invitation to access the source code repo. Check your email and accept it.
                        </p>
                    </div>

                    {/* Quick start steps */}
                    <div className="mb-12">
                        <h2 className="text-muted-foreground mb-6 text-sm font-medium uppercase tracking-wider">Quick Start</h2>
                        <div className="space-y-6">
                            {steps.map((step) => (
                                <div key={step.number} className="flex gap-4">
                                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                                        {step.number}
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="font-medium">{step.title}</h3>
                                        <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Docs CTA */}
                    <div className="rounded-xl border bg-card p-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h3 className="font-medium">Full documentation</h3>
                                <p className="text-muted-foreground mt-1 text-sm">Architecture, API reference, deployment, extending guides.</p>
                            </div>
                            <Button asChild>
                                <Link href="https://starter-kit.coldmail.host/docs" target="_blank" rel="noopener noreferrer">
                                    View docs →
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Help text */}
                    <p className="text-muted-foreground mt-8 text-center text-sm">
                        Didn't get the GitHub invite? Check spam or reach out —{' '}
                        <Link href="https://discord.com/invite/aH8NqcEenZ" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                            we'll resend it immediately
                        </Link>
                        .
                    </p>
                </div>
            </main>
        </div>
    )
}
