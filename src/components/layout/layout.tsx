import React, { ReactNode } from "react";
import Footer from "@components/footer/footer";
import { Header } from "@components/header/header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="z-0 bg-gray-50">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
