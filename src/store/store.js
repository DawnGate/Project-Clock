import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import worldClockReducer from "./worldClockSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    worldClock: worldClockReducer,
  },
});
