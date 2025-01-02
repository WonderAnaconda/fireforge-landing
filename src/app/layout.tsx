import React from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'animate.css'
import AnimationInitializer from '@/components/AnimationInitializer'
import Navbar from '@/components/Navbar'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FireForge - Best Options Trading Strategy Backtesting Tool | Free Options Explorer',
  description: 'FireForge is the leading options strategy backtesting tool. Get instant, data-driven recommendations for profitable options trades based on 12+ years of market data.',
  openGraph: {
    title: 'FireForge - Best Options Trading Strategy Backtesting Tool | Options Backtesting & Explorer',
    description: 'Discover profitable options trading strategies instantly with FireForge\'s backtesting tool. 12+ years of market data analysis. Start optimizing your trades for free today.',
    url: 'https://www.fireforge.me',
    siteName: 'FireForge',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/5b85f931-9923-40c4-a997-cf0853786629.png?token=Y5QJfCWcb9yCXotrMjME2fnGnLITxWxB2j8STyo7dEQ&height=439&width=1200&expires=33266859070',
        width: 1200,
        height: 439,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FireForge - Best Options Trading Strategy Backtesting Tool | Options Backtesting & Explorer',
    description: 'Find winning options strategies in seconds with FireForge\'s backtesting. 12+ years of market data analysis. Start free today.',
    images: ['https://opengraph.b-cdn.net/production/images/c1f17243-8c88-4d44-912b-138685da663c.png?token=q1oYNWGLVclOyI46aOsfdeVJVvkSCd9qkJ9qgEXaEmk&height=499&width=1200&expires=33266341079'],
  },
  robots: 'index, follow, max-image-preview:large',
  authors: [{ name: 'FireForge Team' }],
  keywords: 'options trading, options backtesting, options strategy, options Explorer, trading optimization, algorithmic trading, options screener, options trading tool',
  alternates: {
    canonical: 'https://www.fireforge.me'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://www.fireforge.me/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="https://www.fireforge.me/favicon.png" type="image/x-icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              url: "https://www.fireforge.me",
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "FireForge",
              applicationCategory: "FinanceApplication",
              description: "Advanced options trading strategy backtesting and optimization tool for SPX 0DTE options trading",
              operatingSystem: "Web-based",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD"
              }
            })
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-31R722X27D"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-31R722X27D');
            `
          }}
        />
      </head>
      <body className={inter.className}>
        <div 
          className="min-h-screen bg-[#0B0F17]"
          style={{
            backgroundImage: 'url(/images/lines_bg.svg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1
          }}
        />
        <div className="relative">
          <Navbar />
          {children}
          <AnimationInitializer />
          <Analytics />
        </div>
      </body>
    </html>
  )
} 