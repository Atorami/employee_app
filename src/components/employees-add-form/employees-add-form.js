import { useState } from "react";
import "./employees-add-form.css";
import { useDispatch } from "react-redux";
import { setAddNewEmployee } from "../../redux/emplListSlice";

export const EmployeesAddForm = () => {
  const dispatch = useDispatch();

  const [formData, setFromData] = useState({
    emplName: "",
    emplSurname: "",
    emplPosition: "",
    emplDepartment: "",
    emplSalary: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFromData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (formData, e) => {
    e.preventDefault();
    dispatch(setAddNewEmployee(formData));
    setFromData({
      emplName: "",
      emplSurname: "",
      emplPosition: "",
      emplDepartment: "",
      emplSalary: "",
    });
  };

  return (
    <div className="app-add-form">
      <h3>Add a new employee</h3>
      <form className="add-form d-flex" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Employee's name"
          name="emplName"
          value={formData.emplName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Employee's surname"
          name="emplSurname"
          value={formData.emplSurname}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Position"
          name="emplPosition"
          value={formData.emplPosition}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Department"
          name="emplDepartment"
          value={formData.emplDepartment}
          onChange={handleInputChange}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Salary amount"
          name="emplSalary"
          value={formData.emplSalary}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-outline-light">
          Add
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
