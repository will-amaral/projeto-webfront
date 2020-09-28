import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from 'utils/api';

const initialState = {
  user: null,
};

export const login = createAsyncThunk('account/login', async () => {
  const { user } = await authService.loginInWithToken();
  return user;
});

export const logout = createAsyncThunk('account/logout', async () => {
  await authService.logout();
});

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.rejected]: (state) => {
      state.loading = false;
    },
    [logout.fulfilled]: (state) => {
      state.user = null;
    },
  },
});

export const { setUserData } = accountSlice.actions;

export default accountSlice.reducer;
