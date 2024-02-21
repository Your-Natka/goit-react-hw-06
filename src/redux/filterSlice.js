import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterName(state, action) {
      return action.payload;
    },
  },
});

export const { filterName } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
