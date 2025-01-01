'use client';
import { useEffect } from 'react';
import { initRevealAnimations } from '@/utils/reveal';

export default function AnimationInitializer() {
  useEffect(() => {
    initRevealAnimations();
  }, []);

  return null;
} 