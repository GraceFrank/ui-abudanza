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
import { InvestmentDetailDrawer } from '../../Investments/InvestmentDetail';

export default function DataTable({ data, status }) {
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
          <InvestmentDetailDrawer investmentDetail={asset} size="md" />
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
