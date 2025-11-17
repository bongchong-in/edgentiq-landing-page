
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
          <g stroke="#2C5D63" strokeWidth="0.5" fill="none">
            {/* Lines */}
            <path className="schematic-line" style={{ animationDelay: '0s' }} d="M 10,20 L 40,50" />
            <path className="schematic-line" style={{ animationDelay: '1s' }} d="M 40,50 L 10,80" />
            <path className="schematic-line" style={{ animationDelay: '0.5s' }} d="M 10,20 L 60,10" />
            <path className="schematic-line" style={{ animationDelay: '1.5s' }} d="M 60,10 L 90,40" />
            <path className="schematic-line" style={{ animationDelay: '2s' }} d="M 90,40 L 60,90" />
            <path className="schematic-line" style={{ animationDelay: '2.5s' }} d="M 40,50 L 90,40" />
            <path className="schematic-line" style={{ animationDelay: '3s' }} d="M 10,80 L 60,90" />
            <path className="schematic-line" style={{ animationDelay: '3.5s' }} d="M 25,35 L 10,20" />
            <path className="schematic-line" style={{ animationDelay: '4s' }} d="M 75,15 L 60,10" />
            <path className="schematic-line" style={{ animationDelay: '4.5s' }} d="M 80,70 L 90,40" />
            <path className="schematic-line" style={{ animationDelay: '5s' }} d="M 20,65 L 10,80" />
            <path className="schematic-line" style={{ animationDelay: '5.5s' }} d="M 50,85 L 60,90" />
            <path className="schematic-line" style={{ animationDelay: '6s' }} d="M 5,50 L 10,20" />
            <path className="schematic-line" style={{ animationDelay: '6.5s' }} d="M 95,65 L 90,40" />
            <path className="schematic-line" style={{ animationDelay: '7s' }} d="M 70,50 L 90,40" />
            <path className="schematic-line" style={{ animationDelay: '7.5s' }} d="M 30,60 L 40,50" />
            <path className="schematic-line" style={{ animationDelay: '8s' }} d="M 55,55 L 40,50" />
            {/* Added lines */}
            <path className="schematic-line" style={{ animationDelay: '8.5s' }} d="M 30,10 L 60,10" />
            <path className="schematic-line" style={{ animationDelay: '9s' }} d="M 50,30 L 40,50" />
            <path className="schematic-line" style={{ animationDelay: '9.5s' }} d="M 80,20 L 75,15" />
            <path className="schematic-line" style={{ animationDelay: '10s' }} d="M 80,20 L 90,40" />
            <path className="schematic-line" style={{ animationDelay: '10.5s' }} d="M 20,95 L 10,80" />
            <path className="schematic-line" style={{ animationDelay: '11s' }} d="M 85,85 L 60,90" />
            <path className="schematic-line" style={{ animationDelay: '11.5s' }} d="M 5,5 L 10,20" />
            <path className="schematic-line" style={{ animationDelay: '12s' }} d="M 95,95 L 95,65" />
            <path className="schematic-line" style={{ animationDelay: '12.5s' }} d="M 50,70 L 40,50" />
            <path className="schematic-line" style={{ animationDelay: '13s' }} d="M 50,70 L 60,90" />
          </g>
          <g>
            {/* Nodes */}
            <g fill="#2C5D63">
              <circle className="schematic-node" style={{ animationDelay: '0s' }} cx="10" cy="20" r="1.5" />
              <circle className="schematic-node" style={{ animationDelay: '-4s' }} cx="10" cy="80" r="1.5" />
              <circle className="schematic-node" style={{ animationDelay: '-3s' }} cx="90" cy="40" r="2.5" />
              <circle className="schematic-node" style={{ animationDelay: '-0.5s' }} cx="25" cy="35" r="1" />
              <circle className="schematic-node" style={{ animationDelay: '-2.5s' }} cx="80" cy="70" r="2" />
              <circle className="schematic-node" style={{ animationDelay: '-4.5s' }} cx="50" cy="85" r="1.5" />
              <circle className="schematic-node" style={{ animationDelay: '-6s' }} cx="95" cy="65" r="1.5" />
              <circle className="schematic-node" style={{ animationDelay: '-7s' }} cx="30" cy="60" r="1.2" />
              <circle className="schematic-node" style={{ animationDelay: '-8s' }} cx="30" cy="10" r="1.2" />
              <circle className="schematic-node" style={{ animationDelay: '-9s' }} cx="80" cy="20" r="1.5" />
              <circle className="schematic-node" style={{ animationDelay: '-10s' }} cx="85" cy="85" r="2" />
              <circle className="schematic-node" style={{ animationDelay: '-11s' }} cx="95" cy="95" r="1.6" />
            </g>
            <g fill="#FFAA00">
              <circle className="schematic-node" style={{ animationDelay: '-2s' }} cx="40" cy="50" r="2" />
              <circle className="schematic-node" style={{ animationDelay: '-1s' }} cx="60" cy="10" r="1" />
              <circle className="schematic-node" style={{ animationDelay: '-5s' }} cx="60" cy="90" r="2" />
              <circle className="schematic-node" style={{ animationDelay: '-1.5s' }} cx="75" cy="15" r="1.5" />
              <circle className="schematic-node" style={{ animationDelay: '-3.5s' }} cx="20" cy="65" r="1" />
              <circle className="schematic-node" style={{ animationDelay: '-5.5s' }} cx="5" cy="50" r="1" />
              <circle className="schematic-node" style={{ animationDelay: '-6.5s' }} cx="70" cy="50" r="1" />
              <circle className="schematic-node" style={{ animationDelay: '-7.5s' }} cx="55" cy="55" r="1.8" />
              <circle className="schematic-node" style={{ animationDelay: '-8.5s' }} cx="50" cy="30" r="1" />
              <circle className="schematic-node" style={{ animationDelay: '-9.5s' }} cx="20" cy="95" r="1" />
              <circle className="schematic-node" style={{ animationDelay: '-10.5s' }} cx="5" cy="5" r="1.3" />
              <circle className="schematic-node" style={{ animationDelay: '-11.5s' }} cx="50" cy="70" r="1.1" />
            </g>
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
          Stop Letting Manual Tasks and Messy Tech Run Your Business.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-brand-charcoal sm:text-xl">
          Whether you're starting from zero or juggling ten different apps, we design and build a simple, all-in-one technology system that works the way you do.
        </p>
        <div className="mt-10">
          <a href="#/book" className="inline-block px-10 py-4 border border-transparent text-lg font-bold rounded-md shadow-lg text-white bg-brand-amber hover:bg-yellow-600 transform hover:-translate-y-1 transition-all duration-300">
            Book Your Free "Discovery" Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
