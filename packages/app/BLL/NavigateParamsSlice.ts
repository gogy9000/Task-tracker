import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TaskItem, TodoListItem} from "../DAL/types/types";


export const navigateParamsSlice=createSlice({
    name:"navigateParamsSlice",
    initialState:{
        currentTodo:{} as  TodoListItem,
        currentTask:{} as TaskItem
    },
    reducers:{
        changeCurrentTodo:(state,action:PayloadAction<TodoListItem>)=>{
            state.currentTodo=action.payload
        },
        changeCurrentTask:(state,action:PayloadAction<TaskItem>)=>{
            state.currentTask=action.payload
        }
    }
})