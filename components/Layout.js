import React from 'react';
import SideNavBar from './SideNavBar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <SideNavBar />
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
};

export default Layout;
