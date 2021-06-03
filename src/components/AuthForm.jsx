import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import {
  Box,
  Heading,
  HStack,
  VStack,
  Link,
  Spacer,
  Center,
} from '@chakra-ui/layout';
import React from 'react';
import HighlightButton from './common/HighlightButton';
import { HIGHLIGHT } from '../constants/colors.json';

const AuthForm = () => {
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
      <form>
        <VStack spacing="6">
          <FormControl id="phoneNumber" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              variant="flushed"
              placeholder="Phone Number"
              id="phoneNumber"
            />
          </FormControl>

          <FormControl id="firstName" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input variant="flushed" placeholder="First Name" id="firstName" />
          </FormControl>

          <FormControl id="lastName" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input variant="flushed" placeholder="Last Name" id="lastName" />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input variant="flushed" placeholder="Email" id="email" />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input variant="flushed" placeholder="Password" id="password" />
          </FormControl>
        </VStack>

        <HStack my="5">
          <Link href="/register">
            <Heading size="sm" color={HIGHLIGHT}>
              Login
            </Heading>
          </Link>
          <Spacer />
          <HighlightButton>Submit</HighlightButton>
        </HStack>
      </form>
    </Box>
  );
};

export default AuthForm;