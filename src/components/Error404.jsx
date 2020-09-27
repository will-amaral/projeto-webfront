import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  makeStyles,
} from '@material-ui/core';

import Page from 'components/Page';
import img from 'utils/assets/404.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3),
    paddingTop: 80,
    paddingBottom: 80,
  },
  image: {
    maxWidth: '100%',
    width: 560,
    maxHeight: 300,
    height: 'auto',
  },
}));

function Error404() {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Page className={classes.root} title='404: Não encontrado'>
      <Container maxWidth='lg'>
        <Typography
          align='center'
          variant={mobileDevice ? 'h4' : 'h1'}
          color='textPrimary'
        >
          404: Ops. Não existe nada aqui.
        </Typography>
        <Typography align='center' variant='subtitle2' color='textSecondary'>
          Parece que você chegou aqui por engano. Use a navegação para encontrar o que
          você está procurando.
        </Typography>
        <Box mt={6} display='flex' justifyContent='center'>
          <img alt='Under development' className={classes.image} src={img} />
        </Box>
        <Box mt={6} display='flex' justifyContent='center'>
          <Button color='secondary' onClick={() => history.goBack()} variant='outlined'>
            Voltar
          </Button>
        </Box>
      </Container>
    </Page>
  );
}

export default Error404;
