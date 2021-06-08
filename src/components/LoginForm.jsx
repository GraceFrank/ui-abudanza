import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Heading, VStack, Link, Center, Text } from '@chakra-ui/layout';
import React, { useContext, useState } from 'react';
import 'react-phone-number-input/style.css';
import HighlightButton from './common/HighlightButton';
import { login } from '../services/api/api';
import { AuthContext } from '../context/AuthContext';
import { useToast } from '@chakra-ui/toast';
import { useHistory } from 'react-router';
import SendConfirmationEmailModal from './SendConfirmationModal.jsx';

const AuthForm = () => {
  const history = useHistory();
  const [loggingIn, setLoggingIn] = useState(false);
  const [user, setUser] = useContext(AuthContext);
  const toast = useToast();
  const [errors, setErrors] = useState({});
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setLoginDetails({ ...loginDetails, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    login(loginDetails)
      .then(data => {
        toast({
          title: 'Login Successful 🎊',
          status: 'success',
          duration: 1500,
          isClosable: true,
          position: 'top-right',
        });
        setUser(data.payload);
        localStorage.setItem('user', JSON.stringify(data.payload));
        history.push('/dashboard');
      })
      .catch(err => {
        console.log(err.response);
        if (err.response) {
          setErrors({
            status: err.response.status,
            message: err.response.data.message,
          });
        } else setErrors({ message: 'Error Logging in contact Admin' });
      });
  };

  return (
    <Box
      w="100%"
      px="5"
      py="5"
      background="white"
      borderRadius="md"
      boxShadow="xl"
    >
      <Center mb="8">
        <Heading size="lg" color="abudanza.highlight">
          Login
        </Heading>
      </Center>
      {errors.message && (
        <Text my="4" fontSize="sm" color="red">
          {errors.message}
        </Text>
      )}
      {errors.status === 401 && <SendConfirmationEmailModal />}
      <form onSubmit={handleSubmit}>
        <VStack spacing="8">
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              variant="flushed"
              placeholder="Email"
              id="email"
              type="email"
              value={loginDetails.email}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              variant="flushed"
              placeholder="Password"
              id="password"
              type="password"
              value={loginDetails.password}
              onChange={handleChange}
            />
            <FormHelperText color="red" fontSize="xs">
              {errors.password}
            </FormHelperText>
          </FormControl>

          <HighlightButton
            isLoading={loggingIn}
            loadingText="Logging In"
            width="100%"
            type="submit"
          >
            Submit
          </HighlightButton>
        </VStack>
        <>
          <Text my="10" fontSize="sm">
            Don't Have an account? &nbsp;
            <Link color="blue.500" href="/register">
              Register
            </Link>
          </Text>
        </>
      </form>
    </Box>
  );
};

export default AuthForm;
