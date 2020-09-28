import React, { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Divider,
  Link,
  List,
  ListSubheader,
  Typography,
  Hidden,
  Drawer,
} from '@material-ui/core';

import NavItem from './NavItem';
import { teacherRoutes, adminRoutes, studentRoutes } from './config';
import { useNavStyles } from './styles';
import Logo from 'components/Logo';

const renderNavItems = ({ items, pathname, depth }) => (
  <List disablePadding>
    {items.reduce((acc, item) => reduceChildRoutes({ acc, item, pathname, depth }), [])}
  </List>
);

const reduceChildRoutes = ({ acc, pathname, item, depth = 0 }) => {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        key={key}
        info={item.info}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        key={key}
        info={item.info}
        title={item.title}
      />
    );
  }

  return acc;
};

function NavBar(props) {
  const { openMobile, onMobileClose } = props;
  const classes = useNavStyles();
  const location = useLocation();
  const { user } = useSelector((state) => state.account);
  const navConfig =
    user.level === 'Admin'
      ? adminRoutes
      : user.level === 'Instrutor'
      ? teacherRoutes
      : studentRoutes;

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  const content = (
    <Box height='100%' display='flex' flexDirection='column'>
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box p={2} display='flex' justifyContent='center'>
            <RouterLink to='/'>
              <Logo />
            </RouterLink>
          </Box>
        </Hidden>
        <Box p={2}>
          <Box display='flex' justifyContent='center'>
            <RouterLink to='/configuracoes'>
              <Avatar alt='User' className={classes.avatar} src={user.thumbnail} />
            </RouterLink>
          </Box>
          <Box mt={2} textAlign='center'>
            <Link
              component={RouterLink}
              to='/account'
              variant='h5'
              color='textPrimary'
              underline='none'
            >
              {user.name}
            </Link>
            <Typography variant='body2' color='textSecondary'>
              {user.level}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box p={2}>
          {navConfig.map((config) => (
            <List
              key={config.subheader}
              subheader={
                <ListSubheader disableGutters disableSticky>
                  {config.subheader}
                </ListSubheader>
              }
            >
              {renderNavItems({
                items: config.items,
                pathname: location.pathname,
              })}
            </List>
          ))}
        </Box>
        <Divider />
        <Box p={2}>
          <Box p={2} borderRadius='borderRadius' bgcolor='background.dark'>
            <Typography variant='h6' color='textPrimary'>
              Está com algum problema?
            </Typography>
            <Link variant='subtitle1' color='secondary' href='/suporte' target='_blank'>
              Fale com o suporte
            </Link>
          </Box>
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor='left'
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant='temporary'
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor='left'
          classes={{ paper: classes.desktopDrawer }}
          open
          variant='persistent'
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
}

export default NavBar;
