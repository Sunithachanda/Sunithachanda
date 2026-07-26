import React from 'react'
import { ArrowUp, Github, Linkedin, Globe, Mail } from 'lucide-react'
import Magnet from '../components/Magnet'
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <footer className="bg-[#0C0C0C] text-[#B8B8B8] py-12 relative overflow-hidden select-none border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] bg-portfolio-orange/[0.01] filter blur-3xl pointer-events-none rounded-t-full" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: Navigation links & Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          {/* Logo Brand */}
          <div className="text-left">
            <span className="font-serif italic text-2xl text-white font-normal">
              Sunitha <span className="text-portfolio-orange">Chanda</span>
            </span>
            <p className="text-xs uppercase tracking-widest text-[#B8B8B8]/70 mt-1 font-semibold">
              UI/UX & Frontend Integration
            </p>
          </div>
          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-6 justify-center text-sm font-semibold tracking-wider uppercase text-white/80">
            <a href="#hero" className="hover:text-portfolio-orange transition-colors">Home</a>
            <a href="#about" className="hover:text-portfolio-orange transition-colors">About</a>
            <a href="#skills" className="hover:text-portfolio-orange transition-colors">Skills</a>
            <a href="#services" className="hover:text-portfolio-orange transition-colors">Services</a>
            <a href="#projects" className="hover:text-portfolio-orange transition-colors">Projects</a>
            <a href="#experience" className="hover:text-portfolio-orange transition-colors">Journey</a>
            <a href="#contact" className="hover:text-portfolio-orange transition-colors">Contact</a>
          </div>
          {/* Back to Top Button */}
          <Magnet range={80} strength={25}>
            <button 
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-12 h-12 rounded-full glass-card border border-white/10 flex items-center justify-center text-white hover:text-portfolio-orange hover:border-portfolio-orange/30 transition-all duration-300 shadow-md group"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </Magnet>
        </div>
        {/* Gradient Divider Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-50 mb-10" />
        {/* Bottom Section: Copyright & Credit */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-xs tracking-wider uppercase text-[#B8B8B8]/60 font-semibold font-sans">
          <span>
            © 2026 Sunitha Chanda. All rights reserved.
          </span>
          <span className="flex items-center gap-1.5 normal-case tracking-normal">
            Designed & Developed with ⚡ by <span className="font-serif italic text-sm text-white font-normal">Sunitha</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
