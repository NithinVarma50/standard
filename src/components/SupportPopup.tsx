
import { useState, useEffect } from "react";
import { X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export function SupportPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Only show on home page
        if (location.pathname !== "/") {
            setIsOpen(false);
            return;
        }

        const hasSeen = localStorage.getItem("support-announcement-seen");
        // Show after 5 seconds if not seen
        if (!hasSeen) {
            const timer = setTimeout(() => setIsOpen(true), 5000);
            return () => clearTimeout(timer);
        }
    }, [location.pathname]);

    const dismiss = () => {
        setIsOpen(false);
        localStorage.setItem("support-announcement-seen", "true");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    className="fixed bottom-24 right-6 z-40 w-full max-w-xs" // Positioned above the global support button or nicely in corner
                >
                    <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col gap-3">

                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-pink-500/10 rounded-full text-pink-500 mt-1">
                                <Heart size={16} fill="currentColor" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-white text-sm font-semibold">Enjoying STANDARD?</h4>
                                <p className="text-neutral-400 text-xs mt-1 leading-relaxed">
                                    Result of hours of work. Help us keep it free & premium.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-2 mt-1">
                            <button
                                onClick={dismiss}
                                className="text-xs text-neutral-500 hover:text-white px-3 py-1.5 transition-colors"
                            >
                                Maybe later
                            </button>
                            <Link
                                to="/support"
                                onClick={() => setIsOpen(false)}
                                className="text-xs bg-white text-black font-medium px-4 py-1.5 rounded-full hover:bg-neutral-200 transition-colors shadow-sm"
                            >
                                Support
                            </Link>
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
