import React from 'react'
import { Center, Heading } from 'native-base'
import { useDimensions } from '@react-native-community/hooks'


export const EmptyContent = () => {

  const { height } = useDimensions().screen

  return (
    <Center h={height * 0.6}>
      <Heading>
        O curva! list is empty!
      </Heading>
    </Center>
  )
}
