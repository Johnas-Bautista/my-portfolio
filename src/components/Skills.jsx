import { forwardRef } from 'react';
import AnimatedContent from './ui/AnimatedContent';
import { Code2, Server, Shield, Lightbulb, Network, Database } from 'lucide-react';

const Skills = forwardRef((props, ref) => {
  const skillCategories = [
    {
      title: "Security Tools",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      textColor: "text-red-400",
      skills: ["Wireshark", "Metasploit", "Burp Suite", "OWASP ZAP", "Nessus", "Snort/Suricata"]
    },
    {
      title: "Programming Languages",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-400",
      skills: ["Python", "JavaScript", "Java", "C++", "Bash/Shell", "PowerShell"]
    },
    {
      title: "Network & Infrastructure",
      icon: Network,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      textColor: "text-emerald-400",
      skills: ["TCP/IP", "DNS", "VPN", "Firewalls", "Linux/Windows", "Cloud Security"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-400",
      skills: ["SQL", "MongoDB", "Database Security", "Data Privacy", "Encryption", "Backup & Recovery"]
    },
    {
      title: "Platforms & Services",
      icon: Server,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      textColor: "text-orange-400",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Git", "Jenkins"]
    },
    {
      title: "Soft Skills",
      icon: Lightbulb,
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      textColor: "text-yellow-400",
      skills: ["Communication", "Problem Solving", "Team Collaboration", "Documentation", "Critical Thinking", "Analytical Skills"]
    }
  ];

  return (
    <section 
      ref={ref} 
      id="skills" 
      className="relative min-h-screen w-full bg-black py-24 px-4 md:px-8"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(100, 200, 255, 0.05) 25%, rgba(100, 200, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(100, 200, 255, 0.05) 75%, rgba(100, 200, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(100, 200, 255, 0.05) 25%, rgba(100, 200, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(100, 200, 255, 0.05) 75%, rgba(100, 200, 255, 0.05) 76%, transparent 77%, transparent)',
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
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
                Technical Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive skillset spanning cybersecurity tools, programming, and infrastructure
            </p>
          </div>
        </AnimatedContent>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <AnimatedContent
                key={category.title}
                distance={80}
                direction="vertical"
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                threshold={0.2}
                delay={categoryIndex * 0.05}
              >
                <div className="group relative h-full">
                  {/* Gradient glow on hover */}
                  <div className={`absolute -inset-1 bg-linear-to-r ${category.color} rounded-lg blur opacity-0 group-hover:opacity-40 transition duration-300`} />
                  
                  <div className={`relative h-full ${category.bgColor} backdrop-blur-sm border ${category.borderColor} rounded-lg p-6 hover:border-opacity-100 transition duration-300`}>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`p-2 rounded-lg ${category.bgColor} border ${category.borderColor}`}>
                        <IconComponent className={`w-5 h-5 ${category.textColor}`} />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`text-xs font-medium px-3 py-2 rounded border transition duration-200 ${
                            skillIndex % 2 === 0
                              ? `${category.bgColor} ${category.borderColor} ${category.textColor} hover:border-opacity-100`
                              : `bg-slate-900/50 border-slate-700/50 text-slate-300 hover:border-slate-600/50`
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
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

export default Skills;
