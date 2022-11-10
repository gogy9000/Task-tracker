import { TaskItem } from 'app/DAL/types/types'
import React from 'react'
import { ViewModContainer } from 'app/View/ViewModContainer'
import { HStack, Text, VStack } from 'native-base'
import { TaskTitleContainer } from 'app/View/taskTitleContainer'
import { DescriptionContainer } from 'app/View/descriptionContainer'
import { Stagg } from 'app/View/Stagg'
import { StartDateContainer } from 'app/View/startDateContainer'
import { AddedDateView } from 'app/View/addedDateView'
import { DateAndTimeView } from 'app/View/dateAndTimeView'

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
const PriorityView = ({task}) => {
  return (
    <Text fontSize={'lg'}>{`priority: high`}</Text>
  )
}
const StatusView = ({task}) => {
  return (
    <Text fontSize={'lg'}>{`status: idle`}</Text>
  )
}



