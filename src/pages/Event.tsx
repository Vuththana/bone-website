import { ChevronLeft, ChevronRight, Calendar, Trophy, Clock, MapPin } from "lucide-react"
import AnimatedBackground from "../components/animated-background"
import { Link } from "react-router-dom"
import { useState } from "react"

interface Event {
  date: string
  title: string
  time: string
  location: string
  rewards: string[]
  participants: number
  description: string
}

const events: Event[] = [
  // {
  //   date: "2025-04-25",
  //   title: "Ender Dragon Raid",
  //   time: "19:00 UTC",
  //   location: "The End Portal",
  //   rewards: ["Dragon Egg Trophy", "Elytra", "64 Diamonds"],
  //   participants: 23,
  //   description: "Server-wide coordinated attack on the Ender Dragon. Teams will be formed with specific roles. Bring your best gear!"
  // },
  // ... other events
]

export default function EventPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const startingDay = monthStart.getDay();

  // Generate calendar days
  const days = [];
  for (let i = 0; i < startingDay; i++) {
    days.push(null); // Empty days for previous month
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
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
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center">
            <Link to="/" className="group flex items-center text-bone-300 transition-colors hover:text-bone-100">
              <ChevronLeft className="mr-1 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>

          <div className="mb-12 text-center">
            <h1 className="mb-4 font-minecraft text-4xl text-bone-100 md:text-5xl">EVENT CALENDAR</h1>
            <p className="mx-auto max-w-2xl text-lg text-bone-200">
              See upcoming events, rewards, and participate in server activities
            </p>
          </div>

          {/* Calendar Navigation */}
          <div className="mb-8 flex items-center justify-between rounded-lg bg-black/40 p-4 backdrop-blur-sm">
            <button 
              onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
              className="flex items-center text-bone-300 hover:text-bone-100"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <h2 className="font-minecraft text-2xl text-bone-100">
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h2>
            <button 
              onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
              className="flex items-center text-bone-300 hover:text-bone-100"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="mb-12 grid grid-cols-7 gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center font-minecraft text-bone-100 p-2">
                {day}
              </div>
            ))}
            {days.map((date, index) => {
              const event = events.find(e => 
                new Date(e.date).toDateString() === date?.toDateString()
              );

              return (
                <div 
                  key={index}
                  className={`min-h-24 rounded-lg p-2 ${date ? 'bg-black/40 hover:bg-black/60' : 'bg-transparent'} 
                    ${event ? 'cursor-pointer border-2 border-emerald-400/50' : ''} transition-all`}
                  onClick={() => event && setSelectedEvent(event)}
                >
                  {date && (
                    <>
                      <div className="text-bone-300 mb-1 text-sm">{date.getDate()}</div>
                      {event && (
                        <div className="space-y-1">
                          <div className="truncate text-xs text-emerald-400">{event.title}</div>
                          <div className="flex flex-wrap gap-1">
                            {event.rewards.slice(0, 2).map((_reward, i) => (
                              <Trophy key={i} className="h-3 w-3 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Event Details Sidebar */}
          {selectedEvent && (
            <div className="rounded-lg bg-black/40 p-6 backdrop-blur-sm">
              <h2 className="mb-4 font-minecraft text-3xl text-bone-100">{selectedEvent.title}</h2>
              
              <div className="mb-6 grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center text-bone-200">
                    <Calendar className="mr-2 h-5 w-5 text-emerald-400" />
                    {new Date(selectedEvent.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-bone-200">
                    <Clock className="mr-2 h-5 w-5 text-emerald-400" />
                    {selectedEvent.time}
                  </div>
                  <div className="flex items-center text-bone-200">
                    <MapPin className="mr-2 h-5 w-5 text-emerald-400" />
                    {selectedEvent.location}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-bone-200">
                    <Trophy className="mr-2 h-5 w-5 text-emerald-400" />
                    Rewards:
                  </div>
                  <ul className="list-disc pl-6 text-emerald-400">
                    {selectedEvent.rewards.map((reward, index) => (
                      <li key={index} className="text-bone-200">{reward}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mb-6 text-bone-200">{selectedEvent.description}</p>

              <div className="flex items-center justify-between">
                <button className="rounded-lg bg-emerald-600 px-6 py-2 font-minecraft text-bone-100 transition-colors hover:bg-emerald-500">
                  Sign Up ({selectedEvent.participants} Joined)
                </button>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="rounded-lg bg-bone-300/10 px-4 py-2 text-bone-200 hover:bg-bone-300/20"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Server IP Footer */}
          <div className="mt-12 rounded-lg bg-emerald-900/30 p-6 text-center backdrop-blur-sm">
            <div className="flex items-center justify-center gap-4">
              <div className="rounded-lg bg-black/60 p-4">
                <p className="font-minecraft text-bone-100">SERVER IP</p>
                {/* <p className="text-xl text-emerald-400">bonesmp.club</p> */}
                <p className="text-xl text-emerald-400">COMING SOON</p>
              </div>
            </div>
          </div>
        </div>
      </main>

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