import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MapPin } from "lucide-react";

interface LocationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LocationDialog({ open, onOpenChange }: LocationDialogProps) {
  const address = "1-chōme-7-10 Ikebukuro, Toshima City, Tokyo 170-0014";
  const mapsUrl = "https://www.google.com/maps/place/1-ch%C5%8Dme-7-10+Ikebukuro,+Toshima+City,+Tokyo+170-0014,+Japan/@35.7347837,139.7090165,16z/data=!3m1!4b1!4m6!3m5!1s0x60188d60828fc79f:0x7ff102008bb6400d!8m2!3d35.7347794!4d139.7115914!16s%2Fg%2F12hw9bm0q?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-background/95 backdrop-blur">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center mb-6">
            LOCATIONS
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex items-start gap-4 py-8">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center">
              <MapPin className="w-8 h-8 text-background" />
            </div>
          </div>
          
          <a 
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold hover:text-primary transition-colors text-center flex-1"
          >
            {address}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
