
import React from 'react';
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
  const path = window.location.pathname;

  const renderContent = () => {
    if (path === '/book') {
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
