import { GiFamilyHouse, GiCash } from 'react-icons/gi';
import { Icon } from '@chakra-ui/icons';
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
import Card from '../../components/common/Card';
import { convertCloudinaryUrlToJpeg, daysBetween } from '../../utils/utils';
import { useRef } from 'react';

const AssetDetail = ({ assetDetail }) => {
  const { status, due_date } = assetDetail;
  const daysRemaining = due_date =>
    daysBetween(new Date(Date.now()), new Date(due_date));
  return (
    <Card boxShadow="md" my="10">
      <Flex w="100%">
        <Icon
          as={GiFamilyHouse}
          boxSize="8"
          color={status === 'pending' ? 'grey' : 'abudanza.highlight'}
          mr="5"
        />
        <VStack align="start">
          <Heading as="h4" size="md">
            {assetDetail.brand} &nbsp;
            {assetDetail.model} &nbsp;
          </Heading>
          <Text>category: {assetDetail.category}</Text>
          <Text>
            Amount Paid: ₦{Number(assetDetail.amount_paid).toLocaleString()}
          </Text>
        </VStack>
        <Spacer />
        <AssetDetailDrawer assetDetail={assetDetail} />
        {assetDetail.due_date && (
          <VStack align="flex-end">
            <Heading size="lg" color="abudanza.highlight">
              {daysRemaining(assetDetail.due_date)}
            </Heading>
            <Text fontSize="xs" color="grey">
              Days Remaining
            </Text>
          </VStack>
        )}
      </Flex>
      <Box>
        {status === 'active' && (
          <>
            <Progress mt="5" colorScheme="cyan" value={80} />

            <HStack>
              <Text fontSize="xs">
                Start Date: &nbsp;
                {new Date(assetDetail.activation_date).toLocaleDateString()}
              </Text>
              <Spacer />
              <Text fontSize="xs">
                Due Date: &nbsp;
                {new Date(assetDetail.due_date).toLocaleDateString()}
              </Text>
            </HStack>
          </>
        )}
      </Box>
    </Card>
  );
};

const AssetList = ({ data }) => {
  const list = data.map(asset => <AssetDetail assetDetail={asset} />);
  return <Box>{list}</Box>;
};

export default AssetList;

function AssetDetailDrawer({ assetDetail }) {
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
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color="abudanza.primary">
            Asset Finance Details
          </DrawerHeader>

          <DrawerBody>
            <VStack fontSize="sm" color="grey" align="start">
              <HStack>
                <Text>Category:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="medium"
                  color="black"
                  size="sm"
                >
                  {assetDetail.category}
                </Text>
              </HStack>
              <HStack>
                <Text>Brand:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="medium"
                  color="black"
                  size="sm"
                >
                  {assetDetail.brand}
                </Text>
              </HStack>
              <HStack>
                <Text>Model:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="medium"
                  color="black"
                  size="sm"
                >
                  {assetDetail.model}
                </Text>
              </HStack>
              <HStack>
                <Text>Cost:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="medium"
                  color="black"
                  size="sm"
                >
                  ₦{Number(assetDetail.cost).toLocaleString()}
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
                  ₦{Number(assetDetail.amount_paid).toLocaleString()}
                </Text>
              </HStack>
              <HStack>
                <Text color="blue.500">Vendor Name:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="medium"
                  color="black"
                  size="sm"
                >
                  {assetDetail.vendor_name}
                </Text>
              </HStack>
              <HStack>
                <Text color="blue.500">Vendor Email:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="medium"
                  color="black"
                  size="sm"
                >
                  {assetDetail.vendor_email}
                </Text>
              </HStack>
              <HStack>
                <Text color="blue.500">Vendor Phone:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="medium"
                  color="black"
                  size="sm"
                >
                  {assetDetail.vendor_phone}
                </Text>
              </HStack>
              <HStack>
                <Text color="blue.500">Vendor Address:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="medium"
                  color="black"
                  size="sm"
                >
                  {assetDetail.vendor_address}
                </Text>
              </HStack>
              <HStack>
                <Text color="blue.500">Vendor City:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="medium"
                  color="black"
                  size="sm"
                >
                  {assetDetail.vendor_city}
                </Text>
              </HStack>
              <HStack>
                <Text color="blue.500">Vendor State:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="medium"
                  color="black"
                  size="sm"
                >
                  {assetDetail.vendor_state}
                </Text>
              </HStack>
              <HStack>
                <Text color="blue.500">Activation Date:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="medium"
                  color="black"
                  size="sm"
                >
                  {new Date(assetDetail.activation_date).toLocaleDateString()}
                </Text>
              </HStack>
              <HStack>
                <Text color="blue.500">Due Date:</Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="medium"
                  color="black"
                  size="sm"
                >
                  {new Date(assetDetail.due_date).toLocaleDateString()}
                </Text>
              </HStack>
              <Heading size="sm">Proof of Payment</Heading>
              <Image
                src={convertCloudinaryUrlToJpeg(assetDetail.payment_proof.url)}
                alt="payment proof"
              />
              <Heading mt="5" size="sm">
                Proforma Invoice
              </Heading>
              <Image
                src={convertCloudinaryUrlToJpeg(
                  assetDetail.proforma_invoice.url
                )}
                alt="proforma Invoice"
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
