import React from 'react';
import Footer from '../layout-components/footer/Footer';
import Header from '../layout-components/header/Header';

type StaticComponentsOfPageProps = {
  children: any;
};

const StaticComponentsOfPage = ({ children }: StaticComponentsOfPageProps) => {
  return (
    <div className="app-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default StaticComponentsOfPage;
