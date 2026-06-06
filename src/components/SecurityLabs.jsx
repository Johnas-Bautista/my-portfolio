import { forwardRef, useState } from 'react';
import AnimatedContent from './ui/AnimatedContent';
import { Code2, Zap, Lock, Network, ExternalLink, Shield, Terminal } from 'lucide-react';

const SecurityLabs = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState('security');

  const securityProjects = [
    {
      id: 1,
      title: "SOC Analyst Internship - DOST-STII",
      category: "Network Infrastructure",
      icon: Network,
      description: "Designed and mapped comprehensive network infrastructure topology for enterprise security. Configured 6 distinct VLANs, inter-VLAN routing, and Cisco ASA Firewall deployment for segmentation and threat containment.",
      tech: ["Cisco Packet Tracer", "Network Design", "VLANs", "ASA Firewall", "Routing", "Access Control"],
      link: "#"
    },
    {
      id: 2,
      title: "SIEM Implementation - Centralized Logging",
      category: "Security Operations",
      icon: Terminal,
      description: "Currently architecting a centralized security information and event management system for real-time threat detection, log aggregation, and security event correlation across distributed endpoints.",
      tech: ["Event Correlation", "Log Aggregation", "Real-time Analytics", "Alert Management", "Threat Detection"],
      link: "#"
    },
    {
      id: 3,
      title: "Home Network LAN Monitor",
      category: "Network Monitoring",
      icon: Shield,
      description: "Developed a passive network monitoring tool to track local network traffic patterns and node activity. Demonstrates understanding of network protocols and behavioral analysis for anomaly detection.",
      tech: ["Network Monitoring", "Traffic Analysis", "Protocol Analysis", "Python", "Tcpdump"],
      link: "#"
    },
    {
      id: 4,
      title: "Compliance & Cybersecurity Research",
      category: "Policy & Compliance",
      icon: Lock,
      description: "Conducted comprehensive research on Philippine cyberlaws, data protection regulations, and startup legal compliance frameworks. Documents best practices for security governance and regulatory adherence.",
      tech: ["Philippine Cybercrime Law", "Data Privacy", "Compliance Frameworks", "Risk Assessment", "Policy Design"],
      link: "#"
    }
  ];

  const softwareProjects = [
    {
      id: 5,
      title: "Laravel Full-Stack Web Applications",
      category: "Backend Development",
      icon: Code2,
      description: "Built production-ready full-stack applications for Philippine National Police (PNP) and public school systems. Implemented secure coding practices, authentication, authorization, and data validation to prevent OWASP Top 10 vulnerabilities.",
      tech: ["Laravel", "PHP", "MySQL", "Authentication", "Secure Coding", "SQL Injection Prevention"],
      link: "#"
    },
    {
      id: 6,
      title: "React & Vite Modern Frontend",
      category: "Frontend Development",
      icon: Terminal,
      description: "Developed responsive, component-based web applications using React 19 and Vite 7. Deep understanding of front-end security considerations including XSS prevention, CSRF protection, and secure API communication.",
      tech: ["React 19", "Vite 7", "Tailwind CSS", "State Management", "Security Best Practices"],
      link: "#"
    },
    {
      id: 7,
      title: "PixiJS 2D Card Matching Game",
      category: "Interactive Development",
      icon: Zap,
      description: "Created a dynamic 2D card-matching game using PixiJS rendering engine with configurable difficulty matrix sizes. Demonstrates algorithmic thinking, game state management, and performance optimization.",
      tech: ["PixiJS", "Canvas Rendering", "Game State", "Event Handling", "Performance Optimization"],
      link: "#"
    }
  ];

  return (
    <section 
      ref={ref} 
      id="security-labs" 
      className="relative min-h-screen w-full bg-slate-900/50 py-24 px-4 md:px-8"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.1) 25%, rgba(0, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.1) 75%, rgba(0, 255, 255, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.1) 25%, rgba(0, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.1) 75%, rgba(0, 255, 255, 0.1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedContent
          distance={80}
          direction="vertical"
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">
                Experience & Projects
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Security & Software Engineering
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real-world experience spanning cybersecurity infrastructure, network defense, and full-stack development
            </p>
          </div>
        </AnimatedContent>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-12 justify-center flex-wrap">
          {[
            { id: 'security', label: 'Security & Infrastructure', icon: Shield },
            { id: 'software', label: 'Software Engineering', icon: Code2 }
          ].map(tab => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition duration-300 ${
                  activeTab === tab.id
                    ? 'bg-linear-to-r from-cyan-500 to-emerald-500 text-white shadow-lg'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-800 border border-slate-700/50'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Labs Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {(activeTab === 'security' ? securityProjects : softwareProjects).map((project, index) => {
            const IconComponent = project.icon;
            return (
              <AnimatedContent
                key={project.id}
                distance={80}
                direction="vertical"
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                threshold={0.2}
                delay={index * 0.1}
              >
                <div className="group relative h-full">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-linear-to-r from-emerald-500/30 to-cyan-500/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300" />
                  
                  {/* Card */}
                  <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 hover:border-emerald-500/60 rounded-lg p-6 transition duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
                        <IconComponent className="w-6 h-6 text-emerald-400" />
                      </div>
                      <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full font-semibold border border-cyan-500/50">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded border border-emerald-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    {project.link !== '#' && (
                      <div className="flex gap-3">
                        <a
                          href={project.link}
                          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition font-medium text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Learn More
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default SecurityLabs;
