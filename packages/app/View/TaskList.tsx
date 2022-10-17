import React from "react";
import {TodoContainer} from "./TodoContainer";
import {useAppSelector} from "../CustomHooks/CustomHooks";

export const TaskList = () => {
    const todo = useAppSelector(state => state.navigateParamsState.currentTodo)
    return (
        <TodoContainer todo={todo}/>
    )
}

