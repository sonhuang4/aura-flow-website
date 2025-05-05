
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BookingCalendar from '@/components/booking/BookingCalendar';

const BookPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <BookingCalendar />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookPage;
