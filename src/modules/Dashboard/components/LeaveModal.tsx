import classes from "../styles/DashboardPage.module.css";

type propType = {
  closeModal: () => void;
};

const LeaveModal = ({ closeModal }: propType) => {
  
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <span className={classes.close} onClick={closeModal}>
          &times;
        </span>
        <h2>Add Leave</h2>
        <form>
          <div className={classes.formGroup}>
            <label>Name:</label>
            <input type="text" name="name" />
          </div>
          <div className={classes.formGroup}>
            <label>Leave Date:</label>
            <input type="date" name="leaveDate" />
          </div>
          <div className={classes.formGroup}>
            <label>Date Filed:</label>
            <input type="date" name="dateFiled" />
          </div>
          <div className={classes.formGroup}>
            <label>Leave Type:</label>
            <select name="leaveType">
              <option value="">Select Leave Type</option>
              <option value="Vacation Leave">Vacation Leave</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Emergency Leave">Emergency Leave</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LeaveModal;
