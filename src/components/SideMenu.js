import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Icon from '@chakra-ui/icon';
import { FaUserAlt, FaUsers } from 'react-icons/fa';
import { GiFamilyHouse, GiCash } from 'react-icons/gi';
import { MdDashboard } from 'react-icons/md';
import { PRIMARY, HIGHLIGHT } from '../constants/colors.json';
import logo from '../images/logo_md.png';
import { Image } from '@chakra-ui/image';
import { Center } from '@chakra-ui/layout';
import { useLocation } from 'react-router-dom';
import { Container } from '@chakra-ui/layout';
import { LinkBox } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/layout';

const menuOptions = [
  {
    label: 'DASHBOARD',
    path: '/dashboard',
    svg: MdDashboard,
  },
  {
    label: 'PROFILE',
    path: '/profile',
    svg: FaUserAlt,
  },
  {
    label: 'ASSET',
    path: '/asset',
    svg: GiFamilyHouse,
  },
  {
    label: 'INVESTMENT',
    path: '/investment',
    svg: GiCash,
  },
  {
    label: 'REFERRAL',
    path: '/referral',
    svg: FaUsers,
  },
];
const MenuItems = () => {
  const { pathname } = useLocation();
  const menuItems = menuOptions.map(item => {
    const { path } = item;
    const color = pathname === path ? HIGHLIGHT : PRIMARY;
    return (
      <Box w="80%" display="flex" justifyContent="start" alignItems="center">
        <Icon as={item.svg} boxSize="6" color={color} />
        <Link href={item.path}>
          <Heading as="h5" size="sm" mx="4" color={color}>
            {item.label}
          </Heading>
        </Link>
        <Icon boxSize="6" color={color} as={IoIosArrowForward} />
      </Box>
    );
  });

  return <VStack spacing="6">{menuItems}</VStack>;
};

const SideMenu = () => {
  return (
    <Box boxShadow="lg" h="100vh" background="rgba(190, 226, 242, 0.28);">
      <Center py="12">
        <Image src={logo} width="80%" alignSelf="start" />
      </Center>
      <MenuItems />
    </Box>
  );
};

export default SideMenu;
