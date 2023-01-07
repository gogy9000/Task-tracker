import { TaskItem } from 'app/DAL/types/types'
import React from 'react'
import { ViewModContainer } from 'app/components/viewModContainer/ViewModContainer'
import { HStack, VStack } from 'native-base'
import { TaskTitleContainer } from 'app/features/task-feature/content/view/taskTitleContainer'
import { DescriptionContainer } from 'app/features/task-feature/content/view/descriptionContainer'
import { Stagg } from 'app/features/task-feature/content/controllers/Stagg'
import { AddedDateView } from 'app/features/task-feature/content/view/addedDateView'
import { DateAndTimeView } from 'app/features/task-feature/content/view/dateAndTimeView'
import { PriorityView } from 'app/features/task-feature/content/view/priorityView'
import { StatusView } from 'app/features/task-feature/content/view/statusView'

type TaskDescriptionProps = {
  task: TaskItem
}
export const TaskDescription: React.FC<TaskDescriptionProps> = ({ task }) => {

  return (
    <ViewModContainer>
      <HStack space={'sm'} >
        <VStack space={'sm'} flex={1}>
          <TaskTitleContainer task={task} />
          <DescriptionContainer task={task} />
          <DateAndTimeView title={'Task start date'} date={task.startDate} />
          <DateAndTimeView title={'Deadline'} date={task.deadline}/>
          <PriorityView  task={task}/>
          <StatusView  task={task}/>
          <AddedDateView  task={task}/>
        </VStack>
        <Stagg task={task}/>
      </HStack>
    </ViewModContainer>
  )
}



