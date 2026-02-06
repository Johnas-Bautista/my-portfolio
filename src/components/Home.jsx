import DarkVeil from './ui/DarkVeil';
import AnimatedContent from './ui/AnimatedContent';
import SpotlightCard from './ui/SpotlightCard';

export default function Home() {
    return (
        <div className="w-full h-screen relative">

            {/* WRAPPER FIX: Position absolute so it doesn't push content down */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <DarkVeil
                    hueShift={0}
                    noiseIntensity={0}
                    scanlineIntensity={0}
                    speed={1}
                    scanlineFrequency={0}
                    warpAmount={0}
                />
            </div>

            {/* This will now sit ON TOP because the background is absolute */}
            <AnimatedContent
                className="relative z-10 h-full flex items-center justify-center" // added flex/centering for better demo
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
                <div className="flex gap-4">
                    <SpotlightCard
                        className="p-10 max-w-md text-center"
                        spotlightColor="rgba(255, 255, 255, 0.15)" // Optional: Adjust glow color
                    >
                        <h1 className="text-white text-4xl font-bold mb-4">
                            Hello World
                        </h1>
                        <p className="text-neutral-400">
                            This content is now inside a Spotlight Card, which is being animated by AnimatedContent.
                        </p>
                    </SpotlightCard>
                    <SpotlightCard
                        className="p-10 max-w-md min-w-sm text-center"
                        spotlightColor="rgba(255, 255, 255, 0.15)">
                        <h1 className="text-white text-4xl font-bold mb-4">
                            Hello World
                        </h1>
                        <p className="text-neutral-400">
                            This content is now inside a Spotlight Card, which is being animated by AnimatedContent.
                        </p>
                    </SpotlightCard>
                </div>
            </AnimatedContent>
        </div>
    )
}