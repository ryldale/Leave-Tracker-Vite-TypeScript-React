import { useEffect, useReducer, useState } from "react";
import leaveData from "../../../leaveData";
import LeaveFilter from "../components/LeaveFilter";
import LeaveList from "../components/LeaveList";
import { Result } from "../../../types/resultType";
import classes from "../styles/DashboardPage.module.css";
import global from "../../../global.module.css";
import balanceReducer from "../reducers/reducer";
import { initialBalances } from "../reducers/reducerInit";
// import { LeaveDataType } from "../../../types/leaveDataType";

const DashboardPage = () => {
  const [filter, setFilter] = useState("All");
  const [state, dispatch] = useReducer(balanceReducer, initialBalances);


  useEffect(() => {
    const updateBalances = () => {
      let vlCount = initialBalances.vlBalance;
      let slCount = initialBalances.slBalance;
      let elCount = initialBalances.elBalance;
      leaveData.forEach((leave) => {
        if (leave.status === "Approved") {
          if (leave.leaveType === "VL") {
            vlCount--;
          } else if (leave.leaveType === "SL") {
            slCount--;
          } else if (leave.leaveType === "EL") {
            elCount--;
          }
        }
      });

      dispatch({
        type: "UPDATE_BALANCES",
        payload: { vlBalance: vlCount, slBalance: slCount, elBalance: elCount },
      });
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
            Vacation Leave - {state.vlBalance} Sick Leave - {state.slBalance} Emergency
            Leave - {state.elBalance}
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
