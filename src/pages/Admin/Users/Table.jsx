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
    url: 'https://res.cloudinary.com/gracefrank/image/upload/v1627104467/abudanza_test/payment_proof/60fafeb2ba17fa3567200dc6_QtPHJNcxNZpbHIYYvWdBL.jpg',
    public_id:
      'abudanza_test/payment_proof/60fafeb2ba17fa3567200dc6_QtPHJNcxNZpbHIYYvWdBL',
  },
  proforma_invoice: {
    url: 'https://res.cloudinary.com/gracefrank/image/upload/v1627104464/abudanza_test/porformer_invoice/60fafeb2ba17fa3567200dc6_IKFpniMFJvp16uUfTWLfm.pdf',
    public_id:
      'abudanza_test/porformer_invoice/60fafeb2ba17fa3567200dc6_IKFpniMFJvp16uUfTWLfm',
  },
  status: 'approved',
  duration: 90,
  _id: '60fba4d43028a87d3c2072a4',
  brand: 'Denver',
  category: 'electronics',
  cost: 40000,
  vendor_name: 'konga',
  vendor_phone: '+8909876788',
  vendor_street_address: '23 jkkll',
  model: 'Some Random String',
  vendor_city: 'some random string',
  vendor_state: 'some random string',
  vendor_country: 'Nigeria',
  user: {
    _id: '60e653adf9e0e211846dafb6',
    first_name: 'andrew',
    last_name: 'frank',
    account_id: 'e8J5Cs',
  },
  amount_paid: 24000,
  createdAt: '2021-07-24T05:27:48.109Z',
  updatedAt: '2021-07-25T07:00:50.061Z',
  __v: 0,
  decline_reason: 'invalid Id',
  activation_date: '2021-07-25T07:00:50.060Z',
  due_date: '2021-10-23T07:00:50.060Z',
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
          <Text textTransform="capitalize">{asset.category}</Text>
        </Td>
        <Td>
          <Td>
            <Text textTransform="capitalize">{asset.brand}</Text>
          </Td>
        </Td>
        <Td>
          <Td>
            <Text textTransform="capitalize">{asset.model}</Text>
          </Td>
        </Td>
        <Td>
          <Td>
            {asset.due_date ? new Date(asset.due_date).toDateString() : 'N/A'}
          </Td>
        </Td>
        <Td>
          <Badge colorScheme="green">{asset.status}</Badge>
        </Td>
        <Td isNumeric>{asset.cost}</Td>
        <Td>
          <Button>View</Button>
        </Td>
        <Td isNumeric>{asset.cost}</Td>
      </Tr>
    );
  });

  return (
    <Card background="white">
      <Table size="sm" variant="striped" colorScheme="whiteAlpha">
        <TableCaption placement="top">
          <Heading color="black" as="h2" size="md" mb="5">
            <Text textTransform="capitalize">
              Showing Results for {status} Users
            </Text>
          </Heading>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>S/n</Th>
            <Th>User Name</Th>
            <Th>Category</Th>
            <Th>Brand</Th>
            <Th>Model</Th>
            <Th>Due Date</Th>
            <Th>Status</Th>
            <Th isNumeric>Item Cost</Th>
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
