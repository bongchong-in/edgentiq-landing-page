
import React from 'react';

// Icon for "Wasting Time on Manual Work"
const WastingTimeIcon: React.FC = () => (
    <svg className="h-12 w-12 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// Icon for "Struggling to Get Noticed"
const StrugglingToGetNoticedIcon: React.FC = () => (
    <svg className="h-12 w-12 text-brand-amber" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243a3 3 0 01-4.243-4.243" />
    </svg>
);

// Icon for "Disconnected Tools"
const DisconnectedSquaresIcon: React.FC = () => (
    <svg className="h-12 w-12 text-brand-amber" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
    </svg>
);


const PainPointCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-8 border border-gray-200 rounded-lg h-full">
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
            Your Business is Unique. Your Frustrations are Common.
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-brand-charcoal lg:mx-auto">
            You're an expert in your field, but you're likely held back by one of these problems:
          </p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <PainPointCard icon={<WastingTimeIcon />} title="Wasting Time on Manual Work">
            You're still using paper forms, email, and spreadsheets to manage your clients, appointments, and billing. It's slow, stressful, and prone to human error.
          </PainPointCard>
          <PainPointCard icon={<StrugglingToGetNoticedIcon />} title="Struggling to Get Noticed">
            You're invisible online. You either have no professional website, or you have an outdated one that doesn't bring in a single lead. Your brand doesn't stand out, and you're losing clients to competitors.
          </PainPointCard>
          <PainPointCard icon={<DisconnectedSquaresIcon />} title="Disconnected Tools">
            Your website doesn't talk to your calendar, which doesn't talk to your invoicing app. You're the "human glue," manually copying data from one system to another.
          </PainPointCard>
        </div>
      </div>
    </section>
  );
};

export default Problem;
