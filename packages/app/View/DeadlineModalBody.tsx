import { Text, VStack } from 'native-base'
import React from 'react'

export const DeadlineModalBody = () => {

  return (
    <VStack>
      <Text>{`Date: ${new Date().toDateString()}`}</Text>
      <Text>{`Time: ${new Date().toTimeString()}`}</Text>
    </VStack>
  )
}