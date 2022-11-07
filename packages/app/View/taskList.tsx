import React, { memo } from 'react'
import { useAppSelector } from '../CustomHooks/CustomHooks'
import { ContentView } from 'app/View/ContentView'
import { Api } from 'app/DAL/Api'
import { ListRenderItem } from 'react-native'
import { ErrorType, TaskItem } from 'app/DAL/types/types'
import { TaskDescription } from 'app/View/taskDescription'
import { AuthRedirect } from 'app/View/AuthRedirect'
import { EmptyContent } from 'app/View/EmptyContent'
import { HeaderByTaskList } from 'app/View/HeaderByTaskList'

export const TaskList = AuthRedirect(memo(() => {
  const todo = useAppSelector(state => state.navigateParamsState.currentTodo)
  const { data, isLoading, refetch, error } = Api.useGetTasksQuery({ todolistId: todo._id })
  const taskList = data?.items

  const renderItem: ListRenderItem<TaskItem> = ({ item: task }) => {
    return <TaskDescription task={task} />
  }

  return (
    <ContentView data={taskList}
                 renderItem={renderItem}
                 listKey={'tasklist'}
                 isLoading={isLoading}
                 onRefresh={refetch}
                 error={error as ErrorType}
                 ListHeaderComponent={<HeaderByTaskList todoId={todo._id} />}
                 ListEmptyComponent={<EmptyContent/>}
    />
  )
}))

