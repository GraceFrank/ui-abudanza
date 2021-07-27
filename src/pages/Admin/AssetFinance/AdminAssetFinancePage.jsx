import { Box, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import Layout from '../../../components/common/AdminLayout';
import DataTable from './Table';

export default function AdminAssetFinancePage() {
  const [status, setStatus] = useState('pending');
  return (
    <Layout>
      <Heading as="h1" color="abudanza.primary" size="md" m="5">
        ASSET FINANCE
      </Heading>
      <Box mx="5">
        <DataTable status={status} />
      </Box>
    </Layout>
  );
}
