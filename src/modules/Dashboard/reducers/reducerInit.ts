import { BalanceState, ModalState } from "./reducer";

// SINGLE STATE
export const initialBalances: BalanceState = {
  vlBalance: 15,
  slBalance: 15,
  elBalance: 3,
};

export const initialModal: ModalState = {
  isModalOpen: false,
};

export const initialLeaveFormData = {
  name: "",
  leaveDate: "",
  dateFiled: "",
  leaveType: "",
};

// COMBINED STATES
export type CombinedState = BalanceState & ModalState;
export const initalCombinedState: CombinedState = {
  ...initialBalances,
  ...initialModal,
  ...initialLeaveFormData,
};
