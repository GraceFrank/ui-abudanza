import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Heading, VStack, Link, Center, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import HighlightButton from './common/HighlightButton';
import { Redirect } from 'react-router-dom';
import { login } from '../services/api/api';

const AuthForm = () => {
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

    login(userDetails).then(() => <Redirect to="/dashboard" />);
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
        <VStack spacing="6">
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

        <Text mt="5" fontSize="sm">
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
