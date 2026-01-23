import Logo from "@/components/Logo";
import WallpaperCard from "@/components/WallpaperCard";
import SectionLabel from "@/components/SectionLabel";
import { NavLink } from "@/components/NavLink";

import wallpaper1 from "@/assets/wallpaper-1.jpg";
import wallpaper2 from "@/assets/wallpaper-2.jpg";
import wallpaper3 from "@/assets/wallpaper-3.jpg";
import wallpaper4 from "@/assets/wallpaper-4.jpg";
import wallpaper5 from "@/assets/wallpaper-5.jpg";

const desktopWallpapers = [
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
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Desktop;
