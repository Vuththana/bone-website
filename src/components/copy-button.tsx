"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CopyButtonProps {
  textToCopy: string
}

export default function CopyButton({ textToCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center justify-center rounded-md bg-stone-700 p-2 transition-colors hover:bg-stone-600 cursor-pointer"
      aria-label={copied ? "Copied" : "Copy to clipboard"}
    >
      {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
    </button>
  )
}

