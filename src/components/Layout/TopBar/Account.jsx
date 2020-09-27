import React, { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import {
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';

import { useAccountStyles } from './styles';
import { logout } from 'store/accountSlice';

function Account() {
  const classes = useAccountStyles();
  const history = useHistory();
  const ref = useRef(null);
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const { enqueueSnackbar } = useSnackbar();
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = (bool) => setOpen(bool);

  const handleLogout = async () => {
    try {
      toggleOpen(false);
      await dispatch(logout());
      history.push('/');
    } catch (error) {
      enqueueSnackbar('Não foi possível realizar o logout', {
        variant: 'error',
      });
    }
  };

  return (
    <>
      <Box
        display='flex'
        alignItems='center'
        component={ButtonBase}
        onClick={() => toggleOpen(true)}
        ref={ref}
      >
        <Avatar alt='User' className={classes.avatar} src={account.user.thumbnail} />
        <Hidden smDown>
          <Typography variant='h6' color='inherit'>
            {account.user.name}
          </Typography>
        </Hidden>
      </Box>
      <Menu
        onClose={() => toggleOpen(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem component={RouterLink} to='/home'>
          Home
        </MenuItem>
        <MenuItem component={RouterLink} to='/configuracoes'>
          Configurações
        </MenuItem>
        <MenuItem onClick={handleLogout}>Sair</MenuItem>
      </Menu>
    </>
  );
}

export default Account;
