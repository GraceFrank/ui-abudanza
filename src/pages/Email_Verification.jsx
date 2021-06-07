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
        mx="5"
        mt="100"
        alignItems="center"
        direction={['column-reverse', 'row']}
        justifyContent="space-around"
        minHeight="75vh"
      >
        <Image src={EmailErrorSvg} boxSize={['100', '200']} />
        <VStack spacing="5">
          <Heading size="lg" textAlign="center" color="abudanza.primary">
            Did Not Receive Confirmation
          </Heading>
          <Text textAlign="center">Send Another</Text>
          <Box mt="10" w="100%">
            <form>
              <FormControl id="email" isRequired>
                <Input
                  variant="filled"
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

              <Center>
                <HighlightButton type="submit" onClick={redirectToHome}>
                  Resend Confirmation Email
                </HighlightButton>
              </Center>
            </form>
          </Box>
        </VStack>
      </Flex>
      <Footer />
    </>
  );
};

export default VerificationPage;
