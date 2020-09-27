import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { SplashScreen } from 'components';
import authService from 'utils/api';
import { logout, login } from 'store/accountSlice';

function Auth(props) {
  const { children } = props;
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.account);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      authService.setAxiosInterceptors({
        onLogout: () => dispatch(logout()),
      });
      await authService.handleAuthentication();

      if (authService.isAuthenticated()) {
        await dispatch(login());
      }
      setLoading(false);
    };

    initAuth();
  }, [dispatch]);

  if (isLoading || loading) {
    return <SplashScreen />;
  }

  return children;
}

Auth.propTypes = {
  children: PropTypes.any,
};

export default Auth;
