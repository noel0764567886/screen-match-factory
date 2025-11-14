import { Button } from "@/components/ui/button";
import { Globe, Instagram, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReservationDialog } from "@/components/ReservationDialog";
import { LocationDialog } from "@/components/LocationDialog";
import LanguageDialog from "@/components/LanguageDialog";
import { useTranslation } from "react-i18next";
import tokyoVibesLogo from "@/assets/tokyo-vibes-logo.png"; // <-- Logo import

const AboutUs = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
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
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full"
                onClick={() => setLanguageOpen(true)}
              >
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

            {/* Center Navigation with Logo */}
            <nav className="hidden md:flex items-center gap-6 text-xs md:text-sm">
              <button 
                className="hover:text-primary transition-colors"
                onClick={() => navigate("/accommodation")}
              >
                {t('nav.accommodation')}
              </button>
              <span className="text-muted-foreground">|</span>

              <button 
                className="hover:text-primary transition-colors"
                onClick={() => navigate("/dining")}
              >
                {t('nav.dining')}
              </button>

              {/* LOGO IN THE MIDDLE */}
              <div className="flex items-center gap-4 mx-4">
                <span className="text-muted-foreground">|</span>
                <button 
                  className="hover:opacity-80 transition-opacity"
                  onClick={() => navigate("/")}
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
                onClick={() => navigate("/access")}
              >
                {t('nav.access')}
              </button>
              <span className="text-muted-foreground">|</span>

              <button className="hover:text-primary transition-colors">
                {t('nav.about')}
              </button>
            </nav>

            {/* Reservation Button */}
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => setReservationOpen(true)}
            >
              {t('booking.reserve')}
            </Button>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{t('about_page.title')}</h1>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex gap-12 items-start">
            {/* Mark */}
            <div className="space-y-4 flex-1">
              <div className="rounded-lg overflow-hidden bg-muted h-[32rem] w-[200%]">
                <img 
                  src="/placeholder.svg" 
                  alt="Mark Sasaki"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <h2 className="text-2xl font-bold">{t('about_page.person_1_name')}</h2>
                  <a 
                    href="https://www.instagram.com/risingfromzero/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-sm leading-relaxed whitespace-pre-line">
                  {t('about_page.person_1_bio')}
                </p>
              </div>
            </div>

            {/* Yasuhiko */}
           <div className="space-y-4 flex-1 mt-[33rem]">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <h2 className="text-2xl font-bold">{t('about_page.person_2_name')}</h2>
                  <a 
                    href="https://www.instagram.com/yasuhiko96?igsh=MWxnMm9uNG5tZW1lMg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-sm leading-relaxed whitespace-pre-line">
                  {t('about_page.person_2_bio')}
                </p>
              </div>
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
      <LanguageDialog open={languageOpen} onOpenChange={setLanguageOpen} />
    </div>
  );
};

export default AboutUs;
