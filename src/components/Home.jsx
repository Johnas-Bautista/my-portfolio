import DarkVeil from './ui/DarkVeil';
import AnimatedContent from './ui/AnimatedContent';
import SpotlightCard from './ui/SpotlightCard';

export default function Home() {
    return (
        <div className="w-full h-screen relative bg-black overflow-y-auto">

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

            {/* Animation */}
            <AnimatedContent
                className="relative z-10 min-h-full flex items-center justify-center p-4"
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
                <div className="relative w-full max-w-3xl mr-28">

                    {/* Spotlight Card — the rectangle */}
                    <SpotlightCard
                        className="flex flex-col justify-center py-6 px-10 pr-44"
                        spotlightColor="rgba(255, 255, 255, 0.15)">
                        <h1 className="text-white text-4xl font-bold mb-4">
                            My name is Johnas J. Bautista
                        </h1>
                        <p className="text-gray-300 text-lg mb-6">
                            I am a 4th year Information Technology student at the Polytechnic University of the Philippines Taguig Campus
                        </p>
                        <a
                            href="/src/assets/pdf/RESUME-Bautista,Johnas Jr. J..pdf"
                            download
                            className="inline-block w-fit px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 font-medium text-sm shadow transition"
                        >
                            Download CV
                        </a>
                    </SpotlightCard>

                    {/* Profile circle — overlays the right edge of the card */}
                    <div className="absolute top-1/2 -translate-y-1/2 -right-36 z-20
                            w-64 h-64 rounded-full border-4 border-white shadow-2xl overflow-hidden
                            bg-gray-800">
                        <img
                            src="/src/assets/BAUTISTA, Johnas J..jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"/>
                    </div>
                </div>
            </AnimatedContent>
        </div>
    );
}