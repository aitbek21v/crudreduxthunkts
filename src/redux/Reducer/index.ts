import { actions } from "../../actions"
import {  IProduct, IValues } from "../../types"


export interface iInitial {
    product:IProduct[],
    oneProduct: any
}
const initialState:iInitial = {
    product:[],
    oneProduct:{}

}

export const Reducer = (state = initialState,action:any) => {
    switch(action.type) {
        case actions.ADD_PRODUCT:
            return {...state,product:action.payload}
            case actions.GET_PRODUCT:
                return {...state,product:action.payload}
                case actions.DELETE_PRODUCT:
                    return {...state,product:state.product.filter(el => el.id !== action.payload)}
                    case actions.GET_ONE_PRODUCT:
                        return {...state,oneProduct:action.payload}
        default:return state
    }
}