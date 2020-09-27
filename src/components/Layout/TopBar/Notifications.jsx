import React, { useRef, useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Bell, Package, MessageCircle, Truck } from 'react-feather';
import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover,
  SvgIcon,
  Tooltip,
  Typography,
} from '@material-ui/core';

import { useNotificationStyles } from './styles';
import { fetchNotifications } from 'store/notificationsSlice';

const iconsMap = {
  order_placed: Package,
  new_message: MessageCircle,
  item_shipped: Truck,
};

function Notifications() {
  const classes = useNotificationStyles();
  const notifications = useSelector((state) => state.notifications);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = (bool) => setOpen(bool);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  return (
    <>
      <Tooltip title='Notificações'>
        <Badge color='secondary' variant='dot' classes={{ badge: classes.badge }}>
          <IconButton color='inherit' ref={ref} onClick={() => toggleOpen(true)}>
            <SvgIcon>
              <Bell />
            </SvgIcon>
          </IconButton>
        </Badge>
      </Tooltip>
      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        classes={{ paper: classes.popover }}
        anchorEl={ref.current}
        onClose={() => toggleOpen(false)}
        open={isOpen}
      >
        <Box p={2}>
          <Typography variant='h5' color='textPrimary'>
            Notificações
          </Typography>
        </Box>
        {notifications.length === 0 ? (
          <Box p={2}>
            <Typography variant='h6' color='textPrimary'>
              Não existem notificações
            </Typography>
          </Box>
        ) : (
          <>
            <List disablePadding>
              {notifications.map((notification) => {
                const Icon = iconsMap[notification.type];

                return (
                  <ListItem component={RouterLink} divider key={notification.id} to='#'>
                    <ListItemAvatar>
                      <Avatar className={classes.icon}>
                        <SvgIcon fontSize='small'>
                          <Icon />
                        </SvgIcon>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={notification.title}
                      primaryTypographyProps={{
                        variant: 'subtitle2',
                        color: 'textPrimary',
                      }}
                      secondary={notification.description}
                    />
                  </ListItem>
                );
              })}
            </List>
            <Box p={1} display='flex' justifyContent='center'>
              <Button component={RouterLink} size='small' to='#'>
                Marcar todas como lida
              </Button>
            </Box>
          </>
        )}
      </Popover>
    </>
  );
}

export default Notifications;
