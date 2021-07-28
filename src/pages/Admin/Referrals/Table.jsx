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

export default function DataTable({ data, status }) {
  const tableBody = data.map((item, index) => {
    const paid = item.paid ? 'Yes' : 'No';
    return (
      <Tr>
        <Td>{index}</Td>
        <Td>{item.referrer}</Td>
        <Td>{item.referee}</Td>
        <Td>
          <Td>{item.invested ? 'Yes' : 'No'}</Td>
        </Td>
        <Td>
          <Td>
            <Text isNumeric> ₦{Number(item.bonus).toLocaleString()}</Text>
          </Td>
        </Td>
        <Td>
          <Td>{item.invested ? paid : 'N/A'}</Td>
        </Td>
        <Td>
          <Button>view</Button>
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
              Showing Results for {status} Referrals
            </Text>
          </Heading>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>S/n</Th>
            <Th>Referrer AccountId</Th>
            <Th>Referee Account Id</Th>
            <Th>Invested</Th>
            <Th isNumeric>Bonus</Th>
            <Th>Paid</Th>
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
