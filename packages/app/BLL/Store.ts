import {configureStore} from "@reduxjs/toolkit";
import {Api} from "../DAL/Api";
import {navigateParamsSlice} from "./NavigateParamsSlice";

export const store=configureStore({
    reducer:{
        navigateParamsState:navigateParamsSlice.reducer,
        [Api.reducerPath]:Api.reducer
    },
    middleware:getDefaultMiddleware =>
        getDefaultMiddleware().concat(Api.middleware)
})

export type AppRootStateType =ReturnType<typeof store.getState>
export type AppDispatchType=typeof store.dispatch