/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { fetchAPI, submitAPI } from '../../utils/fake-api';
import BookingForm from './BookingForm';
const updateTimes = (availableTimes: string[], date: string): string[] => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes: string[]): string[] =>
  [...initialAvailableTimes, ...fetchAPI(new Date())];

const Bookings: React.FC = () => {
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();

  const submitData = (formData: any) => {
    const response = submitAPI(formData);
    if (response) navigate(('confirmedBooking'));
   
  };

  return (
    <div className="bookings">
      <h2>Table reservation</h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    </div>
  );
};

export default Bookings;
