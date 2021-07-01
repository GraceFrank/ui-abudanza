import { Flex, Image, Box, Text, Heading, Button } from '@chakra-ui/react';
import Card from '../../components/common/Card';
import ReferralSvg from '../../images/refer_svg';
export const AdCard = () => {
  return (
    <Flex mx="5" my="10">
      <ReferralSvg />
      <Box ml="5">
        <Heading as="h3" size="lg" color="abudanza.highlight">
          Earn N1000 Bonus on Each Referral
        </Heading>
        <Text>
          Refer your friends and get rewarded with ₦500.00 for each friend that
          signs up using the referral code , and then fund an asset finance or
          make an investment
        </Text>
      </Box>
    </Flex>
  );
};

export const ReferralCard = ({ accountId }) => {
  const referralLink = `${window.location.origin}/register/?ref=${accountId}`;
  return (
    <Card background=" linear-gradient(180deg, rgba(255,101,0,1) 5%, rgba(250,250,250,1) 5%)">
      <Flex>
        Referral Id: <Heading size="sm">{accountId}</Heading>
      </Flex>
      <Text>Referral Link</Text>
      <Heading size="sm" mb="4">
        {referralLink}
      </Heading>
      <Button
        color="abudanza.highlight"
        colorScheme="orange"
        variant="outline"
        size="sm"
        onClick={() => {
          navigator.clipboard.writeText(referralLink);
        }}
      >
        Copy
      </Button>
    </Card>
  );
};
