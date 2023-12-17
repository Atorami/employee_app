import { configureStore } from "@reduxjs/toolkit";
import { employeeApi } from "./slices/apiSlice";
import empl from "./slices/emplListSlice";
import search from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    [employeeApi.reducerPath]: employeeApi.reducer,
    empl,
    search,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeApi.middleware),
});
