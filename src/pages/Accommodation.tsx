import { Globe, MapPin, Instagram, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReservationDialog } from "@/components/ReservationDialog";
import { LocationDialog } from "@/components/LocationDialog";
import LanguageDialog from "@/components/LanguageDialog";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import tokyoVibesLogo from "@/assets/tokyo-vibes-logo.png";
import accommodation1 from "@/assets/accommodation-1.jpg";
import accommodation2 from "@/assets/accommodation-2.jpg";

const Accommodation = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      
      {/* HEADER – komplett neu */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            
            {/* Left Icons */}
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

            {/* DESKTOP NAVIGATION */}
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

              {/* ----- LOGO MIT STRICH LINKS & RECHTS ----- */}
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
              {/* ---------------------------------------- */}

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

            {/* MOBILE MENU BUTTON */}
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

              {/* MOBILE NAVIGATION */}
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <button
                    className="text-left hover:text-primary transition-colors text-lg"
                    onClick={() => {
                      navigate("/");
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t('nav.home')}
                  </button>

                  <button
                    className="text-left hover:text-primary transition-colors text-lg font-semibold"
                  >
                    {t('nav.accommodation')}
                  </button>

                  <button
                    className="text-left hover:text-primary transition-colors text-lg"
                    onClick={() => {
                      navigate("/dining");
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t('nav.dining')}
                  </button>

                  <button
                    className="text-left hover:text-primary transition-colors text-lg"
                    onClick={() => {
                      navigate("/access");
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t('nav.access')}
                  </button>

                  <button
                    className="text-left hover:text-primary transition-colors text-lg"
                    onClick={() => {
                      navigate("/about");
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t('nav.about')}
                  </button>

                  <Button
                    variant="outline"
                    className="mt-4 rounded-full"
                    onClick={() => {
                      setReservationOpen(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t('booking.reserve')}
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>

            {/* DESKTOP RESERVE BUTTON */}
            <Button 
              variant="outline" 
              className="hidden md:flex rounded-full"
              onClick={() => setReservationOpen(true)}
            >
              {t('booking.reserve')}
            </Button>

          </div>
        </div>
      </header>
      {/* END HEADER */}


      {/* TITLE SECTION */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            {t('accommodation_page.title')}
          </h1>
        </div>
      </section>


      {/* SPACE COLONY SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Text */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {t('accommodation_page.space_colony_title')}
                </h2>
                <p className="text-lg italic mb-4">
                  {t('accommodation_page.space_colony_subtitle')}
                </p>
                <p className="font-semibold mb-2">
                  {t('accommodation_page.space_colony_tagline')}
                </p>
              </div>

              <p className="text-sm leading-relaxed">
                {t('accommodation_page.space_colony_desc1')}
              </p>

              <p className="text-sm leading-relaxed">
                {t('accommodation_page.space_colony_desc2')}
              </p>

              <div>
                <h3 className="font-bold mb-2">
                  {t('accommodation_page.location_title')}
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-semibold">
                      {t('accommodation_page.location_1_title')}
                    </span>
                    <br />
                    {t('accommodation_page.location_1_desc')}
                  </li>
                  <li>
                    <span className="font-semibold">
                      {t('accommodation_page.location_2_title')}
                    </span>
                    <br />
                    {t('accommodation_page.location_2_desc')}
                  </li>
                  <li>
                    <span className="font-semibold">
                      {t('accommodation_page.location_3_title')}
                    </span>
                    <br />
                    {t('accommodation_page.location_3_desc')}
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src={accommodation1}
                  alt="Space Colony Tokyo interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ROOM SECTION */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Image */}
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src={accommodation2}
                  alt="Room interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                {t('accommodation_page.room_title')}
              </h2>

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


      {/* FOOTER */}
      <footer className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <a 
            href="https://www.instagram.com/tokyo__vibes"
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
