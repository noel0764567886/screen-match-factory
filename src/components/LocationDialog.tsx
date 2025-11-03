import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { MapPin, ArrowUp } from "lucide-react";
import pharmacyImage from "@/assets/pharmacy-location.png";

interface LocationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LocationDialog({ open, onOpenChange }: LocationDialogProps) {
  const address = "1-chōme-7-10 Ikebukuro, Toshima City, Tokyo 170-0014";
  const mapsUrl = "https://www.google.com/maps/place/1-ch%C5%8Dme-7-10+Ikebukuro,+Toshima+City,+Tokyo+170-0014,+Japan/@35.7347837,139.7090165,16z/data=!3m1!4b1!4m6!3m5!1s0x60188d60828fc79f:0x7ff102008bb6400d!8m2!3d35.7347794!4d139.7115914!16s%2Fg%2F12hw9bm0q?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-[#e8e4db] border-none p-8">
        <div className="space-y-6">
          {/* Title with yellow pin */}
          <div className="relative">
            <div className="absolute left-4 top-0">
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-black" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-center">LOCATIONS</h2>
          </div>

          {/* Address with black map pin */}
          <div className="flex items-start gap-4 justify-center pt-4">
            <div className="flex-shrink-0 pt-1">
              <MapPin className="w-12 h-12 text-black" />
            </div>
            
            <a 
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold hover:opacity-70 transition-opacity"
            >
              {address}
            </a>
          </div>

          {/* Pharmacy Image */}
          <div className="flex justify-center">
            <img 
              src={pharmacyImage} 
              alt="Pharmacy location" 
              className="w-full max-w-md rounded-lg"
            />
          </div>

          {/* Direction text with arrow */}
          <div className="flex items-center justify-center gap-2 text-lg font-semibold">
            <ArrowUp className="w-5 h-5" />
            <span>Right in front of this pharmacy</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
