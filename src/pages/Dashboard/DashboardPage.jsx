import { Box } from '@chakra-ui/layout';
import React from 'react';
import Layout from '../../components/common/Layout';
import { PRIMARY, BACKGROUND } from '../../constants/colors.json';
import AdvertBanners from './AdvertBanners.jsx';
import MainTabs from './MainTabs';
import SummaryCards from './SummaryCards';
import './style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAssets, getInvestments } from '../../services/api';
import { useToast } from '@chakra-ui/react';

const Dashboard = () => {
  const toast = useToast();
  const [assetFinance, setAssetFinance] = useState({
    totalContribution: 0,
    assets: [],
  });
  const [investments, setInvestments] = useState({
    totalContribution: 0,
    investments: [],
  });
  const [loadingAssets, setLoadingAssets] = useState(false);

  useEffect(() => {
    setLoadingAssets(true);

    getAssets('active')
      .then(res => {
        setLoadingAssets(false);
        setAssetFinance(res.data.payload);
      })
      .catch(err => {
        setLoadingAssets(false);
        const message = err.response
          ? err.response.data.message
          : 'Error Fetching Assets. contact Admin';
        toast({
          title: message,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      });

    getInvestments('active')
      .then(res => {
        setInvestments(res.data.payload);
      })
      .catch(err => {
        const message = err.response
          ? err.response.data.message
          : 'Error Fetching Investments. contact Admin';
        toast({
          title: message,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      });
  }, []);
  return (
    <Layout>
      <header>
        <Box background={PRIMARY} p="5" pt="0">
          <SummaryCards
            totalInvestment={investments.totalContribution}
            totalAsset={assetFinance.totalContribution}
          />
        </Box>
      </header>
      <section>
        <Box p="5" background="#E1EBF0">
          <AdvertBanners />
        </Box>
      </section>
      <main>
        <Box p="5" background={BACKGROUND}>
          <MainTabs investments={investments} assetFinance={assetFinance} />
        </Box>
      </main>
    </Layout>
  );
};

export default Dashboard;
