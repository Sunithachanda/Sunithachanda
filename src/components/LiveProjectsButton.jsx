import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
export default function LiveProjectButton({ href = "#", text = "Live Project" }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full overflow-hidden group glass-card border border-white/10 hover:border-portfolio-orange/50 transition-all duration-300 text-sm font-medium"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background glow hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-portfolio-orange/10 to-portfolio-amber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <span className="text-white group-hover:text-portfolio-orange transition-colors duration-300">
        {text}
      </span>
      
      <motion.span
        className="text-white group-hover:text-portfolio-orange"
        animate={{
          x: [0, 2, 0],
          y: [0, -2, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ArrowUpRight className="w-4 h-4" />
      </motion.span>
    </motion.a>
  )
}
