import { useEffect, useState, useContext } from 'react';
import { Box, Center, HStack, Heading, Spinner } from '@chakra-ui/react';
import TitleDetail from '../../components/common/TitleDetail';
import { getNextOfKin } from '../../services/api';
import { AuthContext } from '../../context/AuthContext';
import Card from '../../components/common/Card';
import HighlightButton from '../../components/common/HighlightButton';

const BankInfo = ({ data }) => (
  <Box>
    <HStack my="5" spacing="5">
      <TitleDetail title="Full Name" value={data.full_name} />
      <TitleDetail title="Phone Number" value={data.phone} />
    </HStack>
    <HStack my="5" spacing="5">
      <TitleDetail title="Email" value={data.email} />
      <TitleDetail title="Relationship" value={data.relationship} />
    </HStack>
    <Center my="5">
      <HighlightButton> Edit Next of Kin</HighlightButton>
    </Center>
  </Box>
);

const NextOfKin = () => {
  const [user] = useContext(AuthContext);
  const [fetchingNextOfKin, setFetchingNextOfKin] = useState(false);
  const [nextOfKin, setNextOfKin] = useState({});

  useEffect(() => {
    setFetchingNextOfKin(true);
    getNextOfKin(user.token)
      .then(res => {
        setNextOfKin(res.data.payload);
        setFetchingNextOfKin(false);
      })
      .catch(err => {});
  }, []);

  return (
    <Card maxW="95%" background="white">
      <Heading as="h3" size="md" color="abudanza.primary" py="5">
        Next of Kin
      </Heading>
      {!fetchingNextOfKin && <BankInfo data={nextOfKin} />}
      {fetchingNextOfKin && (
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

export default NextOfKin;
