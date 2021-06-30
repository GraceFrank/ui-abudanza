import { Box } from '@chakra-ui/layout';

import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react';
import { Footer2 } from './Footer.jsx';
import Header from '../Header.jsx';
import SideMenu from '../SideMenu.jsx';
import { BACKGROUND } from '../../constants/colors.json';

const Layout = ({ children }) => {
  const [isMobileView] = useMediaQuery('(max-width: 600px)');

  return (
    <Box background={BACKGROUND}>
      {!isMobileView && <SideMenu />}
      <Box ml={isMobileView ? '0' : '22%'} w={isMobileView ? '100%' : '78%'}>
        <Header />
        <Box minHeight="72vh" w="100%">
          {children}
        </Box>
        <Footer2 />
      </Box>
    </Box>
  );
};

export default Layout;
