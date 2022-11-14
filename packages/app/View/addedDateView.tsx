import { HStack, Text } from 'native-base'
import React from 'react'
import { TaskItem } from 'app/DAL/types/types'
type AddedDateViewProps={
  task:TaskItem
}
export const AddedDateView:React.FC<AddedDateViewProps> = ({task}) => {

  const addedDate=new Date(task.addedDate).toLocaleDateString()
  const addedTime=new Date(task.addedDate).toLocaleTimeString()

  return (

    <Text fontSize={'sm'} variant={'primary'}>{`Created: ${addedDate} ${addedTime}`}</Text>

  )
}