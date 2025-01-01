'use client';
import { useEffect, useRef } from 'react';

export default function WhatIs() {
  const typingRef = useRef<HTMLHeadingElement>(null);
  const hasTyped = useRef(false);

  useEffect(() => {
    const typeWriter = (element: HTMLElement) => {
      const text = element.textContent || '';
      element.textContent = '';
      let i = 0;
      
      function type() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, 100);
        }
      }
      
      type();
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasTyped.current && typingRef.current) {
          hasTyped.current = true;
          typeWriter(typingRef.current);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (typingRef.current) {
      observer.observe(typingRef.current);
    }

    return () => {
      if (typingRef.current) {
        observer.unobserve(typingRef.current);
      }
    };
  }, []);

  return (
    <section id="learn-more" className="min-h-screen flex items-center py-20 reveal">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 ref={typingRef} className="text-4xl font-bold mb-6 typing">
              What is <span className="text-blue-400">FireForge</span> Options Explorer?
            </h2>
            <p className="text-xl leading-relaxed text-gray-300 mb-6">
              The <span className="text-blue-400">most advanced</span> options strategy explorer available. We use 12+ years of options backtesting data. That is why we can help traders find the right options strategies <span className="text-blue-400">right away</span>.
            </p>
            <p className="text-xl leading-relaxed text-gray-300">
              FireForge shows <span className="text-blue-400">trading strategies</span> in line with YOUR goals. Stop guessing and get <span className="text-blue-400">actionable results!</span>
            </p>
            <div className="text-center mt-8">
              <a
                href="https://fireforge.gitbook.io/fireforge-documentation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-400 transition-all duration-300"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 0-1z"/>
                  <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="group relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <ul className="space-y-6">
                  <li className="flex items-center">
                    <svg className="w-8 h-8 text-blue-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                    </svg>
                    <div>
                      <span className="text-lg font-semibold text-gray-200">Comprehensive Historical Analysis</span>
                      <p className="text-sm text-gray-400">Test strategies across bull, bear, and sideways markets</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-8 h-8 text-blue-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 6V5h11v1H3zm0 4v-1h11v1H3zm0 4v-1h7v1H3zm15.293-3.293l-3 3a1 1 0 01-1.414 0l-1.586-1.586a1 1 0 011.414-1.414l.879.879 2.293-2.293a1 1 0 111.414 1.414z"></path>
                    </svg>
                    <div>
                      <span className="text-lg font-semibold text-gray-200">Real-Time Strategy Optimization</span>
                      <p className="text-sm text-gray-400">Instant results from our vast database</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-8 h-8 text-blue-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                    <div>
                      <span className="text-lg font-semibold text-gray-200">Custom Strategy Builder</span>
                      <p className="text-sm text-gray-400">Strategies matched to your exact specifications</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 