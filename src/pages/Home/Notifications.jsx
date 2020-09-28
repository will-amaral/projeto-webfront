import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
  Typography,
} from '@material-ui/core';
import {
  NavigateNext,
  CheckOutlined,
  AssignmentOutlined,
  MailOutlineOutlined,
  KeyboardArrowRight,
} from '@material-ui/icons';

import { useStyles } from './styles';

function Notifications() {
  const classes = useStyles();
  const [data] = useState([
    {
      id: 1,
      value: 6,
      type: 'check',
      message: 'exercícios planejados',
    },
    {
      id: 2,
      value: 2,
      type: 'message',
      message: 'mensagens',
    },
    {
      id: 3,
      value: 4,
      type: 'content',
      message: 'perfis precisam de atenção',
    },
  ]);
  const iconsMap = {
    message: <MailOutlineOutlined />,
    check: <CheckOutlined />,
    content: <AssignmentOutlined />,
  };
  return (
    <>
      <Box display='flex' alignItems='center' justifyContent='space-between' mb={2}>
        <Typography className={classes.title} variant='h5' color='textPrimary'>
          Notificações
        </Typography>
        <Button component={RouterLink} to='/notificacoes'>
          Ver tudo
          <KeyboardArrowRight className={classes.arrowIcon} />
        </Button>
      </Box>
      <Card>
        <List>
          {data.map((notification, index) => (
            <ListItem divider={index < data.length - 1} key={notification.id}>
              <ListItemIcon>{iconsMap[notification.type]}</ListItemIcon>
              <ListItemText>
                <Typography variant='body2' color='textSecondary'>
                  <span className={classes.fontWeightMedium}>{notification.value} </span>
                  {notification.message}
                </Typography>
              </ListItemText>
              <ListItemSecondaryAction>
                <Tooltip title='View'>
                  <IconButton edge='end' size='small'>
                    <NavigateNext />
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  );
}

export default Notifications;
