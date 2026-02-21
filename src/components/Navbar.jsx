import { useState } from "react";

const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-full max-w-150 border border-white/10 bg-gray-800/40 backdrop-blur-md 
        transition-all duration-300 ease-in-out ${isOpen ? "rounded-3xl p-6" : "rounded-3xl px-6 py-3"}`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-semibold text-lg cursor-pointer select-none">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6 text-white"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          <span>Johnas J. Bautista</span>
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          <button onClick={() => scrollToSection(refs.homeRef)} className="hover:text-white transition-colors duration-200">Home</button>
          <button onClick={() => scrollToSection(refs.aboutRef)} className="hover:text-white transition-colors duration-200">About Me</button>
          <button onClick={() => scrollToSection(refs.projectsRef)} className="hover:text-white transition-colors duration-200">Projects</button>
          <button onClick={() => scrollToSection(refs.contactRef)} className="hover:text-white transition-colors duration-200">Contact Me</button>
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
      {/* We use specific logic here to animate/show the menu only when isOpen is true */}
      {isOpen && (
        <div className="mt-4 md:hidden flex flex-col gap-4 text-center text-sm font-medium text-gray-300 animate-in fade-in slide-in-from-top-2 duration-200">
          <a href="#" className="hover:text-white py-2 transition-colors border-b border-white/5">Home</a>
          <a href="#" className="hover:text-white py-2 transition-colors border-b border-white/5">About Me</a>
          <a href="#" className="hover:text-white py-2 transition-colors border-b border-white/5">Projects</a>
          <a href="#" className="hover:text-white py-2 transition-colors">Contact Me</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;