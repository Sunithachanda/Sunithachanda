import React from 'react'
import { motion } from 'framer-motion'
export default function GlassCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-card glass-card-hover rounded-2xl p-6 md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  )
}
