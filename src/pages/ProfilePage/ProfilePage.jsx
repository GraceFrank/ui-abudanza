import { Box, Wrap } from '@chakra-ui/layout';
import React from 'react';
import Layout from '../../components/common/Layout';
import PersonalDetails from './PersonalDetails';
import './style.css';

const ProfilePage = () => {
  return (
    <Layout>
      <main className="main-profile">
        <Box p="5">
          <Wrap>
            <PersonalDetails />
          </Wrap>
        </Box>
      </main>
    </Layout>
  );
};

export default ProfilePage;
