import { useState } from "react";
import { CurtainButton } from "@/components/ui/curtain-button";

interface WallpaperCardProps {
  src: string;
  alt: string;
  filename: string;
}

const WallpaperCard = ({ src, alt, filename }: WallpaperCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

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
    <div
      className="relative w-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative overflow-hidden rounded-lg transition-all duration-300 ease-apple"
        style={{
          transform: isHovered ? "scale(1.02)" : "scale(1)",
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover transition-all duration-300 ease-apple"
          style={{
            opacity: isHovered ? 1 : 0.92,
            filter: isHovered ? "brightness(1)" : "brightness(0.95)",
          }}
          loading="lazy"
        />

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
  );
};

export default WallpaperCard;
