import React from 'react';
import { Box, Card, CardHeader, Divider, Typography, useTheme } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import { useFetch } from 'utils/hooks';
import { useSubscriptionStyles } from './styles';
import { data, options } from './circular';

function SubscriptionTypes() {
  const { data: subscriptions } = useFetch('/api/reports/subscriptions', {}, false);
  const theme = useTheme();
  const classes = useSubscriptionStyles();

  if (!subscriptions) return null;

  return (
    <Card>
      <CardHeader title='Assinaturas dos alunos' />
      <Divider />
      <Box p={3} position='relative' minHeight={320}>
        <Doughnut data={data(subscriptions, theme)} options={options(theme)} />
      </Box>
      <Divider />
      <Box display='flex'>
        {subscriptions.labels.map((label, i) => (
          <div key={label} className={classes.item}>
            <Typography variant='h4' color='textPrimary'>
              {subscriptions.datasets[0].data[i]}%
            </Typography>
            <Typography variant='overline' color='textSecondary'>
              {label}
            </Typography>
          </div>
        ))}
      </Box>
    </Card>
  );
}

export default SubscriptionTypes;
