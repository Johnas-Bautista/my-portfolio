import { forwardRef } from 'react';
import AnimatedContent from './ui/AnimatedContent';
import { Github, ExternalLink, Code2, Lock, Network, Eye, Shield } from 'lucide-react';

const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      id: 1,
      title: "Network Infrastructure Topology - DOST-STII",
      description: "Designed and mapped enterprise network architecture with 6 distinct VLANs, inter-VLAN routing, and Cisco ASA Firewall configuration for network segmentation, access control, and threat containment. Demonstrates deep understanding of network fundamentals essential for security monitoring.",
      tech: ["Cisco Packet Tracer", "Network Design", "VLANs", "ASA Firewall", "Routing"],
      icon: Network,
      featured: true,
      stats: { vlans: "6", firewalls: "1", routes: "Dynamic" },
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      id: 2,
      title: "SIEM Implementation - Centralized Logging",
      description: "Architecting a comprehensive Security Information and Event Management system for centralized log collection, real-time threat detection, and security event correlation across distributed endpoints. Demonstrates expertise in SOC operations and incident response.",
      tech: ["Event Correlation", "Log Aggregation", "Real-time Analytics", "Alert Management"],
      icon: Eye,
      stats: { status: "In Development", endpoints: "Multiple", analysis: "Real-time" },
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      id: 3,
      title: "Home Network LAN Monitor",
      description: "Developed a passive network monitoring tool for tracking local network traffic patterns and node activity. Demonstrates practical application of network protocols analysis and behavioral pattern detection for anomaly identification.",
      tech: ["Network Monitoring", "Traffic Analysis", "Protocol Analysis", "Python"],
      icon: Lock,
      stats: { monitoring: "Passive", protocols: "Multi", detection: "Behavioral" },
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      id: 4,
      title: "Compliance & Cybersecurity Research",
      description: "Comprehensive research on Philippine cyberlaws (Cybercrime Prevention Act), data protection regulations, and startup legal compliance frameworks. Documents security governance best practices, risk assessment methodologies, and regulatory adherence strategies.",
      tech: ["Philippine Cybercrime Law", "Data Privacy", "Compliance Frameworks", "Risk Assessment"],
      icon: Shield,
      stats: { framework: "Complete", compliance: "Philippines", focus: "Startups" },
      links: {
        github: "#",
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
                Core Security Projects
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Security Infrastructure & Operations
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real-world projects demonstrating expertise in network design, security operations, monitoring, and compliance infrastructure
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