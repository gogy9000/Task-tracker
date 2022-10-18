import React, {FC, memo, useCallback, useState} from "react";
import {Api} from "../DAL/Api";
import {Todo} from "./Todo";
import {Tasks} from "./Tasks";
import {TodoListItem} from "../DAL/types/types";
import {ActivityIndicator} from "react-native";
import { Spinner } from 'native-base'

type TodoContainerProps = {
    todo: TodoListItem
}

export const TodoContainer: FC<TodoContainerProps> = memo(({todo}) => {
    const [taskTitle, setTaskTitle] = useState("")
    const {data, isLoading} = Api.useGetTasksQuery({todolistId: todo._id})
    const [deleteTodo,deleteFeedbackData] = Api.useDeleteTodoMutation()
    const [postTask,postFeedbackData ] = Api.usePostTaskMutation()
    console.log(deleteFeedbackData)
    const tasks = data?.items

    const onChangeTodoTitle = useCallback((value: string) => {
        setTaskTitle(value)
    }, [taskTitle])

    const addTaskHandler = useCallback(() => {
        postTask({todolistId: todo._id, title: taskTitle})
        setTaskTitle("")
    }, [todo._id, taskTitle])

    const deleteTodoHandler = useCallback((todoId: string) => {
        deleteTodo(todoId)
    }, [todo._id])

    return (
        <Todo
            postFeedbackData={postFeedbackData}
            deleteFeedbackData={deleteFeedbackData}
            currentTaskTitle={taskTitle}
            onChangeTaskTitle={onChangeTodoTitle}
            todo={todo}
            addTaskHandler={addTaskHandler}
            deleteTodoHandler={deleteTodoHandler}
        >
            {isLoading ?
                <Spinner size={"lg"}/>
                :
                <Tasks todo={todo} tasks={tasks}/>}
        </Todo>
    )
})