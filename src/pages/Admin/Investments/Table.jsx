import {
  Badge,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
  Heading,
  Button,
} from '@chakra-ui/react';
import Card from '../../../components/common/Card';

const fakeData = new Array(10);
fakeData.fill({
  payment_proof: {
    url: 'https://res.cloudinary.com/gracefrank/image/upload/v1627209199/abudanza_test/investments/60fafeb2ba17fa3567200dc6_06pu27uCRts0yKvG-4AKV.pdf',
    public_id:
      'abudanza_test/investments/60fafeb2ba17fa3567200dc6_06pu27uCRts0yKvG-4AKV',
  },
  status: 'active',
  duration: 90,
  _id: '60fd3defd6fb04c35dd349cf',
  amount_paid: 50000,
  user: {
    _id: '60fafeb2ba17fa3567200dc6',
    first_name: 'grace',
    last_name: 'frank',
    account_id: 'e8J0Cs',
  },
  amount_due: 57500,
  interest_rate: 15,
  createdAt: '2021-07-25T10:33:19.962Z',
  updatedAt: '2021-07-25T11:24:29.023Z',
  __v: 0,
  activation_date: '2021-07-25T11:24:29.022Z',
  due_date: '2021-10-23T11:24:29.022Z',
  decline_reason: 'you suck',
});
export default function DataTable({ data = fakeData, status }) {
  const tableBody = data.map((asset, index) => {
    return (
      <Tr>
        <Td>{index}</Td>
        <Td>
          <Text textTransform="capitalize">
            {asset.user.first_name} {asset.user.last_name}
          </Text>
        </Td>
        <Td>
          <Text textTransform="capitalize">{asset.duration} Days</Text>
        </Td>
        <Td>
          <Td>
            <Text textTransform="capitalize">
              ₦ {Number(asset.amount_paid).toLocaleString()}
            </Text>
          </Td>
        </Td>
        <Td>
          <Td>
            <Text textTransform="capitalize">{asset.interest_rate}%</Text>
          </Td>
        </Td>
        <Td>
          <Badge colorScheme="green">{asset.status}</Badge>
        </Td>
        <Td>
          <Td>
            {asset.due_date ? new Date(asset.due_date).toDateString() : 'N/A'}
          </Td>
        </Td>

        <Td isNumeric>{Number(asset.amount_due).toLocaleString()}</Td>
        <Td>
          <Button>View</Button>
        </Td>
      </Tr>
    );
  });

  return (
    <Card background="white">
      <Table size="sm" variant="striped" colorScheme="whiteAlpha">
        <TableCaption placement="top">
          <Heading color="black" as="h2" size="md" mb="5">
            <Text textTransform="capitalize">
              Showing Results for {status} Investments
            </Text>
          </Heading>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>S/n</Th>
            <Th>User Name</Th>
            <Th>Tenure</Th>
            <Th>Amount Invested</Th>
            <Th>Interest</Th>
            <Th>Status</Th>
            <Th>Due Date</Th>
            <Th></Th>

            <Th isNumeric>Amount Due</Th>
          </Tr>
        </Thead>
        <Tbody>{tableBody}</Tbody>
        <Tfoot>
          <Tr>
            <Td>Show Pagination Here</Td>
          </Tr>
        </Tfoot>
      </Table>
    </Card>
  );
}
