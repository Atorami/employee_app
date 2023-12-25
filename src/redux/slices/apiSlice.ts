import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Employee {
  id: number;
  name: string;
  surname: string;
  position: string;
  department: string;
  salary: number;
}

export const employeeApi = createApi({
      reducerPath: "employeeApi",
      baseQuery: fetchBaseQuery({
        baseUrl: "https://657cc09e853beeefdb99ec05.mockapi.io/api/v1/employees",
      }),
      endpoints: (builder) => ({
        getAllEmployees: builder.query<Employee[], void>({
        query: () => "",
      }),
    }),
    });

export const { useGetAllEmployeesQuery } = employeeApi;
