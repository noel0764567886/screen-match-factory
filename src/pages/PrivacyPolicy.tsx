import { Button } from "@/components/ui/button";
import { Globe, Instagram, MapPin, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReservationDialog } from "@/components/ReservationDialog";
import { LocationDialog } from "@/components/LocationDialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // für Mobile Menu
import tokyoVibesLogo from "@/assets/tokyo-vibes-logo.png";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
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
                    {t('nav/access')}
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
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8 text-sm leading-relaxed">
            {/* Einführung */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Introduction</h2>
              <p>
                At Tokyo Vibes, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Booking and reservation details</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Communication preferences and feedback</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">How We Use Your Information</h2>
              <p>Your information is used to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process and manage your reservations</li>
                <li>Communicate with you about your booking</li>
                <li>Provide customer support</li>
                <li>Send promotional materials (with your consent)</li>
                <li>Improve our services and user experience</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Data Protection</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Your payment information is processed through secure, encrypted channels.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Third-Party Services</h2>
              <p>
                We may share your information with trusted third-party service providers who assist us in operating our business, such as payment processors and booking platforms. These parties are obligated to keep your information confidential.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request corrections to your information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us through our social media channels or booking platform.
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

export default PrivacyPolicy;
