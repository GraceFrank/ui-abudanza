import { Box, Heading } from '@chakra-ui/layout';
import { TabPanels } from '@chakra-ui/tabs';
import { Tabs } from '@chakra-ui/tabs';
import { TabList } from '@chakra-ui/tabs';
import { TabPanel } from '@chakra-ui/tabs';
import { Tab } from '@chakra-ui/tabs';
import React from 'react';
import Layout from '../../components/Layout';
import { PRIMARY, BACKGROUND } from '../../constants/colors.json';
import AdvertBanners from './AdvertBanners.jsx';
import SummaryCards from './SummaryCards';

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
          <Tabs background="white" shadow="lg">
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </main>
    </Layout>
  );
};

export default Dashboard;
