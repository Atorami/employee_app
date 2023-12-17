import EmployeesListItem from "../employees-list-item/employees-list-item";
import { useDispatch } from "react-redux";
import "./employees-list.css";

const EmployeesList = ({ data }) => {
  const dispatch = useDispatch();
  const elements = data.map((element) => {
    return <EmployeesListItem key={element.id} {...element} />;
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
