import React from 'react'
import { 
  Search, UserCheck, MapPin, GitMerge, FolderTree, 
  Layout, Palette, Play, Code 
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ProcessNode from '../components/ProcessNode'
export default function UXProcess() {
  const steps = [
    {
      step: "01",
      title: "User Research",
      description: "Interpreting user interviews, competitive analysis, and surveys to identify specific pain points and structure user-centered goals.",
      icon: Search
    },
    {
      step: "02",
      title: "User Persona",
      description: "Developing detailed target personas representing user demographics, psychographics, goals, frustrations, and behaviors.",
      icon: UserCheck
    },
    {
      step: "03",
      title: "User Journey Map",
      description: "Visualizing the user's emotional and operational journey across stages, identifying high-opportunity intervention nodes.",
      icon: MapPin
    },
    {
      step: "04",
      title: "User Flow Layout",
      description: "Mapping step-by-step path logic to simplify system navigation and minimize friction points before designing elements.",
      icon: GitMerge
    },
    {
      step: "05",
      title: "Information Architecture",
      description: "Structuring and hierarchy layout of content blocks to ensure users find the information they need with absolute ease.",
      icon: FolderTree
    },
    {
      step: "06",
      title: "Low-Fidelity Wireframes",
      description: "Sketching quick wireframe blocks to establish visual hierarchy, element relationships, and key call-to-actions.",
      icon: Layout
    },
    {
      step: "07",
      title: "High-Fidelity UI Design",
      description: "Styling layout assets, choosing curated palettes, defining sleek type styles, and polishing overall visual design.",
      icon: Palette
    },
    {
      step: "08",
      title: "Interactive Prototype",
      description: "Assembling clickable high-fidelity prototypes in Figma to execute realistic user testing and validation sessions.",
      icon: Play
    },
    {
      step: "09",
      title: "Developer Handoff",
      description: "Documenting CSS token specifications, responsive rules, exporting assets, and coordinating alignment for frontend builds.",
      icon: Code
    }
  ]
  return (
    <section id="process" className="py-24 bg-[#0C0C0C] relative overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute bottom-[20%] right-[-15%] w-[40vw] h-[40vw] rounded-full radial-glow-orange opacity-10 -z-10 filter blur-[120px]" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionHeading 
          number="05" 
          subtitle="METHODOLOGY" 
          title="My Structured UX Design" 
          titleHighlight="Workflow" 
          align="left"
        />
        {/* Nodes Timeline Wrapper */}
        <div className="mt-16 flex flex-col gap-12 pl-4 md:pl-0">
          {steps.map((node, index) => (
            <ProcessNode 
              key={index}
              step={node.step}
              title={node.title}
              description={node.description}
              icon={node.icon}
              isLast={index === steps.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
