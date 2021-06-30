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
import Card from '../../components/common/Card';

const fakeData = [
  {
    account_id: 'YPoid',
    bonus_earned: 1000,
    invested: true,
    registration_date: '2021-06-13T06:37:51.250+00:00',
  },

  {
    account_id: 'yTu!odA',
    bonus_earned: 0,
    invested: false,
    registration_date: '2021-06-13T06:37:51.250+00:00',
  },
  {
    account_id: '1BuoRd',
    bonus_earned: 0,
    invested: false,
    registration_date: '2021-06-13T06:37:51.250+00:00',
  },
];

export default function ReferralTable({ data = fakeData }) {
  const referrals = data.map((referral, index) => {
    return (
      <Tr id={referral.account_id}>
        <Td isNumeric>{index + 1}</Td>
        <Td>{referral.account_id}</Td>
        <Td isNumeric>{referral.bonus_earned}</Td>
        <Td>{referral.invested ? 'Yes' : 'No'})</Td>
        <Td>{new Date(referral.registration_date).toLocaleDateString()})</Td>
      </Tr>
    );
  });

  return (
    <Card>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
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
