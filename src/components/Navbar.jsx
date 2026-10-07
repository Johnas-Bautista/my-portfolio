import { useState, useRef, useEffect, useMemo } from "react";
import { Shield, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Motion = motion;

const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navItemsRef = useRef([]);

  const menuItems = useMemo(() => [
    { label: "Home", ref: refs.homeRef },
    { label: "About Me", ref: refs.aboutRef },
    { label: "Projects", ref: refs.projectsRef },
    { label: "Experience", ref: refs.laborumsRef || refs.labsRef },
    { label: "Certifications and Awards", ref: refs.certificationsRef }
  ], [refs.aboutRef, refs.certificationsRef, refs.homeRef, refs.laborumsRef, refs.labsRef, refs.projectsRef]);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Detect active section on scroll using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = menuItems.findIndex((item) => item.ref?.current === entry.target);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    }, observerOptions);

    // Observe all section refs
    menuItems.forEach((item) => {
      if (item.ref?.current) {
        observer.observe(item.ref.current);
      }
    });

    return () => {
      menuItems.forEach((item) => {
        if (item.ref?.current) {
          observer.unobserve(item.ref.current);
        }
      });
    };
  }, [menuItems]);

  const handleNavClick = (ref, index) => {
    scrollToSection(ref);
    setActiveIndex(index);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-full max-w-7xl">
      {/* Main navbar container */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative border border-cyan-500/30 bg-slate-950/80 backdrop-blur-lg rounded-2xl transition-all duration-300 ${
          isOpen ? "p-6" : "px-6 py-4"
        }`}
      >
        {/* Animated gradient border effect */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-cyan-500/20 via-emerald-500/10 to-cyan-500/20"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          />
        </div>

        <div className="relative z-10 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-white font-bold text-lg cursor-pointer select-none"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 10px rgba(0, 255, 255, 0.3)",
                  "0 0 20px rgba(0, 255, 255, 0.6)",
                  "0 0 10px rgba(0, 255, 255, 0.3)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="p-2 bg-linear-to-br from-cyan-500/20 to-emerald-500/10 rounded-lg border border-cyan-500/50"
            >
              <Shield className="w-5 h-5 text-cyan-400" />
            </motion.div>
            <span className="hidden sm:inline bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Johnas Bautista
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1 items-center relative">
            {menuItems.map((item, index) => (
              <div key={item.label} ref={(el) => (navItemsRef.current[index] = el)}>
                <motion.button
                  onClick={() => handleNavClick(item.ref, index)}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 relative group ${
                    activeIndex === index
                      ? "text-cyan-300 bg-cyan-500/10"
                      : "text-gray-300 hover:text-cyan-300"
                  }`}
                >
                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-linear-to-r from-cyan-500/10 to-emerald-500/5 -z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  {item.label}

                  {/* Active indicator */}
                  {activeIndex === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-cyan-400 to-emerald-400 rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              </div>
            ))}

            {/* Network Packet Animation */}
            {hoveredIndex !== null && hoveredIndex !== activeIndex && (
              <NetworkPacket fromIndex={activeIndex} toIndex={hoveredIndex} />
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="mt-4 pt-4 border-t border-cyan-500/20 space-y-2">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.ref, index)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeIndex === index
                    ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/30"
                    : "text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/5"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </nav>
  );
};

/* Network Packet Animation Component */
const NetworkPacket = ({ fromIndex, toIndex }) => {
  const packetVariants = {
    initial: { 
      x: 0, 
      opacity: 0,
      scale: 0.5,
    },
    animate: { 
      x: (toIndex - fromIndex) * 120,
      opacity: [0, 1, 1, 0],
      scale: [0.5, 1, 1, 0.5],
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        times: [0, 0.2, 0.8, 1],
      },
    },
  };

  return (
    <motion.div
      className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
      style={{ left: `${fromIndex * 120 + 32}px` }}
      variants={packetVariants}
      initial="initial"
      animate="animate"
    >
      {/* Main packet node */}
      <motion.div
        className="w-3 h-3 rounded-full bg-linear-to-r from-cyan-400 to-emerald-400 shadow-lg"
        animate={{
          boxShadow: [
            "0 0 8px rgba(0, 255, 255, 0.8)",
            "0 0 16px rgba(0, 255, 255, 0.6)",
            "0 0 8px rgba(0, 255, 255, 0.8)",
          ],
        }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />

      {/* Trailing effect */}
      <motion.div
        className="absolute inset-0 w-3 h-3 rounded-full border border-cyan-400/50"
        animate={{ scale: [1, 1.5, 2], opacity: [1, 0.5, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />

      {/* Data stream visualization */}
      <svg
        className="absolute top-1/2 -translate-y-1/2 -left-16 pointer-events-none"
        width="64"
        height="8"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient
            id="packetGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(0, 255, 255, 0)" />
            <stop offset="50%" stopColor="rgba(0, 255, 255, 0.8)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.6)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 4 Q 8 2, 16 4 T 32 4 T 48 4 T 64 4"
          stroke="url(#packetGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          animate={{ strokeDashoffset: [64, 0] }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ strokeDasharray: 64 }}
        />
      </svg>
    </motion.div>
  );
};

export default Navbar;
