import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Card, Grid, Typography, makeStyles } from '@material-ui/core';
import { Label } from 'components';

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    padding: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
    },
  },
  valueContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginLeft: theme.spacing(1),
  },
}));

function Overview({ className, ...rest }) {
  const classes = useStyles();
  const overview = {
    income: '24.355,39',
    expanses: '17.374,27',
    profit: '9.671,74',
    subscriptions: '1.236',
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Grid alignItems='center' container justify='space-between'>
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography
            component='h2'
            gutterBottom
            variant='overline'
            color='textSecondary'
          >
            Faturamento
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant='h3' color='textPrimary'>
              R$ {overview.income}
            </Typography>
            <Label className={classes.label} color='success'>
              +25%
            </Label>
          </div>
        </Grid>
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography
            component='h2'
            gutterBottom
            variant='overline'
            color='textSecondary'
          >
            Gastos
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant='h3' color='textPrimary'>
              R$ {overview.expanses}
            </Typography>
            <Label className={classes.label} color='success'>
              +12%
            </Label>
          </div>
        </Grid>
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography
            component='h2'
            gutterBottom
            variant='overline'
            color='textSecondary'
          >
            Lucro do Período
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant='h3' color='textPrimary'>
              R$ {overview.profit}
            </Typography>
            <Label className={classes.label} color='error'>
              -20%
            </Label>
          </div>
        </Grid>
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography
            component='h2'
            gutterBottom
            variant='overline'
            color='textSecondary'
          >
            Inscrições ativas
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant='h3' color='textPrimary'>
              {overview.subscriptions}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}

Overview.propTypes = {
  className: PropTypes.string,
};

export default Overview;
