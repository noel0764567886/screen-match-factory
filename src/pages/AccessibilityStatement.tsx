import { Button } from "@/components/ui/button";
import { Globe, Instagram, MapPin, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReservationDialog } from "@/components/ReservationDialog";
import { LocationDialog } from "@/components/LocationDialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import tokyoVibesLogo from "@/assets/tokyo-vibes-logo.png";
import { useTranslation } from "react-i18next";

const AccessibilityStatement = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left side icons */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Globe className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full"
                onClick={() => setLocationOpen(true)}
              >
                <MapPin className="w-5 h-5" />
              </Button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-xs md:text-sm">
              <button
                className="hover:text-primary transition-colors"
                onClick={() => navigate('/accommodation')}
              >
                {t('nav.accommodation')}
              </button>
              <span className="text-muted-foreground">|</span>

              <button
                className="hover:text-primary transition-colors"
                onClick={() => navigate('/dining')}
              >
                {t('nav.dining')}
              </button>

              <div className="flex items-center gap-4 mx-4">
                <span className="text-muted-foreground">|</span>
                <button
                  className="hover:opacity-80 transition-opacity"
                  onClick={() => navigate('/')}
                >
                  <img
                    src={tokyoVibesLogo}
                    alt="Tokyo Vibes Logo"
                    className="h-10 w-auto"
                  />
                </button>
                <span className="text-muted-foreground">|</span>
              </div>

              <button
                className="hover:text-primary transition-colors"
                onClick={() => navigate('/access')}
              >
                {t('nav.access')}
              </button>
              <span className="text-muted-foreground">|</span>

              <button
                className="hover:text-primary transition-colors"
                onClick={() => navigate('/about')}
              >
                {t('nav.about')}
              </button>
            </nav>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden rounded-full"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <button
                    className="text-left hover:text-primary transition-colors text-lg"
                    onClick={() => {
                      navigate('/accommodation');
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t('nav.accommodation')}
                  </button>
                  <button
                    className="text-left hover:text-primary transition-colors text-lg"
                    onClick={() => {
                      navigate('/dining');
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t('nav.dining')}
                  </button>
                  <button
                    className="text-left hover:text-primary transition-colors text-lg"
                    onClick={() => {
                      navigate('/access');
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t('nav.access')}
                  </button>
                  <button
                    className="text-left hover:text-primary transition-colors text-lg"
                    onClick={() => {
                      navigate('/about');
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t('nav.about')}
                  </button>
                  <Button
                    variant="outline"
                    className="rounded-full mt-4"
                    onClick={() => {
                      setReservationOpen(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t('home.reserve')}
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Reservation Button */}
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => setReservationOpen(true)}
            >
              Reserve
            </Button>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Accessibility Statement</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8 text-sm leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Commitment</h2>
              <p>
                Tokyo Vibes is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Measures to Support Accessibility</h2>
              <p>Tokyo Vibes takes the following measures to ensure accessibility:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Include accessibility as part of our mission statement</li>
                <li>Provide continual accessibility training for our staff</li>
                <li>Include people with disabilities in our design process</li>
                <li>Employ formal accessibility quality assurance methods</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Conformance Status</h2>
              <p>
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards. These guidelines explain how to make web content more accessible for people with disabilities.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Physical Accessibility</h2>
              <p>Our accommodation features:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Elevator access to all floors</li>
                <li>Wide doorways and hallways</li>
                <li>Step-free access to common areas</li>
                <li>Accessible bathroom facilities</li>
                <li>Clear signage throughout the property</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Website Accessibility Features</h2>
              <p>Our website includes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Clear navigation structure</li>
                <li>Alternative text for images</li>
                <li>Keyboard navigation support</li>
                <li>Responsive design for various devices</li>
                <li>Readable fonts and adequate color contrast</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Feedback</h2>
              <p>
                We welcome your feedback on the accessibility of Tokyo Vibes. Please let us know if you encounter accessibility barriers through our social media channels or booking platform.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Limitations and Alternatives</h2>
              <p>
                Despite our best efforts to ensure accessibility, there may be some limitations. If you experience any difficulty accessing our services, please contact us so we can provide alternative arrangements.
              </p>
            </div>
            <div className="text-muted-foreground mt-8">
              <p>Last updated: November 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <a 
            href="https://www.instagram.com/tokyo__vibes?utm_source=ig_web_button_share_sheet&igsh=bGh4M3V3endiZzJw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center mb-6 hover:opacity-80 transition-opacity"
          >
            <Instagram className="w-12 h-12" />
          </a>
          <div className="text-xs text-muted-foreground space-y-1">
            <button 
              onClick={() => navigate("/privacy")}
              className="hover:text-primary transition-colors"
            >
              Private Policy
            </button>
            <div>
              <button 
                onClick={() => navigate("/accessibility")}
                className="hover:text-primary transition-colors"
              >
                Accessibility Statement
              </button>
            </div>
          </div>
        </div>
      </footer>

      <ReservationDialog open={reservationOpen} onOpenChange={setReservationOpen} />
      <LocationDialog open={locationOpen} onOpenChange={setLocationOpen} />
    </div>
  );
};

export default AccessibilityStatement;
