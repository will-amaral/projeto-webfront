import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Container, Grid, Hidden, Typography, Button } from '@material-ui/core';

import { Page } from 'components';
import { useStyles } from './styles';
import Notifications from './Notifications';
import cover from 'utils/assets/trainer.svg';

function Home() {
  const classes = useStyles();
  const { user } = useSelector((state) => state.account);
  return (
    <Page className={classes.root} title='Home'>
      <Container maxWidth='lg'>
        <Grid alignItems='center' container justify='space-between' spacing={3}>
          <Grid item md={6} xs={12}>
            <Typography variant='overline' color='textSecondary'>
              Home
            </Typography>
            <Typography variant='h3' color='textPrimary'>
              Olá, {user.name}
            </Typography>
            <Typography variant='subtitle1' color='textPrimary'>
              Essa é a sua página inicial.
            </Typography>
            <Box mt={2}>
              <Button className={classes.action} variant='contained'>
                Ver minhas turmas
              </Button>
            </Box>
          </Grid>
          <Hidden smDown>
            <Grid item md={6}>
              <img src={cover} alt='Capa' className={classes.image} />
            </Grid>
          </Hidden>
        </Grid>
        <Box mt={3}>
          <Notifications />
        </Box>
      </Container>
    </Page>
  );
}

export default Home;
