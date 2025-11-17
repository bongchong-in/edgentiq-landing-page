
import React from 'react';

const UserIcon: React.FC = () => (
    <svg className="h-12 w-12 text-brand-amber" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

const BuildingIcon: React.FC = () => (
    <svg className="h-12 w-12 text-brand-amber" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="21" width="18" height="0"></rect><path d="M4 21V10.08a2 2 0 0 1 .73-1.54l5.54-4.43a2 2 0 0 1 2.5 0l5.54 4.43A2 2 0 0 1 19 10.08V21"></path><path d="M8 21v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"></path><path d="M10 9h4"></path><path d="M10 13h4"></path></svg>
);

const EnterpriseIcon: React.FC = () => (
    <svg className="h-12 w-12 text-brand-amber" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
);


const ClientCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-8 border border-gray-200 rounded-lg text-center h-full">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-montserrat font-bold text-brand-charcoal mb-2">{title}</h3>
    <p className="text-base text-gray-600">{children}</p>
  </div>
);

const WhoWeServe: React.FC = () => {
  return (
    <section id="who-we-serve" className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl font-lora font-bold tracking-tight text-brand-teal sm:text-5xl">
            Built for Businesses at Every Stage
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-brand-charcoal lg:mx-auto">
            Whether you're just starting or looking to scale, we provide the technical foundation you need to succeed.
          </p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <ClientCard icon={<UserIcon />} title="Solopreneurs & Startups">
            You're an expert in your field, not in APIs. We handle the complex tech integrations so you can focus on building your business without the technical headaches.
          </ClientCard>
          <ClientCard icon={<BuildingIcon />} title="Small & Medium Businesses">
            You've outgrown off-the-shelf tools and need a cohesive system that scales. We're the reliable tech partner who builds the integrated solutions you can't find anywhere else.
          </ClientCard>
          <ClientCard icon={<EnterpriseIcon />} title="Established MSMEs">
            Your teams are slowed down by legacy systems and inefficient workflows. We modernize and automate your operations to unlock new levels of productivity and growth.
          </ClientCard>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
