import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Telefon",
      content: "+49 162 7002606",
      href: "tel:+4916270026066"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "E-Mail",
      content: "ws@evval.io",
      href: "mailto:ws@evval.io"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Adresse",
      content: "Römerstraße 11, 53859 Niederkassel",
      href: "https://maps.google.com/?q=Römerstraße+11,+53859+Niederkassel"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Verfügbarkeit",
      content: "Mo-Fr 9:00-18:00 Uhr",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Kontakt <span className="gradient-text">aufnehmen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Haben Sie Fragen oder benötigen Sie Unterstützung? 
            Ich bin gerne für Sie da und freue mich auf Ihre Nachricht.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="gradient-card shadow-card border-0 hover:shadow-hero transition-smooth group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 w-14 h-14 bg-brand-purple-light rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                  {info.icon}
                </div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {info.href ? (
                  <a 
                    href={info.href}
                    className="text-muted-foreground hover:text-primary transition-smooth font-medium"
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.content}
                  </a>
                ) : (
                  <span className="text-muted-foreground font-medium">{info.content}</span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-primary shadow-hero border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Kostenlose Erstberatung
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                In einem unverbindlichen Gespräch besprechen wir Ihre IT-Herausforderungen 
                und finden gemeinsam die beste Lösung für Ihr Unternehmen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline-white" 
                  size="lg"
                  asChild
                >
                  <a href="tel:+4916270026066">
                    <Phone className="mr-2 h-5 w-5" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button 
                  variant="outline-white" 
                  size="lg"
                  asChild
                >
                  <a href="mailto:ws@evval.io">
                    <Mail className="mr-2 h-5 w-5" />
                    E-Mail schreiben
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;