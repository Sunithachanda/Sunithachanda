import React from 'react'
import SectionHeading from '../components/SectionHeading'
import TimelineCard from '../components/TimelineCard'
export default function Experience() {
  const experiences = [
    {
      company: "Zhapix Technologies",
      role: "UI/UX Engineer",
      duration: " Sep 2025 - Present",
      responsibilities: [
        "Designed responsive web and mobile UI, ensuring cross-device consistency and improved user experience.",
        "Created wireframes, high-fidelity mockups, and interactive prototypes based on real client requirements.",
        "Collaborated with developers to translate designs into functional interfaces, reducing design-to-development gaps.",
        "Applied usability feedback and iterative improvements to enhance product accessibility and navigation."
      ],
      technologies: ["HTML5", " CSS", "Canva", "Figma", "Git", "Responsiveness","JavaScript", "Other Tools"]
    },
    {
      company: "Zhapix Technologies",
      role: "UI/UX Designer Intern",
      duration: "Jun 2024 - jun 2025",
      responsibilities: [
        "Produced end-to-end UX deliverables including user flows, personas, wireframes, and prototypes for live projects.",
        "Contributed to company website development using Zoho Sites, Zoho Forms, and Zoho Creator.",
        "Designed user-centric layouts that improved content structure and visual clarity.",
        "Supported real production environments, gaining hands-on experience in deployment workflows."
      ],
      technologies: ["Zoho Sites", "HTML/CSS", "Figma", "Responsiveness"]
    }
   
  ]
  return (
    <section id="experience" className="py-24 bg-[#0C0C0C] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] rounded-full radial-glow-purple opacity-10 -z-10 filter blur-[120px]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-left">
        <SectionHeading 
          number="04" 
          subtitle="TIMELINE" 
          title="Professional Journey &" 
          titleHighlight="Contributions" 
          align="left"
        />
        {/* Timeline Wrap */}
        <div className="mt-12 flex flex-col relative">
          {experiences.map((exp, index) => (
            <TimelineCard 
              key={index}
              company={exp.company}
              role={exp.role}
              duration={exp.duration}
              responsibilities={exp.responsibilities}
              technologies={exp.technologies}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
