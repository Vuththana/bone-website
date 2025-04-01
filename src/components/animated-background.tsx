"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor(private canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5

        // Bone and Minecraft themed colors
        const colors = [
          "rgba(227, 218, 201, 0.7)", // Bone color
          "rgba(76, 175, 80, 0.5)", // Minecraft green
          "rgba(121, 85, 72, 0.5)", // Minecraft brown
          "rgba(158, 158, 158, 0.4)", // Stone color
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges using canvas dimensions
        if (this.x > this.canvas.width) this.x = 0
        else if (this.x < 0) this.x = this.canvas.width
        if (this.y > this.canvas.height) this.y = 0
        else if (this.y < 0) this.y = this.canvas.height
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000))

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle(canvas))
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background gradient using canvas dimensions
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#2d2d2d")
      gradient.addColorStop(1, "#1a1a1a")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (const particle of particlesArray) {
        particle.update()
        particle.draw(ctx)
      }

      // Connect particles with lines using canvas context
      connectParticles(ctx, particlesArray, canvas)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed left-0 top-0 -z-10 h-full w-full" />
}

// Now properly using canvas parameter for connection calculations
function connectParticles(
  ctx: CanvasRenderingContext2D,
  particlesArray: Particle[],
  canvas: HTMLCanvasElement // Now used in calculations
) {
  const maxDistance = Math.min(150, canvas.width * 0.2) // Now using canvas width
  const connectionOpacity = canvas.width > 768 ? 0.2 : 0.1 // Responsive opacity based on canvas size

  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      const dx = particlesArray[a].x - particlesArray[b].x
      const dy = particlesArray[a].y - particlesArray[b].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < maxDistance) {
        const opacity = (1 - distance / maxDistance) * connectionOpacity
        ctx.strokeStyle = `rgba(76, 175, 80, ${opacity})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
        ctx.stroke()
      }
    }
  }
}

// Proper TypeScript interface for Particle
interface Particle {
  x: number
  y: number
  update: () => void
  draw: (ctx: CanvasRenderingContext2D) => void
}