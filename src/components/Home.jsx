import DarkVeil from './ui/DarkVeil';

export default function Home() {
    return(
    <div className="w-full h-screen relative">
        <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={1}
            scanlineFrequency={0}
            warpAmount={0}
        />
    </div>
    )
}