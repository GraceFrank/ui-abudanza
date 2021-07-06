import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
} from '@chakra-ui/modal';
import { MenuItems } from './SideMenu.jsx';
import logo from '../images/logo_md.png';
import Icon from '@chakra-ui/icon';
import { BiLogOut } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';

function MobileSideMenu({ ref, isOpen, onClose }) {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={ref}
      >
        <DrawerOverlay />
        <DrawerContent background="#e9f3f8">
          <DrawerCloseButton />
          <DrawerHeader>
            <Image src={logo} width="80%" alignSelf="start" />
          </DrawerHeader>

          <DrawerBody>
            <MenuItems />
          </DrawerBody>

          <DrawerFooter>
            <Button
              leftIcon={<Icon as={BiLogOut} />}
              variant="outline"
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                logout();
              }}
            >
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileSideMenu;
