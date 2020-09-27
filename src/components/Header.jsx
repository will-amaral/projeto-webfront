import React from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Breadcrumbs, Grid, Link, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { capitalize } from 'utils/helper';
import { useHeaderStyles } from './styles';

function Header(props) {
  const classes = useHeaderStyles();
  const { id, title, subtitle, className, children, ...rest } = props;
  const { pathname } = useLocation();

  const generateCrumbs = (path) => {
    const crumbs = [];
    const rawCrumbs = path.split('/');
    while (rawCrumbs.length > 0) {
      let name = rawCrumbs[rawCrumbs.length - 1];
      if (name === id) {
        name = title;
      }
      const obj = {
        path: rawCrumbs.join('/') || '/',
        name: capitalize(name) || 'Home',
      };
      crumbs.unshift(obj);
      rawCrumbs.pop();
    }
    return crumbs;
  };

  return (
    <Grid
      container
      spacing={3}
      justify='space-between'
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize='small' />}
          aria-label='breadcrumb'
        >
          {generateCrumbs(pathname).map((crumb) => (
            <Link
              key={crumb.path}
              variant='body1'
              color='inherit'
              to={crumb.path}
              component={RouterLink}
            >
              {crumb.name}
            </Link>
          ))}
        </Breadcrumbs>
        <Typography variant='h3' color='textPrimary'>
          {title}
        </Typography>
        <Typography variant='h4' color='textSecondary'>
          {subtitle}
        </Typography>
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
}

Header.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
