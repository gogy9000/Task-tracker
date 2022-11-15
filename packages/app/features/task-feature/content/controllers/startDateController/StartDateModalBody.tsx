import React from 'react'
import { Text, VStack } from 'native-base'

export const StartDateModalBody = () => {

  return (
    <VStack>
      <Text>{`Date: ${new Date().toDateString()}`}</Text>
      <Text>{`Time: ${new Date().toTimeString()}`}</Text>
    </VStack>
  )
}