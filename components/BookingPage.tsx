
import React from 'react';

const BookingPage: React.FC = () => {
  return (
    <div className="w-full" style={{ height: 'calc(100vh - 80px)' }}>
      <iframe
        src="https://calendar.app.google/L1X1EGWWwNpY4T68A"
        className="w-full h-full"
        style={{ border: 0 }}
        title="Book a Meeting with Edgentiq"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BookingPage;
