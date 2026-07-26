import React, { useState } from 'react'
import { motion, useSpring } from 'framer-motion'
export default function SkillCard({ name, icon: Icon, index = 0 }) {
  const [hovered, setHovered] = useState(false)
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 })
  const springConfig = { damping: 15, stiffness: 120, mass: 0.5 }
  const rotateX = useSpring(0, springConfig)
  const rotateY = useSpring(0, springConfig)
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // Percentage from center
    const xPct = (x - rect.width / 2) / (rect.width / 2)
    const yPct = (y - rect.height / 2) / (rect.height / 2)
    
    // Set 3D rotation (max 12 deg tilt)
    rotateX.set(-yPct * 12)
    rotateY.set(xPct * 12)
    // Track glow position
    setGlowPos({ x, y })
  }
  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    setHovered(false)
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer glass-card select-none group w-full aspect-square border border-white/5 transition-colors duration-300"
    >
      {/* 3D glow overlay */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovered ? 0.15 : 0,
          background: `radial-gradient(120px circle at ${glowPos.x}px ${glowPos.y}px, rgba(255, 107, 0, 1), transparent 80%)`,
        }}
      />
      {/* Lift-up effect for content using 3D transform */}
      <div 
        style={{ transform: "translateZ(30px)" }}
        className="flex flex-col items-center gap-4 text-center transition-transform duration-300"
      >
        <div className="p-3 rounded-full bg-white/[0.02] border border-white/5 group-hover:border-portfolio-orange/30 group-hover:bg-portfolio-orange/5 transition-all duration-300">
          {Icon ? <Icon className="w-8 h-8 text-[#B8B8B8] group-hover:text-portfolio-orange transition-colors duration-300" /> : <div className="w-8 h-8 bg-zinc-700 rounded-full" />}
        </div>
        
        <span className="text-sm font-semibold tracking-wider text-[#B8B8B8] group-hover:text-white transition-colors duration-300 uppercase">
          {name}
        </span>
      </div>
    </motion.div>
  )
}
