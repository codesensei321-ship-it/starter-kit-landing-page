import { cn } from '@/lib/utils'
import { Send } from 'lucide-react'

const APP_NAME = "Cleanmails"

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <div className={`flex size-8 items-center justify-center rounded-lg ${uniColor ? 'bg-foreground' : 'bg-primary'}`}>
                <Send className={`size-4 ${uniColor ? 'text-background' : 'text-primary-foreground'}`} />
            </div>
            <span className="text-lg font-semibold tracking-tight">{APP_NAME}</span>
        </div>
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <div className={`flex size-6 items-center justify-center rounded-lg ${uniColor ? 'bg-foreground' : 'bg-primary'}`}>
                <Send className={`size-3 ${uniColor ? 'text-background' : 'text-primary-foreground'}`} />
            </div>
            <span className="text-lg font-semibold tracking-tight">{APP_NAME}</span>
        </div>
    )
}
