
import { ChevronLeft, Calendar, Users, Server, Award } from "lucide-react"
import AnimatedBackground from "../components/animated-background"
import StaffCard from "../components/staff-card"
import { Link } from "react-router-dom"

export default function AboutPage() {
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
            <h1 className="mb-4 font-minecraft text-4xl text-bone-100 md:text-5xl">ABOUT US</h1>
            <p className="mx-auto max-w-2xl text-lg text-bone-200">
              Learn more about Bone SMP, our history, and the team behind the server.
            </p>
          </div>

          <div className="mb-12 rounded-lg bg-black/40 p-6 backdrop-blur-sm">
            <h2 className="mb-6 font-minecraft text-2xl text-bone-100">OUR STORY</h2>
            <div className="space-y-4 text-bone-200">
              <p>
                Bone SMP was founded in early 2023 by a group of friends who wanted to create a unique Minecraft
                survival experience. What started as a small private server quickly grew into a thriving community of
                builders, explorers, and adventurers.
              </p>
              <p>
                Our server is built on the principles of creativity, community, and fair play. We strive to provide a
                balanced gameplay experience where players can express their creativity while enjoying the challenge of
                survival Minecraft.
              </p>
              <p>
                The name "Bone" was inspired by the minecraft item as you know bone where you killed a skeleton to get it or mine bone blocks, we decided
                to put because it a short name.
              </p>
            </div>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-black/40 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center">
                <Server className="mr-2 h-6 w-6 text-emerald-400" />
                <h2 className="font-minecraft text-xl text-bone-100">SERVER SPECS</h2>
              </div>
              <ul className="space-y-2 text-bone-200">
                <li>• 16GB Dedicated RAM</li>
                <li>• High-performance CPU</li>
                <li>• 99.9% Uptime</li>
                <li>• DDoS Protection</li>
                <li>• Daily Backups</li>
                <li>• Vanilla-friendly Experience</li>
              </ul>
            </div>

            <div className="rounded-lg bg-black/40 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center">
                <Calendar className="mr-2 h-6 w-6 text-emerald-400" />
                <h2 className="font-minecraft text-xl text-bone-100">SERVER EVENTS</h2>
              </div>
              <ul className="space-y-2 text-bone-200">
                <li>• Weekly Building Competitions</li>
                <li>• Monthly PvP Tournaments</li>
                <li>• Seasonal Special Events</li>
                <li>• Community Projects</li>
                <li>• Boss Battles</li>
              </ul>
            </div>
          </div>

          <div className="mb-12 rounded-lg bg-black/40 p-6 backdrop-blur-sm">
            <div className="mb-6 flex items-center">
              <Users className="mr-2 h-6 w-6 text-emerald-400" />
              <h2 className="font-minecraft text-2xl text-bone-100">OUR TEAM</h2>
            </div>
            <p className="mb-6 text-bone-200">
              Meet the dedicated staff members who keep Bone SMP running smoothly and ensure everyone has a great
              experience.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <StaffCard
                name="GorosXD"
                role="Owner & Developer"
                avatar="https://i.imgur.com/S0tmtj8.png"
                description="Server owner and main developer. Responsible for server maintenance and custom plugins."
              />
              <StaffCard
                name="Sasquatchhhh"
                role="Admin"
                avatar="https://i.imgur.com/Ma5XBFY.png"
                description="Handles player support, moderation, and community events. Always ready to help!"
              />
              <StaffCard
                name="FragBot_"
                role="Builder"
                avatar="https://i.imgur.com/tryr5ak.png"
                description="Creates amazing spawn builds and custom structures throughout the world."
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
                <p className="text-xl text-emerald-400">bonesmp.club</p>
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

