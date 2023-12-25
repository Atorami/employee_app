import React from "react";
import { useSelector } from "react-redux";
import "./app-info.css";
import { RootState } from "@reduxjs/toolkit/query/react";

const AppInfo:React.FC = () => {
    const { emplList: emplCounter, promoted: promotedCounter } = useSelector(
        (state: RootState) => {
            return state.empl;
        }
    );

    return (
        <div className="app-info">
            <h1>Employee Management System</h1>
            <h2>Number of employees: {emplCounter.length} </h2>
            <h2>Will get a promotion: {promotedCounter} </h2>
        </div>
    );
};

export default AppInfo;

