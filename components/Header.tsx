import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#/" className="text-2xl font-lora font-bold text-brand-teal">
              Edgentiq
            </a>
          </div>
          <div className="hidden md:block">
            <a href="#/book" className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-teal hover:bg-opacity-90">
              Book a Free Audit
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;