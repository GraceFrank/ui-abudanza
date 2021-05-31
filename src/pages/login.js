import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Link, VStack } from '@chakra-ui/layout';
import React from 'react';
import Nav from '../components/common/Nav';
import bannerImage from '../images/wocintech.jpg';
import colors from '../constants/colors.json';
import { Button } from '@chakra-ui/button';
import AuthForm from '../components/common/AuthForm';

const LoginPage = props => {
  return (
    <>
      <Nav {...props} />
      <header
        style={{
          height: '600px',
          width: '100vw',
          background: colors.PRIMARY,
          overflow: 'hidden',
        }}
      >
        <Image
          src={bannerImage}
          alt="woman typing on a laptop "
          boxSize="100%"
          fit="cover"
          opacity="0.32"
        />
        <section style={{ position: 'absolute', top: '250px', zIndex: '1' }}>
          <VStack spacing="6" m="6" maxW="70%">
            <Heading as="h1" color="white">
              Make 60% Payment Today and Get Asset in 90 Days
            </Heading>
            <Link href="#login">
              <Button background={colors.HIGHLIGHT} colorScheme="orange">
                Get Started
              </Button>
            </Link>
          </VStack>
        </section>
      </header>
      <main>
        <section>
          <Box background={colors.HIGHLIGHT} h="120px"></Box>
          <Flex position="absolute" top="700" id="login">
            <AuthForm />
          </Flex>
        </section>
      </main>
    </>
  );
};

export default LoginPage;
