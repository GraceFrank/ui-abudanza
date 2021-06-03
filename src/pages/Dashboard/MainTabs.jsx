import { Box, Text, Heading, Spacer } from '@chakra-ui/layout';
import { TabPanels, Tab, Tabs, TabList, TabPanel } from '@chakra-ui/tabs';
import { HIGHLIGHT } from '../../constants/colors.json';
import HighlightButton from '../../components/common/HighlightButton';
import { Image } from '@chakra-ui/image';
import EmptyDeliverySvg from '../../images/empty_delivery.svg';
import { Flex } from '@chakra-ui/layout';
import HowItWorks from '../../components/HowItWorks';

const MainTabs = () => {
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
          <Flex direction={['column', 'row']}>
            <Box px="5">
              <Text my="3">You don't have any funded set</Text>
              <HighlightButton>Fund an Asset</HighlightButton>
            </Box>

            <Spacer />
            <Image src={EmptyDeliverySvg} />
          </Flex>
          <HowItWorks />
        </TabPanel>

        {/* investment */}
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MainTabs;
