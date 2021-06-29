import { Box } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import Layout from '../../components/common/Layout';
import MainTabs from './MainTabs';
import {
  Flex,
  HStack,
  Spacer,
  Text,
  Heading,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { getInvestments } from '../../services/api';

import './style.css';
import InvestmentModal from './InvestmentModal';

const InvestmentPage = () => {
  const toast = useToast();
  const [activeInvestments, setActiveInvestments] = useState([]);
  const [pendingInvestments, setPendingInvestments] = useState([]);
  const [totalActiveContribution, setTotalActiveContribution] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getInvestments('active')
      .then(res => {
        setLoading(false);
        setTotalActiveContribution(res.data.payload.totalContribution);
        setActiveInvestments(res.data.payload.investments);
      })
      .catch(err => {
        const message = err.response
          ? err.response.data.message
          : 'error fetching assets contact admin';
        toast({
          title: 'Error Fetching Assets',
          description: message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      });

    getInvestments('pending')
      .then(res => {
        setPendingInvestments(res.data.payload.investments);
      })
      .catch(err => {
        const message = err.response
          ? err.response.data.message
          : 'error fetching assets contact admin';
        toast({
          title: 'Error Fetching Assets',
          description: message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      });
  }, []);

  return (
    <Layout>
      <section>
        <Flex background="abudanza.primary" p="5" pt="0">
          <HStack align="start" justify="start">
            <Text color="white">Total Active Contribution</Text>
            <Heading color="white" as="h2" size="md">
              &#8358;{totalActiveContribution.toLocaleString()}
            </Heading>
          </HStack>
          <Spacer />
          <InvestmentModal />
        </Flex>
      </section>
      <main>
        <Box p="5" background="abudanza.background">
          <MainTabs
            activeInvestments={activeInvestments}
            pendingInvestments={pendingInvestments}
            loading={loading}
          />
        </Box>
      </main>
    </Layout>
  );
};

export default InvestmentPage;
