'use client';
import { useState, useEffect } from 'react';
import { copy } from '@/content/copy';

export default function FloatingCTA() {
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const joinAlpha = document.getElementById('join-alpha');

      if (!header || !joinAlpha) return;

      const headerRect = header.getBoundingClientRect();
      const joinAlphaRect = joinAlpha.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Check if we're in the hero section
      const inHeroSection = headerRect.top <= 0 && headerRect.bottom > 0;
      
      // Check if we're near the bottom of the page
      const nearBottom = (windowHeight + scrollTop) >= (documentHeight - 100);

      setShouldMount(!inHeroSection && !nearBottom);
    };

    // Initial check
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render anything if we shouldn't mount
  if (!shouldMount) {
    return null;
  }

  const openModal = () => {
    const modal = document.getElementById('waitlistModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center py-4 shadow-xl z-50">
      <button 
        onClick={openModal}
        className="text-xl font-bold hover:text-gray-100 transition-colors duration-300"
      >
        {copy.cta.button}
      </button>
    </div>
  );
} 