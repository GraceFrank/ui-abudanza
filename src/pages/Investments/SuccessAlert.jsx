import { CheckIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';

import { Heading, VStack, Text, Button } from '@chakra-ui/react';

export default function SuccessAlert({ onClose }) {
  let history = useHistory();

  const viewInvestments = e => {
    onClose(e);
    history.push('/investment');
  };
  return (
    <VStack>
      <CheckIcon w={20} h={20} color="green.500" />
      <Heading>Investment Created</Heading>
      <Text>Will be reviewed in 24 hours</Text>
      <Button onClick={viewInvestments} background="abudanza.secondary">
        View Investments
      </Button>
    </VStack>
  );
}
