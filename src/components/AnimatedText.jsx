import React from 'react'
import { motion } from 'framer-motion'
export default function AnimatedText({ text, className = "", italicWords = [], delay = 0 }) {
  // Split the text into words
  const words = text.split(" ")
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      }
    }
  }
  const childVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }
  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`inline-block flex-wrap leading-relaxed ${className}`}
    >
      {words.map((word, wIdx) => {
        // Clean the word for styling check (remove punctuation)
        const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
        const isItalic = italicWords.some(italicWord => 
          cleanWord.toLowerCase() === italicWord.toLowerCase()
        )
        
        return (
          <span key={wIdx} className="inline-block mr-[0.25em] whitespace-nowrap">
            {word.split("").map((char, cIdx) => (
              <motion.span
                key={cIdx}
                variants={childVariants}
                className={`inline-block ${isItalic ? "font-serif italic text-portfolio-orange font-normal" : ""}`}
              >
                {char}
              </motion.span>
            ))}
          </span>
        )
      })}
    </motion.span>
  )
}
