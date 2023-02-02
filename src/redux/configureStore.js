import { configureStore } from "@reduxjs/toolkit";
import rocketSlice from "./rockets/rockets";
import missionsReducer from "./missions/missions.js";

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
    missions: missionsReducer,
  },
});

export default store;
