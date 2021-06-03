import { Box } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';

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
      <Box>
        <Flex>
          {!isMobileView && <SideMenu />}
          <Box w={isMobileView ? '100%' : '78%'}>
            <Header />
            {children}
            <Footer2 />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Layout;
