import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 10
  },
  reducers: {
    increment: ( state ) => {
      state.count += 1;
    },
    reset: ( state ) => {
      state.count = 10;
    },
    decrement: ( state ) => {
      state.count--;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
