import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"

interface StaffCardProps {
  name: string
  role: string
  avatar: string
  description: string
}

export default function StaffCard({ name, role, avatar, description }: StaffCardProps) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-stone-800/50 p-4 text-center">
      <Avatar className="mb-3 h-20 w-20">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name.substring(0, 2)}</AvatarFallback>
      </Avatar>
      <h3 className="font-minecraft text-xl text-bone-100">{name}</h3>
      <p className="mb-2 text-sm text-emerald-400">{role}</p>
      <p className="text-sm text-bone-300">{description}</p>
    </div>
  )
}

