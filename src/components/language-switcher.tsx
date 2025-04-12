"use client"

import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "km" : "en")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center rounded-none border-2 border-bone-700 bg-stone-800 px-3 py-2 font-minecraft text-bone-300 transition-all hover:border-bone-600 hover:bg-stone-700 hover:text-bone-100"
      aria-label="Switch language"
    >
      <Globe className="mr-2 h-4 w-4" />
      {t("language")}
    </button>
  )
}
