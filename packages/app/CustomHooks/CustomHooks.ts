import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppRootStateType} from "../BLL/Store";

import {bindActionCreators} from "@reduxjs/toolkit";
import {navigateParamsSlice} from "../BLL/NavigateParamsSlice";

export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector


const allActions = {
    ...navigateParamsSlice.actions
}

export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(allActions, dispatch)
}