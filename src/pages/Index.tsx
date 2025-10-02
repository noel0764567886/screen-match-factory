import { Home, Coffee, Monitor, Users, Search, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bedroom.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-primary-foreground" />
              </div>
            </div>
            <Button variant="outline" className="rounded-full">
              Join Discord
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 py-3 text-sm">
            <button className="hover:text-primary transition-colors">Accommodation</button>
            <span className="text-muted-foreground">|</span>
            <button className="hover:text-primary transition-colors">Dining</button>
            <span className="text-muted-foreground">|</span>
            <button className="hover:text-primary transition-colors">Access</button>
            <span className="text-muted-foreground">|</span>
            <button className="hover:text-primary transition-colors">About us</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Hotel bedroom interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            Social Spaces & Dining Spaces & Deluxe Beds
          </h1>
        </div>
      </section>

      {/* Icon Navigation Grid */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <button className="flex flex-col items-center gap-3 p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
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
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Image</span>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Image</span>
            </div>
          </div>

          {/* Reserve Section */}
          <div className="bg-secondary py-8 px-6 rounded-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5" />
                <span className="text-sm md:text-base">
                  Reserve your room & enjoy the Tokyo vibe!
                </span>
              </div>
              <Button variant="outline" className="rounded-full">
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
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Image</span>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Image</span>
            </div>
          </div>

          {/* Search Restaurants Section */}
          <div className="bg-secondary py-8 px-6 rounded-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5" />
                <span className="text-sm md:text-base">
                  Search for Restaurants & Dining Offices
                </span>
              </div>
              <Button variant="outline" className="rounded-full">
                Availability
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Instagram className="w-12 h-12" />
          </div>
          <div className="text-xs text-muted-foreground space-y-1">
            <div>Private Policy</div>
            <div>Accessibility Statement</div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <MessageCircle className="w-8 h-8 text-accent-foreground" />
      </button>
    </div>
  );
};

export default Index;
