import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

import { Page, Logo } from 'components';
import authImg from 'utils/assets/authBg.jpg';
import LoginForm from './LoginForm';
import { useStyles } from './styles';

function LoginView() {
  const classes = useStyles();
  const history = useHistory();
  const { theme } = useSelector((state) => state.settings);

  const handleSubmitSuccess = () => {
    history.push('/');
  };

  return (
    <Page className={classes.root} title='Login'>
      <Container maxWidth='md'>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Box className={classes.icon}>
              <Logo white={theme !== 'LIGHT'} />
            </Box>

            <Typography variant='h2' color='textPrimary' align='center'>
              Shout Motion
            </Typography>
            <Typography variant='subtitle1' color='textSecondary' align='center'>
              Faça login em nossa plataforma
            </Typography>
            <Box mt={3}>
              <LoginForm onSubmitSuccess={handleSubmitSuccess} />
            </Box>
          </CardContent>
          <CardMedia className={classes.media} image={authImg} title='Cover' />
        </Card>
      </Container>
    </Page>
  );
}

export default LoginView;
