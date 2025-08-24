import { ChevronLeft } from "lucide-react"
import AnimatedBackground from "../components/animated-background"
import StoreItem from "../components/store-item"
import { Link } from "react-router-dom"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"

export default function StorePage() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-stone-900 text-stone-100">
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
      
      <main className="relative flex-grow z-10 px-4 py-16 pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center">
            <Link to="/" className="group flex items-center text-bone-300 transition-colors hover:text-bone-100">
              <ChevronLeft className="mr-1 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>

          <div className="mb-12 text-center">
            <h1 className="mb-4 font-minecraft text-4xl text-bone-100 md:text-5xl">{t("store.title")}</h1>
            <p className="mx-auto max-w-2xl text-lg text-bone-200">
            {t("store.description")}
            </p>
          </div>

          <div className="mb-16">
            <h2 className="mb-6 font-minecraft text-2xl text-emerald-400">RANKS</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StoreItem
                title="Knight"
                price={5}
                image="https://i.imgur.com/xP05NCU.jpeg"
                features={[
                  "3 Home Locations",
                  "6 Land Claims",
                  "Claim Knight Kit",
                  "Access to commands: /ec, /anvil",
                ]}
                recommended={false}
                color="bg-gradient-to-br from-gray-400 to-gray-600"
              />

              <StoreItem
                title="Baron"
                price={10}
                image="https://i.imgur.com/xyyTPNk.jpeg"
                features={[
                  "3 Home Locations",
                  "8 Land Claims",
                  "Claim Baron Kit",
                  "Access to commands: /ec, /anvil",
                ]}
                recommended={false}
                color="bg-gradient-to-br from-green-400 to-green-600"
              />

              <StoreItem
                title="Duke"
                price={15}
                image="https://i.imgur.com/NDZuPRo.jpeg"
                features={[
                  "5 Home Locations",
                  "16 Land Claims",
                  "Claim Duke Kit",
                  "Access to commands: /sell all, /ec, /anvil",
                ]}
                recommended={true}
                color="bg-gradient-to-br from-yellow-400 to-yellow-600"
              />

              <StoreItem
                title="Prince"
                price={20}
                image="https://i.imgur.com/me7XmbU.jpeg"
                features={[
                  "8 Home Locations",
                  "20 Land Claims",
                  "Claim Prince Kit",
                  "Access to commands: /sell all, /ec, /anvil",
                ]}
                recommended={false}
                color="bg-gradient-to-br from-orange-500 to-orange-700"
              />

              <StoreItem
                title="Emperor"
                price={30}
                image="https://i.imgur.com/ywxetpk.jpeg"
                features={[
                  "15 Home Locations",
                  "25 Land Claims",
                  "Claim Emperor Kits",
                  "Access to commands: /sell all, /ec, /anvil",
                ]}
                recommended={false}
                color="bg-gradient-to-br from-red-600 to-red-900"
              />

              <StoreItem
                title="Global"
                price={50}
                features={[
                  "15 Home Locations",
                  "25 Land Claims",
                  "Claim All Rank Kits",
                  "Access to commands: /sell all, /ec, /anvil",
                ]}
                recommended={false}
                color="bg-gradient-to-br from-purple-900 via-blue-800 to-pink-600"
              />
            </div>
          </div>


          <div className="rounded-lg bg-black/40 p-6 backdrop-blur-sm">
            <h2 className="mb-4 font-minecraft text-2xl text-bone-100">PAYMENT INFORMATION</h2>
            <p className="mb-4 text-bone-200">
              {t("store.info_description1")}
            </p>
            <p className="mb-4 text-bone-200">
              {t("store.info_description2")}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center rounded bg-white/10 px-3 py-2">
              <img className="size-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAdVWUnHHiaWKk_ev-HcnVtnv8wPqAwNALQ&s" alt="" />
                <span className="ml-2">ABA Bank</span>
              </div>
              <div className="flex items-center rounded bg-white/10 px-3 py-2">
              <img className="size-10" src="https://devithuotkeo.com/static/image/portfolio/khqr/khqr-5.png" alt="" />
                <span className="ml-2">KHQR</span>
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

