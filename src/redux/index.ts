import { Reducer, iInitial } from "./Reducer";
import { applyMiddleware,  createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import {thunk} from 'redux-thunk'

export const store:any = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

type AppStore = ReturnType <typeof store>
export type AppDispatch = AppStore['dispatch']