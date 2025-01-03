import { copy } from '@/content/copy';
import { metadata as siteMetadata } from '@/content/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tools - FireForge Options Trading Strategy Backtesting Tool',
  description: 'Explore our suite of options trading tools designed to help you make better trading decisions. Backtest strategies, analyze market data, and optimize your trades.',
  keywords: siteMetadata.tools.keywords,
  openGraph: {
    title: 'Tools - FireForge Options Trading Strategy Backtesting Tool',
    description: 'Explore our suite of options trading tools designed to help you make better trading decisions. Backtest strategies, analyze market data, and optimize your trades.',
    images: [siteMetadata.defaultImage],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.tools.title,
    description: siteMetadata.tools.description,
    images: [siteMetadata.defaultImage],
  },
  alternates: {
    canonical: 'https://www.fireforge.me/tools'
  }
};

export default function Tools() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full"></div>
          <h1 className="text-6xl font-bold relative">
            {copy.comingSoon.tools.title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "text-blue-400" : ""}>
                {word}{' '}
              </span>
            ))}
          </h1>
        </div>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          {copy.comingSoon.tools.description}
        </p>
        <div className="inline-flex items-center justify-center space-x-2 text-gray-400">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </main>
  );
} 