import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Mobile menu toggled');
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section: string) => {
    console.log(`Navigation clicked: ${section}`);
    setIsMenuOpen(false);
  };

  const handleDonate = () => {
    console.log('Donate button clicked');
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">ॐ</span>
            </div>
            <div>
              <div className="font-serif font-bold text-lg text-primary">ISKCON</div>
              <div className="text-xs text-muted-foreground">Pune</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('programs')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Programs
            </button>
            <button 
              onClick={() => handleNavClick('schedule')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Schedule
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              onClick={handleDonate}
              data-testid="button-donate"
              className="bg-accent text-accent-foreground hover-elevate"
            >
              Donate
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover-elevate rounded-md"
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavClick('home')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('programs')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Programs
              </button>
              <button 
                onClick={() => handleNavClick('schedule')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Schedule
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Contact
              </button>
              <Button 
                onClick={handleDonate}
                data-testid="button-donate-mobile"
                className="bg-accent text-accent-foreground w-full mt-4"
              >
                Donate
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}