import mock from './config';

mock.onGet('/api/reports/subscriptions').reply(200, {
  datasets: [
    {
      data: [56, 24, 20],
      backgroundColor: ['#3d72eb', '#4b9e86', '#b658f5'],
    },
  ],
  labels: ['Regular', 'Premium', 'Não-assinante'],
});
