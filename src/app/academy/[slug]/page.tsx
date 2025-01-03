import { articles } from '@/content/articles';
import { metadata as siteMetadata } from '@/content/metadata';
import { promises as fs } from 'fs';
import * as fsSync from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find(a => a.slug === params.slug);
  if (!article) return {};

  return {
    title: `${article.title} | FireForge Academy`,
    description: article.description,
    openGraph: {
      title: `${article.title} | FireForge Academy`,
      description: article.description,
      images: [article.image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | FireForge Academy`,
      description: article.description,
      images: [article.image],
    },
    alternates: {
      canonical: `https://www.fireforge.me/academy/${params.slug}`
    }
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function Article({ params }: { params: { slug: string } }) {
  // If there are no articles at all, show coming soon page
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

  const article = articles.find(a => a.slug === params.slug);
  if (!article) return null;

  // Get all HTML files in the articles directory
  const articlesDir = path.join(process.cwd(), 'src', 'content', 'articles');
  const files = fsSync.readdirSync(articlesDir);
  
  // Find the actual filename that matches this slug
  const actualFilename = files.find((file: string) => 
    file.replace('.html', '').replace(/\s+/g, '-') === params.slug
  );
  
  if (!actualFilename) {
    throw new Error(`Could not find article file for slug: ${params.slug}`);
  }

  const filePath = path.join(process.cwd(), 'src', 'content', 'articles', actualFilename);
  const content = await fs.readFile(filePath, 'utf8');

  // Get 3 random articles excluding the current one
  const relatedArticles = articles
    .filter(a => a.slug !== params.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <main className="pt-12 mb-12">
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center mb-12">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-contain opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6">{article.title}</h1>
          <div className="flex items-center justify-center text-sm text-gray-400">
            <span>{article.publishedAt}</span>
            <span className="mx-2">•</span>
            <span>{article.readingTime}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl mb-24">
        <div 
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-bold
            prose-h1:text-5xl prose-h1:mb-8 prose-h1:text-blue-400 prose-h1:border-b prose-h1:border-blue-400/20 prose-h1:pb-4
            prose-h2:text-3xl prose-h2:mb-6 prose-h2:text-blue-300 prose-h2:mt-16
            prose-h3:text-2xl prose-h3:mb-4 prose-h3:text-blue-200 prose-h3:mt-12
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-ul:my-6 prose-ul:ml-0 prose-ul:space-y-2 prose-ul:list-none
            prose-ol:my-6 prose-ol:ml-0 prose-ol:space-y-2 prose-ol:list-none
            prose-li:relative prose-li:pl-6 prose-li:text-gray-300
            [&_ul>li]:before:content-['•'] [&_ul>li]:before:text-blue-400 [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:font-bold
            [&_ol]:list-decimal [&_ol]:pl-6"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      <section className="container mx-auto px-4 w-full md:w-[80%] pb-12 flex flex-col mt-24">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {relatedArticles.map((relatedArticle) => (
            <Link 
              key={relatedArticle.slug}
              href={`/academy/${relatedArticle.slug}`}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
            >
              <div className="aspect-video relative">
                <Image
                  src={relatedArticle.image}
                  alt={relatedArticle.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {relatedArticle.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-2 mb-2">
                  {relatedArticle.description}
                </p>
                <div className="flex items-center text-xs text-gray-400">
                  <span>{relatedArticle.readingTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
} 