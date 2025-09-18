import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Settings, Laptop, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Digitale Grundlagen & Infrastruktur",
      subtitle: "Ihr IT-Fundament zuverlässig und sicher",
      features: [
        "Hosting für Websites & Anwendungen",
        "E-Mail-Systeme (inkl. Einrichtung & Migration)",
        "Hardware-Installationen & Netzwerktechnik",
        "Wartung, Reparatur & Pflege",
        "Datenhaltung & Sicherung (lokal oder in der Cloud)",
        "App-Entwicklung"
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Systeme & Automatisierung",
      subtitle: "Wir bringen Ordnung, Effizienz und Konnektivität Ihrer Systeme",
      features: [
        "Integration bestehender Tools & Systeme",
        "Prozessautomatisierung (z. B. Zeiterfassung, Rechnungsversand)",
        "Benutzerverwaltung & Rechtekonzepte",
        "Schnittstellen & Datenflüsse optimieren",
        "Anpassung an Ihre bestehende Arbeitsweise"
      ]
    },
    {
      icon: <Laptop className="w-8 h-8 text-primary" />,
      title: "Digital arbeiten & wachsen",
      subtitle: "Modern und verständlich. Damit Sie wirklich digital arbeiten können",
      features: [
        "Webseiten-Erstellung & Pflege (DSGVO-konform, mobilfähig)",
        "Cloud-Arbeitsplätze & mobiles Arbeiten",
        "IT-Problemlösungen (Support, Fehleranalyse)",
        "Beratung für digitale Weiterentwicklung",
        "Schulung & Einführung für Teams und Einzelpersonen"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Unsere <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Von der Grundausstattung bis zur digitalen Transformation – 
            wir begleiten Sie auf Ihrem Weg in die digitale Zukunft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="gradient-card shadow-card border-0 hover:shadow-hero transition-smooth group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-brand-purple-light rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground font-medium text-center">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;