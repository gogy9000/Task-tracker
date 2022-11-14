import { HStack, Text, VStack } from 'native-base'
import React from 'react'
import { TaskItem } from 'app/DAL/types/types'

const priority = {
  1: 'Low',
  2: 'High',
  3: 'Fucking high'
}
type PriorityViewProps = {
  task: TaskItem
}
export const PriorityView: React.FC<PriorityViewProps> = ({ task }) => {

  return (
    <HStack space={'sm'} alignItems={'flex-end'} justifyContent={'center'}>
      <Text variant={'primary'}>Priority:</Text>
      <Text variant={'secondary'}>{priority[task.priority]}</Text>
    </HStack>
  )
}