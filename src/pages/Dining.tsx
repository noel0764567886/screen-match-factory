import { Globe, MapPin, Instagram, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReservationDialog } from "@/components/ReservationDialog";
import { LocationDialog } from "@/components/LocationDialog";
import LanguageDialog from "@/components/LanguageDialog";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import diningPage1 from "@/assets/dining-page-1.jpg";
import diningPage2 from "@/assets/dining-page-2.jpg";
import diningPage3 from "@/assets/dining-page-3.png";
import exclusivePass from "@/assets/exclusive-pass.png";
import tokyoVibesLogo from "@/assets/tokyo-vibes-logo.png";

const Dining = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const restaurants = [
    {
      name: t("dining_page.restaurant_1_name"),
      description: t("dining_page.restaurant_1_desc"),
      image: diningPage1,
      link: "http://google.com/maps?sca_esv=6c8d4356b322f53d&sxsrf=AE3TifPDJ3N9llTGZpzNY79mg3jXn25rjw:1759450311164&fbs=AIIjpHxCtmkhHKu27CW9pNYJlh4RoZZ_y8scaivnpjp3a9aEstvyzM9WArA0Q4B52rAVe2T_HrCdYKvC3zVSa2MnFO7w3Aswettf-W0GiLpMok9h5HtwWGKzhrB8WVrkoVWH0C9XPjo1qVsCBDHDX0bZg5Eg0R-X-Fe6c75mAzy06s6VDWXgLgC0YVQZlJj2PWfAQAzhER2g9D43B1HPlyu7aW-HZ6Ch6vtvY933aonBhqZypxndGhg"
    },
    {
      name: t("dining_page.restaurant_2_name"),
      description: t("dining_page.restaurant_2_desc"),
      image: diningPage2,
      link: "https://www.google.com/maps/dir//Japan+%E3%80%92171-0021+Tokyo+Toshima+City+Nishiikebukuro+1+Chome%E2%88%9239%E2%88%924+%E4%BD%90%E4%B9%85%E9%96%93%E3%83%93%E3%83%AB/@35.7329398,139.6273921,24915m"
    },
    {
      name: t("dining_page.restaurant_3_name"),
      description: t("dining_page.restaurant_3_desc"),
      image: diningPage3,
      link: "https://www.google.com/maps/place/%E9%AE%A8+%E5%A5%89%E5%BC%98"
    }
  ];

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

            {/* Desktop Navigation mit Logo */}
            <nav className="hidden md:flex items-center gap-6 text-xs md:text-sm">

              <button
                className="hover:text-primary transition-colors"
                onClick={() => navigate("/accommodation")}
              >
                {t("nav.accommodation")}
              </button>

              <span className="text-muted-foreground">|</span>

              <button
                className="hover:text-primary transition-colors"
                onClick={() => navigate("/dining")}
              >
                {t("nav.dining")}
              </button>

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
                {t("nav.access")}
              </button>

              <span className="text-muted-foreground">|</span>

              <button
                className="hover:text-primary transition-colors"
                onClick={() => navigate("/about")}
              >
                {t("nav.about")}
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
                      navigate("/accommodation");
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t("nav.accommodation")}
                  </button>

                  <button
                    className="text-left hover:text-primary transition-colors text-lg"
                    onClick={() => {
                      navigate("/dining");
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t("nav.dining")}
                  </button>

                  <button
                    className="text-left hover:text-primary transition-colors text-lg"
                    onClick={() => {
                      navigate("/access");
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t("nav.access")}
                  </button>

                  <button
                    className="text-left hover:text-primary transition-colors text-lg"
                    onClick={() => {
                      navigate("/about");
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t("nav.about")}
                  </button>

                  <Button
                    variant="outline"
                    className="rounded-full mt-4"
                    onClick={() => {
                      setReservationOpen(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t("home.reserve")}
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
              {t("home.reserve")}
            </Button>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            {t("dining_page.title")}
          </h1>
          <p className="text-sm md:text-base">
            {t("dining_page.subtitle")}
            <br />
            {t("dining_page.description")}
          </p>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-bold text-lg">{restaurant.name}</h3>
                  <p className="text-sm">{restaurant.description}</p>
                  <Button
                    variant="outline"
                    className="rounded-full mt-2"
                    onClick={() => window.open(restaurant.link, "_blank")}
                  >
                    {t("dining_page.how_to_go")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Offers */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-12">
            {t("dining_page.exclusive_offers_title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg text-center space-y-4">
              <h3 className="font-bold text-base">
                {t("dining_page.offer_1_title")}
              </h3>
              <p className="text-xs whitespace-pre-line">
                {t("dining_page.offer_1_desc")}
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg text-center space-y-4">
              <h3 className="font-bold text-base">
                {t("dining_page.offer_2_title")}
              </h3>
              <p className="text-xs">{t("dining_page.offer_2_desc")}</p>
            </div>

            <div className="bg-background p-6 rounded-lg text-center space-y-4">
              <h3 className="font-bold text-base">
                {t("dining_page.offer_3_title")}
              </h3>
              <p className="text-xs">{t("dining_page.offer_3_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Card */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-muted/50 rounded-lg p-8 text-center space-y-6">
            <div className="rounded-lg overflow-hidden">
              <img
                src={exclusivePass}
                alt="Exclusive Pass Card"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm italic whitespace-pre-line">
              {t("dining_page.order_card_note")}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
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

      {/* Modals */}
      <ReservationDialog
        open={reservationOpen}
        onOpenChange={setReservationOpen}
      />
      <LocationDialog open={locationOpen} onOpenChange={setLocationOpen} />
      <LanguageDialog open={languageOpen} onOpenChange={setLanguageOpen} />
    </div>
  );
};

export default Dining;
