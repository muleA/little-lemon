
const ConfirmedBooking = () => {
  // Replace these dummy booking details with your actual data
  const bookingDetails = {
    bookingNumber: '123456',
    name: 'John Doe',
    date: '2023-09-15',
    time: '19:30',
    partySize: 4,
    specialRequests: 'No special requests',
  };

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Confirmed Booking</h2>
        <div className="mb-4">
          <strong>Booking Number:</strong> {bookingDetails.bookingNumber}
        </div>
        <div className="mb-4">
          <strong>Name:</strong> {bookingDetails.name}
        </div>
        <div className="mb-4">
          <strong>Date:</strong> {bookingDetails.date}
        </div>
        <div className="mb-4">
          <strong>Time:</strong> {bookingDetails.time}
        </div>
        <div className="mb-4">
          <strong>Party Size:</strong> {bookingDetails.partySize}
        </div>
        <div className="mb-4">
          <strong>Special Requests:</strong> {bookingDetails.specialRequests}
        </div>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
