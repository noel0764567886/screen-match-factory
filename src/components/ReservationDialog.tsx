import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { CalendarIcon, Users, Ticket } from "lucide-react";
import { format, differenceInDays } from "date-fns";
import { cn } from "@/lib/utils";

interface ReservationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReservationDialog({ open, onOpenChange }: ReservationDialogProps) {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [promoCode, setPromoCode] = useState("");
  const [showGuestPicker, setShowGuestPicker] = useState(false);

  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">Reservation</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Top Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b-4 border-pink-600">
            {/* Check-in / Check-out */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="justify-start text-left font-normal h-auto py-3"
                >
                  <CalendarIcon className="mr-2 h-5 w-5 text-pink-600 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-sm">
                      {checkIn ? format(checkIn, "MMMM dd") : "Check-in"} - {checkOut ? format(checkOut, "MMMM dd") : "Check-out"}
                    </span>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <div className="p-4">
                  <Calendar
                    mode="range"
                    selected={{ from: checkIn, to: checkOut }}
                    onSelect={(range) => {
                      setCheckIn(range?.from);
                      setCheckOut(range?.to);
                    }}
                    numberOfMonths={2}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </div>
              </PopoverContent>
            </Popover>

            {/* Rooms & Guests */}
            <Popover open={showGuestPicker} onOpenChange={setShowGuestPicker}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="justify-start text-left font-normal h-auto py-3"
                >
                  <Users className="mr-2 h-5 w-5 text-pink-600 flex-shrink-0" />
                  <span className="text-sm">
                    {rooms} room{rooms > 1 ? "s" : ""}, {adults} adult{adults > 1 ? "s" : ""}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Rooms</span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setRooms(Math.max(1, rooms - 1))}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{rooms}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setRooms(rooms + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Adults</span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{adults}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setAdults(adults + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {/* Promo Code */}
            <div className="flex items-center gap-2 px-3 py-2 border rounded-md">
              <Ticket className="h-5 w-5 text-pink-600 flex-shrink-0" />
              <Input
                placeholder="Promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          {/* Nights Indicator */}
          {nights > 0 && (
            <div className="text-center">
              <span className="text-pink-600 font-semibold text-lg">
                {nights} night{nights > 1 ? "s" : ""}
              </span>
            </div>
          )}

          {/* Calendar View */}
          <div className="flex justify-center">
            <Calendar
              mode="range"
              selected={{ from: checkIn, to: checkOut }}
              onSelect={(range) => {
                setCheckIn(range?.from);
                setCheckOut(range?.to);
              }}
              numberOfMonths={2}
              className="pointer-events-auto"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="text-pink-600 hover:text-pink-700"
            >
              Cancel
            </Button>
            <Button
              className="bg-pink-600 hover:bg-pink-700 text-white px-8"
              onClick={() => {
                // Handle reservation
                onOpenChange(false);
              }}
            >
              APPLY
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
