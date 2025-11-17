
import React from 'react';

const SchematicBackground: React.FC = () => (
  <div className="absolute inset-0 z-0 opacity-10 overflow-hidden">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" strokeWidth="0.5"/>
        </pattern>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect width="80" height="80" fill="url(#smallGrid)"/>
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white min-h-[calc(100vh-80px)] flex items-center">
      <SchematicBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <h1 className="text-4xl font-lora font-bold tracking-tight text-brand-teal sm:text-5xl lg:text-6xl">
          Stop Juggling 10 Different Tech Partners.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-brand-charcoal sm:text-xl">
          We design, build, and automate <span className="font-bold">all</span> of your business technology—from the website that wins you clients, to the internal tools that keep your business running.
        </p>
        <div className="mt-10">
          <a href="/book" className="inline-block px-10 py-4 border border-transparent text-lg font-bold rounded-md shadow-lg text-white bg-brand-amber hover:bg-yellow-600 transform hover:-translate-y-1 transition-all duration-300">
            Book Your Free "Full-Stack" Audit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
