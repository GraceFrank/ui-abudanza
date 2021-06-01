import { Button } from '@chakra-ui/button'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader DrawerContent, DrawerBody, DrawerFooter } from '@chakra-ui/modal'
import React from 'react'

const MobileSideMenu =()=> {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
     <Button ref={btnRef} onClick={onOpen} rightIcon={<HamburgerIcon />} colorScheme="white" variant="outline">
  </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileSideMenu