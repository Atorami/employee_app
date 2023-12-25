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
import { RootState } from "../../redux/store";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { data: fetchData, isSuccess: fetchStatus } = useGetAllEmployeesQuery();
  const dataList = useSelector((state: RootState) => state.empl);
  const searchQuery = useSelector((state: RootState) => state.search.query);
  const {
    all: clearFilter,
    salary: salaryFilter,
    promote: promoteFilter,
  } = useSelector((state: RootState) => state.filter);

  useEffect(() => {
    if (fetchStatus) {
      dispatch(setEmplInfo({ fetchData, fetchStatus }));
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
      return Number(val.salary) > 7000;
    }

    return nameMatches || surnameMatches;
  });

  return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        {fetchStatus ? (
            <EmployeesList data={filteredData} />
        ) : (
            <PulseLoader color="#3d5a80" speedMultiplier={0.5} size={7} align="center" />
        )}
        <EmployeesAddForm />
      </div>
  );
};

export default App;
