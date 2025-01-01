export function initRevealAnimations() {
  if (typeof window === 'undefined') return;

  function reveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-right, .reveal-up');
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', reveal);
  reveal(); // Initial check
} 