import { EXPERIENCES } from '../data';
import { Briefcase, Calendar, MapPin, Check } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8" id="experience-section">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black mb-3.5">
          <Briefcase className="w-3.5 h-3.5 text-black" />
          <span className="font-mono text-[10px] text-black font-black uppercase tracking-widest">History</span>
        </div>
        <h2 className="text-3xl font-display font-black text-[#1A1A1A] uppercase tracking-tight">
          Professional Timeline
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm mt-1.5 max-w-xl mx-auto font-medium">
          Over 5 years of solid database optimization, pipeline orchestration, and multi-agent AI framework builds.
        </p>
      </div>

      <div className="relative border-l-2 border-black ml-4 md:ml-12 pl-6 md:pl-10 space-y-12">
        {EXPERIENCES.map((exp, index) => (
          <div 
            key={exp.company + exp.role}
            id={`experience-timeline-node-${index}`}
            className="relative group"
          >
            {/* Timeline Marker Icon */}
            <span className="absolute -left-[39px] md:-left-[55px] top-1.5 flex h-8 w-8 items-center justify-center bg-white border-2 border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
              <Briefcase className="w-3.5 h-3.5" />
            </span>

            {/* Content Card */}
            <div className="p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 relative">
              
              {/* Card Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 border-b-2 border-black pb-4">
                <div>
                  <h3 className="font-display font-black text-xl text-[#1A1A1A] uppercase tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-gray-500 font-bold text-xs mt-1">
                    <span className="text-black font-extrabold">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-gray-500">
                      <MapPin className="w-3.5 h-3.5 text-black" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-mono font-black bg-[#F8F9FA] px-3 py-1.5 border-2 border-black shrink-0 text-black max-w-max uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.duration}
                </div>
              </div>

              {/* Bullet Achievements */}
              <ul className="space-y-3 mb-5">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs text-gray-700 leading-relaxed font-medium">
                    <span className="p-0.5 bg-black text-white border border-black mt-0.5 shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Used */}
              {exp.techStack && (
                <div className="flex flex-wrap gap-1.5 items-center pt-3 border-t-2 border-black">
                  <span className="text-[10px] font-mono font-black text-black mr-1.5 uppercase tracking-widest">Technologies:</span>
                  {exp.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 bg-[#F8F9FA] text-black rounded-none text-[10px] font-mono font-bold border-2 border-black transition-all duration-200 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
