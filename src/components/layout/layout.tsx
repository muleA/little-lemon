import React, { ReactNode } from 'react';
import { Header2 } from '@components/header/header2';
import Footer from '@components/footer/footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header2/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
