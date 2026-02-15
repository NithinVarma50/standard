export default function Support() {
  const upi = "9381904726@fam";

  const copy = async () => {
    await navigator.clipboard.writeText(upi);
    alert("UPI ID copied");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-3xl font-semibold mb-4">Support STANDARD</h1>

      <p className="text-neutral-400 max-w-md mb-8">
        STANDARD is completely free.  
        If you like it, you can support the project.
      </p>

      <img
        src="/upi-qr.png"
        alt="UPI QR"
        className="w-64 rounded-2xl shadow-xl mb-6"
      />

      <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full">
        <span className="text-sm">{upi}</span>
        <button
          onClick={copy}
          className="text-xs px-3 py-1 bg-white/10 rounded-full hover:bg-white/20"
        >
          Copy
        </button>
      </div>

      <p className="text-xs text-neutral-500 mt-8">
        Thank you ❤️
      </p>
    </div>
  );
}
