import {
  Box,
  useMediaQuery,
  Image,
  Center,
  HStack,
  Divider,
  Badge,
  Text,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ProSidebar, SidebarHeader, Menu, MenuItem } from 'react-pro-sidebar';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext';
import { GiCash, GiSpookyHouse } from 'react-icons/gi';
import { FaUsersCog, FaUsers, FaBell } from 'react-icons/fa';
import { RiDashboard3Fill } from 'react-icons/ri';
import logo from '../../images/logo_md.png';
import './styles.scss';
import './adminLayout.css';

import { Icon } from '@chakra-ui/icons';
import React, { useContext } from 'react';

export default function AdminLayout(props) {
  const [isMobileView] = useMediaQuery('(max-width: 600px)');
  const [user] = useContext(AuthContext);

  return (
    <Box background="abudanza.background">
      <Box className="side-nav">
        <ProSidebar className="sidebar" collapsed={isMobileView}>
          {!isMobileView && (
            <SidebarHeader>
              <Box background="white" mt="10" mr="10">
                <Center>
                  <Image w="70%" src={logo} my="5" />
                </Center>
              </Box>
            </SidebarHeader>
          )}
          <Menu iconShape="square">
            <MenuItem>
              <Link to="/admin" />
              <Icon w="25px" h="25px" as={RiDashboard3Fill} /> Dashboard
            </MenuItem>
            <MenuItem>
              <Link to="/admin/users" />
              <Icon w="25px" h="25px" as={FaUsersCog} /> Users
            </MenuItem>
            <MenuItem>
              <Link to="/admin/investments" />
              <Icon w="25px" h="25px" as={GiCash} /> Investments
            </MenuItem>
            <MenuItem>
              <Link to="/admin/assets" />
              <Icon w="25px" h="25px" as={GiSpookyHouse} /> Assets
            </MenuItem>
            <MenuItem>
              <Link to="/admin/referrals" />
              <Icon w="25px" h="25px" as={FaUsers} /> Referrals
            </MenuItem>
          </Menu>
        </ProSidebar>
      </Box>
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
