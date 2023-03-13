import React from 'react';
import { Outlet } from 'react-router-dom';
import './DefaultLayout.css';
import TalousNavContainer from './NavComponents/TalousNavContainer';
import AccountMenu from './NavComponents/AccountMenu';
import Footer from '../Footer/Footer';

const DefaultLayout = () => {
  return (
    <div className="default_layout_container">
      <nav className="default_layout_nav_container">
        <div className="default_layout_nav">
          <TalousNavContainer />
          <AccountMenu />
        </div>
      </nav>
      <div className="default_layout_outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
