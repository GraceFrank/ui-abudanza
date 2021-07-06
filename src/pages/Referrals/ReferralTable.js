import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import Card from '../../components/common/Card';

export default function ReferralTable({ data }) {
  const referrals = data.map((referral, index) => {
    return (
      <Tr id={referral.account_id}>
        <Td isNumeric>{index + 1}</Td>
        <Td>{referral.referee}</Td>
        <Td isNumeric>{referral.bonus}</Td>
        <Td>{referral.invested ? 'Yes' : 'No'}</Td>
        <Td>{new Date(referral.createdAt).toLocaleDateString()}</Td>
      </Tr>
    );
  });

  return (
    <Card>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th isNumeric>No</Th>
            <Th>Friend's Id</Th>
            <Th isNumeric>Bonus Earned</Th>
            <Th>Invested</Th>
            <Th>Registration Date</Th>
          </Tr>
        </Thead>
        <Tbody>{referrals} </Tbody>
      </Table>
    </Card>
  );
}
