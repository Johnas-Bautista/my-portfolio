import { useState } from "react";
import { Shield } from "lucide-react";

const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", ref: refs.homeRef },
    { label: "About", ref: refs.aboutRef },
    { label: "Skills", ref: refs.skillsRef },
    { label: "Projects", ref: refs.projectsRef },
    { label: "Labs", ref: refs.labsRef },
    { label: "Certifications", ref: refs.certificationsRef },
    { label: "Awards", ref: refs.awardsRef },
    { label: "Contact", ref: refs.contactRef }
  ];

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-full max-w-6xl border border-cyan-500/20 bg-slate-900/40 backdrop-blur-md 
        transition-all duration-300 ease-in-out ${isOpen ? "rounded-3xl p-6" : "rounded-3xl px-6 py-3"}`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-lg cursor-pointer select-none">
          <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
            <Shield className="w-5 h-5 text-cyan-400" />
          </div>
          <span className="hidden sm:inline">Johnas</span>
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-1 text-sm font-medium text-gray-300">
          {menuItems.map((item) => (
            <button 
              key={item.label}
              onClick={() => handleNavClick(item.ref)} 
              className="px-3 py-2 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button 
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Close (X) Icon
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Menu (Hamburger) Icon
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mt-6 md:hidden flex flex-col gap-2 text-sm font-medium text-gray-300 animate-in fade-in slide-in-from-top-2 duration-200">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.ref)}
              className="px-4 py-3 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-all duration-200 text-left border-b border-slate-700/30 last:border-b-0"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;