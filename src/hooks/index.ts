import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { iInitial } from "../redux/Reducer";
import { AppDispatch } from "../redux";

export const useAppSelector: TypedUseSelectorHook<iInitial> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>()