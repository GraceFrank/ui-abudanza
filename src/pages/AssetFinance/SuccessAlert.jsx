import { CheckIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';

import { Heading, VStack, Text, Button } from '@chakra-ui/react';

export default function SuccessAlert({ onClose }) {
  let history = useHistory();

  const viewAsset = e => {
    onClose(e);
    history.push('/assets');
  };
  return (
    <VStack>
      <CheckIcon w={20} h={20} color="green.500" />
      <Heading>Asset Finance Created</Heading>
      <Text>Will be reviewed in 24 hours</Text>
      <Button onClick={viewAsset} background="abudanza.secondary">
        View Assets
      </Button>
    </VStack>
  );
}
