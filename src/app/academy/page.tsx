import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/content/articles';
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

export default function Academy() {
  // If there are no articles, show coming soon page
  if (articles.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full"></div>
            <h1 className="text-6xl font-bold relative">
              <span>Coming</span>{' '}
              <span className="text-blue-400">Soon</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Our academy section is currently under development. Check back soon for comprehensive guides and tutorials on options trading strategies.
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

  return (
    <main className="py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">FireForge Academy</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link 
              key={article.slug}
              href={`/academy/${article.slug}`}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
            >
              <div className="aspect-video relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-300 mb-4">
                  {article.description}
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>{article.publishedAt}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readingTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 