import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Impressum = () => {
  return (
    <section id="impressum" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Impressum</span>
          </h2>
        </div>

        <div className="space-y-8">
          {/* Angaben gemäß § 5 TMG */}
          <Card className="shadow-card">
            <CardHeader className="text-left">
              <CardTitle className="text-left">Angaben gemäß § 5 TMG</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Waldemar Schiller</strong></p>
              <p>Römerstraße 11</p>
              <p>53859 Niederkassel</p>
              <p>Deutschland</p>
              <p className="mt-4">
                <strong>Telefon:</strong> <a href="tel:+4916270026066" className="text-primary hover:underline">+49 162 7002606</a>
              </p>
              <p>
                <strong>E-Mail:</strong> <a href="mailto:ws@evval.io" className="text-primary hover:underline">ws@evval.io</a>
              </p>
              <p>
                <strong>Website:</strong> <span className="text-primary">it.evval.io</span>
              </p>
            </CardContent>
          </Card>

          {/* Umsatzsteuer-ID */}
          <Card className="shadow-card">
            <CardHeader className="text-left">
              <CardTitle className="text-left">Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Wird bei Bedarf nachgetragen</p>
            </CardContent>
          </Card>

          {/* Verantwortlich für den Inhalt */}
          <Card className="shadow-card">
            <CardHeader className="text-left">
              <CardTitle className="text-left">Inhaltlich verantwortlich gemäß § 55 Abs. 2 RStV</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Waldemar Schiller, Adresse wie oben.</p>
            </CardContent>
          </Card>

          {/* Haftungsausschluss */}
          <Card className="shadow-card">
            <CardHeader className="text-left">
              <CardTitle className="text-left">Haftungsausschluss</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Haftung für Inhalte:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                  Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. 
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                  Informationen zu überwachen.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Haftung für Links:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter. Auf deren Inhalte haben wir 
                  keinen Einfluss. Deshalb übernehmen wir für diese fremden Inhalte auch keine Gewähr. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                  verantwortlich.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Urheberrecht */}
          <Card className="shadow-card">
            <CardHeader className="text-left">
              <CardTitle className="text-left">Urheberrecht & Bildquellen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Alle auf dieser Website verwendeten Inhalte, insbesondere Texte, Logos und Bilder, 
                unterliegen dem Urheberrecht. Eine Verwendung außerhalb der gesetzlich zulässigen 
                Fälle bedarf der ausdrücklichen Zustimmung.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Einige visuelle Inhalte (z. B. Logo und Grafiken) wurden mit Unterstützung von 
                generativer KI (z. B. OpenAI DALL·E) erstellt.
              </p>
            </CardContent>
          </Card>

          {/* Online-Streitbeilegung */}
          <Card className="shadow-card">
            <CardHeader className="text-left">
              <CardTitle className="text-left">Online-Streitbeilegung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Plattform der EU-Kommission zur Online-Streitbeilegung: 
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline ml-1"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Impressum;