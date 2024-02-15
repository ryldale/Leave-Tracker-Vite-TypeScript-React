type propType = {
    closeModal: () => void;
  };

const LeaveModal = ({ closeModal }: propType) => {
  return (
    <div>
        <h2 onClick={closeModal}>HELLO WORLD</h2>
    </div>
  );
};

export default LeaveModal;
