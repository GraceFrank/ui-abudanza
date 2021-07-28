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
import { UserDetails } from './UserDetails';

const fakeData = new Array(10);
fakeData.fill({
  title: 'Miss',
  marital_status: 'married',
  isDeleted: false,
  status: 'approved',
  _id: '60fb0318d771ef6c64755896',
  birthday: '1993-07-30T23:00:00.000Z',
  nationality: 'Nigeria',
  mothers_maiden_name: 'walton',
  bvn: '89068790877',
  country: 'Nigeria',
  state: 'Lagos',
  city: 'Lagos',
  street_address: '22 obioma',
  user: {
    role: 'user',
    isDeleted: false,
    verified_phone: false,
    verified_email: true,
    _id: '60fafeb2ba17fa3567200dc6',
    email: 'frank.grace@yahoo.com',
    phone: '+2348137038979',
    first_name: 'grace',
    last_name: 'frank',
    account_id: 'e8J0Cs',
    createdAt: '2021-07-08T01:23:57.372Z',
    updatedAt: '2021-07-08T01:28:42.316Z',
    __v: 0,
  },
  createdAt: '2021-07-23T17:57:44.750Z',
  updatedAt: '2021-07-24T01:32:40.352Z',
  __v: 0,
});
export default function DataTable({ data = fakeData, status }) {
  const tableBody = data.map((asset, index) => {
    return (
      <Tr>
        <Td>{index}</Td>
        <Td>
          <Text textTransform="capitalize">{asset.user.first_name}</Text>
        </Td>
        <Td>
          <Text textTransform="capitalize">{asset.user.last_name}</Text>
        </Td>
        <Td>
          <Td>
            <Text>{asset.user.email}</Text>
          </Td>
        </Td>
        <Td>
          <Td>
            <Text textTransform="capitalize">{asset.user.phone}</Text>
          </Td>
        </Td>
        <Td>
          <Td>
            {asset.city}, {asset.state}
          </Td>
        </Td>
        <Td>
          <Badge colorScheme="green">{asset.status}</Badge>
        </Td>
        <Td>
          <UserDetails data={asset} />
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
              Showing Results for {status} Users
            </Text>
          </Heading>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>S/n</Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Email</Th>
            <Th>Phone Number</Th>
            <Th>Location</Th>
            <Th>Status</Th>
            <Th></Th>
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
