import React, { memo } from 'react'
import { ContentView } from 'app/components/contentView/ContentView'
import { Api } from 'app/DAL/Api'
import { ListRenderItem } from 'react-native'
import { ErrorType, TaskItem } from 'app/DAL/types/types'
import { TaskDescription } from 'app/features/task-feature/content/taskDescription'
import { AuthRedirect } from 'app/HOC/AuthRedirect'
import { EmptyContent } from 'app/components/emptyContent/EmptyContent'
import { HeaderByTaskList } from 'app/features/task-feature/header/HeaderByTaskList'
import { useAppSelector } from 'app/CustomHooks/CustomHooks'
import { createParam } from 'solito'

export const TaskList = AuthRedirect(memo(() => {
  const {useParam}=createParam<{todoid:string}>()
  const [todoId]=useParam('todoid')
  console.log(todoId)
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

