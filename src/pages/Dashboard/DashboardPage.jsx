import { Box, Heading } from '@chakra-ui/layout';
import React from 'react';
import Layout from '../../components/Layout';
import { PRIMARY, BACKGROUND } from '../../constants/colors.json';
import AdvertBanners from './AdvertBanners.jsx';
import MainTabs from './MainTabs';
import SummaryCards from './SummaryCards';
import './style.css';

const Dashboard = () => {
  return (
    <Layout>
      <header>
        <Box background={PRIMARY} p="5" pt="0">
          <Heading as="h1" color="white" size="md" mb="4">
            DASHBOARD
          </Heading>
          <SummaryCards />
        </Box>
      </header>
      <section>
        <Box p="5" background="#E1EBF0">
          <AdvertBanners />
        </Box>
      </section>
      <main>
        <Box p="5" background={BACKGROUND}>
          <MainTabs />
        </Box>
      </main>
    </Layout>
  );
};

export default Dashboard;
