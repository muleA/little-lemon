import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "./components/layout/layout";
import Loader from "@libs/ui/loader";
import SSRCompatibleSuspense from "@libs/ui/ssr-suspense";
import ErrorBoundary from "@libs/ui/error-boundary";
import AuthProvider from "@libs/hooks/auth-provider";
import AppRoutes from "@libs/routes/routing";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const firstWord = pathSegments.find(
      (segment: string) => segment.trim() !== ""
    );
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
              <Loader />
            </div>
          }
        >
          {" "}
          <AuthProvider>
            <Layout>
              <AppRoutes /> {/* Use the AppRoutes component here */}
            </Layout>
          </AuthProvider>
        </SSRCompatibleSuspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
