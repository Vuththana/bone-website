import { Check } from "lucide-react"
import { Link } from "react-router-dom"

interface StoreItemProps {
  title: string
  price: number
  features: string[]
  popular?: boolean
  color?: string
  image?: string
}

export default function StoreItem({
  title,
  price,
  features,
  popular = false,
  color = "bg-gradient-to-br from-emerald-400 to-emerald-600",
  image,
}: StoreItemProps) {
  return (
    <div className={`relative rounded-lg bg-black/40 p-1 backdrop-blur-sm ${popular ? "ring-2 ring-amber-400" : ""}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-black">
          MOST POPULAR
        </div>
      )}
      {image && (
        <img
          src={image}
          alt={`${title} kit preview`}
          className="mb-4 w-full rounded-md object-contain max-h-48"
        />
      )}
      <div className="rounded-md bg-stone-800/80 p-5">
        <div className={`mb-4 rounded-md ${color} p-4 text-center`}>
          <h3 className="font-minecraft text-2xl text-white">{title}</h3>
          <div className="mt-2 text-3xl font-bold text-white">${price.toFixed(2)}</div>
        </div>

        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="mr-2 mt-1 h-4 w-4 shrink-0 text-emerald-400" />
              <span className="text-bone-200">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          to={`/store/purchase?rank=${encodeURIComponent(title)}&price=${price}`}
          className="block w-full rounded-md bg-emerald-600 py-3 text-center font-minecraft text-white transition-colors hover:bg-emerald-500"
        >
          PURCHASE
        </Link>
      </div>
    </div>
  )
}

