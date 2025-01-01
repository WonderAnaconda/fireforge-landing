'use client';

const steps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
      </svg>
    ),
    title: 'Set Your Trading Parameters',
    description: 'Input your preferred win rate, risk tolerance, and profit targets to customize your strategy search'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
      </svg>
    ),
    title: 'Advanced Analysis',
    description: 'Our algorithms analyze 12+ years of market data to find optimal strategies'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
      </svg>
    ),
    title: 'Get Actionable Results',
    description: 'Receive detailed strategy recommendations with performance metrics and custom settings'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="min-h-screen flex items-center py-20 reveal">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            How <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 animate-gradient">FireForge</span> Options Explorer Works
          </h2>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Transform your options trading with our powerful yet simple three-step process:
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500 reveal-up"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
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
    </section>
  );
} 