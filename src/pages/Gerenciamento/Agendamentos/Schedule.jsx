import React from 'react';
import { Container } from '@material-ui/core';

import { Page, Header } from 'components';
import { useStyles } from './styles';

import Calendar from './Calendar';

function Schedule() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title='Agendamento'>
      <Container maxWidth={false}>
        <Header title='Agendamentos'></Header>
        <Calendar />
      </Container>
    </Page>
  );
}

export default Schedule;
