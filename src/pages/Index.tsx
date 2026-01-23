import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import wallpaper1 from "@/assets/wallpaper-1.jpg";

const Index = () => {
  return (
    <ResponsiveHeroBanner
      backgroundImageUrl={wallpaper1}
      title="Wallpapers"
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
  );
};

export default Index;
