import classes from "../styles/DashboardPage.module.css";

type propType = {
  closeModal: () => void;
};

const LeaveModal = ({ closeModal, /*dispatch, state*/ }: propType) => {

  const handleSubmit = () =>{
    console.log("Forms has been submitted");
  } 

  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <span className={classes.close} onClick={closeModal}>
          &times;
        </span>
        <h2>Add Leave</h2>
        <form onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label>Name:</label>
            <input type="text" name="name" required/>
          </div>
          <div className={classes.formGroup}>
            <label>Leave Date:</label>
            <input type="date" name="leaveDate" required/>
          </div>
          <div className={classes.formGroup}>
            <label>Date Filed:</label>
            <input type="date" name="dateFiled" required/>
          </div>
          <div className={classes.formGroup}>
            <label>Leave Type:</label>
            <select name="leaveType" required>
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
