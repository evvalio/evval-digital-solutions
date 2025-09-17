import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Lightbulb, ArrowRight } from "lucide-react";

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      text: "Seit 2008 in der IT tätig"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      text: "Erfahrung in Großunternehmen & technischer Leitung"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      text: "Praxisnähe & Lösungskompetenz"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Über <span className="gradient-text">mich</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Ich bin seit <strong className="text-foreground">2008 in der IT tätig</strong> – 
                mit Erfahrung in der IT-Betreuung von Großunternehmen und der technischen 
                Leitung umfangreicher IT-Plattformen.
              </p>
              
              <p>
                Von der ausgefallenen Maus bis zur Architektur komplexer Systeme: 
                <strong className="text-foreground"> Praxisnähe und Lösungskompetenz gehören für mich zusammen.</strong>
              </p>
              
              <p>
                Mit <strong className="text-primary">it.evval.io</strong> mache ich dieses Wissen für 
                Handwerksbetriebe, Vereine und kleine Unternehmen zugänglich – 
                <strong className="text-foreground"> verständlich, pragmatisch und zuverlässig.</strong>
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;