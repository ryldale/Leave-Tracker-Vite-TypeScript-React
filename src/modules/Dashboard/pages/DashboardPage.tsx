import { useEffect, useState } from "react";
import leaveData from "../../../leaveData";
import LeaveFilter from "../components/LeaveFilter";
import LeaveList from "../components/LeaveList";
import { Result } from "../../../types/resultType";
import classes from "../styles/DashboardPage.module.css";
import global from "../../../global.module.css";
// import { LeaveDataType } from "../../../types/leaveDataType";

const DashboardPage = () => {
  const [filter, setFilter] = useState("All");

  // Use a Reducer here
  const [vlBalance, setVlBalance] = useState(15);
  const [slBalance, setSlBalance] = useState(15);
  const [elBalance, setElBalance] = useState(3);

  useEffect(() => {
    const updateBalances = () => {
      let vlCount = 15;
      let slCount = 15;
      let elCount = 3;
      leaveData.forEach((leave) => {
        if (leave.leaveType === "VL") {
          vlCount--;
        } else if (leave.leaveType === "SL") {
          slCount--;
        } else if (leave.leaveType === "EL") {
          elCount--;
        }
      });
      setVlBalance(vlCount);
      setSlBalance(slCount);
      setElBalance(elCount);
    };

    updateBalances();
  }, []);

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
            Vacation Leave - {vlBalance} Sick Leave - {slBalance} Emergency Leave - {elBalance}
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
