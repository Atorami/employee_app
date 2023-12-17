import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://657cc09e853beeefdb99ec05.mockapi.io/api/v1/employees",
  }),
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetAllEmployeesQuery } = employeeApi;
