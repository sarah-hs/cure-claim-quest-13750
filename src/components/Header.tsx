import { Link } from "react-router-dom";
import cureLogo from "@/assets/cure-logo.webp";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <a href="https://www.cure.com" className="flex items-center text-white">
          <img src={cureLogo} alt="CURE Auto Insurance" className="h-12" />
        </a>
        
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:opacity-80 transition-opacity">
            CLAIMS CENTER
          </Link>
          <Link to="#" className="text-sm font-medium hover:opacity-80 transition-opacity">
            ROADSIDE
          </Link>
          <span className="text-sm">📞 800-535-CURE (2873)</span>
          <Button asChild variant="action">
            <a href="https://www.cure.com/my-account">LOG IN TO MY ACCOUNT</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};
