import React, { useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
export default function Magnet({ children, range = 120, strength = 35, className = "" }) {
  const ref = useRef(null)
  const springConfig = { damping: 15, stiffness: 120, mass: 0.2 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)
  const handleMouseMove = (e) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    const distanceX = clientX - centerX
    const distanceY = clientY - centerY
    
    const distance = Math.hypot(distanceX, distanceY)
    
    if (distance < range) {
      // Calculate pull factor (stronger near center)
      const factor = (range - distance) / range
      const targetX = distanceX * (strength / 100) * factor
      const targetY = distanceY * (strength / 100) * factor
      x.set(targetX)
      y.set(targetY)
    } else {
      x.set(0)
      y.set(0)
    }
  }
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}
