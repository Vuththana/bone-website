import { ChevronLeft } from "lucide-react"
import AnimatedBackground from "../components/animated-background"
import StoreItem from "../components/store-item"
import { Link } from "react-router-dom"


export default function StorePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-stone-900 text-stone-100">
      <AnimatedBackground />

      <main className="relative z-10 px-4 py-16 pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center">
            <Link to="/" className="group flex items-center text-bone-300 transition-colors hover:text-bone-100">
              <ChevronLeft className="mr-1 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>

          <div className="mb-12 text-center">
            <h1 className="mb-4 font-minecraft text-4xl text-bone-100 md:text-5xl">STORE</h1>
            <p className="mx-auto max-w-2xl text-lg text-bone-200">
              Support the server and enhance your gameplay experience with these exclusive perks and items.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="mb-6 font-minecraft text-2xl text-emerald-400">RANKS</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <StoreItem
                title="Skeleton Rank"
                price={5.99}
                features={[
                    "5 Home Locations",
                    "6 Land Claims",
                    "Claim Skeleton Kits",
                    "2,000,000 in-game currency",
                ]}
                popular={false}
                color="bg-gradient-to-br from-stone-400 to-stone-600"
              />
              <StoreItem
                title="Fossil Rank"
                price={14.99}
                features={[
                  "5 Home Locations",
                  "12 Land Claims",
                  "Claim Fossil Kits",
                  "5,000,000 in-game currency",
                ]}
                popular={true}
                color="bg-gradient-to-br from-amber-400 to-amber-600"
              />
              <StoreItem
                title="Ancient Rank"
                price={29.99}
                features={[
                    "8 Home Locations",
                    "16 Land Claims",
                    "Claim All Rank Kits",
                    "10,000,000 in-game currency",
                    "Gain access toly in your own land claims"
                ]}
                popular={false}
                color="bg-gradient-to-br from-emerald-400 to-emerald-600"
              />
            </div>
          </div>


          <div className="rounded-lg bg-black/40 p-6 backdrop-blur-sm">
            <h2 className="mb-4 font-minecraft text-2xl text-bone-100">PAYMENT INFORMATION</h2>
            <p className="mb-4 text-bone-200">
              All purchases are processed securely through our payment provider. Once your payment is confirmed, your
              perks will be automatically applied to your account within 5 to 30 minutes.
            </p>
            <p className="mb-4 text-bone-200">
              If you encounter any issues with your purchase, please contact our support team on Discord.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center rounded bg-white/10 px-3 py-2">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.5 7.5C19.5 9.5 19.5 12.5 17.5 14.5C15.5 16.5 12.5 16.5 10.5 14.5L7 11C5 9 5 6 7 4C9 2 12 2 14 4L15.5 5.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 16.5C10.5 18.5 13.5 18.5 15.5 16.5C17.5 14.5 17.5 11.5 15.5 9.5L12 6C10 4 7 4 5 6C3 8 3 11 5 13L6.5 14.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-2">Local Online Cambodian Bank</span>
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

