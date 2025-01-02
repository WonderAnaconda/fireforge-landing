'use client';
import { useEffect } from 'react';

export default function JoinAlpha() {
  const openModal = () => {
    const modal = document.getElementById('waitlistModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  };

  useEffect(() => {
    const modal = document.getElementById('waitlistModal');
    const handleClickOutside = (e: MouseEvent) => {
      if (e.target === modal) {
        modal?.classList.add('hidden');
        modal?.classList.remove('flex');
      }
    };

    modal?.addEventListener('click', handleClickOutside);
    return () => modal?.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <section id="join-alpha" className="snapsection flex flex-col justify-center items-center py-12">
      <div className="container mx-auto px-4">
        <div className="text-center reveal">
          <h2 className="text-4xl sm:text-3xl lg:text-5xl font-bold mb-8">
            Join the Free Alpha of <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 animate-gradient">FireForge</span>
          </h2>
          <p className="text-lg sm:text-base lg:text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            Be one of the first to experience the power of FireForge. Our platform eliminates
            guesswork and delivers data-driven recommendations in seconds.
          </p>
          <button 
            onClick={openModal}
            className="inline-block bg-blue-500 text-white px-12 py-6 rounded-lg text-xl font-bold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 animate-pulse relative"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 bg-opacity-50 rounded-lg"></span>
            <span className="relative">Try FireForge! →</span>
          </button>
        </div>
      </div>

      {/* Waitlist Modal */}
      <div id="waitlistModal" className="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50">
        <div className="bg-gray-900 p-8 rounded-lg shadow-2xl max-w-lg w-full mx-4 border border-blue-400 transform transition-all">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Join the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 animate-gradient">FireForge</span> Waitlist
            </h3>
            <p className="text-gray-300 mb-6">
              Be the first to unlock the power of FireForge! Make use of the ultimate tool for revolutionary options trading analysis. <br/><br/> Join the waitlist today, and we'll notify you the moment it's ready to transform your trading strategies!
            </p>
            <form id="waitlistForm" className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const email = (document.getElementById('waitlistEmail') as HTMLInputElement)?.value;
              fetch('https://api.fireforge.me/collect_mail', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
              })
              .then(response => response.json())
              .then(data => {
                if (data.error) {
                  alert(data.error);
                } else {
                  alert('Thank you for joining our waitlist! We\'ll be in touch soon.');
                  const modal = document.getElementById('waitlistModal');
                  if (modal) {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                  }
                }
              })
              .catch(() => {
                alert('Failed to join waitlist. Please try again later.');
              });
            }}>
              <input 
                type="email" 
                id="waitlistEmail" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white"
              />
              <button 
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-all duration-300"
              >
                Join Waitlist
              </button>
            </form>
            <button
              onClick={() => {
                const modal = document.getElementById('waitlistModal');
                if (modal) {
                  modal.classList.add('hidden');
                  modal.classList.remove('flex');
                }
              }}
              className="mt-4 text-gray-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 