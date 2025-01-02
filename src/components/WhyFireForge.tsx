'use client';
import Image from 'next/image';

export default function WhyFireForge() {
  return (
    <section id="what-is-fireforge" className="snapsection flex items-center py-20 reveal-right">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 animate-gradient">FireForge</span> Options Explorer?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stop spending hours on manual options backtesting. FireForge analyzes millions of data points to find your perfect strategy in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="group relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-400">Expert-Level Analysis for Everyone</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                From beginners to pro traders, FireForge makes advanced options analysis easy to use. All you need is a basic understanding of puts and calls to start improving your trades.
              </p>
              <Image 
                src="/images/vix_dep_2.png"
                alt="VIX Dependency"
                width={600}
                height={300}
                className="w-full max-h-[200px] object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="group relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-400">Instant Strategy Discovery</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Access our massive database of pre-analyzed options strategies in a heartbeat. Get custom insights adjusted to your risk level and profit goals in seconds.
              </p>
              <Image 
                src="/images/top_strats_redacted3.png"
                alt="Top Strategies"
                width={600}
                height={300}
                className="w-full max-h-[200px] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 