import { useState } from "react";
import "./employees-add-form.css";
import { useDispatch } from "react-redux";
import { setAddNewEmployee } from "../../redux/slices/emplListSlice";

export const EmployeesAddForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    position: "",
    department: "",
    salary: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setAddNewEmployee({ formData }));

    setFormData({
      name: "",
      surname: "",
      position: "",
      department: "",
      salary: "",
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
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Employee's surname"
          name="surname"
          value={formData.surname}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Position"
          name="position"
          value={formData.position}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Department"
          name="department"
          value={formData.department}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Salary amount"
          name="salary"
          value={formData.salary}
          onChange={handleInputChange}
          required
        />

        <button type="submit" className="btn btn-outline-light">
          Add
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
