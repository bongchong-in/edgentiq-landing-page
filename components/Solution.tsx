
import React from 'react';

const Solution: React.FC = () => {
  return (
    <section id="solution" className="bg-brand-light-gray py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl font-lora font-bold tracking-tight text-brand-teal sm:text-5xl">
            Your End-to-End Technology Partner.
          </h2>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left Side (External) */}
          <div className="w-full md:w-2/5 text-center md:text-right">
            <h3 className="text-2xl font-lora text-brand-charcoal">1. Attract & Win Customers</h3>
            <p className="font-montserrat font-bold mt-1 text-brand-teal">Your Customer-Facing Tech, Solved.</p>
            <p className="mt-4 text-gray-600">
              We build high-performance websites, set up analytics that give you real insights, and integrate marketing tools that turn visitors into loyal customers.
            </p>
          </div>

          {/* Central Graphic */}
          <div className="w-full md:w-auto flex items-center justify-center my-8 md:my-0">
            <div className="w-full h-1 bg-brand-amber"></div>
            <div className="flex-shrink-0 w-32 h-32 bg-brand-teal rounded-full flex items-center justify-center text-white font-lora font-bold text-2xl z-10 shadow-lg">
              Edgentiq
            </div>
            <div className="w-full h-1 bg-brand-amber"></div>
          </div>

          {/* Right Side (Internal) */}
          <div className="w-full md:w-2/5 text-center md:text-left">
            <h3 className="text-2xl font-lora text-brand-charcoal">2. Save Time & Run Smarter</h3>
            <p className="font-montserrat font-bold mt-1 text-brand-teal">Your Internal Operations, Automated.</p>
            <p className="mt-4 text-gray-600">
              We build the custom dashboards, internal tools, and automated workflows that eliminate spreadsheets, reduce manual work, and connect your team's tools together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
