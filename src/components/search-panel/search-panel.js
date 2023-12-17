import { useDispatch, useSelector } from "react-redux";
import "./search-panel.css";
import { setQuery } from "../../redux/slices/filterSlice";

export const SearchPanel = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);

  const handleInputChange = (e) => {
    dispatch(setQuery(e.target.value));
    console.log(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Find an employee"
      value={query}
      onChange={handleInputChange}
    />
  );
};

export default SearchPanel;
