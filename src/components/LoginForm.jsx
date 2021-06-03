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

const AuthForm = () => {
  const history = useHistory();
  const [user, setUser] = useContext(AuthContext);
  const toast = useToast();
  const [errors, setErrors] = useState({});
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setUserDetails({ ...userDetails, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validateForm(userDetails);
    if (errors) {
      setErrors(errors);
      return;
    } else {
      setErrors({});
    }

    login(userDetails)
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
        toast({
          title: 'Error Logging In',
          description: 'Invalid email or password 😔',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
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
      <Center mb="10">
        <Heading size="lg" color="abudanza.highlight">
          Login
        </Heading>
      </Center>
      <form onSubmit={handleSubmit}>
        <VStack spacing="8">
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              variant="flushed"
              placeholder="Email"
              id="email"
              type="email"
              value={userDetails.email}
              onChange={handleChange}
            />
            <FormHelperText color="red" fontSize="xs">
              {errors.email}
            </FormHelperText>
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              variant="flushed"
              placeholder="Password"
              id="password"
              type="password"
              value={userDetails.password}
              onChange={handleChange}
            />
            <FormHelperText color="red" fontSize="xs">
              {errors.password}
            </FormHelperText>
          </FormControl>

          <HighlightButton width="100%" type="submit">
            Submit
          </HighlightButton>
        </VStack>

        <Text mt="10" fontSize="sm">
          Don't Have an account? &nbsp;
          <Link color="blue.500" href="/register">
            Register
          </Link>
        </Text>
      </form>
    </Box>
  );
};

export default AuthForm;

function validateForm(data) {
  const schema = [
    {
      label: 'email',
      message: 'Please provide a valid email address',
      validation: value =>
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value
        ),
    },
  ];
  let errors;

  for (const validation of schema) {
    const { label } = validation;

    if (!validation.validation(data[label])) {
      errors = errors || {};
      errors[label] = validation.message;
    }
  }
  return errors;
}
