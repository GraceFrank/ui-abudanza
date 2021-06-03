import { HStack, Divider, Text, Spacer, Box, Link } from '@chakra-ui/layout';

export const Footer2 = () => {
  return (
    <footer>
      <Box p="5" background="abudanza.background">
        <Divider />
        <HStack mt="2">
          <Text>
            © 2021 <Link> Abudanza </Link> | All right reserved.
          </Text>
          <Spacer />
          <Text>
            <Link>Terms and Conditions </Link> |<Link>Privacy Policy</Link>
          </Text>
        </HStack>
      </Box>
    </footer>
  );
};

export const Footer = () => {
  return <Box bg="abudanza.primary" h="100px"></Box>;
};
