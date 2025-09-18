import logo from "@/assets/logo-icon.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="it.evval.io" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Digitale Lösungen für echte Betriebe. 
              Persönliche Unterstützung für Ihre individuellen IT-Bedürfnisse.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={scrollToTop}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Startseite
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Über mich
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Waldemar Schiller</p>
              <p>Römerstraße 11</p>
              <p>53859 Niederkassel</p>
              <p className="mt-3">
                <a href="tel:+4916270026066" className="hover:text-primary-foreground transition-smooth">
                  +49 162 7002606
                </a>
              </p>
              <p>
                <a href="mailto:ws@evval.io" className="hover:text-primary-foreground transition-smooth">
                  ws@evval.io
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 it.evval.io - Alle Rechte vorbehalten
            </p>
            <div className="flex gap-6 text-sm">
              <button 
                onClick={() => scrollToSection('impressum')}
                className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth"
              >
                Impressum
              </button>
              <span className="text-primary-foreground/40">|</span>
              <div className="flex items-center gap-2">
                <img src={logo} alt="it.evval.io" className="h-4 w-auto brightness-0 invert" />
                <span className="text-primary-foreground/60">it.evval.io</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;