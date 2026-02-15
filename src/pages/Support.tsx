
import { motion } from "framer-motion";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Support() {
  const upi = "9381904726@fam";
  const payLink = `upi://pay?pa=${upi}&pn=StandardSupport&cu=INR`;
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(upi);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md flex flex-col items-center"
      >

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Support STANDARD
          </h1>
          <p className="text-neutral-400 text-lg">
            Free forever. Supported by you.
          </p>
        </div>

        {/* Main Card */}
        <div className="w-full bg-neutral-900/50 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col items-center shadow-2xl">

          {/* QR Code */}
          <div className="relative group mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <img
              src="/upi-qr.png"
              alt="UPI QR"
              className="relative w-64 rounded-xl shadow-2xl border border-white/5"
            />
          </div>

          {/* Pay Button */}
          <a
            href={payLink}
            className="w-full bg-white text-black font-bold text-lg py-4 rounded-xl hover:bg-neutral-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mb-6 shadow-lg shadow-white/5"
          >
            Pay Now
          </a>

          {/* UPI ID Copy */}
          <div className="w-full flex items-center justify-between bg-white/5 px-5 py-3 rounded-xl border border-white/5 hover:border-white/10 transition-colors group">
            <span className="text-neutral-300 font-mono tracking-wide">{upi}</span>
            <button
              onClick={copy}
              className="text-neutral-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
            >
              {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
            </button>
          </div>

        </div>

        {/* Back Link */}
        <Link
          to="/"
          className="mt-10 flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

      </motion.div>
    </div>
  );
}
