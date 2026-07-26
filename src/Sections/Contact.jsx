import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, Globe, Dribbble, Mail, Send, Check } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Magnet from '../components/Magnet'
import FadeIn from '../components/FadeIn'
export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }
  const socialLinks = [
    { icon: Linkedin, url: "https://www.linkedin.com/in/sunitha-chanda-4154a02a0/", label: "LinkedIn" },
    { icon: Github, url: "https://github.com/Sunithachanda", label: "GitHub" },
    { icon: Mail, url: "sunithachanda720@gmail.com", label: "Email" }
  ]
  return (
    <section id="contact" className="py-24 bg-[#0C0C0C] relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-[40%] left-[-10%] w-[35vw] h-[35vw] rounded-full radial-glow-purple opacity-10 -z-10 filter blur-[120px]" />
      <div className="absolute bottom-[10%] right-[-10%] w-[35vw] h-[35vw] rounded-full radial-glow-orange opacity-10 -z-10 filter blur-[120px]" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: CTA Title and Socials */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full min-h-[350px]">
            <div>
              <SectionHeading 
                number="06" 
                subtitle="CONNECT" 
                title="Let's Co-create" 
                titleHighlight="Something Unique" 
                align="left"
              />
              <p className="text-[#B8B8B8] leading-relaxed mb-8 max-w-sm font-sans text-sm md:text-base">
                Have a project idea, design consultation request, or just want to chat? Reach out to me, and let's craft exceptional interactive experiences together.
              </p>
            </div>
            {/* Social Icons list with magnetic hover */}
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-[#B8B8B8] font-bold">
                Follow My Visual Journey
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <Magnet key={idx} range={100} strength={30}>
                      <a 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-12 h-12 rounded-full glass-card border border-white/5 flex items-center justify-center text-white hover:text-portfolio-orange hover:border-portfolio-orange/30 transition-all duration-300 shadow-md group"
                      >
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </a>
                    </Magnet>
                  )
                })}
              </div>
            </div>
          </div>
          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <FadeIn delay={0.2} y={30} className="w-full glass-card border border-white/5 rounded-3xl p-6 md:p-10 relative">
              
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-[#B8B8B8]">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Sunitha Chanda"
                      className="w-full bg-[#161618]/50 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-portfolio-orange/50 focus:bg-[#161618] transition-all"
                    />
                  </div>
                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-[#B8B8B8]">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="sunitha@example.com"
                      className="w-full bg-[#161618]/50 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-portfolio-orange/50 focus:bg-[#161618] transition-all"
                    />
                  </div>
                </div>
                {/* Subject field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-[#B8B8B8]">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Collaboration Opportunity"
                    className="w-full bg-[#161618]/50 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-portfolio-orange/50 focus:bg-[#161618] transition-all"
                  />
                </div>
                {/* Message field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[#B8B8B8]">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows="5"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your product vision..."
                    className="w-full bg-[#161618]/50 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-portfolio-orange/50 focus:bg-[#161618] transition-all resize-none"
                  />
                </div>
                {/* Send Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                    isSubmitted 
                      ? "bg-green-600 text-white" 
                      : "bg-portfolio-orange hover:bg-portfolio-orange/95 text-white hover:shadow-[0_0_20px_rgba(255,107,0,0.3)] shadow-lg shadow-portfolio-orange/10"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : isSubmitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      Message Sent Successfully
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
