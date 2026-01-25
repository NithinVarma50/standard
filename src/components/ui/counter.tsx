"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useSpring, useTransform, useInView } from "framer-motion"

interface CounterProps {
    from?: number
    to: number
    label?: string
    delay?: number
}

export const Counter = ({ from = 0, to, label, delay = 0 }: CounterProps) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-20px" })
    const [hasStarted, setHasStarted] = useState(false)

    const spring = useSpring(from, { damping: 20, stiffness: 80 })
    const display = useTransform(spring, (current) => Math.round(current))

    useEffect(() => {
        if (inView && !hasStarted) {
            setTimeout(() => {
                spring.set(to)
                setHasStarted(true)
            }, delay * 1000)
        }
    }, [inView, to, delay, hasStarted, spring])

    return (
        <div ref={ref} className="flex flex-col items-center justify-center p-4">
            <motion.span
                className="text-3xl font-bold text-white tabular-nums drop-shadow-md"
            >
                {display}
            </motion.span>
            {label && (
                <span className="text-xs uppercase tracking-widest text-white/60 font-medium">
                    {label}
                </span>
            )}
        </div>
    )
}
