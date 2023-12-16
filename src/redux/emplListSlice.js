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
        id: state.emplList[state.emplList.length - 1].id + 1,
        ...action.payload.formData,
      };
      console.log(newEmpl);
      return {
        ...state,
        emplList: [...state.emplList, newEmpl],
      };
    },
  },
});

export const { setEmplInfo, setAddNewEmployee } = emplListSlice.actions;
export default emplListSlice.reducer;
