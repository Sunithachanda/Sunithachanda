import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Github, Linkedin, Sparkles } from 'lucide-react'
// Sections
import Hero from "./Sections/Hero";
import MarqueeShowcase from "./Sections/MarqueeShowcase";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Service from "./Sections/Service";
import FeaturedProjects from "./Sections/FeaturedProjects";
import Experience from "./Sections/Experience";
import UXProcess from "./Sections/UXProcess";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
// Reusable Components
import Magnet from './components/Magnet'
export default function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [cursorHovered, setCursorHovered] = useState(false)
  
  // Custom Cursor Spring Positions
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 25, stiffness: 200, mass: 0.4 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  useEffect(() => {
    // Custom Cursor tracking
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }
    // Global Hover Detection for interactive elements
    const handleMouseOver = (e) => {
      const isInteractive = 
        e.target.tagName === 'A' || 
        e.target.tagName === 'BUTTON' || 
        e.target.closest('a') || 
        e.target.closest('button') ||
        e.target.classList.contains('cursor-pointer')
      setCursorHovered(!!isInteractive)
    }
    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#experience" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" }
  ]
  return (
    <div className="relative bg-[#0C0C0C] min-h-screen w-full text-white overflow-hidden">
      
      {/* 1. Custom Interactive Cursor */}
      <motion.div
        className="fixed left-0 top-0 w-8 h-8 rounded-full border border-portfolio-orange/80 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: cursorHovered ? 1.5 : 1,
          backgroundColor: cursorHovered ? "rgba(255, 107, 0, 0.15)" : "rgba(255, 107, 0, 0)",
          borderColor: cursorHovered ? "#FF8A00" : "#FF6B00"
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
      {/* 2. Global Noise & Vignette */}
      <div className="noise-overlay" />
      {/* 3. Floating Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 py-4 md:py-6 px-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass-card border border-white/5 rounded-full px-6 py-3.5 bg-black/40 backdrop-blur-xl">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <Sparkles className="w-5 h-5 text-portfolio-orange group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-serif italic text-lg text-white font-medium">
              Sunitha <span className="text-portfolio-orange">Chanda</span>
            </span>
          </a>
          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-white/80">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href}
                className="hover:text-portfolio-orange transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-portfolio-orange transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          {/* Socials / Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Magnet range={60} strength={20}>
              <a 
                href="#contact" 
                className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border border-white/10 hover:border-portfolio-orange/40 hover:bg-white/5 transition-all flex items-center gap-2"
              >
                Hire Me
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </Magnet>
          </div>
          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setNavOpen(!navOpen)}
            className="lg:hidden text-white hover:text-portfolio-orange transition-colors"
            aria-label="Toggle menu"
          >
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>
      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-portfolio-bg/95 backdrop-blur-2xl flex flex-col justify-center items-center p-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6 text-center text-xl uppercase font-semibold tracking-wider font-sans mb-10">
              {navLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href}
                  onClick={() => setNavOpen(false)}
                  className="text-white hover:text-portfolio-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <a 
              href="#contact" 
              onClick={() => setNavOpen(false)}
              className="px-8 py-3.5 rounded-full bg-portfolio-orange text-white text-sm font-semibold tracking-wider uppercase shadow-lg shadow-portfolio-orange/20"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      {/* 4. Page Sections Order */}
      <main className="w-full relative">
        <Hero />
        <MarqueeShowcase />
        <About />
        <Skills />
        <Service />
        <FeaturedProjects />
        <Experience />
        <UXProcess />
        <Contact />
      </main>
      {/* 5. Footer */}
      <Footer />
    </div>
  )
}
