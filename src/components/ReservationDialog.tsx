import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import heroImage from '@/assets/hero-bedroom.jpg';

interface ReservationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReservationDialog({
  open,
  onOpenChange,
}: ReservationDialogProps) {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const { t } = useTranslation();

  const clearDates = () => {
    setCheckIn(undefined);
    setCheckOut(undefined);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-[#F5E6D3] border-8 border-[#8B7355] rounded-3xl">
        <DialogHeader>
          <DialogTitle className="sr-only">Reservation</DialogTitle>
        </DialogHeader>

        <div className="relative p-8">
          {/* Decorative border effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 0% 0%, rgba(139, 115, 85, 0.1) 0%, transparent 50%), radial-gradient(circle at 100% 0%, rgba(139, 115, 85, 0.1) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(139, 115, 85, 0.1) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(139, 115, 85, 0.1) 0%, transparent 50%)',
            }}
          />

          {/* Header */}
          <div className="flex items-start justify-between mb-6 relative">
            <h2 className="text-3xl font-bold text-[#8B4513]">
              {t('booking.title')}
            </h2>
            <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center text-white flex-shrink-0 ml-4 border-4 border-white shadow-lg">
              <div className="text-center">
                <div className="text-xs font-bold">東京</div>
                <div className="text-lg font-bold">TOKYO</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-6 bg-white rounded-2xl p-6 shadow-xl">
            {/* Left Side - Calendar */}
            <div className="space-y-4">
              <Calendar
                mode="range"
                selected={{ from: checkIn, to: checkOut }}
                onSelect={(range) => {
                  setCheckIn(range?.from);
                  setCheckOut(range?.to);
                }}
                numberOfMonths={1}
                className={cn('pointer-events-auto w-full')}
                classNames={{
                  months:
                    'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
                  month: 'space-y-4 w-full',
                  caption: 'flex justify-center pt-1 relative items-center',
                  caption_label: 'text-sm font-medium',
                  nav: 'space-x-1 flex items-center',
                  nav_button: cn(
                    'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
                  ),
                  table: 'w-full border-collapse space-y-1',
                  head_row: 'flex justify-between w-full',
                  head_cell:
                    'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] flex-1 text-center',
                  row: 'flex w-full mt-2 justify-between',
                  cell: 'flex-1 text-center text-sm p-0 relative',
                  day: cn(
                    'h-9 w-9 p-0 font-normal mx-auto',
                    'hover:bg-pink-100 hover:text-pink-900 rounded-md'
                  ),
                  day_selected:
                    'bg-pink-600 text-white hover:bg-pink-700 hover:text-white rounded-md',
                  day_today: 'bg-accent text-accent-foreground',
                  day_outside: 'text-muted-foreground opacity-50',
                  day_disabled: 'text-muted-foreground opacity-50',
                  day_range_middle: 'bg-pink-100 text-pink-900 rounded-none',
                }}
              />

              <p className="text-center text-sm text-gray-600">
                {t('booking.select_date')}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  onClick={clearDates}
                  className="flex-1 border-2 border-gray-400 hover:bg-gray-100"
                >
                  {t('booking.clear_dates')}
                </Button>
                <Button
                  onClick={() => {
                    window.open(
                      'https://www.airbnb.jp/rooms/1533120339075986420?viralityEntryPoint=1&unique_share_id=3E79CBEB-F91C-4ADF-82DF-46001573E394&slcid=e66285b97a304ea9b839f80f50436bf6&s=76&set_everest_cookie_on_new_domain=1762474897.EAYjA0NWY4ZjMxZmMxNW.FNBraGQJw5v7Q6liDhj9ydRN1iOMHgtp21bnUbNC0zU&adults=2&slug=tvVs6Es0&source_impression_id=p3_1762910552_P3PX2hTWEi2FN-7V&guests=1',
                      '_blank'
                    );
                    onOpenChange(false);
                  }}
                  className="flex-1 bg-[#6B8E23] hover:bg-[#556B1C] text-white"
                  disabled={!checkIn || !checkOut}
                >
                  {t('booking.book_now')}
                </Button>
              </div>
            </div>

            {/* Right Side - Room Image */}
            <div className="relative rounded-xl overflow-hidden h-full min-h-[400px]">
              <img
                src={heroImage}
                alt="Tokyo Vibes Room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
