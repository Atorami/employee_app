import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emplList: [],
  isSuccess: false,
  promoted: 0,
};

const emplListSlice = createSlice({
  name: "empl",
  initialState,
  reducers: {
    setEmplInfo(state, action) {
      state.emplList = [...state.emplList, ...action.payload.fetchData];
      state.isSuccess = action.payload.fetchStatus;
    },
    setAddNewEmployee(state, action) {
      const newEmpl = {
        id:
          state.emplList.length !== 0
            ? state.emplList[state.emplList.length - 1].id + 1
            : 0,
        ...action.payload.formData,
      };
      return {
        ...state,
        emplList: [...state.emplList, newEmpl],
      };
    },
    setDeleteEmployee(state, action) {
      const deletedEmployee = state.emplList.find(
        (val) => val.id === action.payload
      );
      if (deletedEmployee && deletedEmployee.promoted) {
        state.promoted -= 1; //delete from promoted
      }
      state.emplList = state.emplList.filter(
        (val) => val.id !== action.payload
      );
    },
    setPromoteEmployee(state, action) {
      const employee = state.emplList.find((val) => val.id === action.payload);
      if (employee) {
        employee.promoted = !employee.promoted;
        state.promoted += employee.promoted ? 1 : -1;
      }
    },
  },
});

export const {
  setEmplInfo,
  setAddNewEmployee,
  setDeleteEmployee,
  setPromoteEmployee,
} = emplListSlice.actions;
export default emplListSlice.reducer;
