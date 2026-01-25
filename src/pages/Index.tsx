import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import SlideButton from "@/components/ui/slide-button";
import { useEffect, useState } from "react";

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
          partners={[]}
          partnersTitle=""
          ctaButtonText=""
          logoUrl=""
        />
        {/* PWA Install Slide Button - Floating mobile-friendly position */}
        {showInstall && (
          <div className="absolute bottom-24 left-0 right-0 flex justify-center z-50 md:bottom-32 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="scale-90 md:scale-100">
              <SlideButton onSlideSuccess={handleInstall} />
            </div>
          </div>
        )}
      </div>

      <Features />
      <Footer />
    </div>
  );
};



export default Index;
