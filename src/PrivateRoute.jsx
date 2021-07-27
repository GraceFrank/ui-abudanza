import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('user') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);
export const AdminRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('user');
  const { role } = user ? JSON.parse(user) : '';
  return (
    <Route
      {...rest}
      render={props =>
        user && role === 'admin' ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};
