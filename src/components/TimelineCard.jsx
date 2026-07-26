import React from 'react'
import { Calendar, Briefcase, Award } from 'lucide-react'
import FadeIn from './FadeIn'
export default function TimelineCard({ company, role, duration, responsibilities = [], technologies = [], index = 0 }) {
  return (
    <FadeIn delay={index * 0.1} className="relative pl-8 md:pl-12 pb-12 group last:pb-0">
      {/* Timeline Indicator Line & Dot */}
      <span className="absolute left-[3px] top-0 h-full w-[2px] bg-gradient-to-b from-portfolio-orange/50 to-transparent group-last:h-10" />
      
      <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-portfolio-orange border-4 border-[#0C0C0C] ring-4 ring-portfolio-orange/10 group-hover:ring-portfolio-orange/30 group-hover:scale-125 transition-all duration-300 -translate-x-[3px]" />
      <div className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden">
        {/* Subtle orange accent glow inside card */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-portfolio-orange/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-portfolio-orange transition-colors duration-300 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-portfolio-orange/80" />
              {role}
            </h3>
            <div className="text-sm font-semibold tracking-wider uppercase text-portfolio-orange mt-1">
              {company}
            </div>
          </div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.03] border border-white/10 text-[#B8B8B8] w-fit">
            <Calendar className="w-3.5 h-3.5" />
            {duration}
          </div>
        </div>
        {/* Responsibilities */}
        <ul className="space-y-3 mb-6">
          {responsibilities.map((resp, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-[#B8B8B8] leading-relaxed">
              <span className="text-portfolio-orange font-bold mt-0.5">•</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
        {/* Technologies list */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {technologies.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/[0.02] border border-white/5 text-[#B8B8B8] hover:border-portfolio-orange/20 hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </FadeIn>
  )
}
