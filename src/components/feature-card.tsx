import { Pickaxe, Users, Home, Coins, Shield, Calendar } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: "pickaxe" | "community" | "build" | "economy" | "protection" | "events"
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "pickaxe":
        return <Pickaxe className="h-10 w-10 text-emerald-400" />
      case "community":
        return <Users className="h-10 w-10 text-emerald-400" />
      case "build":
        return <Home className="h-10 w-10 text-emerald-400" />
      case "economy":
        return <Coins className="h-10 w-10 text-emerald-400" />
      case "protection":
        return <Shield className="h-10 w-10 text-emerald-400" />
      case "events":
        return <Calendar className="h-10 w-10 text-emerald-400" />
      default:
        return <Pickaxe className="h-10 w-10 text-emerald-400" />
    }
  }

  return (
    <div className="group rounded-lg bg-black/40 p-6 transition-all hover:bg-black/60 hover:shadow-lg hover:shadow-emerald-900/20">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-stone-800 transition-all group-hover:bg-stone-700">
        {getIcon()}
      </div>
      <h3 className="mb-2 font-minecraft text-xl text-bone-100">{title}</h3>
      <p className="text-bone-300">{description}</p>
    </div>
  )
}

