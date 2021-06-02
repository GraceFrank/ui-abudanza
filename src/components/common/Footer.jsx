import { HStack, Divider, Text, Spacer, Box, Link } from '@chakra-ui/layout';
import { BACKGROUND } from '../../constants/colors.json';

export const Footer2 = () => {
  return (
    <footer>
      <Box p="5" background={BACKGROUND}>
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
