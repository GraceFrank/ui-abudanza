import {
  Image,
  Text,
  Heading,
  HStack,
  VStack,
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
} from '@chakra-ui/react';
import { useRef } from 'react';
import TitleDetail from '../../../components/common/TitleDetail';

export function UserDetails({ data, size = 'md', children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        ref={btnRef}
        size="xs"
        colorScheme="cyan"
        variant="outline"
        onClick={onOpen}
      >
        Details
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={size}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color="abudanza.primary">User Details</DrawerHeader>

          <DrawerBody>
            <VStack fontSize="sm" align="start" spacing={5}>
              {children}

              <HStack spacing="10">
                <TitleDetail title="Status" value={data.status} />
                <TitleDetail title="Role" value={data.user.role} />
              </HStack>

              <HStack spacing="10">
                <TitleDetail title="First Name" value={data.user.first_name} />
                <TitleDetail title="Last Name" value={data.user.last_name} />
              </HStack>

              <HStack spacing="10">
                <TitleDetail title="Title" value={data.title} />
                <TitleDetail
                  title="Marital Status"
                  value={data.marital_status}
                />
              </HStack>

              <HStack spacing="10">
                <TitleDetail title="Phone Number" value={data.user.phone} />
                <TitleDetail
                  title="Email"
                  value={data.user.email}
                  textTransform="lowercase"
                />
              </HStack>

              <HStack spacing="10">
                <TitleDetail
                  title="Mother's Maiden Name"
                  value={data.mothers_maiden_name}
                />
                <TitleDetail title="Nationality" value={data.nationality} />
              </HStack>

              <HStack spacing="10">
                <TitleDetail
                  title="Date of Birth"
                  value={new Date(data.birthday).toLocaleDateString()}
                />
                <TitleDetail title="BVN" value={data.bvn} />
              </HStack>

              <TitleDetail title="Street Address" value={data.street_address} />
              <TitleDetail
                title="Street Address 2"
                value={data.street_address2}
              />
              <TitleDetail title="City" value={data.city} />

              <HStack spacing="10">
                <TitleDetail title="State" value={data.state} />
                <TitleDetail title="Country" value={data.country} />
              </HStack>
              <Heading size="sm">ID card</Heading>
              {/* <Image
                src={convertCloudinaryUrlToJpeg(data.payment_proof.url)}
                alt="payment proof"
              /> */}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
