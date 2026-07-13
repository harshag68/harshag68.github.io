import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, Cpu, Award, MapPin, GraduationCap, ArrowRight, Download, Server, Sparkles, FileText, Linkedin, Github } from 'lucide-react';
import Header from './components/Header';
import PipelineVisualizer from './components/PipelineVisualizer';
import InteractiveConsole from './components/InteractiveConsole';
import SkillsGrid from './components/SkillsGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsGrid from './components/ProjectsGrid';
import ContactCard from './components/ContactCard';
import { PERSONAL_INFO, CERTIFICATIONS, EDUCATION } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const renderContent = () => {
    switch (activeSection) {
      case 'pipeline':
        return <PipelineVisualizer key="pipeline" />;
      case 'skills':
        return <SkillsGrid key="skills" />;
      case 'experience':
        return <ExperienceTimeline key="experience" />;
      case 'projects':
        return <ProjectsGrid key="projects" />;
      case 'contact':
        return <ContactCard key="contact" />;
      default:
        return renderOverview();
    }
  };

  const renderOverview = () => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="space-y-12"
      key="overview"
    >
      {/* Hero Banner Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="hero-grid">
        {/* Left column: Name, Summary */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 border-2 border-black rounded-none">
            <Sparkles className="w-3.5 h-3.5 text-black animate-spin" style={{ animationDuration: '4s' }} />
            <span className="font-mono text-[10px] text-black font-black tracking-widest uppercase">
              01 / Available for Projects
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-[#1A1A1A] tracking-tight uppercase leading-none">
              Hey, I'm <span className="underline decoration-[6px] decoration-black underline-offset-4">Shriharsha</span>
            </h1>
            <p className="font-mono text-xs sm:text-sm text-gray-500 font-bold tracking-widest uppercase flex items-center gap-2">
              <Database className="w-4 h-4 text-black" />
              Enterprise Data Engineer • AI Integration Specialist
            </p>
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans font-medium max-w-xl">
            {PERSONAL_INFO.summary}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => setActiveSection('pipeline')}
              className="flex items-center gap-2 px-5 py-3 bg-black hover:bg-gray-950 text-white font-mono text-xs font-black uppercase tracking-wider transition-all duration-200 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]"
              id="hero-pipeline-btn"
            >
              <Cpu className="w-3.5 h-3.5" />
              Try ETL Ingestion Demo
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                alert("Downloading Shriharsha Gandani's standard Resume PDF... (Visual mock demo complete)");
              }}
              className="flex items-center gap-2 px-5 py-3 bg-white hover:bg-gray-50 text-[#1A1A1A] font-mono text-xs font-black uppercase tracking-wider transition-all duration-200 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]"
              id="hero-resume-btn"
            >
              <FileText className="w-3.5 h-3.5 text-black" />
              Get Resume PDF
              <Download className="w-3.5 h-3.5 text-black" />
            </button>
          </div>
        </div>

        {/* Right column: Interactive Quick Statistics Cards */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="p-5 bg-[#F8F9FA] border-2 border-black hover:bg-white transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest">Experience</p>
            <h4 className="font-display font-black text-2xl text-[#1A1A1A] mt-1.5 uppercase">5 Years</h4>
            <p className="text-gray-500 text-[11px] mt-1 font-medium">Data Engineering & Analytics</p>
          </div>

          <div className="p-5 bg-[#F8F9FA] border-2 border-black hover:bg-white transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest">Scale Ingested</p>
            <h4 className="font-display font-black text-2xl text-[#1A1A1A] mt-1.5 uppercase">10M+ Rows</h4>
            <p className="text-gray-500 text-[11px] mt-1 font-medium">Structured workflows & partitioning</p>
          </div>

          <div className="p-5 bg-[#F8F9FA] border-2 border-black hover:bg-white transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest">AI Integration</p>
            <h4 className="font-display font-black text-2xl text-[#1A1A1A] mt-1.5 uppercase">Agentic</h4>
            <p className="text-gray-500 text-[11px] mt-1 font-medium">GCP Vertex AI, LLMs & workflows</p>
          </div>

          <div className="p-5 bg-[#F8F9FA] border-2 border-black hover:bg-white transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest">Location</p>
            <h4 className="font-display font-black text-2xl text-[#1A1A1A] mt-1.5 uppercase">Austin, TX</h4>
            <p className="text-gray-500 text-[11px] mt-1 font-medium">Open to onsite & remote</p>
          </div>
        </div>
      </div>

      {/* Certifications and Education Dual Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {/* Left: Certifications */}
        <div className="p-6 bg-[#F8F9FA] border-2 border-black">
          <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-4">
            <Award className="w-5 h-5 text-black" />
            <h3 className="font-display font-black text-[#1A1A1A] text-xs uppercase tracking-widest">02 / Key Certifications</h3>
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert) => (
              <div 
                key={cert.name}
                className="flex items-start gap-3 p-3 bg-white border border-gray-200 hover:border-black transition-all duration-200"
              >
                <div className="p-2 bg-gray-100 text-black border border-gray-200 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-[#1A1A1A] leading-tight">{cert.name}</h4>
                  <p className="font-mono text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-wider">
                    {cert.issuer} • <span className="text-[#1A1A1A]">{cert.date}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Education */}
        <div className="p-6 bg-[#F8F9FA] border-2 border-black">
          <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-4">
            <GraduationCap className="w-5 h-5 text-black" />
            <h3 className="font-display font-black text-[#1A1A1A] text-xs uppercase tracking-widest">03 / Education</h3>
          </div>

          <div className="space-y-4">
            {EDUCATION.map((edu) => (
              <div 
                key={edu.degree}
                className="flex items-start gap-3 p-3 bg-white border border-gray-200 hover:border-black transition-all duration-200"
              >
                <div className="p-2 bg-gray-100 text-black border border-gray-200 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-[#1A1A1A] leading-tight">{edu.degree}</h4>
                  <p className="font-mono text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-wider">
                    {edu.school} • <span className="text-[#1A1A1A]">{edu.year}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recruiter Chat Console Embedded */}
      <div className="pt-10 border-t border-gray-200">
        <div className="text-center mb-6">
          <h3 className="font-display font-black text-lg text-[#1A1A1A] uppercase tracking-wider">04 / Interactive Copilot Console</h3>
          <p className="text-[10px] font-mono text-gray-400 mt-1 uppercase font-bold tracking-widest">
            Test my agent capabilities directly below by asking custom or preset questions.
          </p>
        </div>
        <InteractiveConsole />
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] font-sans pb-16 pt-6 flex flex-col">
      {/* Floating Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Core Container */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 mt-8 md:mt-12">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>

      {/* Footer containing the Connect row and copyright */}
      <footer className="w-full max-w-6xl mx-auto px-4 mt-16 pt-8 pb-12 border-t-2 border-black flex flex-col gap-6" id="app-footer">
        {/* Connect Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-black rounded-none animate-pulse" />
            <span className="font-mono text-xs font-black uppercase tracking-wider text-black">
              Connect / Professional Network
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-black text-white hover:bg-gray-950 font-mono text-[10px] font-black uppercase tracking-widest transition-all duration-150 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
              id="footer-linkedin"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a 
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black hover:bg-gray-50 font-mono text-[10px] font-black uppercase tracking-widest transition-all duration-150 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
              id="footer-github"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>
        </div>

        {/* Copyright and system processing metadata */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-gray-500 uppercase font-bold tracking-widest">
          <p>© 2026 Shriharsha Gandani. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 text-black font-extrabold">
            <Server className="w-3.5 h-3.5" />
            Processed with React, Vite & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

