import { useTranslation } from 'react-i18next';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useEffect } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
];

export function LanguageSelector() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set document direction based on language
    const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <Select value={i18n.language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[140px] h-9">
        <div className="flex items-center space-x-2">
          <Globe className="h-4 w-4" />
          <span className="flex items-center space-x-1">
            <span>{currentLanguage.flag}</span>
            <span className="hidden sm:inline">{currentLanguage.name}</span>
          </span>
        </div>
      </SelectTrigger>
      <SelectContent className="bg-popover border shadow-lg">
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <div className="flex items-center space-x-2">
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}