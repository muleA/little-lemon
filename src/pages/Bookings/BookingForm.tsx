/* eslint-disable no-undef */
import React, { useState, ChangeEvent, FormEvent } from 'react';
import FormField from './FormField';

interface BookingFormProps {
  availableTimes: string[];
  dispatchOnDateChange?: (date: string) => void;
  submitData: (data: {
    date: string;
    time: string;
    numberOfGuests: number;
    occasion: string;
  }) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
  availableTimes,
  dispatchOnDateChange,
  submitData,
}) => {
  const minimumDate = new Date().toISOString().split('T')[0];
  const defaultTime = availableTimes[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const occasions = ['Birthday', 'Anniversary'];
  const invalidDateErrorMessage = 'Please choose a valid date';
  const invalidTimeErrorMessage = 'Please choose a valid time';
  const invalidOccasionErrorMessage = 'Please choose a valid occasion';
  const invalidNumberOfGuestsErrorMessage =
    'Please enter a number between 1 and 10';

  const [date, setDate] = useState<string>(minimumDate);
  const [time, setTime] = useState<string>(defaultTime);
  const [numberOfGuests, setNumberGuests] = useState<number>(
    minimumNumberOfGuests
  );
  const [occasion, setOccasion] = useState<string>(occasions[0]);

  const isDateValid = (): boolean => date !== '';
  const isTimeValid = (): boolean => time !== '';
  const isNumberOfGuestsValid = (): boolean => numberOfGuests !== '';
  const isOccasionValid = (): boolean => occasion !== '';

  const areAllFieldsValid = (): boolean =>
    isDateValid() && isTimeValid() && isNumberOfGuestsValid() && isOccasionValid();

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setTime(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault();
    submitData({ date, time, numberOfGuests, occasion });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormField
        label="Date"
        htmlFor="booking-date"
        hasError={!isDateValid()}
        errorMessage={invalidDateErrorMessage}
      >
        <input
          type="date"
          id="booking-date"
          name="booking-date"
          min={minimumDate}
          value={date}
          required={true}
          onChange={handleDateChange}
        />
      </FormField>
      <FormField
        label="Time"
        htmlFor="booking-time"
        hasError={!isTimeValid()}
        errorMessage={invalidTimeErrorMessage}
      >
        <select
          id="booking-time"
          name="booking-time"
          value={time}
          required={true}
          onChange={handleTimeChange}
        >
          {availableTimes.map((times) => (
            <option data-testid="booking-time-option" key={times}>
              {times}
            </option>
          ))}
        </select>
      </FormField>
      <FormField
        label="Number of guests"
        htmlFor="booking-number-guests"
        hasError={!isNumberOfGuestsValid()}
        errorMessage={invalidNumberOfGuestsErrorMessage}
      >
        <input
          type="number"
          id="booking-number-guests"
          name="booking-number-guests"
          value={numberOfGuests}
          min={minimumNumberOfGuests}
          max={maximumNumberOfGuests}
          required={true}
          onChange={(e) => setNumberGuests(Number(e.target.value))}
        />
      </FormField>
      <FormField
        label="Occasion"
        htmlFor="booking-occasion"
        hasError={!isOccasionValid()}
        errorMessage={invalidOccasionErrorMessage}
      >
        <select
          id="booking-occasion"
          name="booking-occasion"
          value={occasion}
          required={true}
          onChange={(e) => setOccasion(e.target.value)}
        >
          {occasions.map((occasion) => (
            <option data-testid="booking-occasion-option" key={occasion}>
              {occasion}
            </option>
          ))}
        </select>
      </FormField>
      <button
          className="inline-block rounded-full hover:bg-grayBackground hover:text-white hover:border-2	
          mt-8 px-4 py-2 bg-grayBackground text-white border border-transparent hover:border-yellow-400 focus:border-yellow-400"
          type="submit"
        disabled={!areAllFieldsValid()}
      >
        Make your reservation
      </button>
    </form>
  );
};

export default BookingForm;
