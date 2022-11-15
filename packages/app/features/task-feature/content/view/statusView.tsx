import { HStack, Text } from 'native-base'
import React from 'react'
import { TaskItem } from 'app/DAL/types/types'

const status={
  0:'Idle',
  1:'In progress',
  2:'Completed',
  3:'Failure'
}

type StatusView={
  task:TaskItem
}
export const StatusView:React.FC<StatusView> = ({ task }) => {
  return (
    <HStack space={'sm'} alignItems={'flex-end'} justifyContent={'center'}>
    <Text variant={'primary'}>Status:</Text>
    <Text variant={'secondary'}>{status[task.status]}</Text>
    </HStack>
  )
}