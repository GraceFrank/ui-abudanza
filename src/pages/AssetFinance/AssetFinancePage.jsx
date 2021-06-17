import { Box } from '@chakra-ui/layout';
import React from 'react';
import Layout from '../../components/common/Layout';
import MainTabs from './MainTabs';
import { Flex, HStack, Spacer, Text, Heading, Button } from '@chakra-ui/react';
import { useState } from 'react';

const fakeData = {
  total_contribution: 0.0,
  assets: [
    {
      category: 'car',
      brand: 'toyota camry 2020',
      price: 20000000,
      amount_contributed: 150000,
      start_date: '12/06/2021',
      end_date: '12/09/2021',
      days_remaining: 30,
    },
  ],
};

const AssetsFinance = () => {
  const [activeAssets, setActiveAssets] = useState(fakeData);

  return (
    <Layout>
      <section>
        <Flex background="abudanza.primary" p="5" pt="0">
          <HStack>
            <Text color="white">Total Active Contribution</Text>
            <Heading color="white" as="h2" size="lg">
              &#8358; {activeAssets.total_contribution.toLocaleString()}
            </Heading>
          </HStack>
          <Spacer />
          <Button background="white" color="abudanza.highlight">
            Fund Asset +
          </Button>
        </Flex>
      </section>
      <main>
        <Box p="5" background="abudanza.background">
          <MainTabs />
        </Box>
      </main>
    </Layout>
  );
};

export default AssetsFinance;
