import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

interface IPrivateRouteProps {
  path: any;
  component: any;
  auth: any;
  exact: boolean;
}

const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && !loading ? (
        <Redirect to='/login' />
      ) : (
        <Component {...props} />
      )
    }
  />
);
const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
