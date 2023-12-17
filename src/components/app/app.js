import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllEmployeesQuery } from "../../redux/slices/apiSlice";
import { setEmplInfo } from "../../redux/slices/emplListSlice";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";
import { PulseLoader } from "react-spinners";

export default function App() {
  const dispatch = useDispatch();
  const { data: fetchData, isSuccess: fetchStatus } = useGetAllEmployeesQuery();
  const dataList = useSelector((state) => state.empl);
  const searchQuery = useSelector((state) => state.search.query);
  const clearFilter = useSelector((state) => state.filter.all);
  const salaryFilter = useSelector((state) => state.filter.salary);
  const promoteFilter = useSelector((state) => state.filter.promote);

  useEffect(() => {
    if (fetchStatus) {
      dispatch(setEmplInfo({ fetchData: fetchData, fetchStatus: fetchStatus }));
    }
  }, [fetchData, fetchStatus, dispatch]);

  const filteredData = dataList.emplList.filter((val) => {
    const nameMatches = val.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const surnameMatches = val.surname
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    if (clearFilter) {
      return true;
    } else if (promoteFilter) {
      return val.promoted;
    } else if (salaryFilter) {
      return Number(val.salary) > 70000;
    }

    return nameMatches || surnameMatches;
  });

  return (
    <div className="app">
      <AppInfo emplCounter={fetchStatus ? filteredData.length : ""}></AppInfo>
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      {fetchStatus ? (
        <EmployeesList data={filteredData}></EmployeesList>
      ) : (
        <PulseLoader
          color="#3d5a80"
          speedMultiplier={0.5}
          size={7}
          align="center"
        />
      )}
      <EmployeesAddForm></EmployeesAddForm>
    </div>
  );
}
