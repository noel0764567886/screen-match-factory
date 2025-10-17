import { Home, Coffee, Monitor, Users, Search, Instagram, Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReservationDialog } from "@/components/ReservationDialog";
import { LocationDialog } from "@/components/LocationDialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-bedroom.jpg";
import accommodation1 from "@/assets/accommodation-1.jpg";
import accommodation2 from "@/assets/accommodation-2.jpg";
import dining1 from "@/assets/dining-1.jpg";
import dining2 from "@/assets/dining-2.jpg";

const Index = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
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
            
            <nav className="hidden md:flex items-center gap-4 md:gap-8 text-xs md:text-sm">
              <button 
                className="hover:text-primary transition-colors"
                onClick={() => navigate("/accommodation")}
              >
                Accommodation
              </button>
              <span className="text-muted-foreground">|</span>
              <button className="hover:text-primary transition-colors">Dining</button>
              <span className="text-muted-foreground">|</span>
              <button className="hover:text-primary transition-colors">Access</button>
              <span className="text-muted-foreground">|</span>
              <button className="hover:text-primary transition-colors">About us</button>
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

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[500px] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Hotel bedroom interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-5xl font-bold text-center px-4">
            Social Spaces & Dining Spaces & Deluxe Beds
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
              <span className="text-xs font-medium">ACCOMMODATION</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
              <Coffee className="w-12 h-12" />
              <span className="text-xs font-medium">DINING</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
              <Monitor className="w-12 h-12" />
              <span className="text-xs font-medium">ACCESS</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12" />
              <span className="text-xs font-medium">OFFERS</span>
            </button>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Accommodation</h2>
          
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
                  Reserve your room & enjoy the Tokyo vibe!
                </span>
              </div>
              <Button 
                variant="outline" 
                className="rounded-full whitespace-nowrap"
                onClick={() => setReservationOpen(true)}
              >
                Availability
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Dining</h2>
          
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
                  Search for Restaurants & Dining Offices
                </span>
              </div>
              <Button 
                variant="outline" 
                className="rounded-full whitespace-nowrap"
                onClick={() => setReservationOpen(true)}
              >
                Availability
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
            <div>Private Policy</div>
            <div>Accessibility Statement</div>
          </div>
        </div>
      </footer>

      <ReservationDialog open={reservationOpen} onOpenChange={setReservationOpen} />
      <LocationDialog open={locationOpen} onOpenChange={setLocationOpen} />
    </div>
  );
};

export default Index;
