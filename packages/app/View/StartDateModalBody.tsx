import React, { useEffect, useState } from 'react'
import { Text, VStack } from 'native-base'

export const StartDateModalBody = ({ startDate }) => {

  return (
    <VStack>
      <Text>{`Date: ${new Date().toDateString()}`}</Text>
      <Text>{`Time: ${new Date().toTimeString()}`}</Text>
    </VStack>
  )
}