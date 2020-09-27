import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { useDefaultPageStyles } from './styles';

const Page = forwardRef(({ title, children, className, ...rest }, ref) => {
  const classes = useDefaultPageStyles();
  return (
    <div ref={ref} {...rest} className={className ? className : classes.root}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Page;
