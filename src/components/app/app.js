import { Component } from "react";
import { useGetAllEmployeesQuery } from "../../redux/apiSlice";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

export default function App() {
  const { data: employeesList, isSuccess } = useGetAllEmployeesQuery();
  console.log(employeesList);

  return (
    <div className="app">
      <AppInfo></AppInfo>
      <div className="search-panel">
        <SearchPanel />
      </div>
      <EmployeesList data={employeesList}></EmployeesList>
      <EmployeesAddForm></EmployeesAddForm>
    </div>
  );
}
