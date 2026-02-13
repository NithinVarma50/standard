"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, Check, Sparkles, Download, Monitor, Smartphone, Apple, Globe } from "lucide-react"
import confetti from "canvas-confetti"
import { cn } from "@/lib/utils"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface SaveButtonProps {
    text?: {
        idle?: string
        saving?: string
        saved?: string
    }
    className?: string
    onSave?: () => Promise<void> | void
}

export function SaveButton({
    text = {
        idle: "Get App",
        saving: "Opening...",
        saved: "Opened!"
    },
    className,
    onSave
}: SaveButtonProps) {
    const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle")
    const [bounce, setBounce] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    // Using existing button style as trigger
    const TriggerButton = (
        <div className="relative">
            <motion.button
                layout
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "group relative flex items-center gap-2 overflow-hidden rounded-full px-6 py-2 transition-all duration-200",
                    "shadow-lg bg-black/60 backdrop-blur-md border border-white/10",
                    "hover:bg-black/80",
                    className
                )}
            >
                <div>
                    <span
                        className={cn(
                            "spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full",
                            "[mask:linear-gradient(black,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]",
                            "before:rotate-[-90deg] before:animate-rotate",
                            "before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]",
                        )}
                    />
                </div>
                <span className="absolute inset-px rounded-[22px] bg-black/40 group-hover:bg-black/60 transition-colors duration-200" />
                <div className="z-10 flex items-center justify-center gap-2 text-sm font-medium text-white">
                    <Download className="w-4 h-4" />
                    <span>{text.idle}</span>
                </div>
            </motion.button>
        </div>
    )

    const handlePwaInstall = async () => {
        if (onSave) {
            await onSave()
            setIsOpen(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {TriggerButton}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-black/90 border border-white/10 text-white backdrop-blur-xl">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-center">Choose Platform</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                    {/* PWA Option (Highlighted as Recommended) */}
                    {onSave && (
                        <div className="border-t border-white/10 pt-4 mt-2">
                            <div className="relative">
                                {/* Recommended Badge */}
                                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-lg">
                                        ⭐ Recommended
                                    </span>
                                </div>

                                <button
                                    onClick={() => {
                                        confetti({
                                            particleCount: 100,
                                            spread: 70,
                                            origin: { y: 0.6 }
                                        });
                                        handlePwaInstall();
                                    }}
                                    className="w-full flex-col items-center justify-center gap-1 p-4 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 border-2 border-green-500/50 hover:border-green-500/70 transition-all duration-200 group relative overflow-hidden"
                                >
                                    {/* Shine effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                    <div className="flex items-center justify-center gap-2 text-sm font-bold text-green-400 relative z-10">
                                        <Globe className="w-5 h-5" />
                                        <span>Install as Web App (PWA)</span>
                                    </div>
                                    <span className="block text-[10px] text-white/70 font-medium relative z-10">No download • Auto-updates • Works offline • Instant access</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

            </DialogContent>
        </Dialog>
    )
}
