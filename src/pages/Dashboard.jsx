import { Flex } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import Card from '../components/common/Card';
import HighlightButton from '../components/common/HighlightButton';
import Layout from '../components/Layout';
import { PRIMARY } from '../constants/colors.json';

const Dashboard = () => {
  return (
    <Layout>
      <header>
        <Box background={PRIMARY} px="5">
          <Heading as="h1" color="white" size="md">
            DASHBOARD
          </Heading>
          <Flex>
            <Card>
              <HighlightButton>Hello</HighlightButton>
            </Card>
          </Flex>
        </Box>
      </header>
    </Layout>
  );
};

export default Dashboard;
