import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Link, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import Nav from '../components/common/Nav';
import bannerImage from '../images/wocintech.jpg';
import colors from '../constants/colors.json';
import { Button } from '@chakra-ui/button';
import RegisterForm from '../components/RegisterForm';
import happyCoupleImage from '../images/happy-couple.jpeg';
import logo from '../images/logo_md.png';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Footer } from '../components/common/Footer';
//ViewIcon ViewOffIcon
const RegisterPage = props => {
  const [isMobileView] = useMediaQuery('(max-width: 600px)');
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
        <section
          style={{
            background:
              'linear-gradient(180deg, rgba(255,101,1,1) 14%, rgba(250,250,250,1) 15%)',
          }}
        >
          <Flex
            py="6"
            position="relative"
            direction={['column', 'row']}
            id="login"
            justifyContent="space-around"
          >
            <Box minW="40%">
              <Box>
                <Heading as="h4" size="md" color="white" mx="5">
                  Get Started to Financial Freedom
                </Heading>
              </Box>
              {!isMobileView && (
                <VStack mt="20" spacing="5">
                  <Image width="50%" src={logo} my="5" />
                  <Image src={happyCoupleImage} borderRadius="lg" maxW="90%" />
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur . Maecenas fermentum
                    cursus eros, ac convallis
                  </Text>
                </VStack>
              )}
            </Box>
            <Flex minWidth="30%" mx="10" my="5" maxWidth="80%">
              <RegisterForm />
            </Flex>
          </Flex>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RegisterPage;
