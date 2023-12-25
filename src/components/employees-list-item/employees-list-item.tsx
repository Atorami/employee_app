import { useDispatch } from "react-redux";
import { setDeleteEmployee } from "../../redux/slices/emplListSlice";
import { setPromoteEmployee } from "../../redux/slices/emplListSlice";
import React from "react";

import "./employees-list-item.css";

interface Employee {
    id: number;
    name: string;
    surname: string;
    position: string;
    department: string;
    salary: number;
    promoted: boolean;
}

const EmployeesListItem:React.FC<Employee> = (props) => {
  const dispatch = useDispatch();
  const { id, name, surname, salary, position, department } = props;

  let classNames = "list-group-item d-flex justify-content-between";

  return (
    <li className={classNames}>
      <span className="list-group-item-label">{name}</span>
      <span className="list-group-item-label">{surname}</span>
      <span className="list-group-item-label">{position}</span>
      <span className="list-group-item-label">{department}</span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={() => dispatch(setPromoteEmployee(id))}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button
          type="button"
          className="btn-trash btn-sm "
          onClick={() => dispatch(setDeleteEmployee(id))}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
