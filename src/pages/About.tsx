
import { ChevronLeft, Users, Award } from "lucide-react"
import AnimatedBackground from "../components/animated-background"
import StaffCard from "../components/staff-card"
import { Link } from "react-router-dom"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"

export default function AboutPage() {
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
            <h1 className="mb-4 font-minecraft text-4xl text-bone-100 md:text-5xl">{t("about.title")}</h1>
            <p className="mx-auto max-w-2xl text-lg text-bone-200">
            {t("about.description")}.
            </p>
          </div>

          <div className="mb-12 rounded-lg bg-black/40 p-6 backdrop-blur-sm">
            <h2 className="mb-6 font-minecraft text-2xl text-bone-100">{t("about.story")}</h2>
            <div className="space-y-4 text-bone-200">
              <p>
              {t("about.story_description")}
              </p>
              <p>
              {t("about.story_description1")}
              </p>
              <p>
              {t("about.story_description2")}
              </p>
              <p>
              {t("about.story_description3")}
              </p>
            </div>
          </div>


          <div className="mb-12 rounded-lg bg-black/40 p-6 backdrop-blur-sm">
            <div className="mb-6 flex items-center">
              <Users className="mr-2 h-6 w-6 text-emerald-400" />
              <h2 className="font-minecraft text-2xl text-bone-100">{t("team.title")}</h2>
            </div>
            <p className="mb-6 text-bone-200">
              {t("team.description")}
            </p>
            <div className="grid gap-6 md:grid-cols-1 mx-auto">
              <StaffCard
                name="GorosXD"
                role="Owner & Developer"
                avatar="https://i.imgur.com/pTF0cSw.png"
                description={t("team.gorosxd_description")}
              />
            </div>
          </div>

          <div className="rounded-lg bg-emerald-900/30 p-6 text-center backdrop-blur-sm">
            <div className="mb-4 flex justify-center">
              <Award className="h-12 w-12 text-emerald-400" />
            </div>
            <h2 className="mb-4 font-minecraft text-2xl text-bone-100">JOIN OUR COMMUNITY</h2>
            <p className="mb-6 text-bone-200">
              We're always looking for new players to join our community. Whether you're a builder, explorer, redstone
              engineer, or just looking for a friendly server to call home, we'd love to have you!
            </p>
            <div className="flex justify-center">
              <div className="rounded-lg bg-black/60 p-4 text-center">
                <p className="mb-2 font-minecraft text-xl text-bone-100">SERVER IP</p>
                {/* <p className="text-xl text-emerald-400">JAVA: bonesmp.club</p>
                <p className="text-xl text-emerald-400">BEDROCK: bonesmp.club</p> */}
                <p className="text-xl text-emerald-400">bonenetwork.xyz</p>
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

