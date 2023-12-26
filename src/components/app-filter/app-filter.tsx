// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setClearFilter,
//   setSalaryFilter,
//   setPromoteFilter,
// } from "../../redux/slices/filterSlice";
//
// import { RootState } from "../../redux/store";
//
// import "./app-filter.css";
//
// interface FilterButton {
//   name: string;
//   label: string;
//   action: (value: boolean) => void;
// }
//
// const AppFilter: React.FC = () => {
//   const dispatch = useDispatch();
//   //get state of filter slice(all, salary, promote)
//   const filter = useSelector((state: RootState) => state.filter);
//
//   const handleFilterClick = (action: (value: boolean) => void, name: string) => {
//     dispatch(action(!filter.[name]));
//   };
//
//   const buttonsData: FilterButton[] = [
//     { name: "all", label: "All employees", action: setClearFilter },
//     {
//       name: "promote",
//       label: "Will get a promotion",
//       action: setPromoteFilter,
//     },
//     {
//       name: "salary",
//       label: "Salary more than 7000$",
//       action: setSalaryFilter,
//     },
//   ];
//
//   const buttons = buttonsData.map(({ name, label, action }) => {
//     const active = filter[name];
//     const clazz = active ? "btn-light" : "btn-outline-light";
//
//     return (
//         <button
//             type="button"
//             className={`btn ${clazz}`}
//             key={name}
//             onClick={() => handleFilterClick(action, name)}
//         >
//           {label}
//         </button>
//     );
//   });
//
//   return <div className="btn-group">{buttons}</div>;
// };
//
// export default AppFilter;
