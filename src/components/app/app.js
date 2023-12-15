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
      <AppInfo emplCounter={isSuccess ? employeesList.lenght : ""}></AppInfo>
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      {isSuccess ? (
        <EmployeesList data={employeesList}></EmployeesList>
      ) : (
        <EmployeesList data={[]}></EmployeesList>
      )}
      <EmployeesAddForm></EmployeesAddForm>
    </div>
  );
}
