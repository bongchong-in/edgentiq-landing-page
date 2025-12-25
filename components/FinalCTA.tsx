import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className="bg-brand-teal">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-lora font-extrabold text-white sm:text-5xl">
          Ready to Have Technology That <span className="italic">Actually</span> Works for You?
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-100">
          Let's find out how we can connect your entire business, from the first click to the final invoice. The first call is free.
        </p>
        <a 
          href="#/book"
          className="mt-8 w-full inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-md shadow-lg text-lg font-bold text-brand-teal bg-brand-amber hover:bg-yellow-600 sm:w-auto transform hover:-translate-y-1 transition-all duration-300"
        >
          Book My Free "Full-Stack" Audit Now
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;