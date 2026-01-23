import Logo from "@/components/Logo";
import WallpaperCard from "@/components/WallpaperCard";
import SectionLabel from "@/components/SectionLabel";
import { NavLink } from "@/components/NavLink";

import mobileWallpaper1 from "@/assets/mobile-wallpaper-1.jpg";
import mobileWallpaper2 from "@/assets/mobile-wallpaper-2.jpg";
import mobileWallpaper3 from "@/assets/mobile-wallpaper-3.jpg";
import mobileWallpaper4 from "@/assets/mobile-wallpaper-4.jpg";
import mobileWallpaper5 from "@/assets/mobile-wallpaper-5.jpg";
import mobileWallpaper6 from "@/assets/mobile-wallpaper-6.jpg";

const mobileWallpapers = [
  { src: mobileWallpaper6, alt: "Penguin on ice", filename: "standard-mobile-penguin.jpg" },
  { src: mobileWallpaper1, alt: "Mountain peak in clouds", filename: "standard-mobile-mountain.jpg" },
  { src: mobileWallpaper2, alt: "Desert sand dunes", filename: "standard-mobile-desert.jpg" },
  { src: mobileWallpaper3, alt: "Misty forest", filename: "standard-mobile-forest.jpg" },
  { src: mobileWallpaper4, alt: "Aurora borealis", filename: "standard-mobile-aurora.jpg" },
  { src: mobileWallpaper5, alt: "Ocean wave", filename: "standard-mobile-ocean.jpg" },
];

const Mobile = () => {
  return (
    <div className="min-h-screen bg-background relative isolate">
      {/* Modern Minimalist Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-background" />
      <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

      <Logo />
      <NavLink to="/desktop" className="fixed top-6 right-6 md:right-12 lg:right-24 z-50 text-xs font-medium tracking-widest text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground">
        Desktop
      </NavLink>

      <main className="px-6 md:px-12 lg:px-24 pt-24 pb-24">
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

export default Mobile;
