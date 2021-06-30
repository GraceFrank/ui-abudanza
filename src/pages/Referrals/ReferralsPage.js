import { Box } from '@chakra-ui/layout';
import React, { useContext, useEffect } from 'react';
import Layout from '../../components/common/Layout';
import ReferralTable from './ReferralTable';
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
import { AdCard, ReferralCard } from './Cards';
import { AuthContext } from '../../context/AuthContext';

const ReferralPage = () => {
  const [user] = useContext(AuthContext);
  const toast = useToast();
  const [referrals, setReferrals] = useState([]);
  const [totalCommission, setTotalCommission] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getInvestments('active')
      .then(res => {
        setLoading(false);
      })
      .catch(err => {
        const message = err.response
          ? err.response.data.message
          : 'error fetching referrals contact admin';
        toast({
          title: 'Error Fetching Referrals',
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
            <Text color="white">Total Commission</Text>
            <Heading color="white" as="h2" size="md">
              &#8358;{totalCommission.toLocaleString()}
            </Heading>
          </HStack>
          <Spacer />
          <ReferralCard accountId={user.accountId} />
        </Flex>
      </section>
      <main>
        <AdCard />
        <Box p="5" background="abudanza.background">
          <ReferralTable />
        </Box>
      </main>
    </Layout>
  );
};

export default ReferralPage;
