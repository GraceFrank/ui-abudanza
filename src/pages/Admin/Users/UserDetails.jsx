import {
  Image,
  Box,
  Text,
  Heading,
  HStack,
  Progress,
  Spacer,
  VStack,
  Flex,
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

export function UserDetails({ investmentDetail, size = 'sm', children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  console.log('I;NVESTMENT DETAIL', investmentDetail);

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
          <DrawerHeader color="abudanza.primary">
            Investment Details
          </DrawerHeader>

          <DrawerBody>
            <VStack fontSize="sm" color="grey" align="start">
              {children}

              <HStack>
                <Text>Status:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="medium"
                  color={
                    investmentDetail.status === 'pending'
                      ? 'red.500'
                      : 'green.500'
                  }
                  size="sm"
                >
                  {investmentDetail.status}
                </Text>
              </HStack>

              <HStack>
                <Text>Duration:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="medium"
                  color="black"
                  size="sm"
                >
                  {investmentDetail.duration} Days
                </Text>
              </HStack>
              <HStack>
                <Text>Interest Rate:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="bold"
                  color="green.500"
                  fontSize="md"
                >
                  {investmentDetail.interest_rate}%
                </Text>
              </HStack>
              <HStack>
                <Text>Expected Returns:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="bold"
                  color="green.500"
                  fontSize="md"
                >
                  ₦{Number(investmentDetail.amount_due).toLocaleString()}
                </Text>
              </HStack>
              <HStack>
                <Text>Amount Paid:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="medium"
                  color="black"
                  size="sm"
                >
                  ₦{Number(investmentDetail.amount_paid).toLocaleString()}
                </Text>
              </HStack>

              <HStack>
                <Text>Activation Date:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="medium"
                  color="black"
                  size="sm"
                >
                  {investmentDetail.due_date &&
                    new Date(
                      investmentDetail.activation_date
                    ).toLocaleDateString()}
                </Text>
              </HStack>
              <HStack>
                <Text>Due Date:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="medium"
                  color="black"
                  size="sm"
                >
                  {investmentDetail.due_date &&
                    new Date(investmentDetail.due_date).toLocaleDateString()}
                </Text>
              </HStack>
              <Heading size="sm">Proof of Payment</Heading>
              <Image
                src={convertCloudinaryUrlToJpeg(
                  investmentDetail.payment_proof.url
                )}
                alt="payment proof"
              />
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
