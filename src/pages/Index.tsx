import { Home, Coffee, Monitor, Users, Search, Instagram, Globe, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReservationDialog } from "@/components/ReservationDialog";
import { LocationDialog } from "@/components/LocationDialog";
import LanguageDialog from "@/components/LanguageDialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-bedroom.jpg";
import accommodation1 from "@/assets/accommodation-1.jpg";
import accommodation2 from "@/assets/accommodation-homepage-2.jpg";
import dining1 from "@/assets/dining-1.jpg";
import dining2 from "@/assets/dining-2.webp";
import tokyoVibesLogo from "@/assets/tokyo-vibes-logo.png";

const Index = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
            
            {/* Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <img 
                src={tokyoVibesLogo} 
                alt="Tokyo Vibes Logo" 
                className="h-12 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 md:gap-8 text-xs md:text-sm">
              <button 
                className="hover:text-primary transition-colors font-semibold"
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
                    className="text-left hover:text-primary transition-colors font-semibold text-lg"
                    onClick={() => {
                      navigate("/");
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t('nav.home')}
                  </button>
                  <button 
                    className="text-left hover:text-primary transition-colors text-lg"
                    onClick={() => {
                      navigate("/accommodation");
                      setMobileMenuOpen(false);
                    }}
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
            
            {/* Desktop Reserve Button */}
            <Button 
              variant="outline" 
              className="hidden md:flex rounded-full"
              onClick={() => setReservationOpen(true)}
            >
              {t('home.reserve')}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[500px] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Hotel bedroom interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-5xl font-bold text-center px-4">
            {t('home.hero_title')}
          </h1>
        </div>
      </section>

      {/* Icon Navigation Grid */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <button 
              className="flex flex-col items-center gap-3 p-6 bg-background rounded-lg hover:shadow-lg transition-shadow"
              onClick={() => navigate("/accommodation")}
            >
              <Home className="w-12 h-12" />
              <span className="text-xs font-medium uppercase">{t('nav.accommodation')}</span>
            </button>
            <button 
              className="flex flex-col items-center gap-3 p-6 bg-background rounded-lg hover:shadow-lg transition-shadow"
              onClick={() => navigate("/dining")}
            >
              <Coffee className="w-12 h-12" />
              <span className="text-xs font-medium uppercase">{t('nav.dining')}</span>
            </button>
            <button 
              className="flex flex-col items-center gap-3 p-6 bg-background rounded-lg hover:shadow-lg transition-shadow"
              onClick={() => navigate("/access")}
            >
              <Monitor className="w-12 h-12" />
              <span className="text-xs font-medium uppercase">{t('nav.access')}</span>
            </button>
            <button 
              className="flex flex-col items-center gap-3 p-6 bg-background rounded-lg hover:shadow-lg transition-shadow"
              onClick={() => navigate("/access")}
            >
              <Users className="w-12 h-12" />
              <span className="text-xs font-medium uppercase">{t('nav.access')}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">{t('nav.accommodation')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img src={accommodation1} alt="Luxury hotel bedroom in Tokyo" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img src={accommodation2} alt="Hotel lounge area" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Reserve Section */}
          <div className="bg-secondary py-6 md:py-8 px-4 md:px-6 rounded-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-4 md:justify-between">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm md:text-base text-center md:text-left">
                  {t('home.welcome_text')}
                </span>
              </div>
              <Button 
                variant="outline" 
                className="rounded-full whitespace-nowrap"
                onClick={() => setReservationOpen(true)}
              >
                {t('home.reserve')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">{t('nav.dining')}</h2>
          
          <p className="text-center max-w-2xl mx-auto mb-12">
            We partner with skilled Japanese restaurants.<br />
            Authentic dishes you can only experience in Tokyo.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img src={dining1} alt="Authentic Japanese cuisine" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img src={dining2} alt="Japanese restaurant interior" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Search Restaurants Section */}
          <div className="bg-secondary py-6 md:py-8 px-4 md:px-6 rounded-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-4 md:justify-between">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm md:text-base text-center md:text-left">
                  {t('dining.description')}
                </span>
              </div>
              <Button 
                variant="outline" 
                className="rounded-full whitespace-nowrap"
                onClick={() => setReservationOpen(true)}
              >
                {t('home.reserve')}
              </Button>
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
              {t('footer.privacy')}
            </button>
            <div>
              <button 
                onClick={() => navigate("/accessibility")}
                className="hover:text-primary transition-colors"
              >
                {t('footer.accessibility')}
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

export default Index;
