import { TaskItem } from 'app/DAL/types/types'
import React from 'react'
import { Api } from 'app/DAL/Api'
import { ViewModContainer } from 'app/View/ViewModContainer'
import { HStack, VStack } from 'native-base'
import { DetailsContentContainer } from 'app/View/detailsContentContainer'
import { TaskTitleContainer } from 'app/View/taskTitleContainer'
import { DescriptionContainer } from 'app/View/descriptionContainer'
import { Stagg } from 'app/View/Stagg'
import { StartDateContainer } from 'app/View/startDateContainer'

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
      <HStack space={'sm'}>
        <VStack>
          <TaskTitleContainer task={task} />

          <DescriptionContainer task={task} />

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
          <StartDateContainer />
        </VStack>
        <Stagg />
      </HStack>
    </ViewModContainer>
  )
}



