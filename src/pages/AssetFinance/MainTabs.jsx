import { Text, Heading, Spinner, useToast } from '@chakra-ui/react';
import { TabPanels, Tab, Tabs, TabList, TabPanel } from '@chakra-ui/tabs';
import { useEffect, useState } from 'react';
import { HIGHLIGHT } from '../../constants/colors.json';
import { getAssets } from '../../services/api';
import AssetList from './AssetDetails';

const MainTabs = ({ activeAssets, pendingAssets, loading }) => {
  const toast = useToast();
  const [completedAssets, setCompletedAssets] = useState([]);

  useEffect(() => {
    getAssets('completed')
      .then(res => {
        setCompletedAssets(res.data.payload.assets);
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
          <Heading size="sm">Active Asset Finance</Heading>
        </Tab>
        <Tab _selected={{ color: HIGHLIGHT }}>
          <Heading size="sm">Completed Asset Finance</Heading>
        </Tab>
      </TabList>

      <TabPanels>
        {/* Finance Asset */}

        <TabPanel>
          {loading && <Spinner />}
          {!loading && <AssetList data={activeAssets} />}
          <Heading as="h2" size="lg">
            Pending Asset Finances
          </Heading>
          <Text>
            Investment becomes Active after payment has been confirmed. If you
            are having issues confirmaing payment contact Support
          </Text>
          {loading && <Spinner />}
          {!loading && <AssetList data={pendingAssets} />}
        </TabPanel>

        {/* Completed Assets */}
        <TabPanel>
          {loading && <Spinner />}
          {!loading && <AssetList data={completedAssets} />}
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MainTabs;
