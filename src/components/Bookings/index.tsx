/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";

const Bookings: React.FC = () => {
  const navigate = useNavigate();

  const submitData = (formData: any) => {
    console.log(formData);
    navigate("confirmedBooking");
  };

  return (
    <div className="bookings">
      <h2>Table reservation</h2>
      <BookingForm availableTimes={[]} submitData={submitData} />
    </div>
  );
};

export default Bookings;
