import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {
  console.log('route', { ...rest });
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...props} />;
        }
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  isAuth: PropTypes.bool,
  component: PropTypes.elementType.isRequired,
  location: PropTypes.instanceOf(Object),
};

ProtectedRoute.defaultProps = {
  isAuth: false,
  location: {},
};

export default ProtectedRoute;
