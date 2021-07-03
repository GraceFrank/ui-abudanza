import { Box, Text, Heading, Spacer, Button } from '@chakra-ui/react';
import { TabPanels, Tab, Tabs, TabList, TabPanel } from '@chakra-ui/tabs';
import { HIGHLIGHT } from '../../constants/colors.json';
import HighlightButton from '../../components/common/HighlightButton';
import { Image } from '@chakra-ui/image';
import EmptyDeliverySvg from '../../images/empty_delivery.svg';
import EmptyNotes from '../../images/EmptyNotes.svg';
import { Flex } from '@chakra-ui/layout';
import HowItWorks from '../../components/HowItWorks';
import AssetList from '../AssetFinance/AssetDetails';
import InvestmentList from '../Investments/InvestmentDetail';

import { Link } from 'react-router-dom';

const MainTabs = ({ investments, assetFinance }) => {
  return (
    <Tabs background="white" shadow="lg">
      <TabList>
        <Tab _selected={{ color: HIGHLIGHT }}>
          <Heading size="sm">Active Asset Finance</Heading>
        </Tab>
        <Tab _selected={{ color: HIGHLIGHT }}>
          <Heading size="sm">Active Investments</Heading>
        </Tab>
      </TabList>

      <TabPanels>
        {/* Finance Asset */}
        <TabPanel>
          <Flex size="sm" width="100%" alignItems="end">
            <Link to="/assets">
              <Button background="abudanza.secondary"> View All Assets</Button>
            </Link>
          </Flex>
          {assetFinance.totalContribution < 0 && (
            <Flex direction={['column', 'row']}>
              <Box px="5">
                <Text my="3">You don't have any Active Asset Finances</Text>
                <HighlightButton>Fund an Asset</HighlightButton>
              </Box>

              <Spacer />
              <Image src={EmptyDeliverySvg} />
            </Flex>
          )}
          {assetFinance.totalContribution > 0 && (
            <AssetList data={[assetFinance.assets[0]]} />
          )}
          <HowItWorks />
        </TabPanel>

        {/* investment */}
        <TabPanel>
          <Flex size="sm" width="100%" alignItems="end">
            <Link to="/investments">
              <Button background="abudanza.secondary">
                View All Investments
              </Button>
            </Link>
          </Flex>
          {investments.totalContribution < 0 && (
            <Flex direction={['column', 'row']}>
              <Box px="5">
                <Text my="3">You don't have any Active Investments</Text>
                <Link to="/investments">
                  <HighlightButton>Invest Now</HighlightButton>
                </Link>
              </Box>

              <Spacer />
              <Image src={EmptyNotes} />
            </Flex>
          )}
          {investments.totalContribution > 0 && (
            <InvestmentList data={[investments.investments[0]]} />
          )}
          <HowItWorks />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MainTabs;
