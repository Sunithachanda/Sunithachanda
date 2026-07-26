import React from 'react'
import { motion } from 'framer-motion'
export default function ContactButton({ children, href = "#", onClick, variant = "primary", className = "" }) {
  const baseStyle = "relative inline-flex items-center justify-center px-8 py-3.5 rounded-full overflow-hidden text-sm font-semibold transition-all duration-300 shadow-lg tracking-wider"
  
  const variants = {
    primary: "bg-portfolio-orange text-white hover:bg-portfolio-orange/90 shadow-portfolio-orange/20 border border-transparent",
    secondary: "glass-card text-white hover:border-portfolio-orange/40 hover:bg-white/5 border border-white/10"
  }
  const Component = href ? 'a' : 'button'
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={`${baseStyle} ${variants[variant]} ${className}`}
      >
        {/* Glow effect on hover */}
        {variant === 'primary' && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-portfolio-orange to-portfolio-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        )}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Component>
    </motion.div>
  )
}
