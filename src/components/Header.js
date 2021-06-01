import React from 'react';
import { PRIMARY } from '../constants/colors.json';
import { Flex, Text, HStack, Badge, Box } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { FaUserAlt } from 'react-icons/fa';
import { MdNotificationsNone } from 'react-icons/md';
import { Divider } from '@chakra-ui/layout';

const Header = () => {
  const user = {};
  return (
    <Box px="5" py="10" bg={PRIMARY}>
      <Flex justifyContent="space-between">
        <Box color="white">
          <strong>Account Id: </strong>68997-67
        </Box>
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
    </Box>
  );
};

export default Header;
