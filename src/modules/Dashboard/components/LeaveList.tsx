import { LeaveDataType } from "../../../types/leaveDataType";
import "../styles/DashboardPage.module.css";
import  dateFormat  from "dateformat";

const LeaveList = ({filteredLeaveData}: {filteredLeaveData: LeaveDataType[]} ) => {


    return (
      <table>
        <thead>
          <tr>
            <th className={`col`}>Ticket Number</th>
            <th className={`col`}>Leave Date</th>
            <th className={`col`}>Leave Type</th>
            <th className={`col`}>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeaveData.map((leave, index: number) => (
            <tr key={index}>
              <td className={`col`}>{leave.ticketNumber}</td>
              <td className={`col`}>{dateFormat(leave.leaveDate, "mm/dd/yyyy")}</td>
              <td className={`col`}>{leave.leaveType}</td>
              <td className={`col`}>{leave.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default LeaveList;