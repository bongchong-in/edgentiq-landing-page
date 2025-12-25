
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center md:order-2">
            <p className="text-base text-gray-500">
                Exclusive technology partner for{' '}
                <a 
                  href="https://mxsstudio.edgentiq.com" 
                  className="font-bold text-brand-teal hover:text-brand-amber transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                    MxS Studio
                </a>
            </p>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Edgentiq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
