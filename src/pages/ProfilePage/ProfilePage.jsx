import { Box, Flex } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Layout from '../../components/common/Layout';
import BankDetails from './BankDetails';
import ChangePassword from './ChangePassword';
import NextOfKin from './NextOfKin';
import PersonalDetails from './PersonalDetails';
import './style.css';

const ProfilePage = () => {
  const [isMobileView] = useMediaQuery('(max-width: 600px)');

  return (
    <Layout>
      <main className="main-profile">
        <Box p="5">
          <Flex
            justifyContent="space-around"
            direction={isMobileView ? 'column' : 'row'}
          >
            <PersonalDetails />
            <Box minW="40%">
              <BankDetails />
              <NextOfKin />
              <ChangePassword />
            </Box>
          </Flex>
        </Box>
      </main>
    </Layout>
  );
};

export default ProfilePage;
