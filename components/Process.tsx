
import React from 'react';

const ProcessStep: React.FC<{ number: number; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
  <div className="flex flex-col items-center text-center w-full md:w-1/3 px-4">
    <div className="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center text-white font-lora font-bold text-2xl mb-4">
      {number}
    </div>
    <h3 className="text-xl font-montserrat font-bold text-brand-charcoal mb-2">{title}</h3>
    <p className="text-base text-gray-600">{children}</p>
  </div>
);

const Process: React.FC = () => {
  return (
    <section id="process" className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl font-lora font-bold tracking-tight text-brand-teal sm:text-5xl">
            Your 3-Step Path to a Fully-Integrated Business
          </h2>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-start justify-between relative">
          <div className="absolute top-8 left-0 w-full h-1 bg-brand-amber hidden md:block"></div>
          <div className="flex flex-col md:flex-row justify-between w-full gap-12 md:gap-8 z-10">
              <ProcessStep number={1} title="The 'Full-Stack' Audit">
                  In our free call, we'll map out your entire technology stack—from your website to your internal tools—to identify the biggest bottlenecks and opportunities for integration.
              </ProcessStep>
              <ProcessStep number={2} title="We Design & Build">
                  We get to work on your priority project. Whether it's a new website or an internal automation, we build it with the "big picture" in mind, ensuring it connects seamlessly.
              </ProcessStep>
              <ProcessStep number={3} title="We Deliver & Support">
                  We deliver the solution and provide the training and support you need. We're not just a vendor; we're your long-term technology partner.
              </ProcessStep>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
