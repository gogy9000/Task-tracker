import React from 'react'
import { Heading, HStack, Text, VStack } from 'native-base'
import { TaskItem } from 'app/DAL/types/types'

type StartDateContainerProps = {
  task: TaskItem
}
export const StartDateContainer: React.FC<StartDateContainerProps> = ({ task }) => {

  const startDate = task.startDate ? new Date(task.startDate).toDateString() : 'Task not in progress'
  const startTime = task.startDate ? new Date(task.startDate).toTimeString() : 'Task not in progress'
  return (
    <VStack >
      <Text variant={'primary'} alignSelf={'center'}>Start date</Text>
      <VStack >
        <Text variant={'secondary'}>{`date: ${startDate}`}</Text>
        <Text variant={'secondary'}>{`time: ${startTime}`}</Text>
      </VStack>
    </VStack>
  )
}