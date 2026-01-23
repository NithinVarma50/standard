import Logo from "@/components/Logo";
import WallpaperCard from "@/components/WallpaperCard";
import SectionLabel from "@/components/SectionLabel";

// Desktop wallpapers (16:9)
import wallpaper1 from "@/assets/wallpaper-1.jpg";
import wallpaper2 from "@/assets/wallpaper-2.jpg";
import wallpaper3 from "@/assets/wallpaper-3.jpg";
import wallpaper4 from "@/assets/wallpaper-4.jpg";
import wallpaper5 from "@/assets/wallpaper-5.jpg";

// Mobile wallpapers (9:16)
import mobileWallpaper1 from "@/assets/mobile-wallpaper-1.jpg";
import mobileWallpaper2 from "@/assets/mobile-wallpaper-2.jpg";
import mobileWallpaper3 from "@/assets/mobile-wallpaper-3.jpg";
import mobileWallpaper4 from "@/assets/mobile-wallpaper-4.jpg";
import mobileWallpaper5 from "@/assets/mobile-wallpaper-5.jpg";

const desktopWallpapers = [
  { src: wallpaper1, alt: "Mountain silhouette at dusk", filename: "standard-desktop-mountain.jpg" },
  { src: wallpaper2, alt: "Desert sand dunes", filename: "standard-desktop-desert.jpg" },
  { src: wallpaper3, alt: "Ocean wave", filename: "standard-desktop-ocean.jpg" },
  { src: wallpaper4, alt: "Misty forest", filename: "standard-desktop-forest.jpg" },
  { src: wallpaper5, alt: "Aurora borealis", filename: "standard-desktop-aurora.jpg" },
];

const mobileWallpapers = [
  { src: mobileWallpaper1, alt: "Mountain peak in clouds", filename: "standard-mobile-mountain.jpg" },
  { src: mobileWallpaper2, alt: "Desert sand dunes", filename: "standard-mobile-desert.jpg" },
  { src: mobileWallpaper3, alt: "Misty forest", filename: "standard-mobile-forest.jpg" },
  { src: mobileWallpaper4, alt: "Aurora borealis", filename: "standard-mobile-aurora.jpg" },
  { src: mobileWallpaper5, alt: "Ocean wave", filename: "standard-mobile-ocean.jpg" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Logo />

      <main className="px-6 md:px-12 lg:px-24 pt-24 pb-24">
        {/* Desktop Wallpapers Section */}
        <section className="max-w-6xl mx-auto mb-32 md:mb-48">
          <SectionLabel>Desktop</SectionLabel>
          <div className="space-y-16 md:space-y-24">
            {desktopWallpapers.map((wallpaper, index) => (
              <WallpaperCard
                key={`desktop-${index}`}
                src={wallpaper.src}
                alt={wallpaper.alt}
                filename={wallpaper.filename}
              />
            ))}
          </div>
        </section>

        {/* Mobile Wallpapers Section */}
        <section className="max-w-md mx-auto">
          <SectionLabel>Mobile</SectionLabel>
          <div className="space-y-16 md:space-y-24">
            {mobileWallpapers.map((wallpaper, index) => (
              <WallpaperCard
                key={`mobile-${index}`}
                src={wallpaper.src}
                alt={wallpaper.alt}
                filename={wallpaper.filename}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
