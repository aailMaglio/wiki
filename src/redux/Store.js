import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './slices/GlobalSlice';

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});
