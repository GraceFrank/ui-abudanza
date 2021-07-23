import { Divider, Heading, HStack, Icon, Flex, Text } from '@chakra-ui/react';
import Card from '../../../components/common/Card';
import { GiCash, GiSpookyHouse } from 'react-icons/gi';
import { FaUsersCog, FaUsers, FaBell } from 'react-icons/fa';

function SummaryCard({ background, color, icon, title, amount }) {
  var dateObj = new Date(Date.now());
  let month = dateObj.toLocaleString('en-us', { month: 'long' });
  var year = dateObj.getUTCFullYear();
  return (
    <Card my="2" minW="30%" background={background} color={color}>
      <Flex width="100%" justify="space-between">
        <Text fontWeight="bold">{title}</Text>
        <Icon as={icon} w="27px" h="27px" />
      </Flex>
      <Heading my="2" size="md">
        ₦{Number(amount).toLocaleString()}
      </Heading>
      <Text>
        {month}, {year}
      </Text>
    </Card>
  );
}

export default function SummaryCards({
  investmentSummary,
  assetSummary,
  referralSummary,
}) {
  return (
    <Flex mx="5" direction={['column', 'row']} justifyContent="space-evenly">
      <SummaryCard
        background="abudanza.primary"
        color="white"
        icon={GiCash}
        title="Investments"
        amount={investmentSummary.amount}
      />
      <SummaryCard
        background="#FF7C26"
        color="white"
        icon={GiSpookyHouse}
        title="Assets"
        amount={assetSummary.amount}
      />
      <SummaryCard
        background="abudanza.secondary"
        color="black"
        icon={FaUsersCog}
        title="Referrals"
        amount={referralSummary.amount}
      />
    </Flex>
  );
}
