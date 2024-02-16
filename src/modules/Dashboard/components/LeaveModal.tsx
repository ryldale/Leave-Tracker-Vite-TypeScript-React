import { useId } from "react";
import classes from "../styles/DashboardPage.module.css";
import { CombinedState } from "../reducers/reducerInit";
import { LeaveFormData } from "../reducers/reducer";

type propType = {
  dispatch: Function;
  state: CombinedState;
  closeModal: () => void;
  onSubmit: (formData: LeaveFormData) => void
};

const LeaveModal = ({ closeModal, onSubmit, dispatch, state }: propType) => {
  const id = useId();
  // Put this on the reducer
  // const [formData, setFormData] = useState<LeaveFormData>;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    // const { name, value } = event.target;
    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [name]: value,
    // }));
    dispatch({ type: "SET_FORMS" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //--------------------------

    const newForms = {
      id: id,
      name: state.name,
      leaveDate: state.leaveDate,
      dateFiled: state.dateFiled,
      leaveType: state.leaveType , 
    };
    // onSubmit(formData);
    console.log(newForms);
    dispatch({ type: "ADD_FORMS", forms: newForms });
    closeModal();
    
  };

  return (
    <div id={id} className={classes.modal}>
      <div className={classes.modalContent}>
        <span className={classes.close} onClick={closeModal}>
          &times;
        </span>
        <h2>Add Leave</h2>
        <form onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label>Leave Date:</label>
            <input
              type="date"
              name="leaveDate"
              value={state.leaveDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label>Date Filed:</label>
            <input
              type="date"
              name="dateFiled"
              value={state.dateFiled}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label>Leave Type:</label>
            <select
              name="leaveType"
              value={state.leaveType}
              onChange={handleChange}
              required
            >
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
