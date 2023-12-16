import { createSlice } from "@reduxjs/toolkit";
import { employeeApi } from "./apiSlice";

const initialState = {
  emplName: "",
  emplSurname: "",
  emplPosition: "",
  emplDepartment: "",
  emplSalary: "",
};

const emplListSlice = createSlice({
  name: "empl",
  initialState,
  reducers: {
    setEmplInfo(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

//get data from apiSlice

const { useGetAllEmployeesQuery } = employeeApi;
export const fetchEmplData = () => (dispatch) => {
  const { data } = useGetAllEmployeesQuery();

  dispatch(setEmplInfo(data));
};

export const { setEmplInfo } = emplListSlice.actions;
export default emplListSlice.reducer;
