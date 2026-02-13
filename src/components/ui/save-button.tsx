"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import confetti from "canvas-confetti"
import { cn } from "@/lib/utils"

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
    const handlePwaInstall = async () => {
        if (onSave) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            await onSave()
        }
    }

    return (
        <div className="relative">
            <motion.button
                layout
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePwaInstall}
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
}
