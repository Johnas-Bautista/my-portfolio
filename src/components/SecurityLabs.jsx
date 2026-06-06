import { forwardRef } from 'react';
import AnimatedContent from './ui/AnimatedContent';
import { Code2, Zap, Lock, Network, ExternalLink } from 'lucide-react';

const SecurityLabs = forwardRef((props, ref) => {
  const labs = [
    {
      id: 1,
      title: "Malware Analysis Lab",
      platform: "Anyrun / Wireshark",
      icon: Lock,
      description: "Analyzed network traffic and system behavior of malware samples in isolated environments",
      skills: ["Malware Analysis", "Network Forensics", "Wireshark", "Dynamic Analysis"],
      link: "#"
    },
    {
      id: 2,
      title: "Web Application Security",
      platform: "OWASP WebGoat",
      icon: Code2,
      description: "Hands-on exploitation of common web vulnerabilities including SQL injection and XSS",
      skills: ["SQL Injection", "XSS", "CSRF", "Burp Suite"],
      link: "#"
    },
    {
      id: 3,
      title: "Penetration Testing",
      platform: "HackTheBox / TryHackMe",
      icon: Zap,
      description: "Practiced active reconnaissance, exploitation, and privilege escalation techniques",
      skills: ["Nmap", "Metasploit", "Privilege Escalation", "Lateral Movement"],
      link: "#"
    },
    {
      id: 4,
      title: "Network Defense Lab",
      platform: "Cisco Packet Tracer",
      icon: Network,
      description: "Designed secure network architectures with firewalls, VLANs, and intrusion detection",
      skills: ["Network Design", "Firewall Rules", "IDS/IPS", "Access Control"],
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
                Hands-On Learning
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Security Labs & Training
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Practical cybersecurity projects demonstrating real-world attack and defense scenarios
            </p>
          </div>
        </AnimatedContent>

        {/* Labs Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {labs.map((lab, index) => {
            const IconComponent = lab.icon;
            return (
              <AnimatedContent
                key={lab.id}
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
                  {/* Border gradient effect */}
                  <div className="absolute -inset-px bg-linear-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
                  
                  <div className="relative h-full bg-black/40 backdrop-blur-sm border border-emerald-500/20 rounded-lg p-6 hover:border-emerald-500/50 transition duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
                        <IconComponent className="w-6 h-6 text-emerald-400" />
                      </div>
                      <span className="text-xs text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full font-medium border border-emerald-500/30">
                        {lab.platform}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {lab.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {lab.description}
                    </p>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {lab.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded border border-emerald-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={lab.link}
                      className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition font-medium text-sm"
                    >
                      View Details
                      <ExternalLink className="w-4 h-4" />
                    </a>
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
