/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import BookingForm from "./BookingForm";

const Bookings: React.FC = () => {
  return (
    <div className="mx-auto text-center">
      <h2  className="mt-10 text-primary-900 text-lg">Table reservation</h2>
      <div className="min-h-screen flex items-center justify-center">
        <BookingForm />
      </div>
    </div>
  );
};

export default Bookings;
