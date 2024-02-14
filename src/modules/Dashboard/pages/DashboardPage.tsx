import { useState } from "react";
import leaveData from "../../../leaveData";
import LeaveFilter from "../components/LeaveFilter";
import LeaveList from "../components/LeaveList";
import { Result } from "../../../types/resultType";
import classes from "../styles/DashboardPage.module.css";
import global from "../../../global.module.css";
// import { LeaveDataType } from "../../../types/leaveDataType";

const DashboardPage = () => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (result: Result) => {
    setFilter(result);
    // console.log(typeof(result));
  };

  const filteredLeaveData = leaveData.filter((leave) => {
    if (filter === "All") {
      return true;
    } else {
      return leave.status === filter;
    }
  });

  return (
    <div className={`${global.container} ${classes.center} `}>
      <div className={`${classes.maxWidth} `}>
        <h1>Dashboard</h1>
        <div className={`row`}>
          <p className={`col`}>
            Vacation Leave - 15 Sick Leave- 15 Emergency Leave - 3
          </p>
          <button className={`col`}>Add Leave</button>
        </div>
        <LeaveFilter handleFilterChange={handleFilterChange} />
        <LeaveList filteredLeaveData={filteredLeaveData} />
      </div>
    </div>
  );
};

export default DashboardPage;
