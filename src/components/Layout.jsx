import { Box } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';

import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react';
import Header from './Header.jsx';
import SideMenu from './SideMenu.jsx';

const Layout = ({ children }) => {
  const [isMobileView] = useMediaQuery('(max-width: 600px)');

  return (
    <Box>
      <Box>
        <Flex>
          {!isMobileView && <SideMenu />}
          <Box w="100%">
            <Header />
            {children}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Layout;
