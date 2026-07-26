import React from 'react'
import { motion } from 'framer-motion'
export default function FadeIn({ children, delay = 0, duration = 0.6, x = 0, y = 20, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: x, y: y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] // Out-expo easing for premium feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
