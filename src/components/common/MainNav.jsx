import { Image } from '@chakra-ui/image';
import { Container, HStack, VStack } from '@chakra-ui/layout';
import { Box, Flex, Link, Heading } from '@chakra-ui/layout';
import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { PRIMARY, HIGHLIGHT, BACKGROUND } from '../../constants/colors.json';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useLocation } from 'react-router-dom';

const NavMenu = ({ nav_items, path }) => {
  return nav_items.map(item => {
    const color = item.href === path ? HIGHLIGHT : PRIMARY;
    console.log(item);
    return (
      <Link key={item.label} href={item.href}>
        <Heading as="h6" size="xs" color={color}>
          {item.label}
        </Heading>
        {item.path === path && (
          <Box mt="2" height="3px" background={HIGHLIGHT}></Box>
        )}
      </Link>
    );
  });
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} p="2" onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

const MobileMenuItems = ({ nav_items, path }) => {
  const menuItems = nav_items.map(item => (
    <Link href={item.href} key={item.label}>
      <Heading
        as="h6"
        size="xs"
        color={path === item.href ? HIGHLIGHT : PRIMARY}
      >
        {item.label}
      </Heading>
    </Link>
  ));
  console.log(menuItems);
  return (
    <Box>
      <VStack
        mt="20"
        border="1px"
        borderColor="gray.200"
        px="5"
        py="3"
        spacing={3.5}
        align="flex-end"
      >
        {menuItems}
      </VStack>
    </Box>
  );
};

const MainNav = () => {
  const { pathname } = useLocation();
  const [isMobileView] = useMediaQuery('(max-width: 600px)');
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const NAV_ITEMS = [
    { label: 'HOME', href: '/home' },
    { label: 'SERVICES', href: '/services' },
    { label: 'CONTACT', href: '/contact' },
    {
      label: pathname === '/login' ? 'SIGNUP' : 'LOGIN',
      href: pathname === '/login' ? '/signup' : '/login',
    },
  ];

  return (
    <>
      <Box
        position="absolute"
        zIndex="1"
        width="100%"
        pt="3"
        boxShadow="xl"
        background={BACKGROUND}
      >
        <Container minW="80%">
          <Flex justifyContent="space-between" mb="2">
            <Image src={logo} alt="logo" />
            <HStack spacing="6" display="flex" alignSelf="flex-end">
              {isMobileView ? (
                <MenuToggle isOpen={isOpen} toggle={toggle} />
              ) : (
                <NavMenu nav_items={NAV_ITEMS} path={pathname} />
              )}
            </HStack>
          </Flex>
        </Container>
      </Box>
      {isMobileView && isOpen && (
        <MobileMenuItems nav_items={NAV_ITEMS} path={pathname} />
      )}
    </>
  );
};

export default MainNav;
