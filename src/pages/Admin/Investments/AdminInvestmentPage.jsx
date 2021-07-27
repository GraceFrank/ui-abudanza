import { Box, Divider, Heading, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import Layout from '../../../components/common/AdminLayout';
import DataTable from './Table';
import SearchBar from '../../../components/common/search';

export default function Investments() {
  const [searchValues, setSearchValues] = useState({
    status: 'pending',
    searchString: '',
  });
  const statusOptions = ['pending', 'active', 'completed'];
  return (
    <Layout>
      <HStack mx="5" spacing="10">
        <Heading as="h1" color="abudanza.primary" size="md" m="5">
          INVESTMENTS
        </Heading>
        <SearchBar
          handleSearch
          handleChange
          searchValues
          statusOptions={statusOptions}
        />
      </HStack>
      <Box mx="5">
        <DataTable status={searchValues.status} />
      </Box>
    </Layout>
  );
}
