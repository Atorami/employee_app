import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emplList: [],
  isSuccess: false,
};

console.log(initialState);

const emplListSlice = createSlice({
  name: "empl",
  initialState,
  reducers: {
    setEmplInfo(state, action) {
      state.emplList = action.payload.fetchData;
      state.isSuccess = action.payload.fetchStatus;
      console.log("setEmplInfo w sore" + action.payload.emplList[0]["name"]);
    },
    setAddNewEmployee(state, action) {
      state.emplList = action.payload.formData;
      state.isSuccess = action.payload.isSuccess;
      console.log(state.emplList);
    },
  },
});

export const { setEmplInfo, setAddNewEmployee } = emplListSlice.actions;
export default emplListSlice.reducer;
