import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllEmployeesQuery } from "../../redux/slices/apiSlice";
import { setEmplInfo } from "../../redux/slices/emplListSlice";
// import { setQuery, RootState as SearchRootState } from "../../redux/slices/searchSlice";
// import { setClearFilter, setSalaryFilter, setPromoteFilter, RootState as FilterRootState } from "../../redux/slices/filterSlice";
// import { RootState as EmplListRootState } from "../../redux/slices/emplListSlice";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import { PulseLoader } from "react-spinners";
import {RootState} from "../../redux/store";

interface Employee {
  id: number;
  name: string;
  surname: string;
  position: string;
  department: string;
  salary: number;
  promoted: boolean;
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { data: fetchData, isSuccess: fetchStatus } = useGetAllEmployeesQuery();
  const dataList = useSelector((state: RootState) => state.empl);
  console.log(dataList);
  const searchQuery = useSelector((state: RootState) => state.search.query);
  const { all: clearFilter, salary: salaryFilter, promote: promoteFilter } = useSelector((state: RootState) => state.filter);

  useEffect(() => {
    if (fetchStatus) {
      dispatch(setEmplInfo({ fetchData, fetchStatus }));
    }
  }, [fetchData, fetchStatus, dispatch]);

  const filteredData = dataList.filter((val: Employee) => {
    const nameMatches = val.name.toLowerCase().includes(searchQuery.toLowerCase());
    const surnameMatches = val.surname.toLowerCase().includes(searchQuery.toLowerCase());

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
            <PulseLoader color="#3d5a80" speedMultiplier={0.5} size={7} />
        )}
        <EmployeesAddForm />
      </div>
  );
};

export default App;
