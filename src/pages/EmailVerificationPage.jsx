import { FormControl } from '@chakra-ui/form-control';
import { Image } from '@chakra-ui/image';
import { Input } from '@chakra-ui/input';
import {
  Flex,
  Heading,
  Box,
  Text,
  Center,
  VStack,
  Link,
} from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/toast';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Footer } from '../components/common/Footer';
import HighlightButton from '../components/common/HighlightButton';
import Nav from '../components/common/Nav';
import EmailErrorSvg from '../images/email_error.svg';
import {
  resendConfrimationEmail,
  validateConfirmationToken,
} from '../services/api';

const VerificationPage = () => {
  const history = useHistory();
  const toast = useToast();
  const [email, setEmail] = useState();
  const [error, setError] = useState(false);
  const [openForm, setOpenForm] = useState(true);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    resendConfrimationEmail(email)
      .then(() => {
        setSending(false);
        setOpenForm(false);
        const message = `Confirmation Email Sent to ${email}`;
        toast({
          title: message,
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top-right',
        });
        setMessage(message);
      })
      .catch(err => {
        setSending(false);
        setOpenForm(false);
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
        setMessage(message);
      });
  };

  useEffect(() => {
    //get the confirmation_token from url
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('confirmation_token');
    validateConfirmationToken(token)
      .then(() => {
        toast({
          title: '🎊 Email Verified 🎊 ',
          description: 'Your Email has been verified, you can now login',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
        history.push('/login');
      })
      .catch(() => {
        toast({
          title: 'Invalid Token',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
        setError(true);
      });
  }, []);

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
        visibility={!error && 'hidden'}
      >
        <Image src={EmailErrorSvg} boxSize={['100', '200']} />
        <VStack spacing="5">
          <Heading
            size="lg"
            textAlign="center"
            color="abudanza.primary"
            onClick={() => setOpenForm(true)}
          >
            Did Not Receive Confirmation
          </Heading>
          <Link
            textAlign="center"
            color="blue.600"
            onClick={() => setOpenForm(true)}
          >
            Resend Confirmation Email
          </Link>
          <Box mt="10" w="100%">
            {openForm && (
              <form onSubmit={handleSubmit}>
                <FormControl id="email" isRequired>
                  <Input
                    variant="filled"
                    placeholder="Email"
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </FormControl>

                <Center mt="5">
                  <HighlightButton
                    isLoading={sending}
                    loadingText="sending"
                    size="md"
                    type="submit"
                  >
                    Resend Confirmation Email
                  </HighlightButton>
                </Center>
              </form>
            )}
            {!openForm && <Text>{message}</Text>}
          </Box>
        </VStack>
      </Flex>
      <Footer />
    </>
  );
};

export default VerificationPage;
