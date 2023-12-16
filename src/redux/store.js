import { configureStore } from "@reduxjs/toolkit";
import { employeeApi } from "./apiSlice";
import empl from "./emplListSlice";

export const store = configureStore({
  reducer: {
    [employeeApi.reducerPath]: employeeApi.reducer,
    empl,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeApi.middleware),
});
