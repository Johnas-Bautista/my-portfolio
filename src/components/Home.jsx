import DarkVeil from './ui/DarkVeil';
import AnimatedContent from './ui/AnimatedContent';
import SpotlightCard from './ui/SpotlightCard';
import { forwardRef } from 'react';
import { ChevronDown, Shield } from 'lucide-react';

const Home = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="home" className="relative min-h-screen w-full bg-black overflow-hidden">

            {/* Background */}
            <div className="top-0 left-0 w-full h-full pointer-events-none fixed">
                <DarkVeil
                    hueShift={0}
                    noiseIntensity={0}
                    scanlineIntensity={0}
                    speed={1}
                    scanlineFrequency={0}
                    warpAmount={0}
                />
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="relative z-10 flex min-h-screen items-center justify-center">
                <AnimatedContent
                    className="min-h-full flex items-center justify-center p-4 w-full"
                    distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}>
                    <div className="relative w-full max-w-4xl">
                        {/* Spotlight Card */}
                        <SpotlightCard
                            className="flex flex-col justify-center py-8 px-8 md:px-12 md:pr-96"
                            spotlightColor="rgba(0, 255, 255, 0.2)">
                            
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 mb-6 w-fit px-4 py-2 bg-cyan-500/10 border border-cyan-500/50 rounded-full">
                                <Shield className="w-4 h-4 text-cyan-400" />
                                <span className="text-cyan-300 text-sm font-semibold">Cybersecurity Professional</span>
                            </div>

                            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                                Johnas J. Bautista
                            </h1>
                            <p className="text-gray-300 text-lg md:text-xl mb-2">
                                Aspiring Cybersecurity Professional & SOC Analyst
                            </p>
                            <p className="text-gray-400 text-md mb-8 max-w-xl">
                                4th year Information Technology student at the Polytechnic University of the Philippines Taguig Campus. Passionate about threat detection, security architecture, and building secure systems.
                            </p>
                            
                            {/* CTA Buttons */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <a
                                    href="/src/assets/pdf/RESUME-Bautista,Johnas Jr. J..pdf"
                                    download
                                    className="inline-flex items-center justify-center px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                                >
                                    Download Resume
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition duration-300"
                                >
                                    Get In Touch
                                </a>
                            </div>
                        </SpotlightCard>

                        {/* Profile circle — overlays the right edge of the card */}
                        <div className="absolute top-1/2 -translate-y-1/2 -right-24 md:-right-48 z-20
                                w-48 h-48 md:w-72 md:h-72 rounded-full border-2 border-cyan-500/50 shadow-2xl overflow-hidden
                                bg-linear-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm">
                            <img
                                src="/src/assets/BAUTISTA, Johnas J..jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </AnimatedContent>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                <div className="flex flex-col items-center gap-2 animate-bounce">
                    <p className="text-gray-500 text-sm font-medium">Scroll to explore</p>
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                </div>
            </div>
        </section>
    );
});

export default Home;