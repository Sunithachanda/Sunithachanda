import React from 'react'
import FadeIn from './FadeIn'
export default function SectionHeading({ number, subtitle, title, titleHighlight, align = "left", className = "" }) {
  const isCenter = align === "center"
  return (
    <FadeIn className={`mb-12 md:mb-16 ${isCenter ? "text-center" : "text-left"} ${className}`}>
      <div className={`flex items-center gap-3 mb-3 text-sm font-semibold tracking-widest text-portfolio-orange ${isCenter ? "justify-center" : "justify-start"}`}>
        {number && <span className="font-serif italic text-lg">{number}</span>}
        {number && <span className="w-8 h-[1px] bg-portfolio-orange/30"></span>}
        <span className="uppercase text-xs tracking-[0.2em]">{subtitle}</span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif tracking-wide text-white">
        {title} {titleHighlight && <span className="font-serif italic text-portfolio-orange">{titleHighlight}</span>}
      </h2>
    </FadeIn>
  )
}
