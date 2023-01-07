import { HStack, Text } from 'native-base'
import React from 'react'
import { TaskItem } from 'app/DAL/types/types'

const priority = {
  1: 'Low',
  2: 'Normal',
  3: 'High',
  4: 'Very high'
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