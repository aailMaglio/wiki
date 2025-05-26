import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = globalSlice.actions;
export default globalSlice.reducer;