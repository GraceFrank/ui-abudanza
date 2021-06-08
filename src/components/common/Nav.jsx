import React from 'react';
import MainNav from './MainNav';
import SubNavbar from './SubNav';

const Nav = ({ children }) => {
  return (
    <nav>
      <SubNavbar />
      <MainNav />
    </nav>
  );
};

export default Nav;
