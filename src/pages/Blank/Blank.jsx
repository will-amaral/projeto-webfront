import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

import Page from 'components/Page';
import Header from 'components/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  container: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 64,
      paddingRight: 64,
    },
  },
}));

const Blank = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title='Dashboard'>
      <Container maxWidth={false} className={classes.container}>
        <Header title='Ops, não há nada aqui' subtitle='Esta página está em construção' />
      </Container>
    </Page>
  );
};

export default Blank;
