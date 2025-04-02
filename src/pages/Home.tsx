
import { ChevronRight, ShoppingCart, Book, Info } from "lucide-react"
import CopyButton from "../components/copy-button"
import ServerStatus from "../components/server-status"
import FeatureCard from "../components/feature-card"
import AnimatedBackground from "../components/animated-background"
import { Link } from "react-router-dom"


export default function Home() {
    return (
      <div className="relative min-h-screen overflow-hidden bg-stone-900 text-stone-100">
        <AnimatedBackground />
  
        <main className="relative z-10 pt-16">
          {" "}
          {/* Added pt-16 for navbar spacing */}
          {/* Hero Section */}
          <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-4 py-20 text-center">
            <div className="animate-float">
              <h1 className="mb-2 font-minecraft text-5xl font-bold tracking-wider text-bone-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-7xl">
                BONE <span className="text-emerald-400">NETWORK</span>
              </h1>
              <p className="mb-8 text-xl font-semibold text-bone-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] md:text-2xl">
                Dig Deep. Build Big. Survive Together.
              </p>
            </div>
  
            <div className="mb-8 flex items-center justify-center rounded-lg bg-black/40 p-4 backdrop-blur-sm">
              <p className="mr-3 font-minecraft text-xl text-bone-100">bonesmp.club</p>
              <CopyButton textToCopy="bonesmp.club" />
            </div>
  
            <ServerStatus />
  
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/store"
                className="group flex items-center rounded-md bg-emerald-700 px-6 py-3 font-minecraft text-lg font-bold text-white transition-all hover:bg-emerald-600"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Store
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/rules"
                className="group flex items-center rounded-md bg-stone-700 px-6 py-3 font-minecraft text-lg font-bold text-white transition-all hover:bg-stone-600"
              >
                <Book className="mr-2 h-5 w-5" />
                Rules
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </section>
          {/* Features Section */}
          <section className="bg-stone-800/80 px-4 py-16 backdrop-blur-sm">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-12 text-center font-minecraft text-3xl text-bone-100 md:text-4xl">SERVER FEATURES</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <FeatureCard
                  title="Survival Experience"
                  description="Pure vanilla survival with minimal plugins for the authentic Minecraft experience."
                  icon="pickaxe"
                />
                <FeatureCard
                  title="Active Community"
                  description="Join our friendly players and participate in regular events and competitions."
                  icon="community"
                />
                <FeatureCard
                  title="Custom Builds"
                  description="Explore amazing structures and contribute to our growing world."
                  icon="build"
                />
                <FeatureCard
                  title="Economy System"
                  description="Trade with other players using our balanced in-game economy."
                  icon="economy"
                />
                <FeatureCard
                  title="Land Protection"
                  description="Claim and protect your builds with our easy-to-use protection system."
                  icon="protection"
                />
                <FeatureCard
                  title="Regular Events"
                  description="Participate in weekly events and seasonal competitions with prizes."
                  icon="events"
                />
              </div>
            </div>
          </section>
          {/* About Preview Section */}
          <section className="px-4 py-16">
            <div className="mx-auto max-w-4xl rounded-lg bg-black/40 p-6 backdrop-blur-sm">
              <h2 className="mb-6 text-center font-minecraft text-3xl text-bone-100">ABOUT BONE SMP</h2>
              <p className="mb-4 text-lg text-bone-200">
                Established in 2023, Bone SMP is a community-focused Minecraft server offering a unique survival
                experience with a twist. Our server features custom terrain, balanced gameplay, and a friendly community.
              </p>
              <p className="mb-6 text-lg text-bone-200">
                Whether you're a builder, explorer, or redstone engineer, there's a place for you in our world.
              </p>
              <div className="flex justify-center">
                <Link
                  to="/about"
                  className="group flex items-center rounded-md bg-bone-700 px-6 py-3 font-minecraft text-lg font-bold text-white transition-all hover:bg-bone-600"
                >
                  <Info className="mr-2 h-5 w-5" />
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </section>
          {/* Join Us Section */}
          <section className="bg-emerald-900/30 px-4 py-16 backdrop-blur-sm">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 font-minecraft text-3xl text-bone-100 md:text-4xl">JOIN OUR COMMUNITY</h2>
              <p className="mb-8 text-xl text-bone-200">Connect with other players and stay updated with server news</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://discord.gg/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-md bg-[#5865F2] px-6 py-3 font-minecraft text-lg font-bold text-white transition-all hover:bg-[#4a56e3]"
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  Discord
                </a>
                <a
                  href="https://twitter.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-md bg-[#1DA1F2] px-6 py-3 font-minecraft text-lg font-bold text-white transition-all hover:bg-[#0d8fd9]"
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  Twitter
                </a>
              </div>
            </div>
          </section>
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

