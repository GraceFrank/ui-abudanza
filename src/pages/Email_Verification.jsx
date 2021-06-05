import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Image } from '@chakra-ui/image';
import { Input } from '@chakra-ui/input';
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
import EmailErrorSvg from '../images/email_error.svg';

const VerificationPage = () => {
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
        <Image src={EmailErrorSvg} boxSize={['sm', 'md']} />
        <VStack mx="10">
          <Heading size="lg" textAlign="center" color="abudanza.primary">
            Did Not Receive Confirmation
          </Heading>
          <Text textAlign="center">Send Another</Text>
          <form>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                variant="flushed"
                placeholder="Email"
                id="email"
                type="email"
                value={'email'}
                onChange={() => console.log()}
              />
              <FormHelperText color="red" fontSize="xs">
                Error
              </FormHelperText>
            </FormControl>
          </form>

          <Center>
            <HighlightButton onClick={redirectToHome}>
              Resend Confirmation Email
            </HighlightButton>
          </Center>
        </VStack>
      </Flex>
      <Footer />
    </>
  );
};

export default VerificationPage;
