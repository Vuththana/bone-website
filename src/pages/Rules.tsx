import { ChevronLeft, Shield } from "lucide-react"
import AnimatedBackground from "../components/animated-background"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { Link } from "react-router-dom"

export default function RulesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-stone-900 text-stone-100">
      <AnimatedBackground />

      <main className="relative z-10 px-4 py-16 pt-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center">
            <Link to="/" className="group flex items-center text-bone-300 transition-colors hover:text-bone-100">
              <ChevronLeft className="mr-1 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>

          <div className="mb-12 text-center">
            <h1 className="mb-4 font-minecraft text-4xl text-bone-100 md:text-5xl">SERVER RULES</h1>
            <p className="mx-auto max-w-2xl text-lg text-bone-200">
              To ensure everyone has a great experience on Bone Network, please follow these rules. Failure to comply may
              result in temporary or permanent bans.
            </p>
          </div>

          <div className="rounded-lg bg-black/40 p-6 backdrop-blur-sm">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-bone-800">
                <AccordionTrigger className="font-minecraft text-xl text-bone-100 hover:text-bone-50">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-emerald-400" />
                    General Conduct
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-bone-200">
                  <ul className="list-inside list-disc space-y-2">
                    <li>Be respectful to all players and staff members.</li>
                    <li>No harassment, bullying, or discrimination of any kind.</li>
                    <li>No excessive swearing or inappropriate language.</li>
                    <li>No spamming in chat or using all caps excessively.</li>
                    <li>English is the primary language in public chat.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-bone-800">
                <AccordionTrigger className="font-minecraft text-xl text-bone-100 hover:text-bone-50">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-emerald-400" />
                    Gameplay Rules
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-bone-200">
                  <ul className="list-inside list-disc space-y-2">
                    <li>No griefing or stealing from other players.</li>
                    <li>No hacking, cheating, or using modified clients that provide unfair advantages.</li>
                    <li>No exploiting bugs or glitches. Report them to staff instead.</li>
                    <li>No building offensive or inappropriate structures.</li>
                  </ul> 
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-bone-800">
                <AccordionTrigger className="font-minecraft text-xl text-bone-100 hover:text-bone-50">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-emerald-400" />
                    Building Guidelines
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-bone-200">
                  <ul className="list-inside list-disc space-y-2">
                    <li>No massive redstone contraptions that cause lag without staff approval.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-bone-800">
                <AccordionTrigger className="font-minecraft text-xl text-bone-100 hover:text-bone-50">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-emerald-400" />
                    Economy & Trading
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-bone-200">
                  <ul className="list-inside list-disc space-y-2">
                    <li>Honor all agreements made for trades or services.</li>
                    <li>No artificially inflating prices or monopolizing resources.</li>
                    <li>The server economy is monitored - exploits will result in bans.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-bone-800">
                <AccordionTrigger className="font-minecraft text-xl text-bone-100 hover:text-bone-50">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-emerald-400" />
                    Server Performance
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-bone-200">
                  <ul className="list-inside list-disc space-y-2">
                    <li>No creating lag machines or devices that negatively impact server performance.</li>
                    <li>Keep entity counts reasonable (farms, animals, etc.).</li>
                    <li>Report any performance issues to staff.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-bone-800">
                <AccordionTrigger className="font-minecraft text-xl text-bone-100 hover:text-bone-50">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-emerald-400" />
                    Consequences
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-bone-200">
                  <p className="mb-2">Rule violations will be handled according to severity:</p>
                  <ul className="list-inside list-disc space-y-2">
                    <li>
                      <span className="font-bold text-yellow-400">Warning:</span> First minor offense
                    </li>
                    <li>
                      <span className="font-bold text-orange-400">Temporary Ban (1-7 days):</span> Repeated minor
                      offenses or moderate violations
                    </li>
                    <li>
                      <span className="font-bold text-red-400">Long-term Ban (30+ days):</span> Serious violations or
                      continued rule-breaking
                    </li>
                    <li>
                      <span className="font-bold text-red-600">Permanent Ban:</span> Extreme violations, hacking, or
                      repeated serious offenses
                    </li>
                  </ul>
                  <p className="mt-4">
                    All bans can be appealed on our Discord server. The staff team has final say in all moderation
                    decisions.
                  </p>
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
          <p className="text-sm text-bone-400">
            &copy; {new Date().getFullYear()} Bone Network. Not affiliated with Mojang AB.
          </p>
        </div>
      </footer>
    </div>
  )
}

