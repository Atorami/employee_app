import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { employeeApi } from "./slices/apiSlice";
import empl from "./slices/emplListSlice";
import search from "./slices/searchSlice";
import filter from "./slices/filterSlice";

const rootReducer = combineReducers({
  [employeeApi.reducerPath]: employeeApi.reducer,
  empl,
  search,
  filter,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeApi.middleware),
});
