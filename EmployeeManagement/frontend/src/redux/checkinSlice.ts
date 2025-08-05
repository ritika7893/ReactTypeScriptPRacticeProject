// src/redux/checkinSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface CheckinState {
  isCheckedIn: boolean;
  checkInTime: number | null;
  elapsedTime: number;
}

const initialState: CheckinState = {
  isCheckedIn: false,
  checkInTime: null,
  elapsedTime: 0,
};

const checkinSlice = createSlice({
  name: 'checkin',
  initialState,
  reducers: {
    checkIn(state: CheckinState) {
      state.isCheckedIn = true;
      state.checkInTime = Date.now();
      state.elapsedTime = 0;
    },
    checkOut(state: CheckinState) {
      state.isCheckedIn = false;
      state.checkInTime = null;
      state.elapsedTime = 0;
    },
    tick(state: CheckinState) {
      if (state.isCheckedIn && state.checkInTime) {
        state.elapsedTime = Math.floor((Date.now() - state.checkInTime) / 1000);
      }
    },
  },
});

export const { checkIn, checkOut, tick } = checkinSlice.actions;
export default checkinSlice.reducer;
