import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import LoginPage from './pages/login'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
