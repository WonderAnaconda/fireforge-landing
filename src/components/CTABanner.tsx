'use client';

export default function CTABanner() {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Ready to <span className="gradient-text">Optimize</span> Your Options Trading?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join traders who are discovering profitable options strategies with FireForge.
            Start exploring now and find your edge in the market.
          </p>
          <div className="flex justify-center">
            <a
              href="https://app.fireforge.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Start Trading Smarter
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 