import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "./components/layout/layout";
import Bookings from "./pages/Bookings";
import ConfirmedBooking from "./pages/Bookings/ConfirmedBooking";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UnderConstruction from "./pages/UnderConstruction";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const firstWord = pathSegments.find((segment) => segment.trim() !== "");
    document.title = firstWord || "Little Lemon Restaurant"; // Default title
  }, [location]);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<UnderConstruction />} />
          <Route path="/menu" element={<UnderConstruction />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/confirmedBooking" element={<ConfirmedBooking />} />
          <Route path="/orderOnline" element={<UnderConstruction />} />
          <Route path="/login" element={<UnderConstruction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
