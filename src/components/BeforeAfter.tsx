'use client';
import Image from 'next/image';
import { useEffect } from 'react';

export default function BeforeAfter() {
  useEffect(() => {
    // Animation for before/after images
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger first image animation
          requestAnimationFrame(() => {
            const beforeImage = document.getElementById('before-image');
            if (beforeImage) {
              beforeImage.classList.add('active');
            }
          });
          
          // Trigger second image animation after the first one
          setTimeout(() => {
            requestAnimationFrame(() => {
              const afterImage = document.getElementById('after-image');
              if (afterImage) {
                afterImage.classList.add('active');
              }
            });
          }, 500);
          
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px'  // Only trigger when actually entering viewport
    });

    const section = document.getElementById('before-after');
    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="before-after" className="snapsection flex flex-col justify-center items-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 animate-gradient">Find the best,</span> drop the rest
            </h2>
            <p className="text-xl text-gray-300 mx-auto leading-relaxed">
              Transform your trading. Use strategies only in the environment that they perform best in. <br /> 
              Get rid of large drawdowns and use the right strategies at the right times.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Before Image */}
            <div className="w-full md:w-1/2 opacity-0 -translate-x-full" id="before-image">
              <Image 
                src="/images/perf.png"
                alt="Performance Before Using FireForge"
                width={500}
                height={250}
                className="w-full h-auto object-contain mb-2 transition-transform duration-300 scale-110 filter brightness-110 image-glow"
              />
              <div className="text-center">
                <p className="text-gray-300 pt-4 italic">Before: Huge swings and large drawdowns</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="comparison-arrow hidden md:block mx-4">
              <svg className="w-24 h-24 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            {/* After Image */}
            <div className="w-full md:w-1/2 text-center opacity-0 -translate-x-full" id="after-image">
              <Image 
                src="/images/perf2.png"
                alt="Performance After Using FireForge"
                width={500}
                height={250}
                className="w-full h-auto object-contain mb-2 transition-transform duration-300 scale-110 filter brightness-110 image-glow"
              />
              <div className="text-center">
                <p className="text-gray-300 pt-4 italic">After: The same strategy, applied selectively</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 