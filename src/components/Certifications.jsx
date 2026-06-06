import { forwardRef } from 'react';
import AnimatedContent from './ui/AnimatedContent';
import { Award, ExternalLink, Shield } from 'lucide-react';

const Certifications = forwardRef((props, ref) => {
  const certifications = [
    {
      id: 1,
      name: "CompTIA Security+",
      issuer: "CompTIA",
      icon: Shield,
      date: "In Progress",
      credlyUrl: "https://credly.com",
      status: "pursuing",
      description: "Industry-recognized security certification"
    },
    {
      id: 2,
      name: "Google Cybersecurity Certificate",
      issuer: "Google",
      icon: Award,
      date: "Completed",
      credlyUrl: "https://credly.com",
      status: "completed",
      description: "Foundational cybersecurity principles"
    },
    {
      id: 3,
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: Shield,
      date: "In Progress",
      credlyUrl: "https://credly.com",
      status: "pursuing",
      description: "Cloud security and infrastructure"
    }
  ];

  return (
    <section 
      ref={ref} 
      id="certifications" 
      className="relative min-h-screen w-full bg-black py-24 px-4 md:px-8"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.05) 25%, rgba(0, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.05) 75%, rgba(0, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.05) 25%, rgba(0, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.05) 75%, rgba(0, 255, 255, 0.05) 76%, transparent 77%, transparent)',
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
                Certifications & Credentials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional Credentials
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Industry-recognized certifications demonstrating technical expertise and commitment to cybersecurity excellence
            </p>
          </div>
        </AnimatedContent>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <AnimatedContent
                key={cert.id}
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
                  <div className="absolute -inset-1 bg-linear-to-r from-cyan-500/20 to-emerald-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
                  
                  {/* Card */}
                  <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                        <IconComponent className="w-6 h-6 text-cyan-400" />
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                        cert.status === 'completed' 
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50' 
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/50'
                      }`}>
                        {cert.status === 'completed' ? '✓ Completed' : 'In Progress'}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      {cert.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{cert.date}</span>
                      <a
                        href={cert.credlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition text-sm font-medium"
                      >
                        View Badge
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            );
          })}
        </div>

        {/* Call to Action */}
        <AnimatedContent
          distance={80}
          direction="vertical"
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
        >
          <div className="text-center">
            <a
              href="https://www.credly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              View All Badges on Credly
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
});

export default Certifications;
