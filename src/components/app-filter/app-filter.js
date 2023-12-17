import { useDispatch, useSelector } from "react-redux";
import {
  setClearFilter,
  setSalaryFilter,
  setPromoteFilter,
} from "../../redux/slices/filterSlice";

import "./app-filter.css";

const AppFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleFilterClick = (action) => {
    dispatch(action(!filter[action.name]));
  };

  const buttonsData = [
    { name: "all", label: "All employees", action: setClearFilter },
    {
      name: "promote",
      label: "Will get a promotion",
      action: setPromoteFilter,
    },
    {
      name: "salary",
      label: "Salary more than 7000$",
      action: setSalaryFilter,
    },
  ];

  const buttons = buttonsData.map(({ name, label, action }) => {
    const active = filter[name];
    const clazz = active ? "btn-light" : "btn-outline-light";

    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => handleFilterClick(action)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
