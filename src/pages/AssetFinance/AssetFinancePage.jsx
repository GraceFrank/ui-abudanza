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
import { getAssets } from '../../services/api';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const AssetsFinance = () => {
  const [user] = useContext(AuthContext);
  const toast = useToast();
  const [activeAssets, setActiveAssets] = useState([]);
  const [pendingAssets, setPendingAssets] = useState([]);
  const [totalActiveContribution, setTotalActiveContribution] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAssets('active')
      .then(res => {
        setLoading(false);
        setTotalActiveContribution(res.data.payload.totalContribution);
        setActiveAssets(res.data.payload.assets);
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

    getAssets('pending')
      .then(res => {
        setPendingAssets(res.data.payload.assets);
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
          <HStack>
            <Text color="white">Total Active Contribution</Text>
            <Heading color="white" as="h2" size="lg">
              &#8358; {totalActiveContribution.toLocaleString()}
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
          <MainTabs
            activeAssets={activeAssets}
            pendingAssets={pendingAssets}
            loading={loading}
          />
        </Box>
      </main>
    </Layout>
  );
};

export default AssetsFinance;
