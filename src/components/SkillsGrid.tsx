import { useState } from 'react';
import { SKILLS } from '../data';
import { Database, FileCode, Cloud, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Data Engineering', 'Languages & Databases', 'Cloud & AI', 'Tools & Platforms'];

  const getIcon = (category: string) => {
    switch (category) {
      case 'Data Engineering':
        return <Database className="w-4 h-4 text-white" />;
      case 'Languages & Databases':
        return <FileCode className="w-4 h-4 text-white" />;
      case 'Cloud & AI':
        return <Cloud className="w-4 h-4 text-white" />;
      default:
        return <Wrench className="w-4 h-4 text-white" />;
    }
  };

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === selectedCategory);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8" id="skills-section">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black mb-3.5">
          <Wrench className="w-3.5 h-3.5 text-black" />
          <span className="font-mono text-[10px] text-black font-black uppercase tracking-widest">Capabilities</span>
        </div>
        <h2 className="text-3xl font-display font-black text-[#1A1A1A] uppercase tracking-tight">
          Technical Skills Grid
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm mt-1.5 max-w-xl mx-auto font-medium">
          A deeply curated indexing of my software development, data pipeline engineering, databases, and multi-agent AI qualifications.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`skills-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 font-mono text-xs font-black uppercase tracking-wider border-2 border-black transition-all duration-150 ${
              selectedCategory === cat
                ? 'bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-white text-black hover:bg-gray-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              key={skill.name}
              id={`skill-card-${skill.name.replace(/\s+/g, '-').toLowerCase()}`}
              className="p-5 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2.5 mb-4">
                <div className="p-2 bg-black text-white border-2 border-black shrink-0">
                  {getIcon(skill.category)}
                </div>
                <span className="text-[9px] font-mono font-black tracking-widest text-gray-500 uppercase bg-[#F8F9FA] px-2 py-0.5 border border-black">
                  {skill.category}
                </span>
              </div>

              {/* Skill Name */}
              <h3 className="font-display font-black text-sm text-[#1A1A1A] uppercase tracking-wide mb-3">
                {skill.name}
              </h3>

              {/* Progress */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 font-bold uppercase tracking-wider">
                  <span>Proficiency</span>
                  <span className="font-black text-black">{skill.proficiency}%</span>
                </div>
                <div className="w-full h-3 bg-white border-2 border-black overflow-hidden">
                  <div 
                    className="h-full bg-black transition-all duration-500" 
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
