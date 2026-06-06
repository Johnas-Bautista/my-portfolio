import { forwardRef } from 'react';
import AnimatedContent from './ui/AnimatedContent';
import { Target, Zap, BookOpen, Users } from 'lucide-react';

const About = forwardRef((props, ref) => {
  const highlights = [
    {
      icon: Target,
      title: "Security Focused",
      description: "Specializing in threat detection, vulnerability assessment, and security architecture"
    },
    {
      icon: Zap,
      title: "Hands-On Experience",
      description: "Practical lab work with real security tools and incident response scenarios"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Pursuing industry certifications and staying updated with latest security trends"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Strong communication and teamwork skills in cross-functional environments"
    }
  ];

  return (
    <section ref={ref} id="about" className="relative min-h-screen w-full bg-slate-950 py-24 px-4 md:px-8">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.1) 25%, rgba(0, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.1) 75%, rgba(0, 255, 255, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.1) 25%, rgba(0, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.1) 75%, rgba(0, 255, 255, 0.1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
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
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Building Secure Systems
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl">
              I'm a 4th year Information Technology student with a deep passion for cybersecurity. 
              My journey started with curiosity about how systems can be compromised, which evolved 
              into a commitment to building resilient, secure infrastructure. I combine technical expertise 
              with practical hands-on experience to protect digital assets and respond to emerging threats.
            </p>
          </div>
        </AnimatedContent>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Story */}
          <AnimatedContent
            distance={80}
            direction="vertical"
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">My Security Journey</h3>
              <p className="text-gray-400 leading-relaxed">
                What started as an interest in IT infrastructure evolved into a focused passion for cybersecurity. 
                I've spent countless hours in security labs, learning to identify vulnerabilities, analyze malware, 
                and design secure systems.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I believe that security is not a feature—it's a foundation. Every line of code, every system 
                design, and every policy should prioritize the protection of data and systems. My goal is to 
                become a trusted security professional who can make a real impact in protecting organizations 
                from evolving cyber threats.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When I'm not diving into security research or completing certifications, I enjoy sharing knowledge 
                with peers, contributing to the security community, and staying updated with the latest threat intelligence.
              </p>
            </div>
          </AnimatedContent>

          {/* Right Column - Highlights */}
          <div className="space-y-4">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <AnimatedContent
                  key={index}
                  distance={80}
                  direction="vertical"
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  threshold={0.2}
                  delay={index * 0.08}
                >
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
                    <div className="relative bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 rounded-lg p-5 transition duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 h-fit">
                          <IconComponent className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">
                            {highlight.title}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedContent>
              );
            })}
          </div>
        </div>

        {/* Education & Background */}
        <AnimatedContent
          distance={80}
          direction="vertical"
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
        >
          <div className="grid md:grid-cols-2 gap-8 bg-linear-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-white">Bachelor of Science in Information Technology</p>
                  <p className="text-gray-400 text-sm">Polytechnic University of the Philippines Taguig Campus</p>
                  <p className="text-gray-500 text-sm">Expected Graduation: 2025</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                Focus Areas
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" /> Network Security
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" /> Threat Detection & Incident Response
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" /> Vulnerability Assessment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" /> Security Architecture
                </li>
              </ul>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
});

export default About;