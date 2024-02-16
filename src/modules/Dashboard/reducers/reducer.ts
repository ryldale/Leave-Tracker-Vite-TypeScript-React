import { Reducer } from "react";
import { CombinedState } from "./reducerInit";

export type BalanceState = {
  vlBalance: number;
  slBalance: number;
  elBalance: number;
};

export type ModalState = {
  isModalOpen: boolean;
};

export type LeaveFormData = {
  name: string
  leaveDate: string
  dateFiled: string
  leaveType: string
};

export type Action = {
  type: string;
  payload: Partial<BalanceState>;
};

const DashboardReducer: Reducer<CombinedState ,Action> = (state, action) => {
  switch (action.type) {
    case "UPDATE_BALANCES": {
      return {
        ...state,
        ...action.payload,
      };
    }

    case "OPEN_MODAL": {
      return {
        ...state,
        isModalOpen: true,
      };
    }

    case "CLOSE_MODAL": {
      return {
        ...state,
        isModalOpen: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default DashboardReducer;
