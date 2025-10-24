import { Globe, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReservationDialog } from "@/components/ReservationDialog";
import { LocationDialog } from "@/components/LocationDialog";
import LanguageDialog from "@/components/LanguageDialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import accommodation1 from "@/assets/accommodation-1.jpg";
import accommodation2 from "@/assets/accommodation-2.jpg";

const Accommodation = () => {
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
            
            <nav className="hidden md:flex items-center gap-4 md:gap-8 text-xs md:text-sm">
              <button 
                className="hover:text-primary transition-colors"
                onClick={() => navigate("/")}
              >
                {t('nav.home')}
              </button>
              <span className="text-muted-foreground">|</span>
              <button 
                className="hover:text-primary transition-colors font-semibold"
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
              <span className="text-muted-foreground">|</span>
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
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">{t('accommodation_page.title')}</h1>
        </div>
      </section>

      {/* Space Colony Tokyo Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{t('accommodation_page.space_colony_title')}</h2>
                <p className="text-lg italic mb-4">{t('accommodation_page.space_colony_subtitle')}</p>
                <p className="font-semibold mb-2">{t('accommodation_page.space_colony_tagline')}</p>
              </div>

              <p className="text-sm leading-relaxed">
                {t('accommodation_page.space_colony_desc1')}
              </p>

              <p className="text-sm leading-relaxed">
                {t('accommodation_page.space_colony_desc2')}
              </p>

              <div>
                <h3 className="font-bold mb-2">{t('accommodation_page.location_title')}</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-semibold">{t('accommodation_page.location_1_title')}</span>
                    <br />{t('accommodation_page.location_1_desc')}
                  </li>
                  <li>
                    <span className="font-semibold">{t('accommodation_page.location_2_title')}</span>
                    <br />{t('accommodation_page.location_2_desc')}
                  </li>
                  <li>
                    <span className="font-semibold">{t('accommodation_page.location_3_title')}</span>
                    <br />{t('accommodation_page.location_3_desc')}
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img src={accommodation1} alt="Space Colony Tokyo interior" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image */}
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img src={accommodation2} alt="Room interior" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">{t('accommodation_page.room_title')}</h2>
              
              <ul className="space-y-3 text-sm list-disc pl-5">
                <li>{t('accommodation_page.room_feature_1')}</li>
                <li>{t('accommodation_page.room_feature_2')}</li>
                <li>{t('accommodation_page.room_feature_3')}</li>
                <li>{t('accommodation_page.room_feature_4')}</li>
              </ul>
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

export default Accommodation;
