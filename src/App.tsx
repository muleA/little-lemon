import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "./components/layout/layout";
import AboutUsPage from "./pages/about";
import Menus from "./pages/menu";
import Home from "./pages/home";
import Bookings from "./pages/booking";
import PageNotFound from "./pages/page-not-found";
import ConfirmedBooking from "@components/Bookings/ConfirmedBooking";
import SignInScreen from "@components/auth/sign-in";
import SignUpScreen from "@components/auth/sign-up";
import Loader from "@libs/ui/loader";
import SSRCompatibleSuspense from "@libs/ui/ssr-suspense";
import ErrorBoundary from "@libs/ui/error-boundary";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const firstWord = pathSegments.find((segment) => segment.trim() !== "");
    document.title = firstWord || "Little Lemon Restaurant"; // Default title
  }, [location]);

  return (
    <>
      <ErrorBoundary>
        <SSRCompatibleSuspense
          fallback={
            <div
              id="root"
              className="flex min-h-screen items-center justify-center"
            >
              <Loader size={32} />
            </div>
          }
        >
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/menu" element={<Menus />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/signin" element={<SignInScreen />}></Route>
              <Route path="/signup" element={<SignUpScreen />}></Route>
              <Route path="/confirmedBooking" element={<ConfirmedBooking />} />
              <Route path="/orderOnline" element={<PageNotFound />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Layout>
        </SSRCompatibleSuspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
