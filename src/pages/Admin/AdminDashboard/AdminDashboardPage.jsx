import { Heading } from '@chakra-ui/react';
import Layout from '../../../components/AdminLayout';
import SummaryCards from './SumaryCards';

const fakeSummary = { amount: 500000 };

export default function AdminDashboardPage() {
  return (
    <Layout>
      <Heading as="h1" color="abudanza.primary" size="md" m="5">
        DASHBOARD
      </Heading>
      <SummaryCards
        investmentSummary={fakeSummary}
        assetSummary={fakeSummary}
        referralSummary={fakeSummary}
      />
    </Layout>
  );
}
