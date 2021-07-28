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
  ButtonGroup,
  Input,
  FormControl,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import Card from '../../../components/common/Card';
import { AssetDetailDrawer } from '../../AssetFinance/AssetDetails';
import { approveAsset } from '../../../services/api';
import { useState } from 'react';

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
          <AssetDetailDrawer assetDetail={asset} size="md">
            <Approval id={asset._id} />
          </AssetDetailDrawer>
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
              Showing Results for {status} Assets
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

function Approval({ id }) {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [decline_reason, setDecline_reason] = useState('false');

  const handleApproval = status => {
    setLoading(false);
    approveAsset(id, { status, decline_reason }).then(() => {
      toast({
        title: `Success, customer has been notified`,
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    });
  };

  return (
    <>
      <ButtonGroup size="sm" variant="outline" spacing="6">
        <Button
          isLoading={loading}
          loadingText="updating"
          onClick={() => handleApproval('active')}
          colorScheme="blue"
        >
          Approve
        </Button>
        <Button
          isLoading={loading}
          loadingText="updating"
          onClick={() => handleApproval('declined')}
        >
          Cancel
        </Button>

        <Input
          placeholder="Decline Reason"
          type="text"
          value={decline_reason}
          onChange={e => setDecline_reason(e.target.value)}
        />
      </ButtonGroup>
    </>
  );
}
