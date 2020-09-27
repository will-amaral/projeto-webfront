import React from 'react';
import PropTypes from 'prop-types';

import logo from 'utils/assets/logo.svg';
import logoWhite from 'utils/assets/logo-white.svg';

function Logo(props) {
  const { white, ...rest } = props;
  return <img src={white ? logoWhite : logo} alt='Logo' {...rest} />;
}

Logo.propTypes = {
  white: PropTypes.bool,
};

export default Logo;
