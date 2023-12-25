import React from "react";
import { useSelector } from "react-redux";
import "./app-info.css";
import { RootState as EmplListRootState } from "../../redux/slices/emplListSlice";

const AppInfo:React.FC = () => {
    const { emplList, promoted } = useSelector(
        (state: EmplListRootState) => {
            return state;
        }
    );

    return (
        <div className="app-info">
            <h1>Employee Management System</h1>
            <h2>Number of employees: {emplList.length} </h2>
            <h2>Will get a promotion: {promoted} </h2>
        </div>
    );
};

export default AppInfo;

