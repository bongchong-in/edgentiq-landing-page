
import React from 'react';

const MarketingIcon: React.FC = () => (
    <svg className="h-12 w-12 text-brand-amber" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 16V7h5l4 4h-4Z"/><path d="m7 16-1.3-1.3a1.5 1.5 0 0 1 0-2.1L7 11.3"/></svg>
);

const DataIcon: React.FC = () => (
    <svg className="h-12 w-12 text-brand-amber" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
);

const AutomationIcon: React.FC = () => (
    <svg className="h-12 w-12 text-brand-amber" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m7.8 16.2-2.9 2.9"/><path d="M6 12H2"/><path d="m7.8 7.8-2.9-2.9"/><circle cx="12" cy="12" r="4"/><path d="m16.24 12-.49-2.2-2.2-.49-.49 2.2 2.2.49Z"/></svg>
);

const AIIcon: React.FC = () => (
    <svg className="h-12 w-12 text-brand-amber" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect x="4" y="12" width="8" height="8" rx="2"/><path d="M12 12v8h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4Z"/><path d="m12 8 8-8"/><path d="m16 4 4 4"/></svg>
);

const SpecialtyCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
    <div className="flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-montserrat font-bold text-brand-charcoal">{title}</h3>
      <p className="mt-1 text-base text-gray-600">{children}</p>
    </div>
  </div>
);


const Specialties: React.FC = () => {
  return (
    <section id="specialties" className="bg-brand-light-gray py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl font-lora font-bold tracking-tight text-brand-teal sm:text-5xl">
            Our Core Capabilities
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-brand-charcoal lg:mx-auto">
            We're experts across the full technology stack, from customer acquisition to internal operations.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
          <SpecialtyCard icon={<MarketingIcon />} title="Marketing Tech & Websites">
            From pixel-perfect landing pages to integrated CRMs, we build the high-performance engine that drives your customer growth.
          </SpecialtyCard>
          <SpecialtyCard icon={<DataIcon />} title="Data Strategy & Consultation">
            We turn your raw data into your biggest asset with custom dashboards, clear analytics, and actionable insights that inform your decisions.
          </SpecialtyCard>
          <SpecialtyCard icon={<AutomationIcon />} title="Workflow Automation">
            We connect your disparate apps and automate repetitive manual tasks, saving you hundreds of hours and reducing costly errors.
          </SpecialtyCard>
          <SpecialtyCard icon={<AIIcon />} title="Applied AI & Custom Tools">
            Leverage the power of AI to create intelligent internal tools, streamline complex operations, and deliver personalized customer experiences.
          </SpecialtyCard>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
