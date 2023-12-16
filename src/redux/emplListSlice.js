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
    setAddNewEmployee(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

//get data from apiSlice

const { useGetAllEmployeesQuery } = employeeApi;

export const fetchEmplData = () => (dispatch) => {
  const { data } = useGetAllEmployeesQuery();

  dispatch(setEmplInfo(data));
};

// export const fetchEmplData = createAsyncThunk(
//     'empl/fetchEmplData',
//     async (thunkAPI) => {
//       try {
//         const { data } = await employeeApi.useGetAllEmployeesQuery();
//         return data;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );

export const { setEmplInfo, setAddNewEmployee } = emplListSlice.actions;
export default emplListSlice.reducer;
