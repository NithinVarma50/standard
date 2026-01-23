import Logo from "@/components/Logo";
import WallpaperCard from "@/components/WallpaperCard";

import wallpaper1 from "@/assets/wallpaper-1.jpg";
import wallpaper2 from "@/assets/wallpaper-2.jpg";
import wallpaper3 from "@/assets/wallpaper-3.jpg";
import wallpaper4 from "@/assets/wallpaper-4.jpg";
import wallpaper5 from "@/assets/wallpaper-5.jpg";

const wallpapers = [
  { src: wallpaper1, alt: "Mountain silhouette at dusk", filename: "standard-mountain.jpg" },
  { src: wallpaper2, alt: "Desert sand dunes", filename: "standard-desert.jpg" },
  { src: wallpaper3, alt: "Ocean wave", filename: "standard-ocean.jpg" },
  { src: wallpaper4, alt: "Misty forest", filename: "standard-forest.jpg" },
  { src: wallpaper5, alt: "Aurora borealis", filename: "standard-aurora.jpg" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Logo />

      {/* Wallpaper Gallery - Content is the UI */}
      <main className="px-6 md:px-12 lg:px-24 pt-24 pb-24">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
          {wallpapers.map((wallpaper, index) => (
            <WallpaperCard
              key={index}
              src={wallpaper.src}
              alt={wallpaper.alt}
              filename={wallpaper.filename}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
