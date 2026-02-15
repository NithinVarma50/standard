
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SupportPopupProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export function SupportPopup({ isOpen, onOpenChange }: SupportPopupProps) {
    const upi = "9381904726@fam";
    const payLink = `upi://pay?pa=${upi}&pn=StandardSupport&cu=INR`;

    const copy = async () => {
        await navigator.clipboard.writeText(upi);
        alert("UPI ID copied");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed bottom-20 right-4 z-50 w-full max-w-[320px]"
                >
                    <div className="bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

                        {/* Header / Close */}
                        <div className="flex items-center justify-between px-5 pt-4">
                            <h3 className="text-white font-semibold text-base">Support STANDARD</h3>
                            <button
                                onClick={() => onOpenChange(false)}
                                className="text-neutral-400 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="p-5 flex flex-col items-center">

                            <p className="text-neutral-400 text-xs text-center mb-4 leading-relaxed">
                                STANDARD is free. If you like it,<br /> consider supporting the project.
                            </p>

                            {/* QR Code Area */}
                            <div className="relative group mb-5">
                                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/5 rounded-xl blur opacity-30"></div>
                                <img
                                    src="/upi-qr.png"
                                    alt="UPI QR"
                                    className="relative w-40 rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Actions */}
                            <div className="w-full flex flex-col gap-2">
                                <a
                                    href={payLink}
                                    className="w-full bg-white text-black text-sm font-semibold py-2.5 rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-sm"
                                >
                                    Pay Now
                                </a>

                                <div className="flex items-center gap-2">
                                    <div className="flex-1 flex items-center justify-between bg-white/5 px-3 py-2 rounded-xl border border-white/5">
                                        <span className="text-[10px] text-neutral-400 font-mono truncate max-w-[120px]">{upi}</span>
                                        <button
                                            onClick={copy}
                                            className="text-[10px] font-medium text-neutral-300 hover:text-white transition-colors"
                                        >
                                            COPY
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => onOpenChange(false)}
                                        className="px-3 py-2 rounded-xl hover:bg-white/5 text-[10px] text-neutral-500 hover:text-neutral-300 transition-colors whitespace-nowrap"
                                    >
                                        Maybe later
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
