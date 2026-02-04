

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[600px] rounded-full border border-white/10 bg-black/50 px-6 py-3 backdrop-blur-md">
      <div className="flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex items-center gap-2 text-white font-semibold text-lg cursor-pointer">
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
          <span>React Bits</span>
        </div>

        {/* Right Side: Links */}
        <div className="flex gap-6 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors duration-200">Home</a>
          <a href="#" className="hover:text-white transition-colors duration-200">About Me</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Projects</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Contact Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
