import React from 'react'
import { motion } from 'framer-motion'
export default function FloatingCard({ children, duration = 5, yOffset = 8, delay = 0, className = "" }) {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
        rotate: [-1, 1, -1]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
