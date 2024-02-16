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
  name: string;
  leaveDate: string;
  dateFiled: string;
  leaveType: string;
};

export type SetFilter = {
  filter: string;
};
  
export type SetForms = {
  formData: []
}

export type CombinedType = BalanceState & SetFilter & SetForms;

export type Action = {
  type: string;
  filter: any;
  payload: Partial<CombinedType>;
};

const DashboardReducer: Reducer<CombinedState, Action> = (state, action) => {
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

    case "SET_FILTER": {
      return {
        ...state,
        filter: action.filter,
      };
    }

    // case "SET_FORMS": {
    //   return{
    //     ...state,
    //     //-------------------------------------
    //     forms: [action.filter]
    //   }
    // }

    case "ADD_FORMS": {
      const newForms = [...state.]
      return{
        ...state,
        //-------------------------------------
        forms: action.filter
      }
    }


    default: {
      return state;
    }
  }
};

export default DashboardReducer;
