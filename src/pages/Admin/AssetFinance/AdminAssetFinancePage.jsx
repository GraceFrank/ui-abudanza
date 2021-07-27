import { Box, Spinner, Heading, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import Layout from '../../../components/common/AdminLayout';
import DataTable from './Table';
import SearchBar from '../../../components/common/search';
import { useEffect } from 'react';
import { getAllAssets } from '../../../services/api';

export default function AdminAssetFinancePage() {
  const [searchValues, setSearchValues] = useState({
    status: 'all',
    searchString: '',
  });
  const statusOptions = ['pending', 'active', 'all'];
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAllAssets().then(res => {
      setLoading(false);
      setData(res.data.payload);
    });
  }, []);
  return (
    <Layout>
      <HStack mx="5" spacing="10">
        <Heading as="h1" color="abudanza.primary" size="md" m="5">
          ASSET FINANCE
        </Heading>
        <SearchBar
          handleSearch
          handleChange
          searchValues
          statusOptions={statusOptions}
        />
      </HStack>
      <Box mx="5">
        {loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
        {!loading && <DataTable status={searchValues.status} data={data} />}
      </Box>
    </Layout>
  );
}
