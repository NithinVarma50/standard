
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

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
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md text-center">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">Support STANDARD</DialogTitle>
                </DialogHeader>

                <div className="flex flex-col items-center justify-center space-y-6 py-4">
                    <p className="text-neutral-400 text-sm max-w-[280px]">
                        STANDARD is completely free. <br />
                        If you like it, you can support the project.
                    </p>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                        <img
                            src="/upi-qr.png"
                            alt="UPI QR"
                            className="relative w-48 rounded-xl shadow-2xl"
                        />
                    </div>

                    <div className="flex flex-col gap-3 w-full max-w-xs">
                        <a
                            href={payLink}
                            className="w-full bg-white text-black font-semibold py-2.5 rounded-full hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                        >
                            Pay Now
                        </a>

                        <div className="flex items-center justify-between bg-white/5 px-4 py-2 rounded-full border border-white/10">
                            <span className="text-xs text-neutral-400 font-mono">{upi}</span>
                            <button
                                onClick={copy}
                                className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-white/10 rounded hover:bg-white/20 transition-colors"
                            >
                                Copy
                            </button>
                        </div>
                    </div>

                    <p className="text-[10px] text-neutral-600">
                        Thank you ❤️
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
}
