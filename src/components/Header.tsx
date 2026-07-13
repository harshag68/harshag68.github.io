import { Database, Linkedin, Mail, Phone, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'pipeline', label: 'ETL Pipeline' },
    { id: 'skills', label: 'Technical Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4">
      <div className="bg-white border-2 border-black p-4 flex flex-wrap justify-between items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {/* Logo / Title */}
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-black text-white border border-black">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-display font-black text-[#1A1A1A] tracking-tight text-base sm:text-lg uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-widest">
              {PERSONAL_INFO.role}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none max-w-full sm:max-w-none">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-btn-${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className={`px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-200 shrink-0 ${
                activeSection === item.id
                  ? 'bg-black text-white border border-black'
                  : 'text-gray-500 hover:text-[#1A1A1A] hover:bg-gray-100 border border-transparent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social Badges */}
        <div className="hidden md:flex items-center gap-1.5">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all duration-200"
            title="LinkedIn"
            id="header-linkedin"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all duration-200"
            title="Email"
            id="header-email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="tel:+19407582745"
            className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all duration-200"
            title="Phone"
            id="header-phone"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
