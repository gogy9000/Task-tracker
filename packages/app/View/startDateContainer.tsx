import React from 'react'
import {  Text } from 'native-base'
import { TaskItem } from 'app/DAL/types/types'

type StartDateContainerProps={
  task:TaskItem
}
export const StartDateContainer:React.FC<StartDateContainerProps> = ({task}) => {
  console.log(task.startDate)
  return (
      <Text fontSize={'lg'}>{`StartDate:${task.startDate}`}</Text>
  )
}