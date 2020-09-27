import _ from 'lodash';
import jwt from 'jsonwebtoken';
import mock from './config';
import avatar from 'utils/assets/avatar.jpg';

const JWT_SECRET = 'devias-top-secret-key';
const JWT_EXPIRES_IN = '2 days';

const db = {
  user: {
    id: '5e86809283e28b96d2d38537',
    avatar,
    bio: 'Dev Web',
    canHire: false,
    country: 'BR',
    email: 'will@amaral.io',
    username: 'admin',
    password: 'admin',
    firstName: 'Will',
    isPublic: true,
    lastName: 'Amaral',
    phone: '+55 12777666555',
    role: 'admin',
    state: 'São Paulo',
    timezone: '4:32PM (GMT-3)',
  },
};

mock.onPost('/api/account/login').reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if (email !== 'admin@mail.com' || password !== 'admin') {
    return [400, { message: 'Por favor, verifique o seu e-mail e senha' }];
  }

  const { user } = db;

  const accessToken = jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

  return [200, { user, accessToken }];
});

mock.onGet('/api/account/me').reply((config) => {
  const { Authorization } = config.headers;

  if (!Authorization) {
    return [401, { message: 'Token de autorização não encontrado' }];
  }

  try {
    const accessToken = Authorization.split(' ')[1];
    const { id } = jwt.verify(accessToken, JWT_SECRET);

    if (id !== db.user.id) {
      return [401, { message: 'Token inválido' }];
    }

    return [200, { user: db.user }];
  } catch (error) {
    return [401, { message: 'Token inválido' }];
  }
});

mock.onPost('/api/account/profile').reply((request) => {
  const { update } = JSON.parse(request.data);

  _.assign(db.user, update);

  return [200, { user: db.user }];
});

mock.onGet('/api/account/settings').reply(200, {
  settings: {},
});

mock.onGet('/api/account/subscription').reply(200, {
  subscription: {
    name: 'Freelancer',
    price: '5',
    currency: '$',
    proposalsLeft: 12,
    templatesLeft: 5,
    invitesLeft: 24,
    adsLeft: 10,
    hasAnalytics: true,
    hasEmailAlerts: true,
  },
});
