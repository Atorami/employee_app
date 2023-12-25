import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({ data }) => {
  const elements = data.map((element) => {
    return <EmployeesListItem key={element.id} {...element} />;
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
