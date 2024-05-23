import { combineReducers } from "@reduxjs/toolkit";
import { positionsReducer } from "./slices/positionsSlice";

export const rootReducer = combineReducers({
    positionsList: positionsReducer,
});
