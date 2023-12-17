import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: false,
  salary: false,
  promote: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setClearFilter: (state, action) => {
      state.all = action.payload;
      //clear an other filters
      state.salary = false;
      state.promote = false;
    },
    setSalaryFilter: (state, action) => {
      state.salary = action.payload;
      state.all = false;
    },
    setPromoteFilter: (state, action) => {
      state.promote = action.payload;
      state.all = false;
    },
  },
});

export const { setClearFilter, setSalaryFilter, setPromoteFilter } =
  filterSlice.actions;
export default filterSlice.reducer;