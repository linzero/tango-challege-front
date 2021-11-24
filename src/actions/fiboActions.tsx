import { AxiosResponse } from "axios"
import { Dispatch } from "react"
import { getNumber_GET } from "../api/FiboApi"
import { fiboAction } from "../reducers/fiboReducer"
import { types } from "../types/types"
import { removeLoading, setLoading } from "./uiActions"


export const setResponse = ( response?:number ) => ({
    type:types.setResponse,
    payload: {
        response
    }
})

export const setNumber = ( num?:number ) => ({
    type:types.setNumber,
    payload: {
        num
    }
})

export const getNumber = ( num:number ) => {

    return ( dispatch:Dispatch<fiboAction> ) => {
        dispatch(setLoading())
        getNumber_GET(num)
        .then((response:AxiosResponse) => {
            dispatch( setResponse( response.data['response'] ) )
            dispatch(removeLoading())
        })
        .catch(err => {
            dispatch(removeLoading())
            console.log(err);
        })
    }
}

