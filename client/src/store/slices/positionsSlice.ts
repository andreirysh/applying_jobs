import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Position } from './types';
import { RootState } from '../root-types';

interface PositionsState {
    positions: Position[];
}

const initialState: PositionsState = {
    positions: [],
};

const positionsSlice = createSlice({
    name: 'positionsList',
    initialState,
    reducers: {
        addPosition(state, action: PayloadAction<Position>) {
            state.positions.push(action.payload);
        },
    },
});

export const { addPosition } = positionsSlice.actions;
export const selectPositions = (state: RootState) => state.positionsList;
export const positionsReducer = positionsSlice.reducer;
