
import React from 'react';

const DisconnectedSquaresIcon: React.FC = () => (
    <svg className="h-12 w-12 text-brand-amber" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
    </svg>
);

const ExternalInternalIcon: React.FC = () => (
    <svg className="h-12 w-12 text-brand-amber" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" />
        <path d="M15 19h6" />
        <path d="M18 16v6" />
        <path d="M3 11l6 -2l3 2l-6 2" />
        <path d="M9 7v4" />
        <path d="M12 12v-1.5" />
    </svg>
);

const TooManyVendorsIcon: React.FC = () => (
    <svg className="h-12 w-12 text-brand-amber" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 15h.01" />
        <path d="M19.071 4.929l-1.414 1.414" />
        <path d="M6.343 17.657l-1.414 1.414" />
        <path d="M4.929 4.929l1.414 1.414" />
        <path d="M17.657 17.657l1.414 1.414" />
        <path d="M4 12h-1" />
        <path d="M13 4v-1" />
        <path d="M21 12h-1" />
        <path d="M12 21v-1" />
    </svg>
);

const PainPointCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-8 border border-gray-200 rounded-lg">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-montserrat font-bold text-center text-brand-charcoal mb-2">{title}</h3>
    <p className="text-base text-gray-600 text-center">{children}</p>
  </div>
);


const Problem: React.FC = () => {
  return (
    <section id="problem" className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl font-lora font-bold tracking-tight text-brand-teal sm:text-5xl">
            Your Tech Should "Just Work." Why Doesn't It?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-brand-charcoal lg:mx-auto">
            As a business owner, you're stuck in the middle.
          </p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <PainPointCard icon={<DisconnectedSquaresIcon />} title="Fragmented Systems">
            Your marketing agency built a website, your IT guy set up your email, and you're using 5 different SaaS tools that don't talk to each other. Nothing is connected.
          </PainPointCard>
          <PainPointCard icon={<ExternalInternalIcon />} title="External vs. Internal">
            You have a great-looking website, but the leads it generates just sit in an inbox. Your internal processes are a mess of spreadsheets and manual data entry.
          </PainPointCard>
          <PainPointCard icon={<TooManyVendorsIcon />} title="Too Many Vendors">
            You have a bill for your website, a bill for your CRM, a bill for your email marketing, and a freelancer you call when something breaks. It's expensive and chaotic.
          </PainPointCard>
        </div>
      </div>
    </section>
  );
};

export default Problem;
