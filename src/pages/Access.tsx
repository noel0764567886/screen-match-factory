import { Button } from "@/components/ui/button";
import { Globe, Instagram, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReservationDialog } from "@/components/ReservationDialog";
import { LocationDialog } from "@/components/LocationDialog";
import LanguageDialog from "@/components/LanguageDialog";
import { useTranslation } from "react-i18next";
import sunshineCity from "@/assets/sunshine-city.webp";
import animateStore from "@/assets/animate-store.jpg";
import tokyoVibesLogo from "@/assets/tokyo-vibes-logo.png"; // <-- Logo import

const Access = () => {
  const navigate = useNavigate();
  const [reservationOpen, setReservationOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Side Icons */}
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

            {/* NEW HEADER NAVIGATION */}
            <nav className="hidden md:flex items-center gap-6 text-xs md:text-sm">

              <button className="hover:text-primary transition-colors">
                {t('nav.accommodation')}
              </button>

              <span className="text-muted-foreground">|</span>

              <button 
                className="hover:text-primary transition-colors"
                onClick={() => navigate("/dining")}
              >
                {t('nav.dining')}
              </button>

              {/* LOGO BLOCK */}
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

              <button 
                className="hover:text-primary transition-colors"
                onClick={() => navigate("/about")}
              >
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
          <h1 className="text-4xl md:text-5xl font-bold">{t('access_page.title')}</h1>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          
          {/* Sunshine City */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-6 items-stretch">
              <div className="md:w-1/2 aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={sunshineCity} 
                  alt="Sunshine City"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-1/2 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">{t('access_page.location_1_category')}</p>
                  <h2 className="text-3xl font-bold mt-2">{t('access_page.location_1_name')}</h2>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="self-start"
                  onClick={() => window.open('https://sunshinecity.jp/en/', '_blank')}
                >
                  {t('access_page.location_1_button')}
                </Button>
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">{t('access_page.location_1_recommendation')}</h3>
              <p className="text-sm">
                {t('access_page.location_1_desc')}
              </p>
            </div>
          </div>

          {/* Animate Main Store */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-6 items-stretch">
              <div className="md:w-1/2 aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={animateStore} 
                  alt="Animate Main Store"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-1/2 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">{t('access_page.location_2_category')}</p>
                  <h2 className="text-3xl font-bold mt-2">{t('access_page.location_2_name')}</h2>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="self-start"
                  onClick={() => window.open('https://www.animate.co.jp/en/shop/ikebukuro/', '_blank')}
                >
                  {t('access_page.location_2_button')}
                </Button>
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">{t('access_page.location_2_recommendation')}</h3>
              <p className="text-sm">
                {t('access_page.location_2_desc')}
              </p>
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

export default Access;
