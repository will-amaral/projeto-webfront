import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockAxios as axios } from 'utils/api';

const initialState = [];

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async () => {
    const { data } = await axios.get('/api/notifications');
    return data.notifications;
  }
);

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNotifications.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export default notificationsSlice.reducer;
