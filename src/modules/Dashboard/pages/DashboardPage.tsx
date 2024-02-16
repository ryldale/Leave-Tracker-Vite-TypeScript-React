import { useEffect } from "react";
import leaveData from "../../../leaveData";
import LeaveFilter from "../components/LeaveFilter";
import LeaveList from "../components/LeaveList";
import { Result } from "../../../types/resultType";
import classes from "../styles/DashboardPage.module.css";
import global from "../../../global.module.css";
import LeaveModal from "../components/LeaveModal";
import { CombinedState } from "../reducers/reducerInit";

type propType = {
  dispatch: Function;
  state: CombinedState;
};

const DashboardPage = ({ state, dispatch}: propType) => {
  // const [filter, setFilter] = useState("All");

  useEffect(() => {
    const updateBalances = () => {
      let vlCount = state.vlBalance;
      let slCount = state.slBalance;
      let elCount = state.elBalance;
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
    dispatch({ type: "SET_FILTER", filter: result });
    // console.log(result);
  };

  // Filtering the leave.status (all, pending, approved and rejected)
  const filteredLeaveData = leaveData.filter((leave) => {
    // console.log(state.filter);
    if (state.filter === "All") {
      return true;
    } else {
      return leave.status === state.filter;
    }
  });

  // Modal
  const openModal = () => {
    dispatch({ type: "OPEN_MODAL", payload: {} });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL", payload: {} });
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
        {state.isModalOpen && (
          <LeaveModal state={state} dispatch={dispatch} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
