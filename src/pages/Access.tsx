import { Button } from "@/components/ui/button";
import { Globe, Instagram, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReservationDialog } from "@/components/ReservationDialog";
import { LocationDialog } from "@/components/LocationDialog";
import LanguageDialog from "@/components/LanguageDialog";
import { useTranslation } from "react-i18next";

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
              <span className="text-muted-foreground">|</span>
              <button 
                className="hover:text-primary transition-colors font-semibold"
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
              Reserve
            </Button>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Sightseeing Spots / Local Area Guide</h1>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          
          {/* Sunshine City */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Entertainment Center | 5 min drive</p>
                <h2 className="text-3xl font-bold mt-2">Sunshine City</h2>
              </div>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            
            <Button variant="outline" size="sm">
              For more information on Take.me, click here.
            </Button>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Sunshine City"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Concierge's Recommendation</h3>
              <p className="text-sm">
                Enjoy shopping, dining, and endless fun at Sunshine City
              </p>
            </div>
          </div>

          {/* Animate Main Store */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Entertainment Center | 5 min drive</p>
                <h2 className="text-3xl font-bold mt-2">Animate Main Store</h2>
              </div>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            
            <Button variant="outline" size="sm">
              For more information on Take.me, click here.
            </Button>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Animate Main Store"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Concierge's Recommendation</h3>
              <p className="text-sm">
                Check for all the limited edition anime goods only available at this location.
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
