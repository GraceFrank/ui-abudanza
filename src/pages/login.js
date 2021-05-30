import { Box } from '@chakra-ui/layout';
import React from 'react';
import SubNavbar from '../components/common/SubNav';
import MainNav from '../components/common/MainNav';

const LoginPage = props => {
  return (
    <Box>
      <SubNavbar />
      <MainNav />
      Login Page
    </Box>
  );
};

export default LoginPage;
