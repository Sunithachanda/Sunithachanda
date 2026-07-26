import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
export default function MarqueeShowcase() {
  const containerRef = useRef(null)
  
  // Track scroll position of the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  // Map scroll progress to horizontal movement (opposite directions)
  const xTop = useTransform(scrollYProgress, [0, 1], [-200, 200])
  const xBottom = useTransform(scrollYProgress, [0, 1], [200, -200])
  const row1 = [
    { name: "Glassmorphism UI Kit", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80", type: "Product Design" },
    { name: "3D Spatial Analytics", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=400&q=80", type: "Web App Development" },
    { name: "React Design System", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80", type: "Frontend Library" },
    { name: "E-Commerce Experience", image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=400&q=80", type: "Mobile App Design" },
  ]
  const row2 = [
    { name: "Crypto Asset Dashboard", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80", type: "Financial Web UX" },
    { name: "Virtual Reality Workspace", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80", type: "VR Application" },
    { name: "Creative Art Portfolio", image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=400&q=80", type: "Interactive Webpage" },
    { name: "Smart Home Assistant", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80", type: "UX/UI Prototyping" }
  ]
  return (
    <section 
      ref={containerRef} 
      className="py-12 bg-[#0C0C0C] border-y border-white/5 overflow-hidden flex flex-col gap-8 relative select-none"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150%] bg-[#FF6B00]/[0.02] filter blur-3xl pointer-events-none rounded-full" />
      {/* Row 1: Moves Right with Scroll */}
      <div className="relative flex whitespace-nowrap overflow-hidden">
        <motion.div 
          style={{ x: xTop, willChange: "transform" }}
          className="flex gap-6 pr-6"
        >
          {/* Render cards twice for infinite repeat look */}
          {[...row1, ...row1, ...row1].map((item, idx) => (
            <div 
              key={idx}
              className="flex-shrink-0 w-[280px] md:w-[320px] rounded-2xl overflow-hidden glass-card border border-white/5 p-4 flex flex-col gap-4 group cursor-pointer hover:border-portfolio-orange/30 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-900">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="block w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold text-portfolio-orange tracking-widest uppercase">
                  {item.type}
                </span>
                <span className="text-sm font-semibold text-white mt-1 group-hover:text-portfolio-orange transition-colors duration-300">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Row 2: Moves Left with Scroll */}
      <div className="relative flex whitespace-nowrap overflow-hidden">
        <motion.div 
          style={{ x: xBottom, willChange: "transform" }}
          className="flex gap-6 pr-6"
        >
          {[...row2, ...row2, ...row2].map((item, idx) => (
            <div 
              key={idx}
              className="flex-shrink-0 w-[280px] md:w-[320px] rounded-2xl overflow-hidden glass-card border border-white/5 p-4 flex flex-col gap-4 group cursor-pointer hover:border-portfolio-orange/30 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-900">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="block w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold text-portfolio-orange tracking-widest uppercase">
                  {item.type}
                </span>
                <span className="text-sm font-semibold text-white mt-1 group-hover:text-portfolio-orange transition-colors duration-300">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}