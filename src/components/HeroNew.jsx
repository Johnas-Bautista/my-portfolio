import { forwardRef, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Terminal, Activity, Shield, AlertCircle } from 'lucide-react';

const Hero = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const [logLines, setLogLines] = useState([
    { id: 1, type: 'threat', text: '[NETWORK_TOPOLOGY] DOST-STII infrastructure mapped - 6 VLANs configured', active: false },
    { id: 2, type: 'success', text: '[SIEM_ARCHITECTURE] Centralized logging system - in development', active: false },
    { id: 3, type: 'log', text: '[NETWORK_MONITOR] Home LAN analyzer - passive monitoring enabled', active: false },
    { id: 4, type: 'analysis', text: '[COMPLIANCE_RESEARCH] Philippine cyberlaws & startup framework analyzed', active: false },
    { id: 5, type: 'packet', text: '[DEV_STACK] React • Laravel • Vite • Full-stack security focus', active: false },
  ]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { duration: 0.6, ease: 'power2.out' }
      });

      // Animate left column
      timeline
        .from(
          '.hero-badge',
          { opacity: 0, y: 20, scale: 0.95 },
          0
        )
        .from(
          '.hero-headline',
          { opacity: 0, y: 30, letterSpacing: '0.1em' },
          0.15
        )
        .from(
          '.hero-subheadline',
          { opacity: 0, y: 20 },
          0.3
        )
        .from(
          '.hero-ctas',
          { opacity: 0, y: 20 },
          0.45
        )
        // Animate right column with stagger
        .from(
          '.hero-siem-header',
          { opacity: 0, x: 20 },
          0.3
        )
        .from(
          '.siem-log-line',
          { opacity: 0, x: 10, clipPath: 'inset(0 100% 0 0)' },
          { duration: 0.4, stagger: 0.08, ease: 'power1.out' },
          0.5
        )
        .from(
          '.network-indicator',
          { opacity: 0, scale: 0.5 },
          0.7
        );

      // Animate log lines appearing
      setTimeout(() => {
        logLines.forEach((line, idx) => {
          setTimeout(() => {
            setLogLines(prev => {
              const updated = [...prev];
              updated[idx] = { ...updated[idx], active: true };
              return updated;
            });
          }, idx * 200);
        });
      }, 1000);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen w-full bg-slate-950 py-20 px-4 md:px-8 overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.05) 25%, rgba(0, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.05) 75%, rgba(0, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.05) 25%, rgba(0, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.05) 75%, rgba(0, 255, 255, 0.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Radial accent glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-160px)]">
          {/* Left Column */}
          <div ref={leftColumnRef} className="space-y-8">
            {/* Status Badge */}
            <div className="hero-badge inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full w-fit">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-300 tracking-widest uppercase">
                  System Status: Active
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="hero-headline text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">IT Professional & Developer</span>
              </h1>
              <p className="hero-subheadline text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                I build and understand complex systems—which makes me better equipped to secure and monitor them. Specialized in Cybersecurity, Network Defense, and Security Operations with full-stack development expertise.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="hero-ctas flex flex-col md:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection()}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  View Security Labs
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
              </button>

              <button className="relative inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 font-semibold rounded-lg transition duration-300 group">
                <a
                  href="/src/assets/pdf/RESUME-Bautista,Johnas Jr. J..pdf"
                  download
                  className="flex items-center gap-2 w-full"
                >
                  <Shield className="w-5 h-5" />
                  Download Resume
                </a>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/50">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-cyan-400">5+</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Security Labs</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-emerald-400">3</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Certifications</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-blue-400">100%</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Committed</p>
              </div>
            </div>
          </div>

          {/* Right Column - SIEM/Network Dashboard */}
          <div ref={rightColumnRef} className="hidden md:flex flex-col">
            {/* SIEM Header */}
            <div className="hero-siem-header mb-6 pb-4 border-b border-cyan-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-semibold text-cyan-300">SECURITY OPERATIONS CENTER</span>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-gray-500">LIVE</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">Real-time threat analysis & event correlation</p>
            </div>

            {/* SIEM Dashboard Content */}
            <div className="space-y-3 flex-1">
              {/* Log Feed */}
              <div className="space-y-2 mb-6">
                {logLines.map((line) => (
                  <div
                    key={line.id}
                    className={`siem-log-line transition-all duration-300 ${
                      line.active ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div
                      className={`flex items-start gap-3 px-3 py-2 rounded border-l-2 bg-slate-900/30 backdrop-blur-sm ${
                        line.type === 'threat'
                          ? 'border-red-500/50 text-red-400/80'
                          : line.type === 'success'
                          ? 'border-emerald-500/50 text-emerald-400/80'
                          : line.type === 'analysis'
                          ? 'border-cyan-500/50 text-cyan-400/80'
                          : 'border-blue-500/30 text-blue-400/60'
                      }`}
                    >
                      <span className="text-xs font-mono flex-shrink-0 text-gray-500">
                        [{line.id.toString().padStart(2, '0')}]
                      </span>
                      <span className="text-xs font-mono">{line.text}</span>
                      {line.type === 'threat' && (
                        <AlertCircle className="w-3 h-3 flex-shrink-0 ml-auto animate-pulse" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Network Indicators */}
              <div className="network-indicator grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-slate-800/50">
                <div className="p-3 bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs text-gray-400">Connections</span>
                  </div>
                  <p className="text-lg font-bold text-emerald-400">847</p>
                </div>
                <div className="p-3 bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-xs text-gray-400">Endpoints</span>
                  </div>
                  <p className="text-lg font-bold text-cyan-400">64</p>
                </div>
              </div>

              {/* Network Topology Visualization */}
              <svg
                className="w-full h-32 mt-6"
                viewBox="0 0 300 120"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  <linearGradient
                    id="networkGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="rgba(0, 255, 255, 0.4)" />
                    <stop offset="100%" stopColor="rgba(16, 185, 129, 0.4)" />
                  </linearGradient>
                </defs>

                {/* Network lines */}
                <line
                  x1="40"
                  y1="20"
                  x2="150"
                  y2="60"
                  stroke="url(#networkGradient)"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
                <line
                  x1="40"
                  y1="20"
                  x2="260"
                  y2="100"
                  stroke="url(#networkGradient)"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
                <line
                  x1="150"
                  y1="60"
                  x2="260"
                  y2="100"
                  stroke="url(#networkGradient)"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />

                {/* Network nodes */}
                <circle
                  cx="40"
                  cy="20"
                  r="6"
                  fill="rgba(0, 255, 255, 0.8)"
                  stroke="rgba(0, 255, 255, 0.5)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="150"
                  cy="60"
                  r="6"
                  fill="rgba(16, 185, 129, 0.8)"
                  stroke="rgba(16, 185, 129, 0.5)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="260"
                  cy="100"
                  r="6"
                  fill="rgba(0, 255, 255, 0.8)"
                  stroke="rgba(0, 255, 255, 0.5)"
                  strokeWidth="1.5"
                />

                {/* Labels */}
                <text
                  x="40"
                  y="38"
                  fontSize="11"
                  fill="rgba(0, 255, 255, 0.7)"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  SOC
                </text>
                <text
                  x="150"
                  y="78"
                  fontSize="11"
                  fill="rgba(16, 185, 129, 0.7)"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  Security
                </text>
                <text
                  x="260"
                  y="118"
                  fontSize="11"
                  fill="rgba(0, 255, 255, 0.7)"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  Endpoints
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500 text-xs font-medium">SCROLL TO EXPLORE</p>
          <svg
            className="w-5 h-5 text-cyan-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
});

export default Hero;
