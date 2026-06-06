import { forwardRef } from 'react';
import AnimatedContent from './ui/AnimatedContent';
import { Github, ExternalLink, Code2, Lock, Network, Eye } from 'lucide-react';

const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      id: 1,
      title: "Network Intrusion Detection System",
      description: "Built a Python-based IDS using Scapy to detect anomalous network traffic patterns and potential attacks",
      tech: ["Python", "Scapy", "ML", "Network Analysis"],
      icon: Lock,
      featured: true,
      stats: { alerts: "1K+", accuracy: "94%" },
      links: {
        github: "https://github.com",
        live: "#"
      }
    },
    {
      id: 2,
      title: "Vulnerability Scanner Tool",
      description: "Developed an automated vulnerability scanning tool that identifies common security misconfigurations in web applications",
      tech: ["Python", "Requests", "OWASP", "Automation"],
      icon: Network,
      stats: { findings: "500+", scans: "100+" },
      links: {
        github: "https://github.com",
        live: "#"
      }
    },
    {
      id: 3,
      title: "SOC Dashboard Prototype",
      description: "Created a Security Operations Center dashboard for real-time monitoring and alerting of security events",
      tech: ["React", "Node.js", "Socket.io", "Visualization"],
      icon: Eye,
      stats: { realtime: "true", metrics: "12+" },
      links: {
        github: "https://github.com",
        live: "#"
      }
    },
    {
      id: 4,
      title: "Malware Analysis Report Generator",
      description: "Automated tool for analyzing malware behavior and generating comprehensive security reports with IOCs",
      tech: ["Python", "Wireshark", "Virustotal API", "Documentation"],
      icon: Code2,
      stats: { reports: "50+", success: "98%" },
      links: {
        github: "https://github.com",
        live: "#"
      }
    }
  ];

  return (
    <section ref={ref} id="projects" className="relative min-h-screen w-full bg-black py-24 px-4 md:px-8">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
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
              <Code2 className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">
                Portfolio Projects
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Security Projects & Solutions
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real-world cybersecurity projects demonstrating technical expertise and problem-solving capabilities
            </p>
          </div>
        </AnimatedContent>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
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
                <div className={`group relative h-full ${project.featured ? 'md:col-span-2' : ''}`}>
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-linear-to-r from-emerald-500/30 to-cyan-500/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 ${
                    project.featured ? 'from-emerald-500/40 via-cyan-500/40 to-emerald-500/40' : ''
                  }`} />
                  
                  {/* Card */}
                  <div className={`relative h-full bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 hover:border-emerald-500/60 rounded-lg p-6 transition duration-300 ${
                    project.featured ? 'md:p-8' : ''
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
                        <IconComponent className="w-6 h-6 text-emerald-400" />
                      </div>
                      {project.featured && (
                        <span className="text-xs px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full font-semibold border border-emerald-500/50">
                          Featured Project
                        </span>
                      )}
                    </div>

                    <h3 className={`font-bold text-white mb-3 ${project.featured ? 'text-2xl' : 'text-lg'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-gray-400 mb-4 ${project.featured ? '' : 'line-clamp-2'}`}>
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded text-xs text-emerald-300 font-medium">
                          <span className="capitalize">{key}:</span> {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}
                        </div>
                      ))}
                    </div>

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

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition font-medium text-sm"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                      <a
                        href={project.links.live}
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition font-medium text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Details
                      </a>
                    </div>
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

export default Projects;