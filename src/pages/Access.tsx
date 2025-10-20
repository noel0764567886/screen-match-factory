import { Button } from "@/components/ui/button";
import { Instagram, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReservationDialog } from "@/components/ReservationDialog";
import { LocationDialog } from "@/components/LocationDialog";

const Access = () => {
  const navigate = useNavigate();
  const [reservationOpen, setReservationOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">TV</span>
                </div>
                <span className="font-bold text-xl">Tokyo Vibes</span>
              </div>
              
              <nav className="hidden md:flex gap-4">
                <Button 
                  variant="ghost" 
                  onClick={() => navigate('/')}
                >
                  Home
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => navigate('/accommodation')}
                >
                  Accommodation
                </Button>
                <Button variant="ghost" onClick={() => navigate('/dining')}>
                  Dining
                </Button>
                <Button variant="ghost" className="font-semibold">
                  Access
                </Button>
                <Button variant="ghost">About us</Button>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                Language
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setLocationOpen(true)}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Map
              </Button>
              <Button onClick={() => setReservationOpen(true)}>
                To Reserve
              </Button>
            </div>
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
      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center space-y-6">
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Instagram className="w-12 h-12" />
            <span className="text-sm font-medium">Follow us on Instagram</span>
          </a>
          
          <div className="pt-4">
            <Button variant="link" className="text-sm">
              Private Policy
            </Button>
          </div>
        </div>
      </footer>

      <ReservationDialog open={reservationOpen} onOpenChange={setReservationOpen} />
      <LocationDialog open={locationOpen} onOpenChange={setLocationOpen} />
    </div>
  );
};

export default Access;
