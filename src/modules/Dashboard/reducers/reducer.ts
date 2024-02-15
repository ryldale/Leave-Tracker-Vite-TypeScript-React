import { Reducer } from "react";

export type BalanceState = {
    vlBalance: number
    slBalance: number
    elBalance: number
}

export type Action = {
    type: string
    payload: Partial<BalanceState>
}

const balanceReducer: Reducer<BalanceState, Action> = (state, action) => {

    switch(action.type){
        
        case "UPDATE_BALANCES":{
            return {
                ...state,
                ...action.payload
            }
        }
        default:{
            return state;}
        
    }

}

export default balanceReducer;