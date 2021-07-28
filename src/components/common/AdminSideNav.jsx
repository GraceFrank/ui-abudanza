import { Box, useMediaQuery, Image, Center } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { ProSidebar, SidebarHeader, Menu, MenuItem } from 'react-pro-sidebar';
import { GiCash, GiSpookyHouse } from 'react-icons/gi';
import { FaUsersCog, FaUsers, FaBell } from 'react-icons/fa';
import { RiDashboard3Fill } from 'react-icons/ri';
import logo from '../../images/logo_md.png';
import './styles.scss';
import { Icon } from '@chakra-ui/icons';

export default function AdminSideNav() {
  const { pathname } = useLocation();
  const [isMobileView] = useMediaQuery('(max-width: 600px)');

  return (
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
          <MenuItem active={pathname === '/admin'}>
            <Link to="/admin" />
            <Icon w="25px" h="25px" as={RiDashboard3Fill} /> Dashboard
          </MenuItem>
          <MenuItem active={pathname === '/admin/users'}>
            <Link to="/admin/users" />
            <Icon w="25px" h="25px" as={FaUsersCog} /> Users
          </MenuItem>
          <MenuItem active={pathname === '/admin/investments'}>
            <Link to="/admin/investments" />
            <Icon w="25px" h="25px" as={GiCash} /> Investments
          </MenuItem>
          <MenuItem active={pathname === '/admin/assets'}>
            <Link to="/admin/assets" />
            <Icon w="25px" h="25px" as={GiSpookyHouse} /> Assets
          </MenuItem>
          <MenuItem active={pathname === '/admin/referrals'}>
            <Link to="/admin/referrals" />
            <Icon w="25px" h="25px" as={FaUsers} /> Referrals
          </MenuItem>
        </Menu>
      </ProSidebar>
    </Box>
  );
}
