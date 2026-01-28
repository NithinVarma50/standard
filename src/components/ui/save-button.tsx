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
                <div className="grid grid-cols-2 gap-4 py-4">
                    {/* Desktop (Windows) */}
                    <a
                        href="https://github.com/NithinVarma50/standard/releases/download/v1.0.0/Standard%20Wallpaper.exe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors gap-3 group relative overflow-hidden"
                        onClick={() => {
                            setIsOpen(false);
                            confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } })
                        }}
                    >
                        <Monitor className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform mb-2" />
                        <div className="text-center space-y-1">
                            <span className="block font-medium">Windows</span>
                            <span className="text-[10px] text-white/50 block leading-tight">Native Experience</span>
                            <span className="text-[10px] text-green-400 block leading-tight">Direct Download</span>
                        </div>
                    </a>

                    {/* Mobile (Android) */}
                    <a
                        href="https://github.com/NithinVarma50/standard/releases/download/v1.0.0/standard-wallpaper.apk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors gap-3 group relative overflow-hidden"
                        onClick={() => {
                            setIsOpen(false);
                            confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } })
                        }}
                    >
                        <Smartphone className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform mb-2" />
                        <div className="text-center space-y-1">
                            <span className="block font-medium">Android</span>
                            <span className="text-[10px] text-white/50 block leading-tight">Native Experience</span>
                            <span className="text-[10px] text-green-400 block leading-tight">Direct Download</span>
                        </div>
                    </a>

                    {/* macOS - Coming Soon */}
                    <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5 gap-3 opacity-50 cursor-not-allowed">
                        <Apple className="w-8 h-8 text-gray-400" />
                        <div className="text-center">
                            <span className="block font-medium">macOS</span>
                            <span className="text-xs text-white/50">Coming Soon</span>
                        </div>
                    </div>

                    {/* iOS - Coming Soon */}
                    <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5 gap-3 opacity-50 cursor-not-allowed">
                        <div className="relative">
                            <Smartphone className="w-8 h-8 text-gray-400" />
                            <Apple className="w-3 h-3 absolute bottom-0 right-0 text-white fill-current" />
                        </div>
                        <div className="text-center">
                            <span className="block font-medium">iOS</span>
                            <span className="text-xs text-white/50">Coming Soon</span>
                        </div>
                    </div>
                </div>

                {/* PWA Option (Bottom Row) */}
                {onSave && (
                    <div className="border-t border-white/10 pt-4 mt-2">
                        <button
                            onClick={handlePwaInstall}
                            className="w-full flex-col items-center justify-center gap-1 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <div className="flex items-center justify-center gap-2 text-sm font-medium">
                                <Globe className="w-4 h-4" />
                                <span>Install as Web App (PWA)</span>
                            </div>
                            <span className="block text-[10px] text-white/50">No download required • Auto-updates • Works offline</span>
                        </button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}
