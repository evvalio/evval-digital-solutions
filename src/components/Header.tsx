import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="it.evval.io" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Über mich
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Kontakt
            </button>
            <Button variant="brand" size="sm">
              Beratung anfragen
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth w-full text-left"
              >
                Über mich
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth w-full text-left"
              >
                Kontakt
              </button>
              <div className="px-3 py-2">
                <Button variant="brand" size="sm" className="w-full">
                  Beratung anfragen
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;