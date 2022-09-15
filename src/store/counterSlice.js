import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decreament } = counterSlice.actions;

export default counterSlice.reducer;
