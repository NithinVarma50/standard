import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import wallpaper1 from "@/assets/wallpaper-1.jpg";

const Index = () => {
  return (
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
  );
};

export default Index;
