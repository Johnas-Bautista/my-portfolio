import { forwardRef } from 'react';
import AnimatedContent from './ui/AnimatedContent';
import { Trophy, Star, Sparkles } from 'lucide-react';

const Awards = forwardRef((props, ref) => {
  const awards = [
    {
      id: 1,
      title: "Hackathon Winner - Cybersecurity Track",
      organization: "PUP Cybersecurity Club",
      date: "2024",
      icon: Trophy,
      description: "Developed a comprehensive threat detection system that won first place",
      highlight: true
    },
    {
      id: 2,
      title: "Dean's List - Excellence in IT",
      organization: "Polytechnic University of the Philippines",
      date: "2023-2024",
      icon: Star,
      description: "Maintained excellent academic performance in cybersecurity coursework"
    },
    {
      id: 3,
      title: "Security Challenge Champion",
      organization: "National Cybersecurity Challenge",
      date: "2024",
      icon: Sparkles,
      description: "Competed and ranked in top 10% of national cybersecurity competition"
    }
  ];

  return (
    <section 
      ref={ref} 
      id="awards" 
      className="relative min-h-screen w-full bg-black py-24 px-4 md:px-8"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
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
              <Trophy className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
                Recognition & Achievements
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Awards & Honors
            </h2>
            <p className="text-gray-400 text-lg">
              Recognized for excellence in cybersecurity and academic performance
            </p>
          </div>
        </AnimatedContent>

        {/* Awards Timeline */}
        <div className="space-y-6">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <AnimatedContent
                key={award.id}
                distance={80}
                direction="vertical"
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                threshold={0.2}
                delay={index * 0.1}
              >
                <div className={`group relative ${award.highlight ? 'md:col-span-2' : ''}`}>
                  {/* Glow for highlight */}
                  {award.highlight && (
                    <div className="absolute -inset-1 bg-linear-to-r from-amber-500/30 via-yellow-500/30 to-amber-500/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300" />
                  )}

                  <div className={`relative backdrop-blur-sm rounded-lg p-6 border transition duration-300 ${
                    award.highlight
                      ? 'bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border-amber-500/50 shadow-lg shadow-amber-500/20'
                      : 'bg-slate-900/50 border-cyan-500/20 hover:border-cyan-500/50'
                  }`}>
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div className={`p-3 rounded-lg border h-fit ${
                        award.highlight
                          ? 'bg-amber-500/20 border-amber-500/50'
                          : 'bg-cyan-500/10 border-cyan-500/30'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${
                          award.highlight ? 'text-amber-400' : 'text-cyan-400'
                        }`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                          <h3 className="text-xl font-bold text-white">
                            {award.title}
                          </h3>
                          <span className={`text-sm font-semibold ${
                            award.highlight ? 'text-amber-300' : 'text-cyan-300'
                          }`}>
                            {award.date}
                          </span>
                        </div>
                        
                        <p className="text-sm font-medium text-gray-400 mb-2">
                          {award.organization}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {award.description}
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
    </section>
  );
});

export default Awards;
