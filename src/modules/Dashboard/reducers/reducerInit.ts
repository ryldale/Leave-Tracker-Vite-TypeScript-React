import { BalanceState, LeaveFormData, ModalState, SetFilter } from "./reducer";

// SINGLE STATE
export const initialBalances: BalanceState = {
  vlBalance: 15,
  slBalance: 15,
  elBalance: 3,
};

export const initialModal: ModalState = {
  isModalOpen: false,
};

export const initialLeaveFormData: LeaveFormData = {
  name: "",
  leaveDate: "",
  dateFiled: "",
  leaveType: "",
};

export const initialFilter: SetFilter = {
  filter: "All",
};

// COMBINED STATES
export type CombinedState = BalanceState & ModalState & LeaveFormData & SetFilter;
export const initalCombinedState: CombinedState = {
  ...initialBalances,
  ...initialModal,
  ...initialLeaveFormData,
  ...initialFilter,
};
