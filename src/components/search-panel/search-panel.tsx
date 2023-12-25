import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./search-panel.css";
import { setQuery } from "../../redux/slices/searchSlice";
import { RootState as SearchRootState } from "../../redux/slices/searchSlice";

export const SearchPanel = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: SearchRootState) => state.query);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
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
