import { HStack, Text } from 'native-base'
import React from 'react'
import { TaskItem } from 'app/DAL/types/types'
const options={ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
type AddedDateViewProps={
  task:TaskItem
}
export const AddedDateView:React.FC<AddedDateViewProps> = ({task}) => {

  const addedDate=new Date(task.addedDate).toLocaleDateString()
  const addedTime=new Date(task.addedDate).toLocaleTimeString()
  console.log(new Date(task.addedDate).toDateString())


  return (

    <Text fontSize={'sm'} variant={'primary'}>{`Created: ${addedDate} ${addedTime}`}</Text>

  )
}