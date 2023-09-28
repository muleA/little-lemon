import { lazy } from "react";

const Bookings = lazy(() => import("@components/Bookings"));

export const Booking = () => {
  return (
    <>
      <Bookings />
    </>
  );
};
