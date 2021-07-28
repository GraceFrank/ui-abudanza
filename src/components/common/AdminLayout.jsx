import { Box, HStack, Divider, Badge, Text, Flex } from '@chakra-ui/react';
import { FaUserAlt, FaBell } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext';
import SideNav from './AdminSideNav';
import './adminLayout.css';

import { Icon } from '@chakra-ui/icons';
import React, { useContext } from 'react';

export default function AdminLayout(props) {
  const [user] = useContext(AuthContext);

  return (
    <Box background="abudanza.background">
      <SideNav />
      <Box className="layout-content">
        <Box background="abudanza.secondary" px="5" py="3">
          <HStack spacing="5">
            <Text textTransform="capitalize">{user.firstName}</Text>
            <Divider />
            <Flex>
              <Icon fontSize="lg" as={FaBell} color="abudanza.primary" />
              <Badge variant="solid" colorScheme="red" borderRadius="50">
                1
              </Badge>
            </Flex>
            <Icon as={FaUserAlt} color="abudanza.primary" />
          </HStack>
        </Box>
        {props.children}
      </Box>
    </Box>
  );
}
