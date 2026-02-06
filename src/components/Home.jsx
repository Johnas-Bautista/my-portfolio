import DarkVeil from './ui/DarkVeil';
import AnimatedContent from './ui/AnimatedContent';
import SpotlightCard from './ui/SpotlightCard';

export default function Home() {
    return (
        <div className="w-full h-screen relative bg-black overflow-y-auto"> 

            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none fixed"> 
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
                delay={0}
            >
                {/* Spotlight Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">

                    {/* Card 1 */}
                    <SpotlightCard
                        className="p-10 text-center h-full" 
                        spotlightColor="rgba(255, 255, 255, 0.15)"
                    >
                        <h1 className="text-white text-4xl font-bold mb-4">
                            Hello World
                        </h1>
                        <p className="text-neutral-400">
                            This is card #1. On mobile, I take up the full width. On desktop, I take up 50%.
                        </p>
                    </SpotlightCard>

                    {/* Card 2 */}
                    <SpotlightCard
                        className="p-10 text-center h-full"
                        spotlightColor="rgba(255, 255, 255, 0.15)"
                    >
                        <h1 className="text-white text-4xl font-bold mb-4">
                            Hello World
                        </h1>
                        <p className="text-neutral-400">
                            This is card #2. I will stack below card #1 on smaller screens.
                        </p>
                    </SpotlightCard>

                </div>
            </AnimatedContent>
        </div>
    )
}