import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Image } from '@chakra-ui/image';
import { Input } from '@chakra-ui/input';
import {
  Flex,
  Heading,
  Text,
  Link,
  Center,
  HStack,
  VStack,
} from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/toast';
import { useState } from 'react';
import { Footer } from '../components/common/Footer';
import HighlightButton from '../components/common/HighlightButton';
import Nav from '../components/common/Nav';
import HiFiveSvg from '../images/High_five.svg';
import { resendConfrimationEmail } from '../services/api';

const RegistrationSuccessfulPage = () => {
  const toast = useToast();
  const [email, setEmail] = useState(sessionStorage.getItem('signUpEmail'));
  const [sending, setSending] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const resendEmail = () => {
    setSending(true);
    resendConfrimationEmail(email)
      .then(() => {
        setSending(false);
        setOpenForm(false);
        toast({
          title: `Confirmation Email Sent to ${email}`,
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top-right',
        });
      })
      .catch(err => {
        setSending(false);
        const message =
          err.response && err.response.status === 400
            ? 'Email Already Confirmed'
            : 'Error Sending email contact admin';
        toast({
          title: message,
          status: 'error',
          duration: 2500,
          isClosable: true,
          position: 'top-right',
        });
      });
  };

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
        <VStack mx="10" spacing="5">
          <Heading size="lg" textAlign="center" color="abudanza.primary">
            Your Registration was successful Hurray!
          </Heading>
          <Text textAlign="center">
            Check Your Email to Verify Your Account
          </Text>
          <Text textAlign="center" fontSize="sm">
            If you have not received the email, click &nbsp;
            <Link color="blue.500" onClick={() => setOpenForm(true)}>
              here
            </Link>
            &nbsp;to resend it.
          </Text>

          <Center>
            {!openForm && (
              <HStack>
                <Text>Return to</Text>
                <Link href="/register">
                  <HighlightButton>Home</HighlightButton>
                </Link>
                <Link href="/login">
                  <Button
                    size="sm"
                    background="abudanza.secondary"
                    variant="solid"
                  >
                    Login
                  </Button>
                </Link>
              </HStack>
            )}
            {openForm && (
              <form>
                <FormControl w="100%" id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    variant="filled"
                    placeholder="Email"
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </FormControl>

                <HighlightButton
                  onClick={resendEmail}
                  my="5"
                  width="100%"
                  type="submit"
                  isLoading={sending}
                  loadingText="Sending"
                >
                  send
                </HighlightButton>
              </form>
            )}
          </Center>
        </VStack>
      </Flex>
      <Footer />
    </>
  );
};

export default RegistrationSuccessfulPage;
