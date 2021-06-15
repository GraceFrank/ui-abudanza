import { useEffect, useState, useContext } from 'react';
import {
  Box,
  Center,
  HStack,
  Heading,
  Skeleton,
  Spinner,
} from '@chakra-ui/react';
import TitleDetail from '../../components/common/TitleDetail';
import { getBankDetails } from '../../services/api';
import { AuthContext } from '../../context/AuthContext';
import Card from '../../components/common/Card';
import HighlightButton from '../../components/common/HighlightButton';

const BankInfo = ({ data }) => (
  <Box>
    <HStack my="5" spacing="5">
      <TitleDetail title="Account Name" value={data.account_name} />
      <TitleDetail title="Account Number" value={data.account_number} />
    </HStack>
    <TitleDetail title="Bank Name" value={data.bank_name} />
    <Center my="5">
      <HighlightButton> Edit Bank Details</HighlightButton>
    </Center>
  </Box>
);

const BankDetails = () => {
  const [user] = useContext(AuthContext);
  const [fetchingBankDetails, setFetchingBankDetails] = useState(false);
  const [bankDetails, setBankDetails] = useState({});

  useEffect(() => {
    setFetchingBankDetails(true);
    getBankDetails(user.token)
      .then(res => {
        setBankDetails(res.data.payload);
        setFetchingBankDetails(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Card maxW="95%" background="white" mb="5">
      <Heading as="h3" size="md" color="abudanza.primary" py="5">
        Bank Details
      </Heading>
      {!fetchingBankDetails && <BankInfo data={bankDetails} />}
      {fetchingBankDetails && (
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="abudanza.primary"
            size="xl"
          />
        </Center>
      )}
    </Card>
  );
};

export default BankDetails;
