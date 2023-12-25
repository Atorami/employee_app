import {createSlice, PayloadAction} from "@reduxjs/toolkit";


//description how Employee data looks
interface Employee {
  id: number;
  name: string;
  surname: string;
  position: string;
  department: string;
  salary: number;
  promoted: boolean;
}

//state interface description
interface EmplListState {
  emplList: Employee[];
  isSuccess: boolean;
  promoted: number;
}

const initialState: EmplListState = {
  emplList: [],
  isSuccess: false,
  promoted: 0,
};

const emplListSlice = createSlice({
  name: "empl",
  initialState,
  reducers: {
    setEmplInfo(state, action: PayloadAction<{ fetchData: Employee[]; fetchStatus: boolean }>) {
      const employeesWithPromotion = action.payload.fetchData.map((employee) => ({
        ...employee,
        promoted: false,
      }));

      state.emplList = [...state.emplList, ...employeesWithPromotion];
      state.isSuccess = action.payload.fetchStatus;
    },
    setAddNewEmployee(state, action: PayloadAction<{ formData: Employee }>) {
      const {name, surname, position, department,salary} = action.payload.formData;
      const newEmpl = {
        id:
            state.emplList.length !== 0
                ? state.emplList[state.emplList.length - 1].id + 1
                : 0,
       name, surname, position, department, salary, promoted: false,
      };
      return {
        ...state,
        emplList: [...state.emplList, newEmpl],
      };
    },
    setDeleteEmployee(state,action: PayloadAction<number>) {
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
    setPromoteEmployee(state, action: PayloadAction<number>) {
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

export type RootState = EmplListState;