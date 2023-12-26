import { combineReducers, configureStore } from "@reduxjs/toolkit";
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

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(employeeApi.middleware),
});

export type RootState = {
  [employeeApi.reducerPath]: ReturnType<typeof employeeApi.reducer>;
  empl: ReturnType<typeof emplListSlice>;
  search: ReturnType<typeof searchSlice>;
  filter: ReturnType<typeof filterSlice>;
};

export default store;
