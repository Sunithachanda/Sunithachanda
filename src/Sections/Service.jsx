import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
export default function Service() {
  const services = [
    {
      num: "01",
      title: "UI/UX Design",
      desc: "Creating user personas, conducting usability tests, drafting user flows, and detailing high-fidelity interfaces that align business objectives with user desires."
    },
    {
      num: "02",
      title: "Frontend Development",
      desc: "Building blazing-fast, responsive, and maintainable web applications using React, Tailwind CSS, and optimized interactive component libraries."
    },
    {
      num: "03",
      title: "Responsive Web Design",
      desc: "Architecting layouts that scale gracefully across mobile, tablet, desktop, and ultra-wide displays using fluid typography and CSS grid systems."
    },
    {
      num: "04",
      title: "Wireframing & Prototyping",
      desc: "Developing low-fidelity mockups and interactive clickable prototypes in Figma to gather early-stage feedback and validate design assumptions."
    },
    {
      num: "05",
      title: "Design Systems",
      desc: "Establishing structured typography hierarchies, custom component kits, styles, and styling guides that ensure brand cohesion across digital assets."
    }
  ]
  return (
    <section 
      id="services" 
      className="bg-white text-portfolio-bg rounded-t-[3rem] md:rounded-t-[5rem] pt-24 pb-20 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header inside White Section */}
        <FadeIn className="mb-16 text-left">
          <div className="flex items-center gap-3 mb-3 text-sm font-semibold tracking-widest text-portfolio-orange">
            <span className="font-serif italic text-lg">03</span>
            <span className="w-8 h-[1px] bg-portfolio-orange/30"></span>
            <span className="uppercase text-xs tracking-[0.2em]">SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif tracking-wide text-portfolio-bg">
            Creative Capabilities to <br />
            Elevate Your <span className="font-serif italic text-portfolio-orange">Digital Presence</span>
          </h2>
        </FadeIn>
        {/* Services Rows List */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-b border-black/10 py-8 md:py-12 flex flex-col md:grid md:grid-cols-12 gap-6 items-start hover:bg-zinc-50 px-4 md:px-8 rounded-xl transition-all duration-300 relative cursor-pointer"
            >
              {/* Service Number */}
              <div className="md:col-span-2 text-4xl md:text-5xl font-serif italic text-portfolio-orange/60 group-hover:text-portfolio-orange transition-colors duration-300 font-normal">
                {service.num}
              </div>
              {/* Title & Description */}
              <div className="md:col-span-8 flex flex-col text-left">
                <h3 className="text-2xl md:text-3xl font-normal font-sans text-portfolio-bg group-hover:translate-x-2 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-600 mt-3 font-sans leading-relaxed max-w-2xl">
                  {service.desc}
                </p>
              </div>
              {/* Action Circle */}
              <div className="md:col-span-2 flex md:justify-end items-center h-full w-full">
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-portfolio-bg group-hover:bg-portfolio-orange group-hover:border-portfolio-orange group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
