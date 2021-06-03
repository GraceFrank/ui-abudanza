import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from './theme';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import RegisterPage from './pages/RegisterPage';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/dashboard" component={DashboardPage} />
          </Switch>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
