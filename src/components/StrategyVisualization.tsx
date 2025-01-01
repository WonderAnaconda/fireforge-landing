'use client';
import Image from 'next/image';

const strategyImages = [
  '/images/Bull_Put_Spread_PL.png',
  '/images/Iron_Condor_PL.png',
  '/images/Iron_Butterfly_PL.png',
  '/images/Long_Straddle_PL.png',
  '/images/Iron_Lizard_PL.png',
  '/images/Bull_Put_Spread_PL.png',
  '/images/Iron_Condor_PL.png',
  '/images/Iron_Butterfly_PL.png',
];

export default function StrategyVisualization() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Animation Layer */}
      <div className="absolute inset-0 z-0">
        <div className="strategy-images">
          {strategyImages.map((src, index) => (
            <Image
              key={`${src}-${index}`}
              src={src}
              alt="Strategy visualization"
              width={240}
              height={240}
              className="floating-strategy"
              style={{
                top: `${index === 0 ? '15' : index === 1 ? '75' : index === 2 ? '45' : index === 3 ? '85' : index === 4 ? '25' : index === 5 ? '65' : index === 6 ? '35' : '55'}%`,
                animationDelay: `${index === 0 ? '0' : index === 1 ? '-3' : index === 2 ? '-7' : index === 3 ? '-11' : index === 4 ? '-15' : index === 5 ? '-18' : index === 6 ? '-21' : '-23'}s`,
                zIndex: index,
              }}
            />
          ))}
        </div>
      </div>

      {/* Foreground Content */}
      <div className="container relative z-10 text-center">
        <h2 className="text-5xl sm:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 animate-gradient mb-12 py-2">
          Beauty in Simplicity
        </h2>
        <h2 className="text-3xl sm:text-4xl text-gray-300 font-bold leading-tight max-w-4xl mx-auto">
          <span>Just Define What is Important to You—</span><br/>
          <span>FireForge Finds the Right Strategy</span>
        </h2>
      </div>
    </section>
  );
} 