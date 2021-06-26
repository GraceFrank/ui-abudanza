import { Box, Text, Heading, HStack } from '@chakra-ui/layout';
import { GiFamilyHouse, GiCash } from 'react-icons/gi';
import { Icon } from '@chakra-ui/icons';
import { Progress, Spacer, VStack, Flex } from '@chakra-ui/react';
import Card from '../../components/common/Card';
import { daysBetween } from '../../utils/utils';

const AssetDetail = ({ assetDetail }) => {
  const { status, due_date } = assetDetail;
  const daysRemaining = due_date =>
    daysBetween(new Date(Date.now()), new Date(due_date));
  return (
    <Card boxShadow="md" my="10">
      <Flex w="100%">
        <Icon
          as={GiFamilyHouse}
          boxSize="8"
          color={status === 'pending' ? 'grey' : 'abudanza.highlight'}
          mr="5"
        />
        <VStack align="start">
          <Heading as="h4" size="md">
            {assetDetail.brand}
            {assetDetail.model} &nbsp;
          </Heading>
          <Text>category: {assetDetail.category}</Text>
          <Text>
            Amount Paid: ₦{Number(assetDetail.amount_paid).toLocaleString()}
          </Text>
        </VStack>
        <Spacer />
        {assetDetail.due_date && (
          <VStack align="flex-end">
            <Heading size="lg" color="abudanza.highlight">
              {daysRemaining(assetDetail.due_date)}
            </Heading>
            <Text fontSize="xs" color="grey">
              Days Remaining
            </Text>
          </VStack>
        )}
      </Flex>
      <Box>
        {status === 'active' && (
          <>
            <Progress mt="5" colorScheme="cyan" value={80} />

            <HStack>
              <Text fontSize="xs">
                Start Date: &nbsp;
                {new Date(assetDetail.activation_date).toLocaleDateString()}
              </Text>
              <Spacer />
              <Text fontSize="xs">
                Due Date: &nbsp;
                {new Date(assetDetail.due_date).toLocaleDateString()}
              </Text>
            </HStack>
          </>
        )}
      </Box>
    </Card>
  );
};

const AssetList = ({ data }) => {
  const list = data.map(asset => <AssetDetail assetDetail={asset} />);
  return <Box>{list}</Box>;
};

export default AssetList;
