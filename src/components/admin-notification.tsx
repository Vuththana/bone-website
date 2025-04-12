"use client"

import { useState } from "react"
import { X, Shield, Users } from 'lucide-react'

export default function AdminNotification() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md animate-float">
      <div className="rounded-none border-4 border-amber-500 bg-black/90 p-1 shadow-lg backdrop-blur-sm">
        <div className="rounded-none border-2 border-stone-700 p-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="mr-2 h-5 w-5 text-amber-400" />
              <h3 className="font-minecraft text-lg text-amber-400">ADMINS NEEDED!</h3>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="rounded-full bg-stone-800 p-1 text-stone-400 hover:bg-stone-700 hover:text-stone-300"
              aria-label="Close notification"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <p className="mb-3 text-bone-200">
            We're recruiting server admins and Discord moderators for Bone Network! Help us grow our community.
          </p>
          
          <div className="mb-3 space-y-2 text-sm">
            <div className="flex items-start">
              <Shield className="mr-2 mt-0.5 h-4 w-4 text-emerald-400" />
              <span className="text-bone-300">Minecraft Server Admins: Help manage the server, organize events, and assist players</span>
            </div>
            <div className="flex items-start">
              <Users className="mr-2 mt-0.5 h-4 w-4 text-[#5865F2]" />
              <span className="text-bone-300">Discord Moderators: Keep our community friendly and welcoming</span>
            </div>
          </div>
          
          <div className="flex justify-center">
            <a
              href="https://discord.gg/RBN8khMGYc"
              className="block w-full rounded-none border-b-4 border-emerald-800 bg-emerald-600 py-2 text-center font-minecraft text-white transition-all hover:-translate-y-[2px] hover:border-b-[6px] hover:border-emerald-800 active:translate-y-[1px] active:border-b-2"
            >
              JOIN DISCORD TO APPLY
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
