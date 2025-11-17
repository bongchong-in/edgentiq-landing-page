
import React from 'react';

const AnimatedSchematic: React.FC = () => (
  <>
    <style>{`
      @keyframes pulse {
        0%, 100% {
          transform: scale(1);
          opacity: 0.6;
        }
        50% {
          transform: scale(1.1);
          opacity: 1;
        }
      }
      @keyframes subtleDraw {
        from {
          opacity: 0;
        }
        to {
          opacity: 0.4;
        }
      }
      .schematic-line {
        opacity: 0;
        animation: subtleDraw 10s ease-in-out forwards;
      }
      .schematic-node {
        animation: pulse 8s ease-in-out infinite;
      }
    `}</style>
    <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
          <g stroke="#94A3B8" strokeWidth="0.5" fill="none">
            {/* Lines */}
            <path className="schematic-line" style={{ animationDelay: '0s' }} d="M 10,20 L 40,50" />
            <path className="schematic-line" style={{ animationDelay: '1s' }} d="M 40,50 L 10,80" />
            <path className="schematic-line" style={{ animationDelay: '0.5s' }} d="M 10,20 L 60,10" />
            <path className="schematic-line" style={{ animationDelay: '1.5s' }} d="M 60,10 L 90,40" />
            <path className="schematic-line" style={{ animationDelay: '2s' }} d="M 90,40 L 60,90" />
            <path className="schematic-line" style={{ animationDelay: '2.5s' }} d="M 40,50 L 90,40" />
            <path className="schematic-line" style={{ animationDelay: '3s' }} d="M 10,80 L 60,90" />
          </g>
          <g fill="#94A3B8">
            {/* Nodes */}
            <circle className="schematic-node" style={{ animationDelay: '0s' }} cx="10" cy="20" r="1.5" />
            <circle className="schematic-node" style={{ animationDelay: '-2s' }} cx="40" cy="50" r="2" />
            <circle className="schematic-node" style={{ animationDelay: '-4s' }} cx="10" cy="80" r="1.5" />
            <circle className="schematic-node" style={{ animationDelay: '-1s' }} cx="60" cy="10" r="1" />
            <circle className="schematic-node" style={{ animationDelay: '-3s' }} cx="90" cy="40" r="2.5" />
            <circle className="schematic-node" style={{ animationDelay: '-5s' }} cx="60" cy="90" r="2" />
          </g>
        </svg>
      </svg>
    </div>
  </>
);


const Hero: React.FC = () => {
  return (
    <section className="relative bg-white min-h-[calc(100vh-80px)] flex items-center">
      <AnimatedSchematic />
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
