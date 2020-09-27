import { configureStore } from '@reduxjs/toolkit';

import account from './accountSlice';
import settings from './settingsSlice';
import notifications from './notificationsSlice';

export default configureStore({
  reducer: {
    account,
    notifications,
    settings,
  },
});
