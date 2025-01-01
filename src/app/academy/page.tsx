import { copy } from '@/content/copy';
import { metadata as siteMetadata } from '@/content/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: siteMetadata.academy.title,
  description: siteMetadata.academy.description,
  keywords: siteMetadata.academy.keywords,
  openGraph: {
    title: siteMetadata.academy.title,
    description: siteMetadata.academy.description,
    images: [siteMetadata.defaultImage],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.academy.title,
    description: siteMetadata.academy.description,
    images: [siteMetadata.defaultImage],
  }
};

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full"></div>
          <h1 className="text-6xl font-bold relative">
            {copy.comingSoon.academy.title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "text-blue-400" : ""}>
                {word}{' '}
              </span>
            ))}
          </h1>
        </div>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          {copy.comingSoon.academy.description}
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