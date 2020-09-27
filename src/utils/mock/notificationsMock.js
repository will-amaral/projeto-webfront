import mock from './config';

mock.onGet('/api/notifications').reply(200, {
  notifications: [
    {
      id: '5e8883f7ed1486d665d8be1e',
      title: 'Nova Mensagem recebida',
      description: 'Você tem 32 novas mensagens não lidas',
      type: 'new_message',
    },
    {
      id: '5e88840187f6b09b431bae68',
      title: 'Nova Mensagem recebida',
      description: 'Você tem 32 novas mensagens não lidas',
      type: 'new_message',
    },
  ],
});
