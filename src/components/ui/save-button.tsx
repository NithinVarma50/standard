"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, Check, Sparkles, Download } from "lucide-react"
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
        idle: "Save App",
        saving: "Installing...",
        saved: "Opened!"
    },
    className,
    onSave
}: SaveButtonProps) {
    const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle")
    const [bounce, setBounce] = useState(false)
    const isDark = true; // Force dark theme style for consistent premium look

    const handleSave = async () => {
        if (status === "idle") {
            setStatus("saving")
            try {
                if (onSave) {
                    await onSave()
                } else {
                    // Simulation if no onSave provided
                    await new Promise(resolve => setTimeout(resolve, 2000))
                }
                setStatus("saved")
                setBounce(true)
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"],
                    shapes: ["star", "circle"],
                })
                setTimeout(() => {
                    setStatus("idle")
                    setBounce(false)
                }, 3000)
            } catch (error) {
                setStatus("idle")
                console.error("Save failed:", error)
            }
        }
    }

    const buttonVariants = {
        idle: {
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "white",
            scale: 1,
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
        },
        saving: {
            backgroundColor: "rgba(0,0,0,0.8)",
            color: "white",
            scale: 1,
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
        },
        saved: {
            backgroundColor: "rgba(34, 197, 94, 0.9)",
            color: "white",
            scale: [1, 1.1, 1],
            transition: {
                duration: 0.2,
                times: [0, 0.5, 1],
            },
        },
    }

    const sparkleVariants = {
        initial: { opacity: 0, scale: 0 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
    }

    return (
        <div className="relative">
            <motion.button
                onClick={handleSave}
                animate={status}
                variants={buttonVariants}
                className={cn(
                    "group relative grid overflow-hidden rounded-full px-6 py-2 transition-all duration-200",
                    status === "idle"
                        ? "shadow-lg bg-black/60 backdrop-blur-md border border-white/10"
                        : "",
                    "hover:bg-black/80 hover:scale-105",
                    className
                )}
                style={{ minWidth: "150px" }}
                whileHover={status === "idle" ? { scale: 1.05 } : {}}
                whileTap={status === "idle" ? { scale: 0.95 } : {}}
            >
                {status === "idle" && (
                    <span>
                        <span
                            className={cn(
                                "spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full",
                                "[mask:linear-gradient(black,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]",
                                "before:rotate-[-90deg] before:animate-rotate",
                                "before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]",
                            )}
                        />
                    </span>
                )}
                <span
                    className={cn(
                        "backdrop absolute inset-px rounded-[22px] transition-colors duration-200",
                        status === "idle"
                            ? "bg-black/40 group-hover:bg-black/60"
                            : "",
                    )}
                />
                <span className="z-10 flex items-center justify-center gap-2 text-sm font-medium">
                    <AnimatePresence mode="wait">
                        {status === "idle" && (
                            <motion.span
                                key="idle-icon"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Download className="w-4 h-4" />
                            </motion.span>
                        )}
                        {status === "saving" && (
                            <motion.span
                                key="saving"
                                initial={{ opacity: 0, rotate: 0 }}
                                animate={{ opacity: 1, rotate: 360 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.3,
                                    rotate: { repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" },
                                }}
                            >
                                <Loader2 className="w-4 h-4" />
                            </motion.span>
                        )}
                        {status === "saved" && (
                            <motion.span
                                key="saved"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Check className="w-4 h-4" />
                            </motion.span>
                        )}
                    </AnimatePresence>
                    <motion.span
                        key={status}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {status === "idle" ? text.idle : status === "saving" ? text.saving : text.saved}
                    </motion.span>
                </span>
            </motion.button>
            <AnimatePresence>
                {bounce && (
                    <motion.div
                        className="absolute top-0 right-0 -mr-1 -mt-1"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={sparkleVariants}
                    >
                        <Sparkles className="w-6 h-6 text-yellow-400" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
