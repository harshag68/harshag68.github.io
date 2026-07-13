import { PROJECTS } from '../data';
import { FolderGit2, Github, ExternalLink, Cpu, Check, Layers, Database, Sparkles } from 'lucide-react';

export default function ProjectsGrid() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8" id="projects-section">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black mb-3.5">
          <FolderGit2 className="w-3.5 h-3.5 text-black" />
          <span className="font-mono text-[10px] text-black font-black uppercase tracking-widest">Portfolio</span>
        </div>
        <h2 className="text-3xl font-display font-black text-[#1A1A1A] uppercase tracking-tight">
          Featured Engineering Builds
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm mt-1.5 max-w-xl mx-auto font-medium">
          Interactive and cloud-native applications representing production-level data extraction, agent systems, and state synchronizations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div 
            key={project.title}
            id={`project-card-${index}`}
            className="group flex flex-col h-full bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 relative"
          >
            <div className="p-6 flex-1 flex flex-col">
              {/* Card Title & Badges */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display font-black text-lg text-[#1A1A1A] uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mt-0.5 font-bold">
                    {project.subtitle}
                  </p>
                </div>
                <div className="p-2.5 bg-black text-white border-2 border-black shrink-0">
                  {project.title === "Atomic OS" && <Cpu className="w-4 h-4" />}
                  {project.title === "Manuel El Manual" && <Sparkles className="w-4 h-4" />}
                  {project.title === "Spotify ETL Pipeline" && <Database className="w-4 h-4" />}
                  {project.title === "TieBreaker" && <Layers className="w-4 h-4" />}
                </div>
              </div>

              {/* Technologies list */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span 
                    key={t}
                    className="px-2 py-0.5 border border-black bg-[#F8F9FA] text-black text-[9px] font-mono font-bold uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bullets description */}
              <ul className="space-y-3 flex-1 mb-6">
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs text-gray-700 leading-relaxed font-medium">
                    <span className="p-0.5 bg-black text-white border border-black mt-0.5 shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t-2 border-black">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 bg-black hover:bg-gray-950 text-white font-mono text-xs font-black uppercase tracking-wider transition-all duration-200 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                    id={`project-git-${index}`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    Source Code
                  </a>
                )}
                <button
                  onClick={() => alert(`This codebase represents an advanced Data/AI project by Shriharsha. Contact him directly to see a detailed architecture overview.`)}
                  className="p-2 bg-white hover:bg-gray-50 text-black border-2 border-black transition-all duration-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                  title="View Architecture"
                  id={`project-architect-${index}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
