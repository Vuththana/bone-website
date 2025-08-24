"use client"

import { useState, useEffect } from "react"
import { Server, Users, Clock } from "lucide-react"

export default function ServerStatus() {
  const [status, setStatus] = useState<"online" | "offline" | "loading">("loading")
  const [playerCount, setPlayerCount] = useState<number | null>(null)
  const [maxPlayers, setMaxPlayers] = useState<number | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const response = await fetch("https://api.mcstatus.io/v2/status/java/bonenetwork.xyz:25565")
        const data = await response.json()

        if (data.online) {
          setStatus("online")
          setPlayerCount(data.players.online)
          setMaxPlayers(data.players.max)
        } else {
          setStatus("offline")
          setPlayerCount(null)
          setMaxPlayers(null)
        }

        setLastUpdated(new Date())
      } catch (error) {
        console.error("Error checking server status:", error)
        setStatus("offline")
        setPlayerCount(null)
        setMaxPlayers(null)
        setLastUpdated(new Date())
      }
    }

    checkServerStatus()

    // Check status every 60 seconds
    const interval = setInterval(checkServerStatus, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="animate-fadeIn rounded-none border-2 border-bone-700 bg-black/40 p-4 backdrop-blur-sm">
      <div className="flex items-center justify-center">
        <div className="flex items-center">
          <Server className="mr-2 h-5 w-5" />
          <span className="font-minecraft">STATUS:</span>
          {status === "loading" ? (
            <span className="ml-2 inline-block h-3 w-3 animate-pulse rounded-full bg-yellow-400"></span>
          ) : status === "online" ? (
            <span className="ml-2 flex items-center text-emerald-400">
              <span className="mr-2 inline-block h-3 w-3 rounded-full bg-emerald-400"></span>
              ONLINE
            </span>
          ) : (
            <span className="ml-2 flex items-center text-red-400">
              <span className="mr-2 inline-block h-3 w-3 rounded-full bg-red-400"></span>
              OFFLINE
            </span>
          )}
        </div>

        {status === "online" && playerCount !== null && maxPlayers !== null && (
          <>
            <div className="mx-4 h-8 w-px bg-stone-700"></div>
            <div className="flex items-center">
              <Users className="mr-2 h-5 w-5" />
              <span className="font-minecraft">PLAYERS:</span>
              <span className="ml-2 text-emerald-400">
                {playerCount}/{maxPlayers}
              </span>
            </div>
          </>
        )}

        {lastUpdated && (
          <>
            <div className="mx-4 h-8 w-px bg-stone-700"></div>
            <div className="flex items-center text-sm text-stone-400">
              <Clock className="mr-1 h-4 w-4" />
              <span>Updated: {lastUpdated.toLocaleTimeString()}</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}