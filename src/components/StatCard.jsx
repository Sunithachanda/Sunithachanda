import React, { useEffect, useState, useRef } from 'react'
import { useInView, motion } from 'framer-motion'
export default function StatCard({ value, label, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [count, setCount] = useState(0)
  const numValue = parseInt(value.replace(/[^0-9]/g, '')) || 0
  const suffix = value.replace(/[0-9]/g, '')
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let start = 0
        const end = numValue
        const duration = 1.5 // seconds
        const stepTime = 1000 / 60 // 60 FPS
        const totalSteps = duration * 60
        let step = 0
        const counter = setInterval(() => {
          step++
          const progress = step / totalSteps
          // Ease-out expo style progression
          const easeProgress = 1 - Math.pow(2, -10 * progress)
          const currentCount = Math.round(end * (progress === 1 ? 1 : easeProgress))
          setCount(currentCount)
          if (step >= totalSteps) {
            clearInterval(counter)
            setCount(end)
          }
        }, stepTime)
        return () => clearInterval(counter)
      }, delay * 1000)
      return () => clearTimeout(timer)
    }
  }, [isInView, numValue, delay])
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      className="flex flex-col p-4 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-md"
    >
      <span className="text-4xl md:text-5xl font-serif text-portfolio-orange font-bold mb-1">
        {count}
        {suffix}
      </span>
      <span className="text-xs uppercase tracking-widest text-[#B8B8B8] font-sans font-medium">
        {label}
      </span>
    </motion.div>
  )
}
