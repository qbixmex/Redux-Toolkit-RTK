import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 10 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: ( state, action ) => {
      state.count += action.payload;
    },
    reset: ( state ) => {
      state.count = initialState.count;
    },
    decrement: ( state, action ) => {
      if (state.count == 0) return;
      state.count -= action.payload;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
