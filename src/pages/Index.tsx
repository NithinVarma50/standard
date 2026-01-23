import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <Logo />

      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <Link
          to="/desktop"
          className="text-sm font-medium tracking-widest text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground"
        >
          Desktop
        </Link>
        <Link
          to="/mobile"
          className="text-sm font-medium tracking-widest text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground"
        >
          Mobile
        </Link>
      </div>
    </div>
  );
};

export default Index;
