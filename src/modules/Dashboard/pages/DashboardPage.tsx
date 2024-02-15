import { useEffect, useReducer, useState } from "react";
import leaveData from "../../../leaveData";
import LeaveFilter from "../components/LeaveFilter";
import LeaveList from "../components/LeaveList";
import { Result } from "../../../types/resultType";
import classes from "../styles/DashboardPage.module.css";
import global from "../../../global.module.css";
import DashboardReducer from "../reducers/reducer";
import { initalCombinedState } from "../reducers/reducerInit";
import LeaveModal from "../components/LeaveModal";

const DashboardPage = () => {
  const [filter, setFilter] = useState("All");
  const [state, dispatch] = useReducer(DashboardReducer, initalCombinedState);

  useEffect(() => {
    const updateBalances = () => {
      let vlCount = initalCombinedState.vlBalance;
      let slCount = initalCombinedState.slBalance;
      let elCount = initalCombinedState.elBalance;
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

  // Filtering the leave.status (all, pending, approved and rejected)
  const filteredLeaveData = leaveData.filter((leave) => {
    if (filter === "All") {
      return true;
    } else {
      return leave.status === filter;
    }
  });

  // Modal
  const openModal = () => {
    dispatch({type: "OPEN_MODAL", payload: {}});
  };

  const closeModal = () => {
    dispatch({type: "CLOSE_MODAL", payload: {}});
  };

  // console.log("Is modal open?", state.isModalOpen);

  return (
    <div className={`${global.container} ${classes.center} `}>
      <div className={`${classes.maxWidth} `}>
        <h1>Dashboard</h1>
        <div className={`row`}>
          <p className={`col`}>
            Vacation Leave - {state.vlBalance} Sick Leave - {state.slBalance}{" "}
            Emergency Leave - {state.elBalance}
          </p>
          <button className={`col`} onClick={openModal}>
            Add Leave
          </button>
        </div>
        <LeaveFilter handleFilterChange={handleFilterChange} />
        <LeaveList filteredLeaveData={filteredLeaveData} />
        {state.isModalOpen && <LeaveModal closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default DashboardPage;
