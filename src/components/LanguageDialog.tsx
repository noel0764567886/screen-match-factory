import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

interface LanguageDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LanguageDialog = ({ open, onOpenChange }: LanguageDialogProps) => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "ja", label: "日本語" },
    { code: "zh", label: "中文(簡体)" },
    { code: "en", label: "English" },
    { code: "ko", label: "한국어" },
  ];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-[#e8e4db] border-none p-8">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-8 w-8" />
          <span className="sr-only">Close</span>
        </button>
        
        <div className="grid grid-cols-2 gap-8 pt-4">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="text-4xl font-medium hover:opacity-70 transition-opacity border-b-2 border-black pb-2"
            >
              {language.label}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LanguageDialog;
