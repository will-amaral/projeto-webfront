import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import AppContainer from '../components/AppContainer';

export default function PrivateRoute({ component: Component, ...rest }) {
  const auth = useSelector(state => state.auth);

  return (
    <AppContainer>
      <Route
        {...rest}
        render={props =>
          auth ? <Component {...props} {...rest} /> : <Redirect to='/login' />
        }
      />
    </AppContainer>
  );
}
