import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Box, Card, CardHeader, Divider, useTheme, makeStyles } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';
import { data, options } from './chart';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    height: 400,
  },
}));

function FinancialStats() {
  const stats = {
    thisYear: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
    lastYear: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
  };
  const labels = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Card>
      <CardHeader title='Balanço Financeiro' />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={700} pt={4} px={2}>
          <div className={classes.root}>
            <Bar data={data(stats, theme, labels)} options={options(theme)} />
          </div>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
}

export default FinancialStats;
