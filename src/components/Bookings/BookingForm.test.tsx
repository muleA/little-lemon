/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import React from 'react';
describe('Booking form', () => {
  const availableTimes = ['17:00', '17:30'];
  const today = new Date().toISOString().split('T')[0];
  const dispatchOnDateChange = jest.fn();
  const submitData = jest.fn();

  test('should correctly render all fields and their default values', async () => {
    render(
      <BookingForm availableTimes={availableTimes} submitData={submitData} 
      />
    );

    const dateInput = screen.getByLabelText(/Date/) as HTMLInputElement;
    const timeSelect = screen.getByLabelText(/Time/) as HTMLSelectElement;
    const timeOptions = await screen.findAllByTestId('booking-time-option');
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/) as HTMLInputElement;
    const occasionSelect = screen.getByLabelText(/Occasion/) as HTMLSelectElement;
    const occasionOptions = await screen.findAllByTestId('booking-occasion-option');
    const submitButton = screen.getByRole('button') as HTMLButtonElement;

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('id', 'booking-date');
    expect(dateInput.value).toBe(today);

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('id', 'booking-time');
    expect(timeOptions.length).toBe(2);

    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveAttribute('id', 'booking-number-guests');
    expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
    expect(numberOfGuestsInput.value).toBe('1');

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute('id', 'booking-occasion');
    expect(occasionOptions.length).toBe(2);

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toBeEnabled();
  });

  test('should successfully submit the form with default values', () => {
    render(
      <BookingForm availableTimes={availableTimes} submitData={submitData} dispatchOnDateChange={function (): void {
        throw new Error('Function not implemented.');
      } } />
    );

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(submitData).toHaveBeenCalledWith({
      date: today,
      time: availableTimes[0],
      numberOfGuests: 1,
      occasion: 'Birthday',
    });
  });

  test('should display an error message and disable the submit button when the date field is empty', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    );

    const dateInput = screen.getByLabelText(/Date/) as HTMLInputElement;
    fireEvent.change(dateInput, { target: { value: '' } });
    fireEvent.blur(dateInput);
    const errorMessage:any = screen.getByTestId('error-message');
    const submitButton = screen.getByRole('button') as HTMLButtonElement;

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Please choose a valid date');
    expect(submitButton).toBeDisabled();
  });

  test('should display an error message and disable the submit button when the number of guests field is empty', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    );

    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/) as HTMLInputElement;
    fireEvent.change(numberOfGuestsInput, { target: { value: '' } });
    fireEvent.blur(numberOfGuestsInput);
    const errorMessage = screen.getByTestId('error-message');
    const submitButton = screen.getByRole('button') as HTMLButtonElement;

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Please enter a number between 1 and 10');
    expect(submitButton).toBeDisabled();
  });
});
