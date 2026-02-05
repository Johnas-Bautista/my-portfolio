import DarkVeil from './ui/DarkVeil';
import AnimatedContent from './ui/AnimatedContent';

export default function Home() {
    return (
        <div className="w-full h-screen relative">
            <DarkVeil
                hueShift={0}
                noiseIntensity={0}
                scanlineIntensity={0}
                speed={1}
                scanlineFrequency={0}
                warpAmount={0}
            />
            <AnimatedContent
                className="relative z-10"
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
                <div>Content to Animate</div>
            </AnimatedContent>
        </div>
    )
}