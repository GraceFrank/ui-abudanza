import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
          <ColorModeSwitcher justifySelf="flex-end" />        
      </Box>
    </ChakraProvider>
  );
}

export default App;
