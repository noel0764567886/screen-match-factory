import { Globe, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReservationDialog } from "@/components/ReservationDialog";
import { LocationDialog } from "@/components/LocationDialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dining1 from "@/assets/dining-1.jpg";
import dining2 from "@/assets/dining-2.jpg";

const Dining = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const navigate = useNavigate();

  const restaurants = [
    {
      name: "Yakiniku Kudaya",
      description: "the quality of the food at this price point earns it an easy 5",
      image: dining1,
    },
    {
      name: "Tosabko Ramen",
      description: "enjoy a tasty set menu here in this cosy little no nonsense ramen spot",
      image: dining2,
    },
    {
      name: "Sushi Tomohiro",
      description: "sushi lovers, the best omakase in town just $50",
      image: dining1,
    },
  ];

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
              <button 
                className="hover:text-primary transition-colors font-semibold"
                onClick={() => navigate("/dining")}
              >
                Dining
              </button>
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

      {/* Title Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Dining</h1>
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
                  >
                    HOW TO GO
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Offers Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-12">
            EXCLUSIVE OFFER JUST FOR TOKYO VIBES
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg text-center space-y-4">
              <h3 className="font-bold text-lg">Free drink with</h3>
              <p className="text-sm">
                all you can eat menu<br />
                (under 600 yen)<br />
                or 10% off individual dishes
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-lg text-center space-y-4">
              <h3 className="font-bold text-lg">Chashu or Egg</h3>
              <p className="text-sm">(One free topping)</p>
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

export default Dining;
