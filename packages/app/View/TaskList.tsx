import React from "react";
import {TodoContainer} from "./TodoContainer";
import {useAppSelector} from "../CustomHooks/CustomHooks";
import { ViewModContainer } from 'app/View/ViewModContainer'

export const TaskList = () => {
    const todo = useAppSelector(state => state.navigateParamsState.currentTodo)
    return (
      <ViewModContainer >
        <TodoContainer todo={todo}/>
      </ViewModContainer>
    )
}

