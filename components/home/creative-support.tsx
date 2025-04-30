"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, BookOpen, PenTool, Award, Zap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/animated-background"
import Link from "next/link"

export default function CreativeSupport() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  useEffect(() => {
    if (isModalOpen) {
      const interval = setInterval(() => {
        setActiveSection((prev) => (prev >= 3 ? 0 : prev + 1))
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isModalOpen])

  const modalSections = [
    {
      title: "Visual Storytelling Excellence",
      description: "Pan Eura Automations transforms complex ideas into visually stunning narratives. Our diagrammatic approach ensures your message isn't just seen—it's understood and remembered.",
      image1: "https://www.northeastshop.com/cdn/shop/products/7_8a8135c0-3100-4db9-a8e7-c26293be50e5.jpg?v=1680943307&width=1920",
      image2: "https://cdn.dribbble.com/userupload/43106802/file/original-866775ba1aff2a90974437b30f22ee82.png?resize=1504x1128&vertical=center",
      color: "from-purple-500/20 to-blue-500/20"
    },
    {
      title: "From Concept to Creation",
      description: "Our design process evolves your raw concepts through a meticulous journey of refinement. We blend artistic vision with practical functionality to create designs that captivate.",
      image1: "https://freight.cargo.site/t/original/i/76baac0c1b91d41147390a985cabe07bb642f37f14b270ae54ce6825a6d3b9d8/process-book-02-copy.png",
      image2: "https://www.salonemilano.it/sites/default/files/styles/libero/public/2021-05/Ritratti-Grafici_01_dallas.jpg.webp?itok=JwFIL-Hm",
      color: "from-amber-500/20 to-red-500/20"
    },
    {
      title: "Interactive & Immersive Experiences",
      description: "We don't just create static designs. Our team crafts interactive experiences with multi-layered content that invites your audience to explore and engage deeply with your material.",
      image1: "https://www.salonemilano.it/sites/default/files/styles/libero/public/images/articles/2021-05/Ritratti-Grafici_H_zaven.jpg.webp?itok=EeRh1pqL",
      image2: "https://freight.cargo.site/t/original/i/587128be50257705bbec00fae313586a7de6e4bd842469e535c3773ab63de0ef/MUR_4.png",
      color: "from-emerald-500/20 to-cyan-500/20"
    },
    {
      title: "Bespoke Creative Solutions",
      description: "Every client receives a completely custom approach. We create tailor-made visual systems that align perfectly with your brand voice, objectives, and audience expectations.",
      image1: "https://cdn.dribbble.com/userupload/43106802/file/original-866775ba1aff2a90974437b30f22ee82.png?resize=1504x1128&vertical=center",
      image2: "https://www.northeastshop.com/cdn/shop/products/7_8a8135c0-3100-4db9-a8e7-c26293be50e5.jpg?v=1680943307&width=1920",
      color: "from-indigo-500/20 to-violet-500/20"
    }
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5 py-16 md:py-24">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.05),transparent_50%)]"></div>

      <div className="container relative z-10 mx-auto px-4">
        <ScrollReveal className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Legacy Creative Support</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Elevate your content with our professional creative services
          </p>
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left side: Service description */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Creative Intelligence Suite
              </div>

              <h3 className="text-2xl font-bold">Diagrammatic Book Design: Turn Knowledge into Visual Masterpieces</h3>

              <p className="text-muted-foreground">
                Tired of dull blocks of text in your books, guides, or educational content? Our Visual Book Design
                Service transforms your raw knowledge into visually stunning diagrams, flowcharts, and graphic
                storytelling layouts that readers actually enjoy.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border-primary/10 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-md rounded-lg border p-4">
                  <div className="flex items-center text-base font-medium mb-1">
                    <BookOpen className="mr-2 h-5 w-5 text-primary" />
                    Intelligent Diagrams
                  </div>
                  <p className="text-sm text-muted-foreground">Flowcharts, Mind Maps, Infographics</p>
                </div>

                <div className="border-primary/10 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-md rounded-lg border p-4">
                  <div className="flex items-center text-base font-medium mb-1">
                    <PenTool className="mr-2 h-5 w-5 text-primary" />
                    Thematic Visual Layouts
                  </div>
                  <p className="text-sm text-muted-foreground">For Print + Digital Publishing</p>
                </div>

                <div className="border-primary/10 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-md rounded-lg border p-4">
                  <div className="flex items-center text-base font-medium mb-1">
                    <Zap className="mr-2 h-5 w-5 text-primary" />
                    Interactive eBook Visuals
                  </div>
                  <p className="text-sm text-muted-foreground">EPUB/PDF with clickable layers</p>
                </div>

                <div className="border-primary/10 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-md rounded-lg border p-4">
                  <div className="flex items-center text-base font-medium mb-1">
                    <Award className="mr-2 h-5 w-5 text-primary" />
                    Cover & Chapter Illustrations
                  </div>
                  <p className="text-sm text-muted-foreground">Fully Branded & Customized</p>
                </div>
              </div>

              <div className="bg-background/50 p-5 rounded-xl border border-primary/10 shadow-sm">
                <h4 className="mb-3 font-semibold text-lg flex items-center">
                  <span className="inline-block w-1 h-6 bg-primary mr-2 rounded"></span>
                  Ideal for:
                </h4>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                  <li className="flex items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mr-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    </span>
                    <span className="font-medium">Authors</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mr-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    </span>
                    <span className="font-medium">Coaches & Educators</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mr-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    </span>
                    <span className="font-medium">Startups publishing content</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mr-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    </span>
                    <span className="font-medium">Legal/Patent Documentation Firms</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mr-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    </span>
                    <span className="font-medium">Technical Book Writers</span>
                  </li>
                </ul>
              </div>

              <div className="relative p-6 border-l-4 border-primary bg-gradient-to-r from-primary/10 to-transparent rounded-r-lg shadow-sm">
                <p className="font-medium text-primary text-lg">
                  Add this to your content production stack and make your book not just readable — but unforgettable.
                </p>
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 -z-10 rounded-bl-3xl"></div>
              </div>

              <Button 
                onClick={() => setIsModalOpen(true)}
                size="lg" 
                className="mt-4 relative overflow-hidden group transition-all duration-300 shadow-lg hover:shadow-primary/20 bg-gradient-to-r from-primary to-primary/90 rounded-lg"
              >
                <span className="flex items-center gap-2 font-semibold">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute -z-10 inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </span>
              </Button>
            </div>
          </ScrollReveal>

          {/* Right side: Creative collage */}
          <ScrollReveal direction="right">
            {/* Your existing right side content - unchanged */}
            <div className="relative h-[600px] perspective-container">
              {/* Main background gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-900/30 via-primary/20 to-blue-900/30 blur-sm"></div>

              {/* ... existing content ... */}
              <motion.div
                className="absolute left-[45%] top-[25%] text-primary opacity-30"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <PenTool size={40} />
              </motion.div>

              {/* ... more existing content ... */}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-5xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors text-gray-700 dark:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Modal Header */}
              <div className="relative px-8 pt-8 pb-4 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-1 bg-primary rounded-full"></div>
                  <h2 className="text-2xl font-bold">Pan Eura Automations</h2>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Leading Innovators in Visual Communication & Design</p>
              </div>
              
              {/* Modal Body */}
              <div className="p-8">
                {/* Main Content Section */}
                <div className="grid grid-cols-12 gap-8">
                  {/* Left Sidebar - Navigation */}
                  <div className="col-span-12 md:col-span-3">
                    <div className="space-y-3">
                      {modalSections.map((section, index) => (
                        <button 
                          key={index}
                          onClick={() => setActiveSection(index)}
                          className={`w-full text-left p-3 rounded-lg transition-all ${
                            activeSection === index 
                              ? "bg-primary/10 border-l-4 border-primary" 
                              : "hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        >
                          <p className={`font-medium ${activeSection === index ? "text-primary" : "text-gray-700 dark:text-gray-300"}`}>
                            {section.title.split(" ")[0]}
                          </p>
                        </button>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" /> Our Expertise
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary/70" />
                          Book & Publication Design
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary/70" />
                          Interactive EPUB/PDF
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary/70" />
                          Visual Information Systems
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary/70" />
                          Exhibition & Print Collateral
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Right Content Area - Feature Content */}
                  <div className="col-span-12 md:col-span-9">
                    <div className="relative overflow-hidden">
                      {/* Active Section Content */}
                      <div className={`bg-gradient-to-br ${modalSections[activeSection].color} p-6 rounded-2xl`}>
                        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                          {activeSection === 0 && <BookOpen className="w-5 h-5 text-purple-700 dark:text-purple-400" />}
                          {activeSection === 1 && <PenTool className="w-5 h-5 text-amber-700 dark:text-amber-400" />}
                          {activeSection === 2 && <Zap className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />}
                          {activeSection === 3 && <Award className="w-5 h-5 text-indigo-700 dark:text-indigo-400" />}
                          {modalSections[activeSection].title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">{modalSections[activeSection].description}</p>
                        
                        {/* Image Collage */}
                        <div className="grid grid-cols-12 gap-4 mt-4">
                          {/* Main Feature Image */}
                          <div className="col-span-12 md:col-span-8 rounded-lg overflow-hidden shadow-lg relative group">
                            <div className="relative w-full h-64">
                              <img 
                                src={modalSections[activeSection].image1} 
                                alt="Design example" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                              <div className="p-4 text-white">
                                <p className="font-medium">Featured Project</p>
                                <p className="text-sm opacity-80">Interactive publication design</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Secondary Images */}
                          <div className="col-span-12 md:col-span-4 space-y-4">
                            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                              <div className="relative w-full h-28">
                                <img 
                                  src={modalSections[activeSection].image2} 
                                  alt="Design example" 
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            </div>
                            
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm">
                              <p className="text-sm font-medium text-primary">Client Success</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                "Pan Eura transformed our complex technical content into visually stunning, 
                                accessible materials that increased reader engagement by 78%."
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Progress Dots */}
                      <div className="flex justify-center mt-6 space-x-2">
                        {modalSections.map((_, index) => (
                          <button 
                            key={index} 
                            onClick={() => setActiveSection(index)}
                            className={`h-2 rounded-full transition-all ${
                              activeSection === index ? "w-6 bg-primary" : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                            }`}
                          ></button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Bottom Row - Design Process Overview */}
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800/30">
                        <p className="font-medium text-purple-800 dark:text-purple-300 mb-1">01. Discover</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Understanding your unique vision and requirements</p>
                      </div>
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30">
                        <p className="font-medium text-blue-800 dark:text-blue-300 mb-1">02. Design</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Creating visual systems that communicate your message</p>
                      </div>
                      <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800/30">
                        <p className="font-medium text-amber-800 dark:text-amber-300 mb-1">03. Develop</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Building interactive and engaging content experiences</p>
                      </div>
                      <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
                        <p className="font-medium text-emerald-800 dark:text-emerald-300 mb-1">04. Deliver</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Finalizing and implementing your visual masterpiece</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Modal Footer */}
              <div className="px-8 py-5 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  &copy; 2025 Pan Eura Automations • Creative Intelligence Suite
                </p>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
