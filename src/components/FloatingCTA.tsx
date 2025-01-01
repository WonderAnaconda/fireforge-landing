'use client';
import { useState, useEffect } from 'react';
import { copy } from '@/content/copy';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const joinAlpha = document.getElementById('join-alpha');
      const ctaBanner = document.querySelector('.bg-blue-500.py-4');

      if (!header || !joinAlpha || !ctaBanner) return;

      const headerRect = header.getBoundingClientRect();
      const joinAlphaRect = joinAlpha.getBoundingClientRect();

      // Check if we're in the hero section
      const inHeroSection = headerRect.top <= 0 && headerRect.bottom > 0;
      
      // Check if we're near the bottom sections
      const nearBottom = joinAlphaRect.top <= (window.innerHeight * 0.75);

      setIsVisible(!inHeroSection && !nearBottom);
    };

    // Initial check
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => {
    const modal = document.getElementById('waitlistModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center py-4 shadow-xl z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <button 
        onClick={openModal}
        className="text-xl font-bold hover:text-gray-100 transition-colors duration-300"
      >
        {copy.cta.button}
      </button>
    </div>
  );
} 