import { Box } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';

import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react';
import Header from './Header';
import SideMenu, { MobileMenu } from './SideMenu';

const Layout = ({ children }) => {
  const [isMobileView] = useMediaQuery('(max-width: 600px)');

  return (
    <Box>
      <Box back>
        <Flex>
          {!isMobileView && <SideMenu />}
          <Header />
        </Flex>
      </Box>
    </Box>
  );
};

export default Layout;
