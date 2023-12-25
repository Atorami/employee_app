import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { employeeApi } from "./slices/apiSlice";
import emplListSlice from "./slices/emplListSlice";
import searchSlice from "./slices/searchSlice";
import filterSlice from "./slices/filterSlice";

const rootReducer = combineReducers({
  [employeeApi.reducerPath]: employeeApi.reducer,
  empl: emplListSlice,
  search: searchSlice,
  filter: filterSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(employeeApi.middleware),
});

export default store;
