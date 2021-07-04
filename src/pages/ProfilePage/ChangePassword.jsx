import { useEffect, useState, useContext } from 'react';
import {
  FormHelperText,
  Center,
  FormControl,
  Heading,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { AuthContext } from '../../context/AuthContext';
import Card from '../../components/common/Card';
import HighlightButton from '../../components/common/HighlightButton';
import { changePassword } from '../../services/api';

const initialPassword = {
  currentPassword: '',
  newPassword: '',
};
const initialShowPassword = {
  currentPassword: false,
  newPassword: false,
};

const ChangePassword = () => {
  const toast = useToast();
  const [loading, setLoading] = useState('');
  const [password, setPassword] = useState(initialPassword);
  const [showPassword, setShowPassword] = useState(initialShowPassword);

  const togglePassword = id => {
    setShowPassword({ ...showPassword, [id]: !showPassword[id] });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(false);
    changePassword(password)
      .then(res => {
        setLoading(false);
        setPassword(initialPassword);
        setShowPassword(initialShowPassword);
        toast({
          title: 'Password Change Successful',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      })
      .catch(err => {
        setLoading(false);
        const message = err.response
          ? err.response.data.message
          : 'error updating password  contact admin';
        toast({
          title: message,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      });
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setPassword({ ...password, [id]: value });
  };

  return (
    <Card maxW="95%" background="white" mt="5">
      <Heading as="h3" size="md" color="abudanza.primary" py="5">
        Change Password
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired id="password">
          <FormLabel fontSize="sm">Current Password:</FormLabel>
          <InputGroup>
            <Input
              size="sm"
              placeholder="Current Password"
              id="currentPassword"
              type={showPassword.currentPassword ? 'text' : 'password'}
              value={password.currentPassword}
              onChange={handleChange}
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
            <InputRightElement>
              {showPassword.currentPassword ? (
                <ViewOffIcon
                  onClick={() => togglePassword('currentPassword')}
                />
              ) : (
                <ViewIcon onClick={() => togglePassword('currentPassword')} />
              )}
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl isRequired id="newPassword">
          <FormLabel fontSize="sm">New Password:</FormLabel>
          <InputGroup>
            <Input
              size="sm"
              placeholder="New Password"
              id="newPassword"
              type={showPassword.newPassword ? 'text' : 'password'}
              value={password.newPassword}
              onChange={handleChange}
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
            <InputRightElement>
              {showPassword.newPassword ? (
                <ViewOffIcon onClick={() => togglePassword('newPassword')} />
              ) : (
                <ViewIcon onClick={() => togglePassword('newPassword')} />
              )}
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Center mt="3">
          <HighlightButton
            size="sm"
            isLoading={loading}
            type="submit"
            loadingText="Saving Changes"
            isDisabled={!password.currentPassword || !password.newPassword}
          >
            Save Changes
          </HighlightButton>
        </Center>
      </form>
    </Card>
  );
};

export default ChangePassword;
