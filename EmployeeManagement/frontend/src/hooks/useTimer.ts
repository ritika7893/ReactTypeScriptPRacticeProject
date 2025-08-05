// src/hooks/useTimer.ts
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tick } from '../redux/checkinSlice';
import type { RootState } from '../redux/store';

export const useTimer = () => {
  const dispatch = useDispatch();
  const isCheckedIn = useSelector((state: RootState) => state.checkin.isCheckedIn);

  useEffect(() => {
    if (!isCheckedIn) return;
    const interval = setInterval(() => {
      dispatch(tick());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, isCheckedIn]);
};
