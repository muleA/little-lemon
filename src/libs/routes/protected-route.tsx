/* eslint-disable @typescript-eslint/no-explicit-any */
import useAuth from "@libs/hooks/use-auth";
import { useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }: any) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // Check if the user is authenticated
    if (!user.displayName) {
      // Redirect to the sign-in page
      navigate("/signin");
    }
  }, [user, navigate]);
  // Check if the user is authenticated
  if (!user.displayName) {
    // Redirect to the sign-in page
    navigate("/signin");
    return null;
  }
  return <Route {...rest} element={children} />;
};

export default ProtectedRoute;
