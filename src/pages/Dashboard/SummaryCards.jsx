import { Center, Flex, Spacer, HStack, Text, Heading } from '@chakra-ui/layout';
import { PRIMARY, BACKGROUND } from '../../constants/colors.json';
import { GiFamilyHouse, GiCash } from 'react-icons/gi';
import HighlightButton from '../../components/common/HighlightButton';
import Card from '../../components/common/Card';
import Icon from '@chakra-ui/icon';

const SummaryCards = () => {
  return (
    <Flex direction={['column', 'row']} spacing="6">
      <Card minWidth="35%" background={BACKGROUND} mr="8" my="4">
        <HStack>
          <Heading as="h4" size="sm" color={PRIMARY}>
            ASSET FINANCE
          </Heading>

          <Spacer />
          <Icon as={GiFamilyHouse} boxSize="10" color={PRIMARY} />
        </HStack>
        <HStack my="4">
          <Text>&#8358;</Text>
          <Heading size="sm">100,000</Heading>
        </HStack>
        <Center>
          <HighlightButton>Fund Asset</HighlightButton>
        </Center>
      </Card>

      <Card minWidth="35%" background={BACKGROUND} mr="8" my="4">
        <HStack>
          <Heading as="h4" size="sm" color={PRIMARY}>
            INVESTMENTS
          </Heading>

          <Spacer />
          <Icon as={GiCash} boxSize="10" color={PRIMARY} />
        </HStack>
        <HStack my="4">
          <Text>&#8358;</Text>
          <Heading size="sm">100,000</Heading>
        </HStack>
        <Center>
          <HighlightButton>View Investment</HighlightButton>
        </Center>
      </Card>
    </Flex>
  );
};

export default SummaryCards;
