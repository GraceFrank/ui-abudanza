import {
  Box,
  Heading,
  Text,
  Icon,
  Flex,
  HStack,
  Divider,
} from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import { GiCash, GiSpookyHouse } from 'react-icons/gi';
import Card from '../../../components/common/Card';

const fakeInvestmentData = [
  {
    first_name: 'mark',
    last_name: 'anderson',
    amountInvested: 50000,
    amountPayable: 65000,
  },
  {
    first_name: 'mark',
    last_name: 'anderson',
    amountInvested: 50000,
    amountPayable: 65000,
  },
  {
    first_name: 'Abdulrahaman',
    last_name: 'Abdulhaphiz',
    amountInvested: 50000,
    amountPayable: 65000,
  },
];

function InvestmentsTable({ data }) {
  const tableRows = data.map(data);
  return (
    <Card background="abudanza.background">
      <Table variant="simple" size="sm">
        <TableCaption placement="top">
          <HStack mb="5">
            <Icon as={GiCash} color="abudanza.primary" w="27px" h="27px" />
            <Heading size="md" color="abudanza.primary">
              Investments
            </Heading>
            <Divider />
            <Text fontSize="lg" fontWeight="bold">
              10
            </Text>
          </HStack>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Tenure</Th>
            <Th isNumeric>Amount</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody></Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Card>
  );
}

export default function DailyPayouts() {
  return (
    <section>
      <Box background="#E5F7FF" p="5" my="5">
        <Heading as="h2" mb="5" color="abudanza.primary" size="sm">
          Daily Payouts
        </Heading>
        <Flex direction={['column', 'row']} justify="space-between">
          <InvestmentsTable />
          <InvestmentsTable />
        </Flex>
      </Box>
    </section>
  );
}
