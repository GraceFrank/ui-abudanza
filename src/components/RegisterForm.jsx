import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Heading, VStack, Link, Center, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import HighlightButton from './common/HighlightButton';
import { Redirect, useLocation } from 'react-router-dom';
import { register, login } from '../services/api/api';

const AuthForm = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === '/login' ? true : false;
  const nextPath = isLogin ? 'register' : 'login';

  const [errors, setErrors] = useState({});
  const [phone, setPhone] = useState();
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setUserDetails({ ...userDetails, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const details = { ...userDetails, phone };
    const errors = validateForm(details);
    if (errors) {
      setErrors(errors);
      return;
    } else {
      setErrors({});
    }

    register(details).then(() => <Redirect to="/login" />);
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
          Register
        </Heading>
      </Center>
      <form onSubmit={handleSubmit}>
        <VStack spacing="6">
          <FormControl id="phoneNumber" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="NG"
              value={phone}
              onChange={setPhone}
            />
            <FormHelperText color="red" fontSize="xs">
              {errors.phone}
            </FormHelperText>
          </FormControl>

          <FormControl id="firstName" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              variant="flushed"
              placeholder="First Name"
              id="firstName"
              value={userDetails.firstName}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="lastName" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input
              variant="flushed"
              placeholder="Last Name"
              id="lastName"
              value={userDetails.lastName}
              onChange={handleChange}
            />
          </FormControl>
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
          Already Have an account? &nbsp;
          <Link color="blue.500" href="/login">
            Login{' '}
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

    {
      label: 'password',
      message:
        'Password must contain : at least 8 characters, a number and a string ',
      validation: value => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value),
    },
    {
      label: 'phone',
      message: 'provide a valid phone number',
      validation: value => isValidPhoneNumber(value),
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
