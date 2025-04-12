import { ChevronLeft, Trophy, Coins, Skull, Heart, Clock, Award } from "lucide-react"
import AnimatedBackground from "../components/animated-background"
import LeaderboardTable from "../components/leaderboard-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router-dom"

// Mock data for leaderboards
const economyLeaderboard = [
  { rank: 1, player: "BoneMaster", value: 250000, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 2, player: "FossilHunter", value: 175000, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 3, player: "SkeletonKing", value: 120000, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 4, player: "DiamondMiner99", value: 95000, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 5, player: "CreeperSlayer", value: 82500, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 6, player: "RedstoneWizard", value: 75000, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 7, player: "EnderDragon", value: 68000, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 8, player: "NetherExplorer", value: 54000, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 9, player: "VillagerTrader", value: 48000, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 10, player: "WitherBoss", value: 42000, avatar: "/placeholder.svg?height=40&width=40" },
]

const killsLeaderboard = [
  { rank: 1, player: "SkeletonKing", value: 1250, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 2, player: "CreeperSlayer", value: 980, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 3, player: "EnderDragon", value: 875, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 4, player: "WitherBoss", value: 720, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 5, player: "BoneMaster", value: 650, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 6, player: "ZombieHunter", value: 580, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 7, player: "SpiderSlayer", value: 510, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 8, player: "PiglinTrader", value: 450, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 9, player: "EndermanKiller", value: 390, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 10, player: "GhastBuster", value: 340, avatar: "/placeholder.svg?height=40&width=40" },
]

const deathsLeaderboard = [
  { rank: 1, player: "LavaSwimmer", value: 320, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 2, player: "CliffJumper", value: 280, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 3, player: "TNTExperimenter", value: 245, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 4, player: "CreeperHugger", value: 210, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 5, player: "VoidExplorer", value: 185, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 6, player: "WitherFighter", value: 160, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 7, player: "DragonSlayer", value: 140, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 8, player: "PvPNewbie", value: 125, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 9, player: "CaveExplorer", value: 110, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 10, player: "SkyBuilder", value: 95, avatar: "/placeholder.svg?height=40&width=40" },
]

const playtimeLeaderboard = [
  { rank: 1, player: "BoneMaster", value: 1250, avatar: "/placeholder.svg?height=40&width=40", unit: "hours" },
  { rank: 2, player: "FossilHunter", value: 980, avatar: "/placeholder.svg?height=40&width=40", unit: "hours" },
  { rank: 3, player: "RedstoneWizard", value: 920, avatar: "/placeholder.svg?height=40&width=40", unit: "hours" },
  { rank: 4, player: "DiamondMiner99", value: 850, avatar: "/placeholder.svg?height=40&width=40", unit: "hours" },
  { rank: 5, player: "SkeletonKing", value: 780, avatar: "/placeholder.svg?height=40&width=40", unit: "hours" },
  { rank: 6, player: "NetherExplorer", value: 720, avatar: "/placeholder.svg?height=40&width=40", unit: "hours" },
  { rank: 7, player: "VillagerTrader", value: 650, avatar: "/placeholder.svg?height=40&width=40", unit: "hours" },
  { rank: 8, player: "EndermanKiller", value: 580, avatar: "/placeholder.svg?height=40&width=40", unit: "hours" },
  { rank: 9, player: "WitherBoss", value: 520, avatar: "/placeholder.svg?height=40&width=40", unit: "hours" },
  { rank: 10, player: "EnderDragon", value: 480, avatar: "/placeholder.svg?height=40&width=40", unit: "hours" },
]

const blocksLeaderboard = [
  { rank: 1, player: "MasterBuilder", value: 1250000, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 2, player: "ArchitectPro", value: 980000, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 3, player: "RedstoneWizard", value: 875000, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 4, player: "CastleCreator", value: 720000, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 5, player: "BoneMaster", value: 650000, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 6, player: "FossilHunter", value: 580000, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 7, player: "SkeletonKing", value: 510000, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 8, player: "DiamondMiner99", value: 450000, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 9, player: "NetherExplorer", value: 390000, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 10, player: "VillagerTrader", value: 340000, avatar: "/placeholder.svg?height=40&width=40" },
]

export default function LeaderboardsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-stone-900 text-stone-100">
      <AnimatedBackground />

      {/* Minecraft-style dirt background overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('https://th.bing.com/th/id/OIP.PTUHQP8DQC50ZE8FW67MaAHaHa?rs=1&pid=ImgDetMain')",
          backgroundRepeat: "repeat",
          backgroundSize: "64px 64px",
        }}
      ></div>

      {/* Bone texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage:
            "url('https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f2/Bone_Block_JE2_BE2.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      ></div>

      <main className="relative z-10 px-4 py-16 pt-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center">
            <Link to="/" className="group flex items-center text-bone-300 transition-colors hover:text-bone-100">
              <ChevronLeft className="mr-1 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>

          <div className="mb-12 text-center">
            <h1 className="mb-4 font-minecraft text-4xl text-bone-100 md:text-5xl">LEADERBOARDS</h1>
            <p className="mx-auto max-w-2xl text-lg text-bone-200">
              Check out the top players on Bone Network across different categories. Can you make it to the top?
            </p>
          </div>

          <div className="rounded-lg bg-black/40 p-6 backdrop-blur-sm ">
            <Tabs defaultValue="economy" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                <TabsTrigger value="economy" className="font-minecraft">
                  <Coins className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Economy</span>
                </TabsTrigger>
                <TabsTrigger value="kills" className="font-minecraft">
                  <Skull className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Kills</span>
                </TabsTrigger>
                <TabsTrigger value="deaths" className="font-minecraft">
                  <Heart className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Deaths</span>
                </TabsTrigger>
                <TabsTrigger value="playtime" className="font-minecraft">
                  <Clock className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Playtime</span>
                </TabsTrigger>
                <TabsTrigger value="blocks" className="font-minecraft">
                  <Award className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Blocks</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="economy" className="mt-6">
                <div className="flex items-center justify-center mb-4">
                  <Trophy className="mr-2 h-6 w-6 text-amber-400" />
                  <h2 className="font-minecraft text-2xl text-bone-100">Top Money Earners</h2>
                </div>
                <LeaderboardTable data={economyLeaderboard} valuePrefix="$" valueLabel="Balance" />
              </TabsContent>

              <TabsContent value="kills" className="mt-6">
                <div className="flex items-center justify-center mb-4">
                  <Trophy className="mr-2 h-6 w-6 text-amber-400" />
                  <h2 className="font-minecraft text-2xl text-bone-100">Top Killers</h2>
                </div>
                <LeaderboardTable data={killsLeaderboard} valueLabel="Kills" />
              </TabsContent>

              <TabsContent value="deaths" className="mt-6">
                <div className="flex items-center justify-center mb-4">
                  <Trophy className="mr-2 h-6 w-6 text-amber-400" />
                  <h2 className="font-minecraft text-2xl text-bone-100">Most Deaths</h2>
                </div>
                <LeaderboardTable data={deathsLeaderboard} valueLabel="Deaths" />
              </TabsContent>

              <TabsContent value="playtime" className="mt-6">
                <div className="flex items-center justify-center mb-4">
                  <Trophy className="mr-2 h-6 w-6 text-amber-400" />
                  <h2 className="font-minecraft text-2xl text-bone-100">Most Playtime</h2>
                </div>
                <LeaderboardTable data={playtimeLeaderboard} valueLabel="Hours" valueUnit="hours" />
              </TabsContent>

              <TabsContent value="blocks" className="mt-6">
                <div className="flex items-center justify-center mb-4">
                  <Trophy className="mr-2 h-6 w-6 text-amber-400" />
                  <h2 className="font-minecraft text-2xl text-bone-100">Blocks Placed</h2>
                </div>
                <LeaderboardTable data={blocksLeaderboard} valueLabel="Blocks" />
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-8 rounded-lg bg-emerald-900/30 p-6 text-center backdrop-blur-sm">
            <h2 className="mb-4 font-minecraft text-2xl text-bone-100">WANT TO COMPETE?</h2>
            <p className="mb-6 text-bone-200">
              Join our server and start climbing the leaderboards! Stats are updated every hour.
            </p>
            <div className="flex justify-center">
              <div className="rounded-lg bg-black/60 p-4 text-center">
                <p className="mb-2 font-minecraft text-xl text-bone-100">SERVER IP</p>
                {/* <p className="text-xl text-emerald-400">bonesmp.club</p> */}
                <p className="text-xl text-emerald-400">COMING SOON</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/60 px-4 py-6 text-center backdrop-blur-sm">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm text-bone-400">
            &copy; {new Date().getFullYear()} Bone Network. Not affiliated with Mojang AB.
          </p>
        </div>
      </footer>
    </div>
  )
}

