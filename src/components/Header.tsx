import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gradient">
            StacX
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
            <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
            <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;