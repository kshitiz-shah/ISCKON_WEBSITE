import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    console.log('Mobile menu toggled');
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleDonate = () => {
    console.log('Donate button clicked');
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">ॐ</span>
            </div>
            <div>
              <div className="font-serif font-bold text-lg text-primary">ISKCON</div>
              <div className="text-xs text-muted-foreground">Pune</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}>
              Home
            </Link>
            <Link href="/about" className={`transition-colors ${isActive('/about') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}>
              About
            </Link>
            <Link href="/programs" className={`transition-colors ${isActive('/programs') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}>
              Programs
            </Link>
            <Link href="/schedule" className={`transition-colors ${isActive('/schedule') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}>
              Schedule
            </Link>
            <Link href="/contact" className={`transition-colors ${isActive('/contact') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}>
              Contact
            </Link>
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
              <Link href="/" onClick={closeMenu} className={`text-left transition-colors py-2 block ${isActive('/') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}>
                Home
              </Link>
              <Link href="/about" onClick={closeMenu} className={`text-left transition-colors py-2 block ${isActive('/about') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}>
                About
              </Link>
              <Link href="/programs" onClick={closeMenu} className={`text-left transition-colors py-2 block ${isActive('/programs') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}>
                Programs
              </Link>
              <Link href="/schedule" onClick={closeMenu} className={`text-left transition-colors py-2 block ${isActive('/schedule') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}>
                Schedule
              </Link>
              <Link href="/contact" onClick={closeMenu} className={`text-left transition-colors py-2 block ${isActive('/contact') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}>
                Contact
              </Link>
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