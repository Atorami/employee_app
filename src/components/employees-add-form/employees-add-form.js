import "./employees-add-form.css";
import { useDispatch, useSelector } from "react-redux";

export const EmployeesAddForm = () => {
  const emplInfo = useSelector((state) => state.empl);
  return (
    <div className="app-add-form">
      <h3>Add a new employee</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Employee's name"
          name="name"
          value={emplInfo.emplName}
        />
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Employee's surname"
          name="salary"
          value={emplInfo.emplSurname}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Position"
          name="salary"
          value={emplInfo.emplPosition}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Department"
          name="salary"
          value={emplInfo.emplDepartment}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Salary amount"
          name="salary"
          value={emplInfo.emplSalary}
        />

        <button type="submit" className="btn btn-outline-light">
          Add
        </button>
      </form>
    </div>
  );
};

// class EmployeesAddForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       salary: "",
//     };
//   }

//   onValueChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     this.props.onAdd(this.state.name, this.state.salary);
//     this.setState({
//       name: "",
//       salary: "",
//     });
//   };

//   render() {
//     const { name, salary } = this.state;

//     return (
//       <div className="app-add-form">
//         <h3>Add a new employee</h3>
//         <form className="add-form d-flex" onSubmit={this.onSubmit}>
//           <input
//             type="text"
//             className="form-control new-post-label"
//             placeholder="Employee's name"
//             name="name"
//             value={name}
//             onChange={this.onValueChange}
//           />
//           <input
//             type="text"
//             className="form-control new-post-label"
//             placeholder="Employee's surname"
//             onChange={this.onValueChange}
//             name="salary"
//             value={salary}
//           />
//           <input
//             type="number"
//             className="form-control new-post-label"
//             placeholder="Position"
//             onChange={this.onValueChange}
//             name="salary"
//             value={salary}
//           />
//           <input
//             type="number"
//             className="form-control new-post-label"
//             placeholder="Department"
//             onChange={this.onValueChange}
//             name="salary"
//             value={salary}
//           />
//           <input
//             type="number"
//             className="form-control new-post-label"
//             placeholder="Salary amount"
//             onChange={this.onValueChange}
//             name="salary"
//             value={salary}
//           />

//           <button type="submit" className="btn btn-outline-light">
//             Add
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

export default EmployeesAddForm;
