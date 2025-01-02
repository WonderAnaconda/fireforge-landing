import { metadata as siteMetadata } from '@/content/metadata';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import StrategyVisualization from '@/components/StrategyVisualization';
import WhatIs from '@/components/WhatIs';
import WhyFireForge from '@/components/WhyFireForge';
import HowItWorks from '@/components/HowItWorks';
import BeforeAfter from '@/components/BeforeAfter';
import JoinAlpha from '@/components/JoinAlpha';
import FloatingCTA from '@/components/FloatingCTA';

export const metadata: Metadata = {
  title: siteMetadata.home.title,
  description: siteMetadata.home.description,
  keywords: siteMetadata.home.keywords,
  openGraph: {
    title: siteMetadata.home.title,
    description: siteMetadata.home.description,
    images: [siteMetadata.defaultImage],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.home.title,
    description: siteMetadata.home.description,
    images: [siteMetadata.defaultImage],
  }
};

export default function Home() {
  return (
    <main>
      <Header />
      <StrategyVisualization />
      <WhatIs />
      <WhyFireForge />
      <HowItWorks />
      <BeforeAfter />
      <JoinAlpha />
      <FloatingCTA key="floating-cta" />
    </main>
  );
} 