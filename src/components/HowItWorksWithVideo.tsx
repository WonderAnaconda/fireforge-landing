'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function HowItWorksWithVideo() {
  const [shouldPlay, setShouldPlay] = useState(false);
  const [hasStartedOnce, setHasStartedOnce] = useState(false);

  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll('.reveal, .reveal-right, .reveal-up, .reveal-down');
      const videoSection = document.querySelector('.video-section');
      
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });

      if (videoSection) {
        const windowHeight = window.innerHeight;
        const rect = videoSection.getBoundingClientRect();
        const elementHeight = rect.height;
        
        // Calculate how much of the element is visible
        const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
        const visiblePercentage = (visibleHeight / elementHeight) * 100;
        
        // Only auto-resume if the video has been started manually once
        setShouldPlay(hasStartedOnce && visiblePercentage > 50);
      }
    }

    window.addEventListener('scroll', reveal);
    reveal(); // Initial check

    return () => window.removeEventListener('scroll', reveal);
  }, [hasStartedOnce]);

  const handlePlay = () => {
    setHasStartedOnce(true);
    setShouldPlay(true);
  };

  return (
    <section className="snapsection relative min-h-[120vh] py-32">
      <div className="container mx-auto px-4 h-full flex flex-col">
        <div className="flex-[0.7]" />
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl font-bold mb-2">How <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 animate-gradient">FireForge</span> Options Explorer Works</h2>
          <p className="text-xl text-gray-300">Transform your options trading with our powerful yet simple three-step process:</p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch max-w-[1400px] mx-auto">
          {/* Video Section */}
          <div className="relative aspect-[16/10] bg-[#0c1117] rounded-xl overflow-hidden shadow-2xl border border-blue-500/20 reveal video-section scale-110">
            <ReactPlayer
              url="/videos/how-it-works.mp4"
              width="100%"
              height="100%"
              playing={shouldPlay}
              controls
              playsinline
              loop
              onPlay={handlePlay}
            />
          </div>

          {/* Steps Section */}
          <div className="space-y-3 flex flex-col justify-between h-full">
            <div className="reveal-right" style={{ transitionDelay: '300ms', flex: '1' }}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex gap-4 h-full items-center">
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Set Your Trading Parameters</h3>
                    <p className="text-gray-300 text-sm">
                      Input your preferred win rate, risk tolerance, and profit targets to customize your strategy search
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-right" style={{ transitionDelay: '600ms', flex: '1' }}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex gap-4 h-full items-center">
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Advanced Analysis</h3>
                    <p className="text-gray-300 text-sm">
                      Our algorithms analyze 12+ years of market data to find optimal strategies
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-right" style={{ transitionDelay: '900ms', flex: '1' }}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex gap-4 h-full items-center">
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Get Actionable Results</h3>
                    <p className="text-gray-300 text-sm">
                      Receive detailed strategy recommendations with performance metrics and custom settings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1" />
      </div>
    </section>
  );
} 