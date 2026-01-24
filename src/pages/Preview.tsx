import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

const Preview = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const src = searchParams.get("src");
    const alt = searchParams.get("alt") || "Wallpaper";
    const filename = searchParams.get("filename") || "wallpaper.jpg";

    if (!src) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <p>No image selected</p>
                <button onClick={() => navigate(-1)} className="ml-4 underline">Go back</button>
            </div>
        );
    }

    const handleDownload = async () => {
        try {
            const response = await fetch(src);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download failed:", error);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* Header */}
            <div className="p-6 flex items-center justify-between z-10">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                </button>
                <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#31b8c6] hover:opacity-90 transition-opacity text-black font-medium"
                >
                    <Download className="w-5 h-5" />
                    <span>Download</span>
                </button>
            </div>

            {/* Image Container */}
            <div className="flex-1 flex items-center justify-center p-6 overflow-hidden">
                <img
                    src={src}
                    alt={alt}
                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                    style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                />
            </div>
        </div>
    );
};

export default Preview;
