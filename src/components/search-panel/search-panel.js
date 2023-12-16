import { useSelector } from "react-redux";
import "./search-panel.css";
import { useState } from "react";

export const SearchPanel = () => {
  const emplList = useSelector((state) => state.empl.emplList);
  const [filtredEmpl, setFiltredEmp] = useState(emplList);
  const [empl, setEmpl] = useState("");

  const handleInputChange = (e) => {
    setEmpl(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Find an employee"
      value={empl}
      onChange={handleInputChange}
    />
  );
};

// class SearchPanel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       term: "",
//     };
//   }

//   onUpdateSearch = (e) => {
//     const term = e.target.value;
//     this.setState({ term });
//     this.props.onUpdateSearch(term);
//   };

//   render() {
//     return (
//       <input
//         type="text"
//         className="form-control search-input"
//         placeholder="Find an employee"
//         value={this.state.term}
//         onChange={this.onUpdateSearch}
//       />
//     );
//   }
// }

export default SearchPanel;
