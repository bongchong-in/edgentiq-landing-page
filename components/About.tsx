
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-brand-light-gray py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex justify-center">
            <img 
              className="h-80 w-80 object-cover rounded-full shadow-2xl" 
              src="https://picsum.photos/seed/edgentiq/400/400" 
              alt="The Edgentiq Team" 
            />
          </div>
          <div>
            <h2 className="text-4xl font-lora font-bold tracking-tight text-brand-teal sm:text-5xl">
              The "Big Picture" Tech Partner You've Been Missing.
            </h2>
            <p className="mt-6 text-lg text-brand-charcoal">
              Hi, we are Edgentiq. We are not just a "agency" or an "IT consultant." We are a business-focused team of technologists with over a decade of experience helping companies connect the dots.
            </p>
            <p className="mt-4 text-lg text-brand-charcoal">
              We started Edgentiq because we saw too many business owners getting bogged down by disconnected technology. Our vision is designing and building elegant, all-in-one systems that save you time, reduce costs, and give you a powerful competitive edge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
