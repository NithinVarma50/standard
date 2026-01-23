import Logo from "@/components/Logo";
import WallpaperCard from "@/components/WallpaperCard";
import SectionLabel from "@/components/SectionLabel";
import { NavLink } from "@/components/NavLink";

import wallpaper1 from "@/assets/wallpaper-1.jpg";
import wallpaper2 from "@/assets/wallpaper-2.jpg";
import wallpaper3 from "@/assets/wallpaper-3.jpg";
import wallpaper4 from "@/assets/wallpaper-4.jpg";
import wallpaper5 from "@/assets/wallpaper-5.jpg";
import desktopNew1 from "@/assets/desktop-new-1.jpg";
import desktopNew2 from "@/assets/desktop-new-2.jpg";
import desktopNew3 from "@/assets/desktop-new-3.jpg";
import desktopNew4 from "@/assets/desktop-new-4.jpg";
import desktopNew5 from "@/assets/desktop-new-5.jpg";
import desktopNew6 from "@/assets/desktop-new-6.jpg";
import desktopNew7 from "@/assets/desktop-new-7.jpg";

const desktopWallpapers = [
  // New additions (Horizontal adjusted)
  { src: desktopNew1, alt: "Desktop wallpaper 1", filename: "standard-desktop-new-01.jpg" },
  { src: desktopNew2, alt: "Desktop wallpaper 2", filename: "standard-desktop-new-02.jpg" },
  { src: desktopNew3, alt: "Desktop wallpaper 3", filename: "standard-desktop-new-03.jpg" },
  { src: desktopNew4, alt: "Desktop wallpaper 4", filename: "standard-desktop-new-04.jpg" },
  { src: desktopNew5, alt: "Desktop wallpaper 5", filename: "standard-desktop-new-05.jpg" },
  { src: desktopNew6, alt: "Desktop wallpaper 6", filename: "standard-desktop-new-06.jpg" },
  { src: desktopNew7, alt: "Desktop wallpaper 7", filename: "standard-desktop-new-07.jpg" },

  // Original
  { src: wallpaper1, alt: "Mountain silhouette at dusk", filename: "standard-desktop-mountain.jpg" },
  { src: wallpaper2, alt: "Desert sand dunes", filename: "standard-desktop-desert.jpg" },
  { src: wallpaper3, alt: "Ocean wave", filename: "standard-desktop-ocean.jpg" },
  { src: wallpaper4, alt: "Misty forest", filename: "standard-desktop-forest.jpg" },
  { src: wallpaper5, alt: "Aurora borealis", filename: "standard-desktop-aurora.jpg" },
];

const Desktop = () => {
  return (
    <div className="min-h-screen bg-background relative isolate">
      {/* Modern Minimalist Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-background" />
      <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

      <Logo />
      <NavLink to="/mobile" className="fixed top-6 right-6 md:right-12 lg:right-24 z-50 text-xs font-medium tracking-widest text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground">
        Mobile
      </NavLink>

      <main className="px-6 md:px-12 lg:px-24 pt-24 pb-24">
        <section className="max-w-6xl mx-auto">
          <SectionLabel>Desktop</SectionLabel>
          <div className="space-y-16 md:space-y-24">
            {desktopWallpapers.map((wallpaper, index) => (
              <WallpaperCard
                key={`desktop-${index}`}
                src={wallpaper.src}
                alt={wallpaper.alt}
                filename={wallpaper.filename}
                className="aspect-[16/10] w-full"
                imageClassName="w-full h-full object-cover object-center"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Desktop;
