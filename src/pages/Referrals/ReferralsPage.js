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
  Center,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import { useState } from 'react';
import { getReferrals } from '../../services/api';
import { AdCard, ReferralCard } from './Cards';
import { AuthContext } from '../../context/AuthContext';

const ReferralPage = () => {
  const [user] = useContext(AuthContext);
  const toast = useToast();
  const [referrals, setReferrals] = useState([]);
  const [totalEarned, setTotalEarned] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getReferrals()
      .then(res => {
        setLoading(false);
        setReferrals(res.data.payload.referrals);
        setTotalEarned(res.data.payload.totalEarned);
      })
      .catch(err => {
        setLoading(false);
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
              &#8358;{totalEarned.toLocaleString()}
            </Heading>
          </HStack>
          <Spacer />
          <ReferralCard accountId={user.accountId} />
        </Flex>
      </section>
      <main>
        <AdCard />
        <Box p="5" background="abudanza.background">
          {!loading && referrals.length < 1 && <Center>No referrals</Center>}
          {!loading && <ReferralTable data={referrals} />}

          {loading && (
            <Center>
              <Spinner />
            </Center>
          )}
        </Box>
      </main>
    </Layout>
  );
};

export default ReferralPage;
