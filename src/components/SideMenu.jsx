import { Box, Heading, VStack } from '@chakra-ui/layout';
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
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { BiLogOut } from 'react-icons/bi';

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
export const MenuItems = () => {
  const { pathname } = useLocation();
  const menuItems = menuOptions.map((item, index) => {
    const { path } = item;
    const color = pathname === path ? HIGHLIGHT : PRIMARY;
    return (
      <Box
        key={index}
        w="80%"
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
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
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <Box
      position="fixed"
      overflow="auto"
      display="block"
      boxShadow="lg"
      h="100vh"
      w="22%"
      background="rgba(190, 226, 242, 0.28)"
    >
      <Center py="12">
        <Image src={logo} width="80%" alignSelf="start" />
      </Center>

      <MenuItems />
      <Button
        onClick={logout}
        leftIcon={<Icon as={BiLogOut} />}
        variant="outline"
        colorScheme="blue"
        my="20"
        mx="5"
      >
        Logout
      </Button>
    </Box>
  );
};

export default SideMenu;
