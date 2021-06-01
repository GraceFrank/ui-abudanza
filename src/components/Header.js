import React from 'react';
import { PRIMARY } from '../constants/colors.json';
import { Flex, Text, HStack, Badge, Box } from '@chakra-ui/layout';
import { HamburgerIcon, Icon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { FaUserAlt } from 'react-icons/fa';
import { MdNotificationsNone } from 'react-icons/md';
import { Divider } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import MobileMenu from './MobileSideMenu';
import { useMediaQuery } from '@chakra-ui/media-query';

const Header = () => {
  const [isMobileView] = useMediaQuery('(max-width: 600px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const user = {};

  return (
    <Box w="100%" px="5" py="10" bg={PRIMARY}>
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
            Account Id: 68997-67
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
          <Text color="white">Ibrahim</Text>
        </HStack>
      </Flex>
      <Divider my="2" colorScheme="whiteAlpha" orientation="horizontal" />
      <MobileMenu ref={btnRef} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Header;
