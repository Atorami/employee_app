import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  all: boolean;
  salary: boolean;
  promote: boolean;
}

const initialState: FilterState = {
  all: false,
  salary: false,
  promote: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setClearFilter: (state, action: PayloadAction<boolean>) => {
      state.all = action.payload;
      state.salary = false;
      state.promote = false;
    },
    setSalaryFilter: (state, action: PayloadAction<boolean>) => {
      state.salary = action.payload;
      state.all = false;
    },
    setPromoteFilter: (state, action: PayloadAction<boolean>) => {
      state.promote = action.payload;
      state.all = false;
    },
  },
});

export const { setClearFilter, setSalaryFilter, setPromoteFilter } =
    filterSlice.actions;
export default filterSlice.reducer;

export type RootState = FilterState;
