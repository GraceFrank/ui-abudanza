import {
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Link,
  Button,
  Heading,
  Text,
  Image,
  Center,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/toast';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { adminLogin } from '../../services/api';
import logo from '../../images/logo_md.png';
import Card from '../../components/common/Card';

export default function AdminLoginPage() {
  const history = useHistory();
  const [loggingIn, setLoggingIn] = useState(false);
  const setUser = useContext(AuthContext)[1];
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
    setLoggingIn(true);
    adminLogin(loginDetails)
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
        history.push('/admin');
      })
      .catch(err => {
        setLoggingIn(false);
        if (err.response) {
          setErrors({
            status: err.response.status,
            message: err.response.data.message,
          });
        } else setErrors({ message: 'Error Logging in contact Admin' });
      });
  };

  return (
    <Box background="abudanza.primary" h="100vh">
      <Center>
        <Heading as="h4" py="10" color="white" size="lg" mx="5">
          Admin Login
        </Heading>
      </Center>
      <div data-aos="fade-up">
        <Center>
          <Card background="white">
            <Center>
              <Image maxW="40%" src={logo} my="5" />
            </Center>
            <Box>
              {errors.message && (
                <Text my="4" fontSize="sm" color="red">
                  {errors.message}
                </Text>
              )}
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
                  </FormControl>

                  <Button
                    background="abudanza.primary"
                    colorScheme="blue"
                    isLoading={loggingIn}
                    loadingText="Logging In"
                    width="100%"
                    type="submit"
                  >
                    Submit
                  </Button>

                  <Link color="blue.500" href="/admin/register">
                    Forgot Password
                  </Link>
                </VStack>
              </form>
            </Box>
          </Card>
        </Center>
      </div>
    </Box>
  );
}
