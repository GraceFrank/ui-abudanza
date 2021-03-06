import React, { useContext } from 'react';
import { PRIMARY } from '../constants/colors.json';
import { Flex, Text, HStack, Badge, Box, Heading } from '@chakra-ui/layout';
import { HamburgerIcon, Icon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { FaUserAlt } from 'react-icons/fa';
import { MdNotificationsNone } from 'react-icons/md';
import { Divider } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import MobileMenu from './MobileSideMenu';
import { useMediaQuery } from '@chakra-ui/media-query';
import { AuthContext } from '../context/AuthContext';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const [isMobileView] = useMediaQuery('(max-width: 600px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [user] = useContext(AuthContext);

  return (
    <Box w="100%" px="5" py="5" bg={PRIMARY}>
      <Flex justifyContent="space-between">
        <HStack>
          {isMobileView && (
            <Button
              ref={btnRef}
              colorScheme="whiteAlpha"
              onClick={onOpen}
              variant="outline"
              size="xs"
            >
              <HamburgerIcon color="white" />
            </Button>
          )}
          <Text fontSize={isMobileView && 'xs'} color="white" isTruncated>
            Account Id: {user.accountId}
          </Text>
        </HStack>
        <HStack spacing="4">
          <Box>
            <Icon as={MdNotificationsNone} color="white" />
            <Badge variant="solid" colorScheme="red" borderRadius="50">
              1
            </Badge>
          </Box>
          {user.photoUrl ? (
            <Image src={user.photoUrl} borderRadius="50" />
          ) : (
            <Icon as={FaUserAlt} color="white" />
          )}
          <Text textTransform="capitalize" color="white">{user.firstName}</Text>
        </HStack>
      </Flex>
      <Divider my="2" colorScheme="whiteAlpha" orientation="horizontal" />
      <MobileMenu ref={btnRef} isOpen={isOpen} onClose={onClose} />
      <Heading pt="5" as="h1" color="white" size="md" mb="4">
        <Text textTransform="uppercase">{pathname.split('/')[1]}</Text>
      </Heading>
    </Box>
  );
};

export default Header;
