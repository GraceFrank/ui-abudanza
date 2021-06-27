import { GiCash } from 'react-icons/gi';
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

export const InvestmentDetail = ({ investmentDetail }) => {
  const { status, due_date } = investmentDetail;
  const daysRemaining = due_date =>
    daysBetween(new Date(Date.now()), new Date(due_date));
  return (
    <Card borderColor="abudanza.secondary" boxShadow="md" my="10">
      <Flex w="100%">
        <Icon
          as={GiCash}
          boxSize="8"
          color={
            status === 'pending' ? 'abudanza.secondary' : 'abudanza.highlight'
          }
          mr="3"
        />
        <VStack fontSize="sm" align="start">
          <HStack alignItems="start" justifyContent="start" spacing="1">
            <Text>Expected Returns: &nbsp;</Text>
            <Heading color="abudanza.primary" as="h4" size="md">
              ₦{Number(investmentDetail.amount_due).toLocaleString()}
            </Heading>
          </HStack>
          <HStack alignItems="start" justifyContent="start" spacing="1">
            <Text>Status: </Text>
            <Text
              fontWeight="medium"
              textTransform="capitalize"
              color={status === 'pending' ? 'red.500' : 'green.500'}
              as="h4"
              size="md"
            >
              {investmentDetail.status}
            </Text>
          </HStack>
          <Text>
            Amount Invested: ₦
            {Number(investmentDetail.amount_paid).toLocaleString()}
          </Text>
        </VStack>
        <Spacer />

        <VStack spacing="0" align="flex-end">
          <Heading size="lg" my="" color="green.400">
            {investmentDetail.interest_rate}%
          </Heading>
          <Text fontSize="xs" color="grey">
            in {investmentDetail.duration} Days
          </Text>
          <Box pt="4">
            <InvestmentDetailDrawer investmentDetail={investmentDetail} />
          </Box>
        </VStack>
      </Flex>
      <Box>
        {status === 'active' && (
          <>
            <Progress
              mt="5"
              colorScheme="cyan"
              value={((90 - daysRemaining(due_date)) * 90) / 100}
            />

            <HStack>
              <Text fontSize="xs">
                Start Date: &nbsp;
                {new Date(
                  investmentDetail.activation_date
                ).toLocaleDateString()}
              </Text>
              <Spacer />
              <Text fontSize="xs">
                Due Date: &nbsp;
                {new Date(investmentDetail.due_date).toLocaleDateString()}
              </Text>
            </HStack>
          </>
        )}
      </Box>
    </Card>
  );
};

const InvestmentList = ({ data }) => {
  const list = data.map(investment => (
    <InvestmentDetail key={investment._id} investmentDetail={investment} />
  ));
  return <Box>{list}</Box>;
};

export default InvestmentList;

function InvestmentDetailDrawer({ investmentDetail }) {
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
            Investment Details
          </DrawerHeader>

          <DrawerBody>
            <VStack fontSize="sm" color="grey" align="start">
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
