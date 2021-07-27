import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import theme from './theme';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AuthProvider from './context/AuthContext';
import { AdminRoute, PrivateRoute } from './PrivateRoute';
import RegistrationSuccessfulPage from './pages/RegistrationSuccessfulPage';
import VerificationPage from './pages/EmailVerificationPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AssetsPage from './pages/AssetFinance/AssetFinancePage';
import InvestmentPage from './pages/Investments/InvestmentPage';
import ReferralsPage from './pages/Referrals/ReferralsPage';
import AdminLoginPage from './pages/Admin/AdminLoginPage';
import AdminDashboardPage from './pages/Admin/AdminDashboard/AdminDashboardPage';
import AdminReferralsPage from './pages/Admin/Referrals/AdminReferrals';
import AdminInvestmentPage from './pages/Admin/Investments/AdminInvestmentPage';
import AdminAssetsPage from './pages/Admin/AssetFinance/AdminAssetFinancePage';
import AdminUsersPage from './pages/Admin/Users/AdminUsersPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/" exact component={DashboardPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/verification" component={VerificationPage} />
            <Route
              path="/register-success"
              component={RegistrationSuccessfulPage}
            />
            <Route path="/admin/login" component={AdminLoginPage} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <PrivateRoute path="/profile" component={ProfilePage} />
            <PrivateRoute path="/assets" component={AssetsPage} />
            <PrivateRoute path="/investment" component={InvestmentPage} />
            <PrivateRoute path="/referral" component={ReferralsPage} />
            <AdminRoute path="/admin/" exact component={AdminDashboardPage} />
            <AdminRoute path="/admin/assets" component={AdminAssetsPage} />
            <AdminRoute path="/admin/users" component={AdminUsersPage} />
            <AdminRoute
              path="/admin/investments"
              component={AdminInvestmentPage}
            />
            <AdminRoute
              path="/admin/referrals"
              component={AdminReferralsPage}
            />

            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
