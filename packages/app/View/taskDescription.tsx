import { TaskItem } from 'app/DAL/types/types'
import React from 'react'
import { Api } from 'app/DAL/Api'
import { ViewModContainer } from 'app/View/ViewModContainer'
import { Heading, VStack } from 'native-base'
import { EditableText } from 'app/View/editableText'
import { DetailsContentContainer } from 'app/View/detailsContentContainer'
import { useAppSelector } from 'app/CustomHooks/CustomHooks'

type TaskDescriptionProps = {
  task: TaskItem
}
export const TaskDescription: React.FC<TaskDescriptionProps> = ({ task }) => {

  const [putTask, { isLoading }] = Api.usePutTaskMutation()
  const onPutTask = (payload: Partial<TaskItem>) => {
    putTask({ ...task, ...payload })
  }


  return (
    <ViewModContainer>
      <VStack>
        <TitleContainer task={task} />
        {/*<EditableText*/}
        {/*  isLoading={isLoading}*/}
        {/*  inputProps={{fontSize:'2xl'}}*/}
        {/*  onPressButton={onPutTaskTitle}*/}
        {/*  textProps={{ fontSize:'2xl'}}*/}
        {/*  initialValue={task.title}*/}

        {/*/>*/}
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

const TitleContainer = ({ task }) => {
  const [putTask, { isLoading }] = Api.usePutTaskMutation()
  const onPutTaskTitle = (title: string) => {
    putTask({ ...task, title })
  }

  return (
    <EditableText
      isLoading={isLoading}
      inputProps={{ fontSize: '2xl' }}
      onPressButton={onPutTaskTitle}
      textProps={{ fontSize: '2xl' }}
      initialValue={task.title}
    />
  )
}