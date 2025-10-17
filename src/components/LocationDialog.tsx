import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="sr-only">Location</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Title */}
          <div className="pb-4 border-b-4 border-pink-600">
            <h2 className="text-3xl font-bold text-center">LOCATIONS</h2>
          </div>

          {/* Address with Icon */}
          <div className="flex items-center gap-6 py-8 justify-center">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center">
                <MapPin className="w-10 h-10 text-background" />
              </div>
            </div>
            
            <a 
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold hover:text-pink-600 transition-colors"
            >
              {address}
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="text-pink-600 hover:text-pink-700"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
