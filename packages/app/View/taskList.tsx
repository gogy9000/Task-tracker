import React from "react";
import {TodoContainer} from "./TodoContainer";
import {useAppSelector} from "../CustomHooks/CustomHooks";
import { Center, Heading, HStack, Text, VStack } from 'native-base'
import { ContentView } from 'app/View/ContentView'
import { Api } from 'app/DAL/Api'
import { ListRenderItem } from 'react-native'
import { ErrorType, TaskItem } from 'app/DAL/types/types'
import { ViewModContainer } from 'app/View/ViewModContainer'
import { Task } from 'app/View/Task'

export const TaskList = () => {
    const todo = useAppSelector(state => state.navigateParamsState.currentTodo)
    const { data, isLoading,isError,refetch,error } = Api.useGetTasksQuery({ todolistId: todo._id })
    const taskList = data?.items

    const render: ListRenderItem<TaskItem> = ({ item:task }) => {
        return <ViewModContainer>
            <VStack>
                <Heading>title:{task.title}</Heading>
                <Text>description:{task.description}</Text>
                <Text>status:{task.status}</Text>
                <Text>startDate:{task.startDate}</Text>
                <Text>priority:{task.priority}</Text>
                <Text>addedDate:{task.addedDate}</Text>
                <Text>deadline:{task.deadline}</Text>
            </VStack>
        </ViewModContainer>
    }



    return (
     <ContentView content={taskList}
                  listKey={'tasklist'}
                  renderItem={render}
                  isLoading={isLoading}
                  isError={isError}
                  refetch={refetch}
                  error={error as ErrorType}

     />
    )
}

