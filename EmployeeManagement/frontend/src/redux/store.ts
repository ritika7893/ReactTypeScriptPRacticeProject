// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import checkinReducer from './checkinSlice';

export const store = configureStore({
  reducer: {
    checkin: checkinReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
