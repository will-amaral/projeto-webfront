import React from 'react';
import { Container, Grid, Button, SvgIcon } from '@material-ui/core';
import { Calendar } from 'react-feather';

import { Page, Header } from 'components';
import { useMainStyles } from './styles';
import FinancialStats from './FinancialStats';
import Overview from './Overview';
import SubscriptionTypes from './SubscriptionTypes';

function Report() {
  const classes = useMainStyles();

  return (
    <Page className={classes.root} title='Relatórios'>
      <Container maxWidth={false} className={classes.container}>
        <Header title='Relatórios'>
          <Button>
            <SvgIcon fontSize='small' className={classes.actionIcon}>
              <Calendar />
            </SvgIcon>
            Mês anterior
          </Button>
        </Header>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Overview />
          </Grid>
          <Grid item lg={8} xl={9} xs={12}>
            <FinancialStats />
          </Grid>
          <Grid item lg={4} xl={3} xs={12}>
            <SubscriptionTypes />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default Report;
