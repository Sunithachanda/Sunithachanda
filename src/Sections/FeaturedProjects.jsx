import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ArrowRight, Code2 } from 'lucide-react'

const projects = [
  {
    num: '01',
    category: 'IoT & Home Automation',
    title: 'Gesture-Based Smart Home Control',
    date: 'Feb 2025 – May 2025',
    liveUrl: '#',
    gitUrl: '#',
    description:
      'Built a touch-free home automation system designed for accessibility, delivering a low-cost, hygienic alternative to traditional switches with a focus on elderly and physically challenged users.',
    techStack: ['Android', 'IOT', 'IoT Protocols', 'C++'],
    images: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    num: '02',
    category: 'Full-Stack Platform',
    title: 'Food Delivery App',
    date: 'Aug 2024 – Nov 2024',
    liveUrl: '#',
    gitUrl: 'https://github.com/Sunithachanda/SB-Food-Delivery',
    description:
      'Developed a scalable full-stack platform with secure JWT authentication. Implemented robust frontend and backend testing using Jest, React Testing Library, Mocha, and Chai.',
    techStack: ['React', 'Express', 'MongoDB', 'Jest'],
    images: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    num: '03',
    category: 'IoT & Smart City',
    title: 'Smart Transportation System',
    date: 'Aug 2023 – Oct 2023',
    liveUrl: '#',
    gitUrl: 'https://github.com/Sunithachanda/Final-year-project',
    description:
      'Developed an IoT-based smart transportation solution integrating real-time bus tracking, route scheduling, and e-ticketing to improve commuter convenience.',
    techStack: ['Python', 'Firebase', 'Google Maps API', 'IoT'],
    images: [
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    num: '04',
    category: 'Healthcare & React App',
    title: 'MediCare Booking Platform',
    date: '2026',
    liveUrl: 'https://care-appointment.netlify.app/',
    gitUrl: 'https://github.com/Sunithachanda/MediCare-',
    description:
      'A comprehensive healthcare appointment booking platform offering seamless patient-doctor interactions, medical record management, and secure scheduling.',
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Netlify'],
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    ],
  },
]

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const autoPlayInterval = useRef(null)

  useEffect(() => {
    if (!isHovered) {
      autoPlayInterval.current = setInterval(() => {
        setActiveProject((prev) => (prev + 1) % projects.length)
      }, 5000)
    }

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current)
      }
    }
  }, [isHovered])

  return (
<section id="projects" className="relative bg-[#0B0F19] py-24 z-10">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[#3B82F6] font-mono tracking-widest text-sm uppercase mb-4 block">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white font-serif">
              Selected Projects
            </h2>
          </div>
          <p className="text-white/50 max-w-md text-sm md:text-base">
            A showcase of my recent work focusing on premium UI/UX design, complex frontend architecture, and interactive web experiences.
          </p>
        </div>

        <div
          className="flex flex-col lg:flex-row gap-4 h-[800px] lg:h-[600px] w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {projects.map((project, index) => {
            const isActive = activeProject === index

            return (
              <motion.div
                key={project.num}
                layout
                onClick={() => setActiveProject(index)}
                initial={false}
                animate={{
                  flex: isActive ? 4 : 1,
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-[24px] overflow-hidden cursor-pointer group transition-all duration-300 ${
                  isActive
                    ? 'shadow-[0_0_30px_rgba(59,130,246,0.15)] ring-1 ring-[#3B82F6]/30'
                    : 'ring-1 ring-white/10 hover:ring-white/20'
                }`}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    opacity: isActive ? 0.4 : 0.2,
                  }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                  <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent" />
                  <div
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      isActive ? 'bg-[#3B82F6]/10' : 'bg-black/40'
                    }`}
                  />
                </motion.div>

                <div className="absolute inset-0 flex flex-col lg:flex-row p-6 md:p-8">
                 <div
  className={`hidden lg:flex h-full items-end justify-center pb-8 transition-opacity duration-500 absolute bottom-0 left-1/2 -translate-x-1/2 w-full ${
    isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
  }`}
>
  <span className="text-white/40 font-mono text-sm">
    {project.num}
  </span>
</div>

                  <div
                    className={`flex lg:hidden w-full items-center justify-between transition-opacity duration-500 absolute top-1/2 -translate-y-1/2 left-0 px-6 ${
                      isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
                  >
                    <h3 className="text-lg text-white font-medium truncate max-w-[80%]">{project.title}</h3>
                    <span className="text-white/40 font-mono text-sm">{project.num}</span>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="flex flex-col justify-end w-full h-full z-10 relative"
                      >
                        <div className="flex flex-col gap-4 max-w-2xl">
                          <div className="flex items-center gap-3">
                            <span className="px-3 py-1 text-xs font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full">
                              {project.category}
                            </span>
                            <span className="text-xs text-white/50 font-mono">{project.date}</span>
                          </div>
                          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-white/70 text-sm md:text-base leading-relaxed line-clamp-3">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.techStack.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1.5 text-xs text-white/80 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-white/10">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium rounded-full transition-colors"
                            >
                              Live Demo <ExternalLink className="w-4 h-4" />
                            </a>
                            <a
                              href={project.gitUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-full transition-colors backdrop-blur-sm"
                            >
                              GitHub <Github className="w-4 h-4" />
                            </a>
                            <button className="flex items-center gap-2 px-5 py-2.5 text-white/70 hover:text-white text-sm font-medium rounded-full transition-colors lg:ml-auto group/btn">
                              Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
