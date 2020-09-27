import { createSlice } from '@reduxjs/toolkit';
import { THEMES } from 'utils/constants';

const restoreState = () => {
  let settings = {
    responsiveFontSizes: true,
    theme: THEMES.LIGHT,
  };
  const storedSettings = localStorage.getItem('settings');
  if (storedSettings) {
    settings = JSON.parse(storedSettings);
  }
  return settings;
};

const initialState = restoreState();

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateSettings(state, action) {
      state = action.payload;
      localStorage.setItem('settings', JSON.stringify(state));
      return state;
    },
  },
});

export const { updateSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
