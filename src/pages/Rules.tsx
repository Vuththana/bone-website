import { ChevronLeft, Shield } from "lucide-react"
import AnimatedBackground from "../components/animated-background"
import { useLanguage } from "@/contexts/language-context"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function RulesPage() {
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
            <h1 className="mb-4 font-minecraft text-4xl text-bone-100 md:text-5xl">{t("title.title")}</h1>
            <p className="mx-auto max-w-2xl text-lg text-bone-200">
              {t("title.description")}
            </p>
          </div>

          <div className="rounded-lg bg-black/40 p-6 backdrop-blur-sm">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-bone-800">
                <AccordionTrigger className="font-minecraft text-xl text-bone-100 hover:text-bone-50">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-emerald-400" />
                    {t("general_conduct.general_conduct")}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-bone-200">
                  <ul className="list-inside list-disc space-y-2">
                    <li>{t("general_conduct.respectful")}</li>
                    <li>{t("general_conduct.no_spam")}</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-bone-800">
                <AccordionTrigger className="font-minecraft text-xl text-bone-100 hover:text-bone-50">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-emerald-400" />
                    {t("gameplay.gameplay_rules")}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-bone-200">
                  <ul className="list-inside list-disc space-y-2">
                    <li>{t("gameplay.no_cheating")}</li>
                    <li>{t("gameplay.no_exploiting")}</li>
                    <li>{t("gameplay.no_offensive_builds")}</li>
                  </ul> 
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-bone-800">
                <AccordionTrigger className="font-minecraft text-xl text-bone-100 hover:text-bone-50">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-emerald-400" />
                    {t("building.building_guidelines")}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-bone-200">
                  <ul className="list-inside list-disc space-y-2">
                    <li>{t("building.redstone")}</li>
                    <li>{t("gameplay.no_offensive_builds")}</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-bone-800">
                <AccordionTrigger className="font-minecraft text-xl text-bone-100 hover:text-bone-50">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-emerald-400" />
                    {t("eco.economy_trading")}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-bone-200">
                  <ul className="list-inside list-disc space-y-2">
                    <li>{t("eco.honor_agreements")}</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-bone-800">
                <AccordionTrigger className="font-minecraft text-xl text-bone-100 hover:text-bone-50">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-emerald-400" />
                      {t("server.server_performance")}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-bone-200">
                  <ul className="list-inside list-disc space-y-2">
                    <li>{t("server.no_lag_machines")}</li>
                    <li>{t("server.report_performance_issues")}</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-bone-800">
                <AccordionTrigger className="font-minecraft text-xl text-bone-100 hover:text-bone-50">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-emerald-400" />
                    {t("punishment.title")}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-bone-200">
                  <p className="mb-2">{t("punishment.title1")}</p>
                  <ul className="list-inside list-disc space-y-2">
                    <li>
                      <span className="font-bold text-yellow-400">{t("punishment.warning_label")}:</span> {t("punishment.warning_desc")}
                    </li>
                    <li>
                      <span className="font-bold text-orange-400">{t("punishment.temp_ban_label")}:</span> {t("punishment.temp_ban_desc")}
                    </li>
                    <li>
                      <span className="font-bold text-red-400">{t("punishment.long_ban_label")}:</span> {t("punishment.long_ban_desc")}
                    </li>
                    <li>
                      <span className="font-bold text-red-600">{t("punishment.perm_ban_label")}:</span> {t("punishment.perm_ban_desc")}
                    </li>
                  </ul>
                <p className="mt-4">{t("punishment.appeal_note")}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-8 rounded-lg bg-emerald-900/30 p-6 text-center backdrop-blur-sm">
            <h2 className="mb-4 font-minecraft text-2xl text-bone-100">HAVE QUESTIONS?</h2>
            <p className="mb-4 text-bone-200">
              If you have any questions about the rules or need clarification, please ask a staff member on our Discord
              server.
            </p>
            <a
              href="https://discord.gg/example"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-[#5865F2] px-6 py-3 font-minecraft text-lg font-bold text-white transition-all hover:bg-[#4a56e3]"
            >
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Join our Discord
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/60 px-4 py-6 text-center backdrop-blur-sm">
        <div className="mx-auto max-w-6xl">
          <p className="font-minecraft text-sm text-bone-400">
            &copy; {new Date().getFullYear()} Bone Network. Not affiliated with Mojang AB.
          </p>
        </div>
      </footer>
    </div>
  )
}
