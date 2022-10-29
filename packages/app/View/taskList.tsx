import React from 'react'
import { useAppSelector } from '../CustomHooks/CustomHooks'
import { Heading, VStack } from 'native-base'
import { ContentView } from 'app/View/ContentView'
import { Api } from 'app/DAL/Api'
import { ListRenderItem } from 'react-native'
import { ErrorType, TaskItem } from 'app/DAL/types/types'
import { ViewModContainer } from 'app/View/ViewModContainer'
import { DetailsContentContainer } from 'app/View/detailsContentContainer'
import { EditableText } from 'app/View/editableText'


export const TaskList = () => {
  const todo = useAppSelector(state => state.navigateParamsState.currentTodo)
  const { data, isLoading, isError, refetch, error } = Api.useGetTasksQuery({ todolistId: todo._id })
  const taskList = data?.items


  const render: ListRenderItem<TaskItem> = ({ item: task }) => {

    return <TaskDescription task={task} />
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
type TaskDescriptionProps = {
  task: TaskItem
}
const TaskDescription: React.FC<TaskDescriptionProps> = ({ task }) => {

  const [putTask, { isLoading }] = Api.usePutTaskMutation()
  const onPutTask = (payload: Partial<TaskItem>) => {
    putTask({ ...task, ...payload })
  }

  return (
    <ViewModContainer>
      <VStack>
        <Heading alignSelf={'center'}>{task.title}</Heading>
        <EditableText initialValue={task.title} />
        <DetailsContentContainer PayloadKey={'description'}
                                 isLoading={isLoading}
                                 onPutTask={onPutTask}
                                 title={'description:'}
                                 value={task.description} />
        <DetailsContentContainer PayloadKey={'startDate'}
                                 onPutTask={onPutTask}
                                 title={'startDate:'}
                                 value={task.startDate} />
        <DetailsContentContainer PayloadKey={'addedDate'}
                                 onPutTask={onPutTask}
                                 title={'addedDate:'}
                                 value={task.addedDate} />
        <DetailsContentContainer PayloadKey={'deadline'}
                                 onPutTask={onPutTask}
                                 title={'deadline:'}
                                 value={task.deadline} />
        <DetailsContentContainer PayloadKey={'priority'}
                                 onPutTask={onPutTask} title={'priority:'}
                                 value={task.priority} />
        <DetailsContentContainer PayloadKey={'status'}
                                 onPutTask={onPutTask}
                                 title={'status:'}
                                 value={task.status} />
      </VStack>
    </ViewModContainer>
  )
}

