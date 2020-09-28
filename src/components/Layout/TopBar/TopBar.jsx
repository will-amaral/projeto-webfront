import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { AppBar, Box, Hidden, IconButton, Toolbar, SvgIcon } from '@material-ui/core';
import { Menu as MenuIcon } from 'react-feather';

import Logo from 'components/Logo';
import Account from './Account';
import Notifications from './Notifications';
import Settings from './Settings';
import { useStyles } from './styles';

function TopBar(props) {
  const { className, onMobileNavOpen, ...rest } = props;
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton color='inherit' onClick={onMobileNavOpen}>
            <SvgIcon fontSize='small'>
              <MenuIcon />
            </SvgIcon>
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <RouterLink to='/'>
            <Logo white />
          </RouterLink>
        </Hidden>
        <Box ml={2} flexGrow={1} />
        <Notifications />
        <Settings />
        <Box ml={2}>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
