import { Result } from "../../../types/resultType";
import global from "../../../global.module.css";

type propType = {
  handleFilterChange: (result: Result) => void;
};

const LeaveFilter = ({ handleFilterChange }: propType) => {
  return (
    <div className={global.flex}>
      <button className={`col`} onClick={() => handleFilterChange("All")}>
        All
      </button>
      <button className={`col`} onClick={() => handleFilterChange("Pending")}>
        Pending
      </button>
      <button className={`col`} onClick={() => handleFilterChange("Approved")}>
        Approved
      </button>
      <button className={`col`} onClick={() => handleFilterChange("Rejected")}>
        Rejected
      </button>
    </div>
  );
};

export default LeaveFilter;
