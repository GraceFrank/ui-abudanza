import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
