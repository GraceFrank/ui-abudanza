import { Box, Text, Heading, HStack } from '@chakra-ui/layout';
import { TabPanels, Tab, Tabs, TabList, TabPanel } from '@chakra-ui/tabs';
import { HIGHLIGHT } from '../../constants/colors.json';
import HighlightButton from '../../components/common/HighlightButton';
import { Image } from '@chakra-ui/image';
import EmptyDeliverySvg from '../../images/empty_delivery.svg';
import { Flex } from '@chakra-ui/layout';
import HowItWorks from '../../components/HowItWorks';
import { GiFamilyHouse, GiCash } from 'react-icons/gi';
import { Icon } from '@chakra-ui/icons';
import { Slider } from '@chakra-ui/react';

const MainTabs = () => {
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
          <Box>
            <HStack>
              <Icon as={GiFamilyHouse} boxSize="8" color="abudanza.highlight" />
              <Box>
                <Slider color="abudanza.highlight" />
              </Box>
            </HStack>
          </Box>
        </TabPanel>

        {/* Completed Assets */}
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
