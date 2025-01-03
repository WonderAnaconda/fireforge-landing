import { copy } from '@/content/copy';
import { metadata as siteMetadata } from '@/content/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - FireForge Options Trading Strategy Backtesting Tool',
  description: 'Frequently asked questions about FireForge\'s options trading strategy backtesting tool. Learn how to use our platform to optimize your options trading strategies.',
  keywords: siteMetadata.faq.keywords,
  openGraph: {
    title: 'FAQ - FireForge Options Trading Strategy Backtesting Tool',
    description: 'Frequently asked questions about FireForge\'s options trading strategy backtesting tool. Learn how to use our platform to optimize your options trading strategies.',
    images: [siteMetadata.defaultImage],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.faq.title,
    description: siteMetadata.faq.description,
    images: [siteMetadata.defaultImage],
  },
  alternates: {
    canonical: 'https://www.fireforge.me/faq'
  }
};

export default function FAQ() {
  return (
    <main className="pt-24 pb-12 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">{copy.faq.title}</h1>
        
        <div className="space-y-16">
          {/* General Questions */}
          <div className="grid md:grid-cols-[250px_1fr] gap-x-12 gap-y-6">
            <h2 className="text-2xl font-bold text-blue-400 md:sticky md:top-24">{copy.faq.generalQuestions.title}</h2>
            <div className="space-y-8">
              {copy.faq.generalQuestions.items.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold">{item.question}</h3>
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-[250px_1fr] gap-x-12 gap-y-6">
            <h2 className="text-2xl font-bold text-blue-400 md:sticky md:top-24">{copy.faq.features.title}</h2>
            <div className="space-y-8">
              {copy.faq.features.items.map((item, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-xl font-semibold">{item.question}</h3>
                  {item.answer && <p className="text-gray-300">{item.answer}</p>}
                  {item.bullets && (
                    <ul className="list-disc list-inside text-gray-300 space-y-3">
                      {item.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Getting Started */}
          <div className="grid md:grid-cols-[250px_1fr] gap-x-12 gap-y-6">
            <h2 className="text-2xl font-bold text-blue-400 md:sticky md:top-24">{copy.faq.gettingStarted.title}</h2>
            <div className="space-y-8">
              {copy.faq.gettingStarted.items.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold">{item.question}</h3>
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How FireForge Works */}
          <div className="grid md:grid-cols-[250px_1fr] gap-x-12 gap-y-6">
            <h2 className="text-2xl font-bold text-blue-400 md:sticky md:top-24">{copy.faq.howItWorks.title}</h2>
            <div className="space-y-8">
              {copy.faq.howItWorks.items.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold">{item.question}</h3>
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Features */}
          <div className="grid md:grid-cols-[250px_1fr] gap-x-12 gap-y-6">
            <h2 className="text-2xl font-bold text-blue-400 md:sticky md:top-24">{copy.faq.advancedFeatures.title}</h2>
            <div className="space-y-8">
              {copy.faq.advancedFeatures.items.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold">{item.question}</h3>
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Support and Troubleshooting */}
          <div className="grid md:grid-cols-[250px_1fr] gap-x-12 gap-y-6">
            <h2 className="text-2xl font-bold text-blue-400 md:sticky md:top-24">{copy.faq.support.title}</h2>
            <div className="space-y-8">
              {copy.faq.support.items.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold">{item.question}</h3>
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 