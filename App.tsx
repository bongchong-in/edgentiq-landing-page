
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Process from './components/Process';
import About from './components/About';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(() => window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);

    // If the hash was empty on load, update the URL to match the default state.
    // The event listener will handle any state changes if necessary.
    if (window.location.hash !== route) {
      window.location.hash = route;
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);


  const renderContent = () => {
    if (route === '#/book') {
      return <BookingPage />;
    }
    return (
      <>
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <About />
        <FinalCTA />
      </>
    );
  };

  return (
    <div className="bg-white font-montserrat text-brand-charcoal">
      <Header />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
