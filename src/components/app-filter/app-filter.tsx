import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setClearFilter,
  setSalaryFilter,
  setPromoteFilter,
} from "../../redux/slices/filterSlice";

import { RootState } from "@reduxjs/toolkit/query/react";

import "./app-filter.css";

interface FilterButton {
  name: string;
  label: string;
  action: (value: boolean) => void;
}

interface FilterState {
  all: boolean;
  salary: boolean;
  promote: boolean;
}

const AppFilter: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: { filter: FilterState }) => state.filter);

  const handleFilterClick = (action: (value: boolean) => void) => {
    dispatch(action(!filter[action.name]));
  };

  const buttonsData: FilterButton[] = [
    { name: "all", label: "All employees", action: setClearFilter },
    {
      name: "promote",
      label: "Will get a promotion",
      action: setPromoteFilter,
    },
    {
      name: "salary",
      label: "Salary more than 7000$",
      action: setSalaryFilter,
    },
  ];

  const buttons = buttonsData.map(({ name, label, action }) => {
    const active = filter[name];
    const clazz = active ? "btn-light" : "btn-outline-light";

    return (
        <button
            type="button"
            className={`btn ${clazz}`}
            key={name}
            onClick={() => handleFilterClick(action)}
        >
          {label}
        </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
