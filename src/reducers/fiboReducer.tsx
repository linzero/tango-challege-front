import { types } from "../types/types";

export interface fiboState {
    num?:number
    response?:number
}

export interface fiboAction {
    type:string
    payload:fiboState
}

const initialState:fiboState = {
    num:0
}

export const fiboReducer = ( state:fiboState = initialState, action:fiboAction ) => {
    switch (action.type){
        case types.getNumber:
            return {
                ...state
            }
        case types.setNumber:
            return {
                ...state,
                num:action.payload.num
            }
        case types.setResponse:
            return {
                ...state,
                response:action.payload.response
            }
        default:
            return state
    }

}