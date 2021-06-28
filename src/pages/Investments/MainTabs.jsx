import { Text, Heading, Spinner, useToast } from '@chakra-ui/react';
import { TabPanels, Tab, Tabs, TabList, TabPanel } from '@chakra-ui/tabs';
import { useEffect, useState } from 'react';
import { HIGHLIGHT } from '../../constants/colors.json';
import { getInvestments } from '../../services/api';
import AssetList from './InvestmentDetail';

const MainTabs = ({ activeInvestments, pendingInvestments, loading }) => {
  const toast = useToast();
  const [completedInvestments, setCompletedInvestments] = useState([]);

  useEffect(() => {
    getInvestments('completed')
      .then(res => {
        setCompletedInvestments(res.data.payload.investments);
      })
      .catch(err => {
        const message = err.response
          ? err.response.data.message
          : 'error fetching assets contact admin';
        toast({
          title: 'Error Fetching Assets',
          description: message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      });
  }, []);

  return (
    <Tabs background="white" shadow="lg">
      <TabList>
        <Tab _selected={{ color: HIGHLIGHT }}>
          <Heading size="sm">Active Investments</Heading>
        </Tab>
        <Tab _selected={{ color: HIGHLIGHT }}>
          <Heading size="sm">Completed Investments</Heading>
        </Tab>
      </TabList>

      <TabPanels>
        {/* Finance Asset */}

        <TabPanel>
          {loading && <Spinner />}
          {!loading && <AssetList data={activeInvestments} />}
          <Heading color="abudanza.primary" as="h2" size="md">
            Pending Investments
          </Heading>
          <Text>
            Investment becomes Active after payment has been confirmed. If you
            are having issues confirming payment contact Support
          </Text>
          {loading && <Spinner />}
          {!loading && <AssetList data={pendingInvestments} />}
        </TabPanel>

        {/* Completed Assets */}
        <TabPanel>
          {loading && <Spinner />}
          {!loading && <AssetList data={completedInvestments} />}
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MainTabs;
