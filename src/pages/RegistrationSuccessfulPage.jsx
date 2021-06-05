import { Image } from '@chakra-ui/image';
import {
  Flex,
  Heading,
  Box,
  Text,
  Link,
  Center,
  HStack,
  VStack,
} from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { Footer } from '../components/common/Footer';
import HighlightButton from '../components/common/HighlightButton';
import Nav from '../components/common/Nav';
import HiFiveSvg from '../images/High_five.svg';

const RegistrationSuccessfulPage = () => {
  const [email, setEmail] = useState();

  const resendEmail = () => {};
  const redirectToHome = () => {};

  return (
    <>
      <Nav />
      <Flex
        mt="100"
        direction={['column-reverse', 'row']}
        justifyContent="space-around"
        minHeight="70vh"
      >
        <Image src={HiFiveSvg} boxSize={['sm', 'md']} />
        <VStack mx="10">
          <Heading size="lg" textAlign="center" color="abudanza.primary">
            Your Registration was successful Hurray!
          </Heading>
          <Text textAlign="center">
            Check Your {email} Email to Verify Your Account
          </Text>
          <Text textAlign="center" fontSize="sm">
            If you have not received the email, click
            <Link onClick={resendEmail}>here</Link> to resend it.
          </Text>

          <Center>
            <HighlightButton onClick={redirectToHome}>
              Return to Home Page
            </HighlightButton>
          </Center>
        </VStack>
      </Flex>
      <Footer />
    </>
  );
};

export default RegistrationSuccessfulPage;
