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
              Reserve
            </Button>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Accommodation</h1>
        </div>
      </section>

      {/* Space Colony Tokyo Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Space Colony Tokyo</h2>
                <p className="text-lg italic mb-4">Your Tokyo, Rewritten!</p>
                <p className="font-semibold mb-2">~Stylish Stay in Tokyo | Anime & Culture Hub~</p>
              </div>

              <p className="text-sm leading-relaxed">
                Step into Space Colony Tokyo, a bold and futuristic apartment inspired by classic Japanese mecha anime. Located in Ikebukuro, one of Tokyo's major transport hubs, you'll enjoy easy access to Shinjuku, Shibuya, Akihabara, and beyond. Immerse yourself in Tokyo's vibrant culture with anime stores, arcades, shopping.
              </p>

              <p className="text-sm leading-relaxed">
                The interiors feature striking, tri-color walls and custom artwork, creating a unique space-colony atmosphere that's both bold and comfortable. Perfect for anime fans, design lovers, and travelers seeking a one-of-a-kind Tokyo experience.
              </p>

              <div>
                <h3 className="font-bold mb-2">Location:</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-semibold">Ikebukuro - Tokyo's hidden gem:</span>
                    <br />a major terminal station with direct access to airports, bullet trains, and top sightseeing spots.
                  </li>
                  <li>
                    <span className="font-semibold">Anime & pop-culture hotspot:</span>
                    <br />home to Animate (Japan's largest Anime Center, Mega Tokyo, and T-World.
                  </li>
                  <li>
                    <span className="font-semibold">Vibrant dining & entertainment:</span>
                    <br />endless options for food, shopping, and nightlife.
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
              <h2 className="text-2xl font-bold">Room</h2>
              
              <ul className="space-y-3 text-sm list-disc pl-5">
                <li>
                  <span className="font-semibold">Unique design:</span> Interiors inspired by the colors and atmosphere of classic Japanese mecha anime.
                </li>
                <li>
                  <span className="font-semibold">Space-colony theme:</span> Futuristic yet bold, immersive, yet comfortable.
                </li>
                <li>
                  <span className="font-semibold">Fully equipped:</span> Wi-Fi, air conditioning, kitchen essentials, and cozy beds.
                </li>
                <li>
                  <span className="font-semibold">In the heart of Tokyo's anime culture:</span> perfect for fans and travelers seeking a unique Tokyo experience.
                </li>
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
