import { Text } from 'native-base'
import React from 'react'

export const AddedDateView = ({task}) => {
  return (
    <Text fontSize={'lg'}>{`added date: ${task.addedDate}`}</Text>
  )
}