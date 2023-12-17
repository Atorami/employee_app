import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emplList: [],
  isSuccess: false,
};

const emplListSlice = createSlice({
  name: "empl",
  initialState,
  reducers: {
    setEmplInfo(state, action) {
      state.emplList = [...state.emplList, ...action.payload.fetchData];
      state.isSuccess = action.payload.fetchStatus;
      console.log(state.emplList);
    },
    setAddNewEmployee(state, action) {
      const newEmpl = {
        id:
          state.emplList.length !== 0
            ? state.emplList[state.emplList.length - 1].id + 1
            : 0,
        ...action.payload.formData,
      };
      console.log(newEmpl);
      return {
        ...state,
        emplList: [...state.emplList, newEmpl],
      };
    },
    setDeleteEmployee(state, action) {
      state.emplList = state.emplList.filter(
        (val) => val.id !== action.payload
      );
    },
  },
});

export const { setEmplInfo, setAddNewEmployee, setDeleteEmployee } =
  emplListSlice.actions;
export default emplListSlice.reducer;
