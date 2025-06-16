import { createSlice } from '@reduxjs/toolkit';

export const likeslice = createSlice({
  name: 'counter',
  initialState: 0, // just a number, no object
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = likeslice.actions;
export default likeslice.reducer;