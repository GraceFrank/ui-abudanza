import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Heading, VStack, Link, Center, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input';
import HighlightButton from '../../components/common/HighlightButton';
import { useHistory, useLocation } from 'react-router-dom';
import { register } from '../../services/api';
import { useToast } from '@chakra-ui/toast';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { InputGroup } from '@chakra-ui/input';
import { InputRightElement } from '@chakra-ui/input';

const AuthForm = () => {
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);

  const toast = useToast();
  const [phone, setPhone] = useState();
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [phoneError, setPhoneError] = useState();
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

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isValidPhone = phone && isPossiblePhoneNumber(phone) ? true : false;
    if (!isValidPhone) {
      setPhoneError('Please enter a valid phone number');
      return;
    }
    setPhoneError('');

    const ref = query.get('ref');
    setSubmitting(true);
    const details = { ...userDetails, phone };
    register(details, ref)
      .then(data => {
        setSubmitting(false);
        toast({
          title: 'Registration Successful 🎊',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
        history.push('/register-success');
      })
      .catch(err => {
        const message = err.response
          ? err.response.data.message
          : 'Error Registering user contact Admin';

        setSubmitting(false);
        toast({
          title: message,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
        localStorage.removeItem('user');
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
          Register
        </Heading>
      </Center>
      <form onSubmit={handleSubmit}>
        <VStack spacing="6">
          <FormControl id="phone" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="RU"
              value={phone}
              onChange={setPhone}
            />
            <FormHelperText color="red">{phoneError}</FormHelperText>
          </FormControl>

          <FormControl id="firstName" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              variant="flushed"
              placeholder="First Name"
              id="firstName"
              type="text"
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
              type="text"
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
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                variant="flushed"
                placeholder="Password"
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={userDetails.password}
                onChange={handleChange}
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
              />
              <InputRightElement>
                {showPassword ? (
                  <ViewOffIcon onClick={togglePassword} />
                ) : (
                  <ViewIcon onClick={togglePassword} />
                )}
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <HighlightButton
            isLoading={submitting}
            loadingText="Submitting"
            width="100%"
            type="submit"
          >
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
