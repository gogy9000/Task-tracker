import { TaskItem } from 'app/DAL/types/types'
import React from 'react'
import { Api } from 'app/DAL/Api'
import { ViewModContainer } from 'app/View/ViewModContainer'
import { HStack, Text, VStack } from 'native-base'
import { TaskTitleContainer } from 'app/View/taskTitleContainer'
import { DescriptionContainer } from 'app/View/descriptionContainer'
import { Stagg } from 'app/View/Stagg'
import { StartDateContainer } from 'app/View/startDateContainer'
import { AddedDateView } from 'app/View/addedDateView'

type TaskDescriptionProps = {
  task: TaskItem
}
export const TaskDescription: React.FC<TaskDescriptionProps> = ({ task }) => {

  return (
    <ViewModContainer>
      <HStack space={'sm'} >
        <VStack flex={1}>
          <TaskTitleContainer task={task} />
          <DescriptionContainer task={task} />
          <StartDateContainer task={task} />
          <DeadlineView task={task}/>
          <PriorityView  task={task}/>
          <StatusView  task={task}/>
          <AddedDateView  task={task}/>
        </VStack>
        <Stagg task={task}/>
      </HStack>
    </ViewModContainer>
  )
}
const DeadlineView = ({task}) => {
  return (
    <Text fontSize={'lg'}>{`deadline: tomorrow`}</Text>
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



