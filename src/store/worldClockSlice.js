import { createSlice } from "@reduxjs/toolkit";

const worldClockSlice = createSlice({
  name: "worldClock",
  initialState: {
    items: [],
  },
  reducers: {
    addWorldClock: (state, action) => {
      const newState = state;
      newState.items = [...state.items, action.payload];
      return newState;
    },
  },
});

export const { addWorldClock } = worldClockSlice.actions;

export default worldClockSlice.reducer;
