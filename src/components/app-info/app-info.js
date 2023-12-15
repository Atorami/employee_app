import "./app-info.css";

const AppInfo = ({ emplCounter, emplIncr }) => {
  return (
    <div className="app-info">
      <h1>Employee Management System</h1>
      <h2>Number of employees: {emplCounter} </h2>
      <h2>Will get a promotion: {emplIncr} </h2>
    </div>
  );
};

export default AppInfo;
