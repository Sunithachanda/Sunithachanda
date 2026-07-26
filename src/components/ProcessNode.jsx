import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
export default function ProcessNode({ step, title, description, icon: Icon, isLast = false, index = 0 }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative flex flex-col items-center md:items-start w-full group">
      {/* Connector lines - animated */}
      {!isLast && (
        <span className="absolute left-1/2 md:left-8 top-16 bottom-0 w-[2px] bg-gradient-to-b from-portfolio-orange to-white/5 -translate-x-[1px] -z-10 h-[calc(100%+32px)]" />
      )}
      <div className="flex flex-col md:flex-row gap-6 w-full items-center md:items-start text-center md:text-left relative">
        {/* Node indicator with glow */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 relative ${
            isOpen 
              ? "bg-portfolio-orange/10 border-portfolio-orange text-portfolio-orange shadow-[0_0_20px_rgba(255,107,0,0.2)]" 
              : "bg-white/[0.02] border-white/10 text-[#B8B8B8] hover:border-portfolio-orange/40 hover:text-white"
          }`}
        >
          {Icon ? <Icon className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
          
          {/* Step Number Badge */}
          <span className="absolute -top-2 -right-2 text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#1C1C1C] border border-white/10 text-[#B8B8B8]">
            {step}
          </span>
        </motion.button>
        {/* Text Area */}
        <div className="flex-1">
          <div 
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer select-none flex items-center justify-center md:justify-start gap-2 group-hover:text-portfolio-orange transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold text-white font-sans tracking-wide">
              {title}
            </h3>
            <ChevronDown 
              className={`w-4 h-4 text-[#B8B8B8] transition-transform duration-300 ${isOpen ? "rotate-180 text-portfolio-orange" : ""}`} 
            />
          </div>
          <p className="text-sm text-[#B8B8B8] mt-2 max-w-xl font-sans leading-relaxed">
            {description.substring(0, 75)}...
          </p>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden mt-4 bg-white/[0.01] border border-white/5 rounded-xl p-4 max-w-xl"
              >
                <p className="text-sm text-[#B8B8B8] leading-relaxed">
                  {description}
                </p>
                <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-portfolio-orange tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  Key Deliverable Achieved
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
