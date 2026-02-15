import React, { useEffect, useState } from "react";
import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

import { Counter } from "@/components/ui/counter";
import { desktopWallpapers } from "./Desktop";
import { mobileWallpapers } from "./Mobile";

const Index = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("support-shown")) {
      setTimeout(() => {
        alert("You can support STANDARD from the Support button.");
        localStorage.setItem("support-shown", "1");
      }, 7000);
    }
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    setDeferredPrompt(null);
    setShowInstall(false);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="relative">
        <ResponsiveHeroBanner
          backgroundImageUrl="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e2dbea0-c0a9-413f-a57b-af279633c0df_3840w.jpg"
          title="STANDARD"
          titleLine2=""
          description="Curated for desktop & mobile"
          badgeLabel=""
          badgeText=""
          primaryButtonText="Browse Desktop"
          primaryButtonHref="/desktop"
          secondaryButtonText="Browse Mobile"
          secondaryButtonHref="/mobile"
          navLinks={[
            { label: "Desktop", href: "/desktop" },
            { label: "Mobile", href: "/mobile" },
          ]}
          showPwaInstall={!!deferredPrompt}
          onPwaInstall={handleInstall}
          partners={[]}
          partnersTitle=""
          ctaButtonText=""
          logoUrl=""
          stats={
            <>
              <Counter to={desktopWallpapers.length} label="Desktop" delay={0.5} />
              <div className="h-12 w-px bg-white/20" />
              <Counter to={mobileWallpapers.length} label="Mobile" delay={0.7} />
            </>
          }
        />
      </div>

      <Features />
      <Footer />
    </div>
  );
};



export default Index;
