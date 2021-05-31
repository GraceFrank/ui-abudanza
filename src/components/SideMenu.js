import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import AssetIcon from '../images/asset-icon';
import DashboardIcon from '../images/dashboard-icon';
import InvestmentIcon from '../images/investment-icon';
import ReferralIcon from '../images/referral-icon';
import ProfileIcon from '../images/profile-icon';
import Icon from '@chakra-ui/icon';

const menuOptions = [
  {
    label: 'DASHBOARD',
    path: '/dashboard',
    svg: DashboardIcon,
  },
  {
    label: 'PROFILE',
    path: '/profile',
    svg: ProfileIcon,
  },
  {
    label: 'ASSET',
    path: '/asset',
    svg: AssetIcon,
  },
  {
    label: 'INVESTMENT',
    path: '/investment',
    svg: InvestmentIcon,
  },
  {
    label: 'REFERRAL',
    path: '/referral',
    svg: ReferralIcon,
  },
];
const menuItems = menuOptions.map(item => {
  return (
    <HStack>
      <Icon as={item.svg} />
      <Heading as="h5" size="xs">
        {item.label}
      </Heading>
      <Icon as={IoIosArrowForward} />
    </HStack>
  );
});

const SideMenu = () => {
  return (
    <Box h="100vh" w="20%" background="rgba(190, 226, 242, 0.28);">
      <VStack>{menuItems}</VStack>
    </Box>
  );
};

export default SideMenu;
