import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Medal, Trophy } from "lucide-react"

interface LeaderboardEntry {
  rank: number
  player: string
  value: number
  avatar: string
  unit?: string
}

interface LeaderboardTableProps {
  data: LeaderboardEntry[]
  valuePrefix?: string
  valueLabel: string
  valueUnit?: string
}

export default function LeaderboardTable({ data, valuePrefix = "", valueLabel, valueUnit }: LeaderboardTableProps) {
  // Format large numbers with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <div className="overflow-hidden rounded-lg border border-stone-800">
      <table className="w-full">
        <thead className="bg-stone-800">
          <tr>
            <th className="px-4 py-3 text-left font-minecraft text-sm text-bone-100">Rank</th>
            <th className="px-4 py-3 text-left font-minecraft text-sm text-bone-100">Player</th>
            <th className="px-4 py-3 text-right font-minecraft text-sm text-bone-100">{valueLabel}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr
              key={entry.rank}
              className={`border-t border-stone-800 transition-colors ${
                entry.rank <= 3 ? "bg-stone-800/50" : "hover:bg-stone-800/30"
              }`}
            >
              <td className="px-4 py-3 text-left">
                {entry.rank === 1 ? (
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 text-amber-400" />
                    <span className="ml-2 font-minecraft text-amber-400">1st</span>
                  </div>
                ) : entry.rank === 2 ? (
                  <div className="flex items-center">
                    <Medal className="h-5 w-5 text-stone-300" />
                    <span className="ml-2 font-minecraft text-stone-300">2nd</span>
                  </div>
                ) : entry.rank === 3 ? (
                  <div className="flex items-center">
                    <Medal className="h-5 w-5 text-amber-700" />
                    <span className="ml-2 font-minecraft text-amber-700">3rd</span>
                  </div>
                ) : (
                  <span className="font-minecraft text-bone-300">{entry.rank}th</span>
                )}
              </td>
              <td className="px-4 py-3 text-left">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 border border-stone-700">
                    <AvatarImage src={entry.avatar} alt={entry.player} />
                    <AvatarFallback>{entry.player.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span className="ml-2 font-minecraft text-bone-100">{entry.player}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-right font-minecraft text-emerald-400">
                {valuePrefix}
                {formatNumber(entry.value)}
                {valueUnit ? ` ${valueUnit}` : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

