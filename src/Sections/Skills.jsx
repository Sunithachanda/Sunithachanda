import React from 'react'
import {
  Code,
  FileCode,
  Terminal,
  Cpu,
  Wind,
  Layers,
  Sparkles,
  GitBranch,
  Github,
  Search,
  Users,
  Compass,
  LayoutTemplate,
  Activity,
  PenTool,
  Globe,
 FileText,
  Wrench,
  Bot,
} from "lucide-react";
import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'
export default function Skills() {
    const skillsList = [
    { name: "HTML5", icon: Code },
    { name: "CSS3", icon: FileCode },
    { name: "JavaScript", icon: Terminal },
    { name: "React 19", icon: Cpu },
    { name: "Tailwind CSS", icon: Wind },
    { name: "Figma", icon: Layers },
    { name: "Framer Motion", icon: Sparkles },
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Github },
    { name: "UX Research", icon: Search },
    { name: "User Personas", icon: Users },
    { name: "User Journey", icon: Compass },
    { name: "Wireframes", icon: LayoutTemplate },
    { name: "Prototyping", icon: Activity },
    { name: "Draw.io", icon: FileText },
    { name: "AI Prompt Engineer", icon: Sparkles },
    { name: "AI Tools", icon: Bot },
    { name: "java", icon: PenTool},
    { name: "zoho tols", icon: Wrench},
    { name: "Vibe Coding", icon: Code }
    ]
      return (
    <section id="skills" className="py-24 bg-[#0C0C0C] relative overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] rounded-full radial-glow-orange opacity-15 -z-10 filter blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          number="02" 
          subtitle="EXPERTISE" 
          title="Skills & Toolkit that Make" 
          titleHighlight="Ideas Tangible" 
          align="center"
        />
    
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-16">
  {skillsList.map((skill, index) => (
    <SkillCard
      key={index}
      name={skill.name}
      icon={skill.icon}
      index={index}
    />
  ))}
</div>
              </div>
            </section>
  )
}
