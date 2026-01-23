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

// Bulk imports
import bulk1 from "@/assets/mobile-bulk-1.jfif";
import bulk2 from "@/assets/mobile-bulk-2.jfif";
import bulk3 from "@/assets/mobile-bulk-3.jfif";
import bulk4 from "@/assets/mobile-bulk-4.jfif";
import bulk5 from "@/assets/mobile-bulk-5.jfif";
import bulk6 from "@/assets/mobile-bulk-6.jfif";
import bulk7 from "@/assets/mobile-bulk-7.jfif";
import bulk8 from "@/assets/mobile-bulk-8.jfif";
import bulk9 from "@/assets/mobile-bulk-9.jfif";
import bulk10 from "@/assets/mobile-bulk-10.jfif";
import bulk11 from "@/assets/mobile-bulk-11.jfif";
import bulk12 from "@/assets/mobile-bulk-12.jfif";
import bulk13 from "@/assets/mobile-bulk-13.jfif";
import bulk14 from "@/assets/mobile-bulk-14.jfif";
import bulk15 from "@/assets/mobile-bulk-15.jfif";
import bulk16 from "@/assets/mobile-bulk-16.jfif";
import bulk17 from "@/assets/mobile-bulk-17.jfif";
import bulk18 from "@/assets/mobile-bulk-18.jfif";
import bulk19 from "@/assets/mobile-bulk-19.jfif";
import bulk20 from "@/assets/mobile-bulk-20.jfif";
import bulk21 from "@/assets/mobile-bulk-21.jfif";
import bulk22 from "@/assets/mobile-bulk-22.jfif";
import bulk23 from "@/assets/mobile-bulk-23.jfif";

const mobileWallpapers = [
  // Newest first
  { src: bulk1, alt: "Aesthetic wallpaper 1", filename: "standard-mobile-01.jfif" },
  { src: bulk2, alt: "Aesthetic wallpaper 2", filename: "standard-mobile-02.jfif" },
  { src: bulk3, alt: "Aesthetic wallpaper 3", filename: "standard-mobile-03.jfif" },
  { src: bulk4, alt: "Aesthetic wallpaper 4", filename: "standard-mobile-04.jfif" },
  { src: bulk5, alt: "Aesthetic wallpaper 5", filename: "standard-mobile-05.jfif" },
  { src: bulk6, alt: "Aesthetic wallpaper 6", filename: "standard-mobile-06.jfif" },
  { src: bulk7, alt: "Aesthetic wallpaper 7", filename: "standard-mobile-07.jfif" },
  { src: bulk8, alt: "Aesthetic wallpaper 8", filename: "standard-mobile-08.jfif" },
  { src: bulk9, alt: "Aesthetic wallpaper 9", filename: "standard-mobile-09.jfif" },
  { src: bulk10, alt: "Aesthetic wallpaper 10", filename: "standard-mobile-10.jfif" },
  { src: bulk11, alt: "Aesthetic wallpaper 11", filename: "standard-mobile-11.jfif" },
  { src: bulk12, alt: "Aesthetic wallpaper 12", filename: "standard-mobile-12.jfif" },
  { src: bulk13, alt: "Aesthetic wallpaper 13", filename: "standard-mobile-13.jfif" },
  { src: bulk14, alt: "Aesthetic wallpaper 14", filename: "standard-mobile-14.jfif" },
  { src: bulk15, alt: "Aesthetic wallpaper 15", filename: "standard-mobile-15.jfif" },
  { src: bulk16, alt: "Aesthetic wallpaper 16", filename: "standard-mobile-16.jfif" },
  { src: bulk17, alt: "Aesthetic wallpaper 17", filename: "standard-mobile-17.jfif" },
  { src: bulk18, alt: "Aesthetic wallpaper 18", filename: "standard-mobile-18.jfif" },
  { src: bulk19, alt: "Aesthetic wallpaper 19", filename: "standard-mobile-19.jfif" },
  { src: bulk20, alt: "Aesthetic wallpaper 20", filename: "standard-mobile-20.jfif" },
  { src: bulk21, alt: "Aesthetic wallpaper 21", filename: "standard-mobile-21.jfif" },
  { src: bulk22, alt: "Aesthetic wallpaper 22", filename: "standard-mobile-22.jfif" },
  { src: bulk23, alt: "Aesthetic wallpaper 23", filename: "standard-mobile-23.jfif" },

  // Previous
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
