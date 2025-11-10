import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { MapPin, ArrowUp } from "lucide-react";
import pharmacyImage from "@/assets/pharmacy-location.jpg";
import tokyoVibesLogo from "@/assets/tokyo-vibes-logo.png";

interface LocationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LocationDialog({ open, onOpenChange }: LocationDialogProps) {
  const address = "1-chōme-7-10 Ikebukuro, Toshima City, Tokyo 170-0014";
  const mapsUrl = "https://www.google.com/maps/place/1-ch%C5%8Dme-7-10+Ikebukuro,+Toshima+City,+Tokyo+170-0014,+Japan/@35.7347837,139.7090165,16z/data=!3m1!4b1!4m6!3m5!1s0x60188d60828fc79f:0x7ff102008bb6400d!8m2!3d35.7347794!4d139.7115914!16s%2Fg%2F12hw9bm0q?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-[#c8c4bb] border border-gray-400 p-0 rounded-3xl overflow-hidden">
        <div className="relative p-8 space-y-6">
          {/* Logo */}
          <div className="flex justify-center pt-2">
            <img 
              src={tokyoVibesLogo} 
              alt="Tokyo Vibes Logo" 
              className="h-20 w-auto"
            />
          </div>
          
          {/* Title */}
          <h2 className="text-4xl font-bold text-center text-black">LOCATIONS</h2>

          {/* Address with black map pin */}
          <div className="flex items-start gap-3 justify-center pt-2">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <a 
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold hover:opacity-70 transition-opacity text-black pt-2"
            >
              {address}
            </a>
          </div>

          {/* Pharmacy Image */}
          <div className="flex justify-center px-8">
            <img 
              src={pharmacyImage} 
              alt="Pharmacy location" 
              className="w-full max-w-sm rounded-lg"
            />
          </div>

          {/* Direction text with arrow */}
          <div className="flex items-center justify-center gap-2 text-lg font-bold text-black pb-2">
            <ArrowUp className="w-5 h-5" />
            <span>Right in front of this pharmacy</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
