import { useState } from "react";
import { CurtainButton } from "@/components/ui/curtain-button";

interface WallpaperCardProps {
  src: string;
  alt: string;
  filename: string;
}

const WallpaperCard = ({ src, alt, filename }: WallpaperCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = async () => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;

      // Ensure we use the correct filename/extension
      // If filename doesn't have an extension, try to derive from blob type or default to jpg
      let finalFilename = filename;
      if (!filename.includes('.')) {
        const type = blob.type.split('/')[1] || 'jpg';
        finalFilename = `${filename}.${type}`;
      }

      link.download = finalFilename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div
      className="relative w-full cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative p-3 rounded-2xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm transition-all duration-500 ease-out"
        style={{
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)"
        }}
      >
        <div className="relative overflow-hidden rounded-xl bg-black/20">
          <img
            src={imgError ? "/placeholder.svg" : src}
            alt={alt}
            className={`w-full h-auto object-cover transition-all duration-300 ease-apple ${isLoading ? "opacity-0" : "opacity-100"
              }`}
            style={{
              ...(imgError ? { objectFit: "contain", padding: "2rem", backgroundColor: "#f3f4f6" } : {})
            }}
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            onError={(e) => {
              console.error("Image load error:", src);
              setImgError(true);
              setIsLoading(false);
            }}
          />

          {isLoading && !imgError && (
            <div className="absolute inset-0 bg-muted/20 animate-pulse" />
          )}

          {imgError && (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              Failed to load image
            </div>
          )}

          {/* Download button with ghost curtain animation */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-300 ease-apple"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered
                ? "translate(-50%, 0)"
                : "translate(-50%, 8px)",
            }}
          >
            <CurtainButton
              text="Download"
              variant="ghost"
              size="sm"
              onClick={handleDownload}
              className="backdrop-blur-sm bg-white/10 rounded-full px-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallpaperCard;
