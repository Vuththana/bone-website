"use client"

import { Pickaxe, Users, Home, Coins, Shield, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface FeatureCardProps {
  title: string
  description: string
  icon: "pickaxe" | "community" | "build" | "economy" | "protection" | "events"
  translationKey: string
}

export default function FeatureCard({ title, description, icon, translationKey }: FeatureCardProps) {
  const { t } = useLanguage()

  const getIcon = () => {
    switch (icon) {
      case "pickaxe":
        return <Pickaxe className="h-10 w-10 text-bone-300" />
      case "community":
        return <Users className="h-10 w-10 text-bone-300" />
      case "build":
        return <Home className="h-10 w-10 text-bone-300" />
      case "economy":
        return <Coins className="h-10 w-10 text-bone-300" />
      case "protection":
        return <Shield className="h-10 w-10 text-bone-300" />
      case "events":
        return <Calendar className="h-10 w-10 text-bone-300" />
      default:
        return <Pickaxe className="h-10 w-10 text-bone-300" />
    }
  }

  return (
    <div className="group rounded-none border-2 border-bone-800 bg-black/40 p-6 transition-all hover:border-bone-700 hover:bg-black/60 hover:shadow-lg hover:shadow-bone-900/20">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-none border-2 border-bone-700 bg-stone-800 transition-all group-hover:border-bone-600 group-hover:bg-stone-700">
        {getIcon()}
      </div>
      <h3 className="mb-2 font-minecraft text-xl text-bone-100">{t(`feature.${translationKey}`)}</h3>
      <p className="text-bone-300">{t(`feature.${translationKey}_desc`)}</p>
    </div>
  )
}
  