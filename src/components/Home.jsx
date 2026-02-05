import DarkVeil from './ui/DarkVeil';
import AnimatedContent from './ui/AnimatedContent';

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
                <div className="text-white text-4xl font-bold">Content to Animate</div>
            </AnimatedContent>
        </div>
    )
}