import { Route, Routes } from "react-router-dom";
import ConfirmedBooking from "@components/Bookings/ConfirmedBooking";
import SignInScreen from "@components/auth/sign-in";
import SignUpScreen from "@components/auth/sign-up";
import Bookings from "@components/Bookings";
import { AboutUsPage } from "../../pages/about";
import { Home } from "../../pages/home";
import { Menus } from "../../pages/menu";
import { PageNotFound } from "../../pages/page-not-found";
import ProtectedRoute from "./protected-route";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="**" element={<PageNotFound />} />
      <Route path="/signin" element={<SignInScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/menus" element={<Menus />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route
        path="/confirmedBooking"
        element={
          <ProtectedRoute>
            <ConfirmedBooking />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
