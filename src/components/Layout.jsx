import { Grid } from '@chakra-ui/layout';
import { GridItem } from '@chakra-ui/layout';
import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';

const Layout = ({ children }) => {
  return (
    <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)">
      <GridItem rowSpan={2} colSpan={1} bg="rgba(190, 226, 242, 0.28)">
        <SideMenu />
      </GridItem>
      <GridItem colSpan={4}>
        <Header />
        {children}
      </GridItem>
    </Grid>
  );
};

export default Layout;
