import { combineReducers } from "@reduxjs/toolkit";
import positionsSlice from "./slices/positions-slice";

export const rootReducer = combineReducers({
    positions: positionsSlice
});
