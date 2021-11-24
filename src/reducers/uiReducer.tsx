import { types } from "../types/types";

interface uiAction {
    type:string
    payload:uiState
}

export interface uiState {
    loading:boolean
}

const initialState:uiState = {
    loading:false,
}

export const uiReducer = ( state = initialState, action:uiAction ) => {

    switch ( action.type ) {

        case types.uiSetLoading:
            return {
                ...state,
                loading:true
            } 
        
        case types.uiRemoveLoading:
            return {
                ...state,
                loading:false
            } 
        default:
            return state
    }

}