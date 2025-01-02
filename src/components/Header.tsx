'use client';
import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate__animated animate__fadeIn animate__duration-1s">
          <div className="mb-16">
            <Image
              src="/images/logo.png"
              alt="FireForge Options Trading Strategy Tool"
              width={480}
              height={480}
              className="mx-auto mt-8 animate__animated animate__pulse animate__slower animate__infinite animate__duration-2s object-contain w-full max-w-[480px] h-auto"
              priority
            />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text animate-gradient">Know</span> Which Options Strategy <br/>
            To Trade, <span className="gradient-text animate-gradient">Instantly</span>
          </h1>
          <br/>
          <p className="text-basic sm:text-xl max-w-4xl mx-auto leading-relaxed mb-4 lg:mb-8 px-4">
            Stop wasting time with manual backtesting. FireForge shows options strategies in line with <span className="text-blue-400">your risk profile</span> and trading goals. Data-driven, tested and <span className="text-blue-400">in seconds</span>.
          </p>
          <a
            href="#learn-more"
            className="animate__animated animate__bounce animate__infinite animate__slower inline-block mt-16"
            aria-label="Learn more about FireForge"
          >
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
} 