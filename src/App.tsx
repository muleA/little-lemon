
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "./components/layout/layout";
import AboutUsPage from "./pages/about";
import Menus from "./pages/menu";
import Home from "./pages/home";
import Bookings from "./pages/booking";
import PageNotFound from "./pages/page-not-found";
import ConfirmedBooking from "@components/Bookings/ConfirmedBooking";

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
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/menu" element={<Menus />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/confirmedBooking" element={<ConfirmedBooking />} />
          <Route path="/orderOnline" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
