import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";
import React from "react";


interface Employee {
  id: number;
  name: string;
  surname: string;
  position: string;
  department: string;
  salary: number;
  promoted: boolean;
}

interface EmployeesListProps {
  data: Employee[];
}



const EmployeesList: React.FC<EmployeesListProps> = ( {data}) => {
  const elements = data.map((element:Employee) => {
    return <EmployeesListItem key={element.id} {...element} />;
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
